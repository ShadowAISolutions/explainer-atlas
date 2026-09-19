# STATE

The running log. Newest batch at the top. Read this and the three most recent
files in `AUDIT/` before starting any batch.

## Standing corrections

*(Nothing yet. Anything written here must be read and applied before the next
page is written — it is where a failing audit trend gets escalated.)*

## Decisions

- **2026-09-19** — The atlas lives in its own repository rather than inside
  `ShadowAISolutions/website`. That repo's own CLAUDE.md freezes a different
  process, its CI auto-merges and deploys www.shadowaisolutions.com, and three
  of its pre-commit rules collide structurally with the unit contract (no two
  files may share a basename; every new file needs a `Developed by:` footer;
  every added file needs a README tree entry). A separate repo lets the mission
  run verbatim with no carve-outs and no path from this loop to the live site.
- **2026-09-19** — `tools/verify.mjs` honours an optional `ATLAS_CHROMIUM`
  environment variable for Chromium's `executablePath`. CI still installs its
  own browser; this only lets a machine with Chromium already on disk skip the
  download. It relaxes no check.
- **2026-09-19** — Selftests assert the **model**, not the current UI state, so
  they hold under the verifier's full control sweep. Write them as pure
  functions of known inputs.

## Batches

### batch/002 — 2026-09-19
- merged: dijkstra-vs-astar, equal-temperament, pid-controller, newton-raphson-basins, supply-demand-tax-incidence
- blocked: none
- patterns: step-through, compare-side-by-side, tune-to-match, spatial-explore, drag-parameter
- learned: Every assertion that failed this batch was my assertion being wrong,
  never the model — a tolerance tighter than double precision allows (1e-15 on
  a cube root of unity built by repeated multiplication), a settling-time check
  whose gains put the slowest pole at -0.146 so 160s left 1e-3 of error, and a
  "boundary is sensitive" test that found nothing because the Newton basin
  boundary has measure zero and random points never land near it. Fix the
  assertion and say so in the commit; never loosen it to go green. The
  replacement in each case was stronger than the original: bisect 45 times onto
  the boundary, then show all three basins on circles of radius down to 1e-9.
  Two more notes. (1) Frame variety does more for distinctiveness than colour
  does — controls right, left, above, below, inside the stage's card, and a
  full-bleed canvas read as five different pages before a single hue changed.
  (2) Anything optional and environment-dependent (the equal-temperament page's
  audio) must be lazy, click-only, try/catch-guarded and have a visible text
  fallback, or the verifier's button sweep turns it into a console error.

### batch/001 — 2026-09-19
- merged: central-limit-theorem, monty-hall, floating-point-precision, fourier-series-square-wave, population-logistic-chaos
- blocked: none
- patterns: draw-input, guess-then-reveal, perturb-and-observe, build-from-parts, time-scrubber
- learned: Exact beats sampled every time — the CLT page convolves the drawn
  population's distribution instead of simulating it, Monty Hall enumerates
  every (car, pick, reveal) triple, and the logistic page finds its own
  superstable cascade by sign-change search rather than hard-coding the
  published values. Assertions built that way are proofs, not statistics.
  Three practical notes for the next session. (1) Anything a selftest calls
  inside a loop over the whole control range must be cheap: the verifier reruns
  the suite at every position of every control, so precompute coefficient lists
  outside the sample loop and sample a subset of parameter values for the
  expensive checks. (2) A view that does not depend on any control — the
  bifurcation chart here — should be computed once at load and cached, not
  rebuilt per render. (3) Keep varying the frame, not just the palette: so far
  the collection has controls right, controls left, controls below the stage
  and controls above it, which is doing more for distinctiveness than colour.

### batch/000 — 2026-09-19 — Phase 0 bootstrap
- merged: numerical-integration-error, damped-harmonic-oscillator, huffman-coding
- blocked: none
- patterns: race-two-methods, perturb-and-observe, build-from-parts
- learned: Three reference implementations, deliberately spread across three
  domains and three interaction patterns so the variety rule starts from a
  spread rather than a groove. Every assertion checks the model against a
  closed form, a conservation law, or an exhaustive search — that bar is the
  whole point of the atlas, and the next batch should hold it. Two practical
  notes for the next session: write selftests as pure functions of known
  inputs, never of the current UI state, because the verifier re-runs them at
  every position of every control; and make sure no readout can print `NaN`,
  `Infinity` or `undefined` in a degenerate regime (write "none" or
  "unbounded"), because the verifier greps the rendered text for them.
