#!/usr/bin/env node
/**
 * Interactive Explainer Atlas — verifier.
 *
 *   node tools/verify.mjs <slug>
 *   node tools/verify.mjs --all
 *
 * A page that does not pass this does not get committed. No exceptions.
 * Weakening this file to make a page pass is forbidden (CLAUDE.md, ANTI-DRIFT).
 */
import { chromium } from "playwright";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { readFileSync, readdirSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const EXPLAINERS = join(ROOT, "explainers");
const ARTIFACTS = join(ROOT, ".artifacts");
const MAX_BYTES = 250 * 1024;
const MIN_ASSERTIONS = 5;
const WORDS_MIN = 400, WORDS_MAX = 900;

const ajv = new Ajv({ allErrors: true, strict: false });
addFormats(ajv);
const validateMeta = ajv.compile(
  JSON.parse(readFileSync(join(ROOT, "schema", "explainer.schema.json"), "utf8"))
);

const allSlugs = () =>
  existsSync(EXPLAINERS)
    ? readdirSync(EXPLAINERS).filter((d) => statSync(join(EXPLAINERS, d)).isDirectory()).sort()
    : [];

/* ------------------------------------------------------------------ static */

function staticChecks(slug, fail) {
  const dir = join(EXPLAINERS, slug);
  const htmlPath = join(dir, "index.html");
  const metaPath = join(dir, "meta.json");

  if (!existsSync(htmlPath)) return fail(`missing ${slug}/index.html`), null;
  if (!existsSync(metaPath)) return fail(`missing ${slug}/meta.json`), null;

  const extra = readdirSync(dir).filter((f) => f !== "index.html" && f !== "meta.json");
  if (extra.length) fail(`unit contract: unexpected files in ${slug}/ — ${extra.join(", ")}`);

  const html = readFileSync(htmlPath, "utf8");
  const bytes = Buffer.byteLength(html);
  if (bytes > MAX_BYTES) fail(`index.html is ${(bytes / 1024).toFixed(1)}KB, limit is 250KB`);

  for (const [re, what] of [
    [/<script[^>]+\bsrc\s*=/i, "external <script src>"],
    [/<link[^>]+rel\s*=\s*["']?stylesheet/i, "external stylesheet <link>"],
    [/@import\s/i, "CSS @import"],
    [/<iframe\b/i, "<iframe>"],
    [/\b(fetch|XMLHttpRequest|importScripts|EventSource|WebSocket)\s*\(/, "network API call"],
  ]) if (re.test(html)) fail(`self-containment: found ${what}`);

  let meta;
  try { meta = JSON.parse(readFileSync(metaPath, "utf8")); }
  catch (e) { return fail(`meta.json is not valid JSON: ${e.message}`), null; }

  if (!validateMeta(meta)) {
    for (const e of validateMeta.errors) fail(`meta.json ${e.instancePath || "/"} ${e.message}`);
  }
  if (meta.slug !== slug) fail(`meta.json slug "${meta.slug}" does not match directory "${slug}"`);

  const known = new Set(allSlugs());
  for (const p of meta.prerequisites ?? []) {
    if (!known.has(p)) fail(`prerequisite "${p}" does not resolve to an explainer`);
    if (p === slug) fail(`prerequisite "${p}" is the page itself`);
  }
  return { meta, htmlPath };
}

/* ------------------------------------------------------------------ runtime */

async function runtimeChecks(browser, slug, htmlPath, meta, fail) {
  const url = pathToFileURL(htmlPath).href;
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();

  page.on("console", (m) => {
    if (m.type() === "error") fail(`console error: ${m.text()}`);
  });
  page.on("pageerror", (e) => fail(`uncaught exception: ${e.message}`));
  page.on("requestfailed", (r) => fail(`failed request: ${r.url()}`));
  page.on("request", (r) => {
    if (r.url() !== url) fail(`network request attempted: ${r.url()}`);
  });

  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(150);

  /* landmarks */
  for (const [sel, what] of [
    ["h1", "an <h1>"],
    ['[data-role="stage"]', 'a [data-role="stage"]'],
    ['[data-role="controls"]', 'a [data-role="controls"]'],
    ['[data-role="prose"]', 'a [data-role="prose"]'],
  ]) if (await page.locator(sel).count() === 0) fail(`missing landmark: ${what}`);

  const CONTROL_SEL =
    '[data-role="controls"] input[type=range], [data-role="controls"] input[type=number], ' +
    '[data-role="controls"] input[type=checkbox], [data-role="controls"] input[type=radio], ' +
    '[data-role="controls"] select';
  const controls = await page.locator(CONTROL_SEL).all();
  if (controls.length < 2) fail(`needs at least two parameter controls, found ${controls.length}`);

  /* every control is labelled */
  const unlabelled = await page.$$eval(CONTROL_SEL, (nodes) =>
    nodes.filter((n) => {
      if (n.getAttribute("aria-label") || n.getAttribute("aria-labelledby")) return false;
      return !(n.id && document.querySelector(`label[for="${CSS.escape(n.id)}"]`));
    }).map((n) => n.id || n.outerHTML.slice(0, 60))
  );
  if (unlabelled.length) fail(`unlabelled controls: ${unlabelled.join(", ")}`);

  /* prose word count */
  const words = await page.$eval('[data-role="prose"]', (n) =>
    (n.innerText || "").trim().split(/\s+/).filter(Boolean).length
  ).catch(() => 0);
  if (words < WORDS_MIN || words > WORDS_MAX)
    fail(`prose is ${words} words, contract is ${WORDS_MIN}–${WORDS_MAX}`);

  /* unreplaced template placeholders */
  const leftover = await page.evaluate(() => (document.body.innerText.match(/\{\{[^}]*\}\}/g) || []).length);
  if (leftover) fail(`${leftover} unreplaced {{placeholder}} left in the page`);

  /* selftest */
  if (!(await page.evaluate(() => typeof window.__SELFTEST === "function")))
    return fail("window.__SELFTEST is not defined"), page.context().close();

  const results = await page.evaluate(() => window.__SELFTEST());
  if (!Array.isArray(results)) fail("__SELFTEST did not return an array");
  else {
    if (results.length < MIN_ASSERTIONS)
      fail(`__SELFTEST returned ${results.length} assertions, minimum is ${MIN_ASSERTIONS}`);
    for (const r of results)
      if (!r || r.pass !== true) fail(`assertion failed: ${r?.name ?? "?"} — ${r?.detail ?? ""}`);
    if (meta.assertions_count !== results.length)
      fail(`meta.assertions_count is ${meta.assertions_count}, __SELFTEST returned ${results.length}`);
  }

  /* drive every control through its range, re-running selftests */
  const badText = async (where) => {
    const t = await page.evaluate(() => document.body.innerText);
    for (const bad of ["NaN", "Infinity", "undefined", "[object Object]"])
      if (t.includes(bad)) fail(`"${bad}" rendered after ${where}`);
  };

  for (const c of controls) {
    const info = await c.evaluate((n) => ({
      tag: n.tagName.toLowerCase(), type: n.type, id: n.id,
      min: n.min, max: n.max, step: n.step,
      options: n.tagName === "SELECT" ? [...n.options].map((o) => o.value) : null,
    }));
    const label = info.id || info.tag;
    let values = [];
    if (info.tag === "select") values = info.options;
    else if (info.type === "checkbox" || info.type === "radio") values = ["on", "off"];
    else {
      const min = parseFloat(info.min), max = parseFloat(info.max);
      const lo = Number.isFinite(min) ? min : 0, hi = Number.isFinite(max) ? max : 1;
      const step = parseFloat(info.step) || (hi - lo) / 8;
      for (let i = 0; i <= 8; i++) {
        const raw = lo + ((hi - lo) * i) / 8;
        values.push(String(Math.round(raw / step) * step));
      }
    }
    for (const v of values) {
      if (info.tag === "select") await c.selectOption(v);
      else if (info.type === "checkbox" || info.type === "radio") await c.setChecked(v === "on");
      else {
        await c.evaluate((n, val) => {
          n.value = val;
          n.dispatchEvent(new Event("input", { bubbles: true }));
          n.dispatchEvent(new Event("change", { bubbles: true }));
        }, v);
      }
      await page.waitForTimeout(12);
      const sweep = await page.evaluate(() => {
        try { return { ok: true, r: window.__SELFTEST() }; }
        catch (e) { return { ok: false, e: String(e) }; }
      });
      if (!sweep.ok) fail(`__SELFTEST threw with ${label}=${v}: ${sweep.e}`);
      else for (const r of sweep.r)
        if (!r || r.pass !== true) fail(`assertion "${r?.name}" failed with ${label}=${v}`);
      await badText(`${label}=${v}`);
    }
  }

  /* buttons must not break the page either */
  for (const b of await page.locator('[data-role="controls"] button').all()) {
    await b.click();
    await page.waitForTimeout(12);
    await badText(`clicking "${(await b.innerText()).trim()}"`);
  }

  /* keyboard reachability */
  const reachable = await page.evaluate((sel) => {
    const list = [...document.querySelectorAll(sel)];
    return list.every((n) => !n.disabled && n.tabIndex >= 0);
  }, CONTROL_SEL);
  if (!reachable) fail("a control is not reachable by keyboard");

  /* screenshots */
  mkdirSync(join(ARTIFACTS, slug), { recursive: true });
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(200);
  await page.screenshot({ path: join(ARTIFACTS, slug, "1280.png"), fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.waitForTimeout(150);
  await page.screenshot({ path: join(ARTIFACTS, slug, "390.png"), fullPage: true });

  /* no horizontal overflow at 360px */
  await page.setViewportSize({ width: 360, height: 800 });
  await page.waitForTimeout(150);
  const overflow = await page.evaluate(() =>
    document.documentElement.scrollWidth - document.documentElement.clientWidth);
  if (overflow > 1) fail(`horizontal overflow of ${overflow}px at 360px wide`);

  await ctx.close();
}

/* ------------------------------------------------------------------- main */

async function verify(browser, slug) {
  const failures = [];
  const fail = (m) => failures.push(m);
  const s = staticChecks(slug, fail);
  if (s) {
    try { await runtimeChecks(browser, slug, s.htmlPath, s.meta, fail); }
    catch (e) { fail(`verifier crashed: ${e.message}`); }
  }
  return failures;
}

const args = process.argv.slice(2);
if (!args.length) {
  console.error("usage: node tools/verify.mjs <slug> | --all");
  process.exit(2);
}
const slugs = args[0] === "--all" ? allSlugs() : args;
if (!slugs.length) { console.log("no explainers to verify"); process.exit(0); }

/* CI installs its own Chromium; a dev box can point at a preinstalled one. */
const browser = await chromium.launch(
  process.env.ATLAS_CHROMIUM ? { executablePath: process.env.ATLAS_CHROMIUM } : {}
);
let bad = 0;
for (const slug of slugs) {
  const failures = await verify(browser, slug);
  if (failures.length) {
    bad++;
    console.log(`FAIL  ${slug}`);
    for (const f of failures) console.log(`      · ${f}`);
  } else {
    console.log(`PASS  ${slug}`);
  }
}
await browser.close();
console.log(`\n${slugs.length - bad}/${slugs.length} passed`);
process.exit(bad ? 1 : 0);
