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

### batch/005 — 2026-09-19
- merged: epidemic-r0-herd-immunity, harmonic-series-timbre, auction-formats-revenue, radiometric-dating, floating-point-precision (repair)
- blocked: none
- patterns: guess-then-reveal, build-from-parts, race-two-methods, time-scrubber (the repair carries no pattern)
- learned: First AUDIT pass, in AUDIT/001. Mean 4.28. Clarity, assertion rigor
  and correctness are at or near ceiling; interaction quality (3.60) and visual
  distinctiveness (3.20) are the weak axes, and both come from one cause — the
  pages merged before batch/004 treat the canvas as a fixed-size illustration.
  Two repair tasks were filed and the worse of them was taken into this batch
  rather than left to rot in the queue; taking one repair per batch alongside
  four new pages looks like the right default from here.
  The canvas fix is better than the batch/004 version of it. A breakpoint that
  swaps between two fixed canvas sizes still leaves the canvas being scaled by
  whatever ratio the column happens to be, and on the floating-point page a
  900px canvas in a 548px column rendered every 11px label at about 7px. What
  actually works is to make the canvas width TRACK the container — clamp the
  available width, set the backing store to twice it, and scale the context by
  two — so one canvas unit is one CSS pixel at every viewport and a 13px label
  is 13px. The NARROW flag then only picks the arrangement and the wording, not
  the scale. Use this on every new page and on every repair.
  Every assertion that failed this batch was again mine rather than the
  model's, and three of them were on one page. The Gibbs constant is 1.17898,
  the peak of the partial sum; 1.08949 is not a version of it and 8.95 per cent
  is the overshoot measured against the whole jump. "A smooth waveform never
  overshoots" is false — a partial sum of an absolutely convergent series can
  exceed its limit by the size of the tail, so the honest claim is convergence
  at the tail's own rate, which is also the claim that distinguishes it from
  Gibbs. And a zero-crossing pitch counter that tests prev <= 0 && cur > 0
  counts a phantom crossing whenever the last sample of the window lands on a
  floating-point 1e-15 instead of an exact zero; start the window a quarter
  period early where every waveform is negative, and use hysteresis.
  Two more. (1) Watch the cost of a selftest that runs a Monte Carlo: the
  auction page's first draft did about 5 million draws per suite run, which the
  verifier multiplies by thirty control positions. Cutting the settings rather
  than the tolerances kept every assertion at full strength and brought the
  page in at four seconds. (2) When a page's readout is a derived number, read
  it off the real model before writing the prose around it: the dating page's
  "more than double" was 8 per cent until the sample mineral was changed to the
  one where inherited daughter actually bites, and the harmonic page's error
  figures were all from a readout that no longer existed.

### batch/004 — 2026-09-19
- merged: predator-prey-cycles, prisoners-dilemma-iterated, matrix-determinant-area, quicksort-pivot-choice, reaction-rate-order
- blocked: none
- patterns: spatial-explore, live-code, draw-input, race-two-methods, tune-to-match
- learned: Deliberately took the five least-used patterns, including live-code,
  which no page had used in eighteen. Three of the five queue files suggested a
  pattern that would have deepened an existing groove and were overridden, as
  batch/003 recommended; that recommendation now looks like the default rather
  than the exception.
  Every assertion that failed this batch was again mine rather than the
  model's, and each replacement was stronger. "A nice strategy can never
  outscore its opponent" is simply false — grim trigger is nice and takes 329
  to 74 off a coin flip once provoked. What actually caps a strategy at a draw
  is MIRRORING, so the replacement asserts the exact identity that the score
  gap is five times the difference in unilateral defections, plus the fact that
  tit for tat's move always equals the opponent's previous one. The kinetics
  page demanded R-squared above 0.99 from a diagnostic plot while following
  each reaction to near exhaustion, where the signal sinks into the noise and
  the logarithm goes wild; the fix was better chemistry (follow about three
  half-lives, as a kineticist does) plus an assertion of the discriminating
  property — the winning plot clears the field by a margin — rather than an
  absolute threshold.
  Two practical notes. (1) The 390px screenshot caught an unreadable canvas on
  three of the five pages. A wide canvas scaled into a phone is a strip of
  illegible pixels, and enlarging fonts only goes so far; the real fix is a
  layout() that picks a different canvas size and arrangement below about
  620px — panes stacked rather than side by side — and a debounced resize
  listener. Budget for it on any page whose stage is wider than it is tall.
  (2) The batch/003 heredoc trap recurred twice in a new form: a patch script
  matching on a string containing a non-ASCII character written as a \uXXXX
  escape will not match, because the file already holds the decoded character.
  Build the character with a named Python variable and concatenate.
  The "derive the headline quantity a second, independent way" practice held
  on all five: RK4 against the closed integrated rate law, Gaussian
  elimination against ad - bc, the balanced-recursion count against a run of
  quicksort, the conserved Lotka-Volterra quantity against the orbit, and the
  unilateral-defection identity against the tournament scores.

### batch/003 — 2026-09-19
- merged: ph-buffer-capacity, levenshtein-distance, greenhouse-energy-balance, shannon-channel-capacity, special-relativity-time-dilation
- blocked: none
- patterns: time-scrubber, step-through, drag-parameter, guess-then-reveal, compare-side-by-side
- learned: All thirteen domains now have at least one page, so from here topic
  choice is free rather than driven by coverage. Four of this batch's five task
  files suggested drag-parameter; taking the suggestions literally would have
  put it at five uses in twenty pages, over the variety limit. Treat the queue's
  suggested pattern as a default to override, and record the override in the
  claim commit.
  The strongest assertion in each page this batch was the one that derived the
  page's headline quantity a SECOND way and compared: gamma bisected out of the
  light-clock triangle against 1/sqrt(1-b^2); channel capacity as a maximum of
  mutual information over input distributions against 1-H(p); buffer capacity's
  closed form against a full charge-balance equilibrium solve. That pattern is
  worth reaching for deliberately on every page — it catches sign errors and
  algebra slips that a self-consistent formula never will.
  Three practical traps, all of which cost a cycle here. (1) A multi-line
  equation inside a <p class="math"> collapses to one line, because HTML eats
  whitespace; the block needs white-space:pre. (2) Writing a patch script in a
  quoted bash heredoc turns \uXXXX escapes into the literal character, so a
  Python pattern written with a doubled backslash will never match the file —
  write the single-backslash escape and let Python decode it. (3) Numbers in
  prose must be read back off the rendered readout before committing: this batch
  shipped a title claiming sixty-three decisions where the page itself displayed
  42, and a hint claiming gamma is exactly 2 at a slider position that cannot
  express sqrt(3)/2. Both were caught in the screenshot, not the verifier.

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
