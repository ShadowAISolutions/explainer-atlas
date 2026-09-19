# Interactive Explainer Atlas

A growing collection of self-contained interactive explainers. One concept per
page. Each page teaches a single idea through a working simulation you can take
apart — not a diagram with a caption.

Open `index.html` to browse. It is generated from the explainers themselves, so
it is never out of date.

## What makes a page belong here

Every page in `explainers/<slug>/` is **one HTML file and one metadata file**.
The HTML is fully self-contained: inline CSS and JS, no frameworks, no CDN, no
build step, and **no network requests of any kind**. Save a page to a USB stick,
open it on a plane, and it still works. Under 250KB, responsive to 360px, light
and dark, keyboard operable.

The part that matters most is the last requirement: every page exposes
`window.__SELFTEST()`, returning at least five assertions that check the page's
underlying model **numerically** — against a closed form, a conservation law, a
published reference value, or an exactly-computable special case. A page whose
maths is wrong fails its own tests and never ships.

Read `FOUNDATION.md` for the full contract.

## Browsing

```
index.html          generated — every explainer, grouped by domain
atlas.json          generated — the same data, machine-readable
explainers/<slug>/  one directory per page
```

`atlas.json` carries each page's domain, difficulty, tags, interaction pattern,
prerequisites and assertion count. The `prerequisites` field is a real DAG: the
verifier rejects any prerequisite that does not resolve to an existing page.

## Running the verification

```bash
npm ci
npx playwright install chromium

node tools/verify.mjs <slug>    # one page
node tools/verify.mjs --all     # every page
node tools/build_index.mjs      # regenerate index.html and atlas.json
```

The verifier loads each page in headless Chromium and fails on: any console
error, any uncaught exception, **any attempted network request**, missing DOM
landmarks, fewer than two labelled controls, prose outside 400–900 words, an
unreplaced template placeholder, a failing or missing selftest assertion, a
selftest that throws while every control is swept through its full range, `NaN`
or `Infinity` reaching the rendered output, horizontal overflow at 360px, a
`meta.json` that fails the schema, or a prerequisite that does not resolve.

It also writes screenshots at 1280px and 390px into `.artifacts/<slug>/` for the
periodic audit pass.

If you have Chromium already on disk, point at it instead of downloading one:

```bash
ATLAS_CHROMIUM=/path/to/chrome node tools/verify.mjs --all
```

## Contributing a page

Start from `template/explainer.template.html`. Never copy an existing page —
that is how a collection turns into a mail merge. Build it, run the verifier
until it is green, and open a PR. CI green is the only merge gate.

## How this repo is run

`CLAUDE.md` holds the operating loop: batches of five pages on `batch/<NNN>`
branches, a PR per batch, an audit pass every fifth batch, and a topic queue in
`queue/` that refills itself. `STATE.md` is the running log. `ROADMAP.md` records
what comes after the atlas.

`FOUNDATION.md`, `CLAUDE.md`, `schema/`, `template/`, `tools/` and
`.github/workflows/` are **frozen**: arguments for changing them go in
`PROPOSALS/`, not into the files.
