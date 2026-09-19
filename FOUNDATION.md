# FOUNDATION

The permanent contract for the Interactive Explainer Atlas. Everything in this
file is fixed. Sessions build against it; they do not renegotiate it.

---

## UNIT CONTRACT

One explainer = one directory: `explainers/<slug>/`

Containing exactly:

- `index.html` — fully self-contained. Inline CSS and JS. No frameworks, no CDN,
  no build step, no external network requests of any kind. Must work offline from
  `file://`. Under 250KB.
- `meta.json` — validates against `schema/explainer.schema.json`.

`index.html` requirements:

1. An interactive simulation or visualization (canvas, SVG, or DOM) with **at least
   two** user-controllable parameters and live response.
2. 400–900 words of explanatory prose, written to be read alongside the interaction,
   not as a wall of text above it.
3. Any math must be correct. Derivations shown where they aid understanding.
4. Responsive down to 360px. Light and dark via `prefers-color-scheme`.
5. Keyboard operable. All controls labelled. Sensible focus order.
6. Exposes `window.__SELFTEST()` returning an array of
   `{name: string, pass: boolean, detail: string}`. **Minimum 5 assertions**
   checking the underlying model numerically against known values, closed-form
   results, conservation laws, or reference cases. This is the verifier. Take it
   seriously; it is what keeps the atlas honest.
7. Deterministic given a seed. If randomness is used, seed it explicitly.

`meta.json` fields: `slug`, `title`, `domain`, `difficulty` (1–5), `summary`
(one sentence), `prerequisites` (array of slugs), `tags`, `interaction_pattern`,
`sources` (array of {title, url} for any factual claims), `created_at`,
`assertions_count`.

---

## FROZEN FILES

These are **immutable** without an explicit instruction from the repo owner in a
live session:

`FOUNDATION.md`, `CLAUDE.md`, `schema/`, `template/`, `tools/`, `.github/workflows/`

If a session believes one needs to change, it writes the argument to
`PROPOSALS/<date>-<topic>.md` and continues working. It does not change the file.
This rule exists because the dominant failure mode of long autonomous builds is a
session on day 40 deciding to refactor the foundation and invalidating everything
before it.
