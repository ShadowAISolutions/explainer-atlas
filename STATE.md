# STATE

The running log. Newest batch at the top. Read this and the three most recent
files in `AUDIT/` before starting any batch.

## Standing corrections

- **Never put a `\uXXXX` escape in a shell heredoc that writes a file, and never
  search for one in a Python patch.** The heredoc decodes it, so the file holds
  the real character while your pattern holds the six literal characters, and
  the replacement silently matches nothing. This has now cost time in four
  separate batches (004, 005, 006, 007). Build the character in code instead —
  `const DEG = String.fromCharCode(0x00B0)` in a page, `DEG = chr(0x00B0)` in a
  patch script — and concatenate it. If you must check a file, `cat -A` shows
  what is really there.

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

### batch/013 — 2026-09-19
- merged: bloom-filter-false-positives, comparative-advantage-ppf,
  phoneme-vowel-space-formants, checksum-vs-crc-collisions, plus the legibility
  repair of the last two pre-batch/004 pages (greenhouse-energy-balance,
  special-relativity-time-dilation), which closes task 082
- blocked: none
- patterns: step-through, compare-side-by-side, draw-input, race-two-methods
  (the repair carries no pattern of its own)
- learned:
  - **Task 082 is finished.** Every page merged before batch/004 has now been
    through the canvas-legibility sweep: thirteen repaired, one
    (newton-raphson-basins) checked and deliberately left alone. The recurring
    shape of the defect, across all thirteen, was never "the fonts are small" —
    it was **absolute pixel coordinates chosen against one canvas size**. Half
    the defects (the greenhouse layer-down label included) were clipped or
    colliding at *every* width and only became visible when the page was
    examined at a phone width. If a future page computes a position as a
    literal number rather than from the width, that is the bug, not the symptom.
  - **Two more task files asserted something false, which makes eleven.** 078
    wanted a checksum "letting burst errors through" as the headline; measured,
    both the Internet checksum and Fletcher-16 catch essentially every burst at
    every width from 1 to 48 on a 96-bit message, because a burst spans at most
    two words and the resulting change to a 16-bit total is almost never zero.
    The real gap is structural: the ones-complement sum catches 0 of the 14 word
    swaps and 0 of the 71 compensating edits. 078 also asked to assert that a
    CRC catches all double-bit errors up to 1000 bits — true of CRC-16-CCITT
    (reach 32767) and false of the degree-8 generator (reach 127). Both
    corrections are asserted, and both are in the prose.
  - **Prefer the algebra to a position sweep when the position provably drops
    out.** The checksum page's burst curve is computed over error polynomials
    rather than over (position, pattern) pairs, because a burst is x^p·B and the
    generator shares no factor with x^p. That turned an intractable exhaustive
    sweep into 2^19 cheap remainders, made the strip exact instead of sampled,
    and let assertions 3 and 4 check the theory's fractions
    (1, then 2^-(n-1), then 2^-n) to the case rather than to a tolerance.
  - **A textbook form can have poles the bracketer mistakes for roots.** The
    vowel page's two-tube resonance condition is usually written
    (A1/A2)·tan(k·l1)·tan(k·l2) = 1. Bracketing sign changes on that finds the
    poles of tan as well as the zeros: at an area ratio of 0.001 it reported
    968.81 and 972.22 Hz, the second being spurious. Multiplying through by both
    cosines gives ratio·sin·sin − cos·cos, which is entire, has the same roots,
    and returned the correct 968.81 / 1097.15. Assertion 6 exists to catch
    exactly this: every reported root is checked against the condition itself.
  - **A screenshot can expose a model error, not only a layout one.** On
    comparative-advantage-ppf the two consumption bars summed to more than the
    joint frontier allowed, because each producer converted at a fixed midpoint
    price with nothing forcing the market to clear. No assertion covered it.
    The fix replaced the demand-mix control with a terms-of-trade control and
    added an assertion that the two consumptions sum to the specialised corner
    at five rates on every seeded pair. Screenshot review has now found a real
    defect on nearly every page for eight batches running; treat it as part of
    building the page, not as a check afterwards.
  - **When a reserved row is the fix, sweep the model first to prove the row is
    reachable by nobody else.** Used again on the vowel page (the tube panel's
    heading was striking the glottis and lips labels) and on the checksum page
    (at 360px the record's heading sat on its own column labels).

### batch/012 — 2026-09-19
- merged: eulers-identity-rotation, hardy-weinberg, beam-bending-moment,
  earthquake-magnitude-energy, plus a legibility repair of three batch/003
  pages (shannon-channel-capacity, ph-buffer-capacity, levenshtein-distance)
- blocked: none
- patterns: build-from-parts, perturb-and-observe, tune-to-match,
  guess-then-reveal (the repair carries no pattern of its own)
- learned:
  - **Two task files this batch asserted something false, and that is now
    nine.** 018 asked for a Taylor series matching cos + i sin to 1e-12 at
    twenty terms on [-pi, pi]; the true worst case there is pi^20/20! =
    3.6e-9, and 1e-12 needs twenty-five terms. The page asserts both real
    figures instead. Keep treating a task file's numbers as a claim to check,
    never as a specification to satisfy.
  - **Make a model total before asserting that its parts sum to one.**
    hardy-weinberg's survivor frequencies returned NaN at p = 0 with s = 1,
    because mean fitness is zero there and the normalisation divided by it.
    The fix was an explicit extinction branch in the model, not a narrower
    assertion — the corner is real and the page should state what happens in
    it.
  - **A caption anchored to a line gets struck by whatever crosses that
    line.** Three separate defects this batch (the beam's span/360 limit, the
    Shannon rate label, the pH buffer band label) were the same shape, and the
    same fix worked on all three: give the caption a row or a band that
    belongs to nobody else. For the buffer band that meant proving, by
    sweeping the parameter space in node, that no pH below 1.1 is reachable —
    a reserved row is only reserved if the model cannot get into it.
  - **Screenshot review after a green verify caught a real defect on five of
    the seven pages touched this batch**, which is now a six-batch streak.
    Green means the model is right and nothing overflows; it does not mean the
    drawing is readable. Crop and enlarge the artifacts with Pillow — at full
    size a 10px label sitting on a curve looks fine.
  - Set a tolerance to the measured floating-point floor rather than a round
    number: hardy-weinberg's Hardy-Weinberg departure bottoms out at 2.1e-15
    after three divisions, so 1e-15 fails and 1e-14 is honest. Probing the
    constant in node before writing the assertion is cheaper than a sweep
    failure.

### batch/011 — 2026-09-19
- merged: bayes-base-rate, hash-collisions-birthday, ideal-gas-law,
  orbital-transfer-hohmann, rhythm-polymeter-cycle
- blocked: none
- patterns: tune-to-match, drag-parameter, perturb-and-observe, spatial-explore,
  time-scrubber
- learned:
  1. **AUDIT/002 warned that the two-stacked-panes canvas was becoming the house
     shape, and this batch deliberately broke it.** The Hohmann page is a single
     orbital scene with its numbers in the HTML readouts; the polymeter page is
     two concentric wheels over one strip; the gas page is one chart with a
     coloured rug sharing its x-axis. Composition is a variety axis in its own
     right, not only the interaction pattern. Keep choosing it consciously.
  2. **A control whose value indexes a table must have the table's range.** The
     Bayes page shipped a prevalence slider declared `min=0 max=100` while the
     ladder it indexed had fourteen entries, so every position above 13 threw
     on `undefined.toLocaleString` — eighteen uncaught exceptions, caught only
     because the verifier sweeps nine positions of every control. Check the
     slider bounds against the array length the moment you write either.
  3. **A label anchored to a marker line runs rightwards into whatever the
     marker is marking.** On the hash page the "coin flip at 1.1774√N" caption
     hung off its vertical line and was struck through by the rising curve.
     Anchor such captions to an empty corner as a legend row instead, and pick
     the corner from the shape of the data: on a rising curve the top-left is
     free, on a log-log P–V chart it is the bottom-left.
  4. **Draw a marker last if a legend names it.** The same page's dashed
     1.1774 line sat underneath the reader's own line at the default setting,
     so the legend named something invisible. Ordering is part of the legend's
     honesty.
  5. **Check that a derivative is actually unimodal before reaching for a
     ternary search.** dP/dV for van der Waals climbs to a maximum, falls to a
     minimum near 3a/RT and creeps back to zero; the ternary search converged
     on the wrong stationary point and three critical-point assertions failed
     together. Grid the region first, then refine inside one cell.
  6. **A delta-v between two orbits is a vector difference, not a subtraction of
     speeds.** Differencing magnitudes made sampled two-burn alternatives look
     cheaper than Hohmann by over a km/s. Any "is X optimal" assertion is only
     as good as the cost function used for the alternatives — check that
     function before believing a negative result.
  7. **Five task files in a row have now had a numeric claim corrected rather
     than obeyed** (007, 063, 076, 013, 071, and now 015, 045 and 065). The
     pattern is consistent: the claim is a half-remembered version of a true
     theorem. 2% of 1.1774√N holds asymptotically, not at 64 slots; Hohmann
     losing above a ratio of 11.94 is the three-burn bi-elliptic result, not a
     two-burn one; gcd(a, b) downbeat agreements is right only where gcd is 1.
     In every case the stronger, true statement makes a better assertion than
     the one asked for. Put the real figure in the detail line and say in the
     commit message which claim was refused.

### batch/010 — 2026-09-19
- merged: big-o-crossover, confidence-interval-coverage, markov-text-order, plus
  the batch/002 half of the legacy canvas repair (supply-demand-tax-incidence
  rebuilt, newton-raphson-basins checked and left alone), and AUDIT/002
- blocked: none
- patterns: race-two-methods, draw-input, live-code
- audit: AUDIT/002, mean 4.80, running average 4.54. Visual distinctiveness up
  1.40 and interaction quality up 1.00 against AUDIT/001; nothing scored 2 or
  below, so no repair tasks filed
- learned:
  1. **A task file's numeric target can be below the noise floor of the thing it
     asks you to measure.** Task 071 wanted generated n-gram frequencies within
     three per cent of the training text's over 50,000 characters. At that
     length two independent runs of the *same* model differ from each other by
     four to five per cent in total variation, so no model could have passed.
     The fix is not a longer run to squeak under the number: it is to measure
     the floor and assert against it. The page asserts that the distance from
     the generated text to its source is SMALLER than the distance between two
     independent generations, which is the claim "matches the statistics"
     actually means, and it is falsifiable in a way a hand-picked threshold is
     not. Four task files have now had a numeric claim corrected rather than
     obeyed (007, 063, 076, 071).
  2. **A vertical marker line that spans two panes will strike through whatever
     sits between them.** The true-mean line on confidence-interval-coverage ran
     from the population pane to the bottom of the interval stack and put a
     strikethrough across the lower pane's title. Draw such a line as one
     segment per pane, not one line through both. Same family as the batch/009
     lesson about pane titles landing on the previous pane's captions: anything
     that spans panes has to be told where the panes are.
  3. **A label anchored inside a pane will cover the pane's own content sooner
     or later.** The same page put "true mean 7.00" inside the population
     histogram, where it sat on the tallest bars — exactly the bars nearest the
     mean, every time. Moving it onto the pane's title row, right-aligned, with
     the title shortened by measurement to fit what is left, is collision-proof
     because the row belongs to nobody else.
  4. **Size a text box to its text, not to a line count you guessed.** The
     markov page reserved eleven lines and used six. Measure the monospace cell
     in `fitCanvas`, divide the width by it, and derive the line count from the
     output length. `measureText` is unaffected by the context transform, so it
     can be called before the canvas is resized.
  5. **Check that the prose still states the numbers the page actually
     produces.** Three claims in markov-text-order's prose came from a
     prototype that counted copied *starting positions*; the page counts
     characters *inside* a copied run, which is the better measure and gives
     very different figures (0, 0, 57, 95 rather than 0, 0, 18, 55). The title
     was wrong in the same way and had to change. Read the selftest's own
     detail strings back after the page goes green and reconcile every number
     in the prose against them.
  6. **A Python `str.replace` without an assertion is a silent no-op.** One
     standfirst correction did not apply and reached a screenshot before it was
     caught. Every patch in this batch that mattered used `assert old in s`
     first; the one that did not was the one that failed.

### batch/009 — 2026-09-19
- merged: projectile-drag, plate-tectonics-seafloor-age, electrochemical-cell-potential,
  compound-interest-doubling, plus three more pages of the legacy canvas repair
  (dijkstra-vs-astar, equal-temperament, pid-controller)
- blocked: none
- patterns: compare-side-by-side, spatial-explore, drag-parameter, time-scrubber
  (the repair carries no pattern)
- learned: Four notes.

  (1) **A task file's stated tolerance is a claim, not an instruction, and two of
  them were wrong this batch.** Task 007 asked that the rule of 72 be "within
  0.5% of exact for r between 4% and 12%". It is not: the error is 1.85 per cent
  at 4 and 1.90 at 12, and the half-per-cent band is only 6.79 to 8.92 per cent.
  Task 063 asked for an equality to 1e-9 that is below the floor of differencing
  an extensive free energy. In both cases the page asserts the bound that is
  actually true, states the real figure in the detail line so nobody has to
  rediscover it, and the commit message says which claim was refused and why.
  Never loosen a passing assertion; do correct a task file's arithmetic.

  (2) **Screenshot review after every green verify has now caught a real defect
  on every page for three batches running** — three on projectile-drag, four on
  the seafloor page, four on the chemistry page, two on the economics page, and
  it is what found the collisions on all three repaired pages. Every one was a
  label overprinting another label, and almost every one came from a fixed
  vertical gap between two panes. The fix that generalises: never place a pane's
  title a constant distance below the previous pane's nominal bottom. Name the
  rows that hang beneath a pane (tick labels, annotations, captions), compute
  where the lowest of them ends, and start the next pane from that.

  (3) **Two captions that share a row must be chosen by measurement, not by a
  breakpoint.** Both the chemistry and economics pages had a left axis caption
  and a right units caption running into each other, and forcing the short form
  below 470px was not enough — even the short pair collided at 390. Keep a
  ladder of two or three phrasings for each and pick the longest pair whose
  measured widths plus a gutter fit the span. Same technique fixed the maze
  page's bar labels, where the fallback goes further: one line, then name over
  number, then horizontal rows.

  (4) **`niceStep` can hand back a step larger than the span it is dividing**, so
  an axis draws with no labels on it at all. Two guards, both now in three
  pages: a 2.5 rung in the ladder, and a loop that halves the step while fewer
  than two divisions fit. Related: ask it for more divisions than you want,
  because it rounds up hard — asking for four on a 24-per-cent span returned a
  single 10-per-cent rung either side of zero and left the zero line unlabelled.
  Build a symmetric ladder outward from zero rather than up from the bottom.


### batch/008 — 2026-09-19
- merged: hamming-code, regression-to-the-mean, sound-change-chain-shift, tragedy-of-the-commons, plus the last two batch/001 pages of the legacy canvas repair (fourier-series-square-wave, population-logistic-chaos)
- blocked: none
- patterns: perturb-and-observe, guess-then-reveal, step-through, drag-parameter (the repair carries no pattern)
- learned: Four things worth carrying forward.
  - **Nothing inside the controls landmark may carry `disabled`.** The verifier's
    control sweep calls `setChecked` on every `input`/`select` it finds there,
    and Playwright waits for a disabled one to become enabled until a 30 second
    timeout crashes the run. The symptom is a verifier that hangs rather than a
    failure message. If a control is meaningless in some mode, hide it or let it
    do nothing — do not disable it.
  - **`meta.json` tags must be kebab-case.** The schema holds `tags` to the same
    `^[a-z0-9]+(-[a-z0-9]+)*$` pattern as `prerequisites`, so a human-readable
    tag with spaces fails validation before the browser ever opens.
  - **A guess-then-reveal page must not draw the answer before the reveal.**
    `regression-to-the-mean` split its shortlist into a coached and an uncoached
    half and plotted both from the start — but where the uncoached half lands in
    round two is exactly what the reader is being asked to guess. The control
    group now stays folded into the shortlist until the reveal. Two rules fell
    out of this: a matched control must be drawn from the *same* extreme pool
    (splitting it at random), not from the next-best cases left over, or the
    difference-in-differences does not recover the effect; and any reveal-style
    page should be read once with the question in mind, not just for defects.
  - **Do not accept a task file's numeric tolerance if the arithmetic cannot
    reach it.** `079` asked for a derivative-free peak search within 1e-9 of the
    closed form. A quadratic is flat at its peak, so a search that never
    differentiates cannot beat the square root of machine precision — about
    2.6e-6 at this page's scale. The assertion states that floor and explains
    why, which is more honest than a fudged constant and more useful than
    weakening the search.

### batch/007 — 2026-09-19
- merged: simpsons-paradox, map-projection-distortion, gear-train-ratio, beat-frequency-tuning, plus two more pages of the legacy canvas repair (central-limit-theorem, monty-hall)
- blocked: none
- patterns: compare-side-by-side, spatial-explore, build-from-parts, tune-to-match (the repair carries no pattern)
- learned: Four things worth carrying forward.

  **A patch script that asserts writes nothing at all.** A multi-part Python
  edit asserted on its second replacement and aborted before the write, which
  silently rolled back the first replacement too. Nothing printed an error for
  part one, so I assumed it had landed and spent several rounds debugging a
  fix that was not in the file. When a patch script fails, re-apply every part
  and then verify the change is actually present rather than assuming.

  **A colour scale must not branch on the sign of a floating-point residue.**
  The map page tinted warm above area 1 and cool below. An equal-area
  projection lands on a*b = 1 to within a part in 1e15, and the sign of that
  last bit is arbitrary, so neighbouring rings of an exactly equal-area map came
  out full-strength orange and full-strength blue. Put the magnitude in the
  opacity and only the sign in the hue, so the branch fades to invisible where
  it is meaningless.

  **Set assertion tolerances from the arithmetic, not by taste.** Three
  assertions on beat-frequency-tuning failed first time because the queue task
  and I had both guessed round numbers. The sum-to-product identity cannot beat
  a few ulps of its own phase argument, which at 3.4e4 radians is already
  3.6e-12; the tolerance is now literally `4 * EPSILON * max phase`. And
  comparing envelopes as squares rather than square roots avoids losing half
  the digits at a null. A derived tolerance is a stronger claim than a picked
  one, and it scales when the test does.

  **The \uXXXX-in-heredoc trap recurred a fourth time.** Escalated to Standing
  corrections; see above.

### batch/006 — 2026-09-19
- merged: regex-backtracking-blowup, schelling-segregation-model, double-slit-interference, enzyme-michaelis-menten, plus the first three pages of the legacy canvas repair (numerical-integration-error, damped-harmonic-oscillator, huffman-coding)
- blocked: none
- patterns: live-code, draw-input, build-from-parts, perturb-and-observe (the repair carries no pattern)
- learned: Took the four least-used patterns in the trailing twenty again, and
  recorded the overrides in the claim commit; that is now simply how a batch is
  claimed. Carried one repair task alongside four new pages, as batch/005
  recommended, and the container-tracking canvas fix transferred to all three
  legacy pages without argument. Note the one wrinkle: huffman-coding already
  had a function called layout() for positioning tree nodes, so the canvas
  sizer needed a different name. Check for a collision before pasting the
  pattern in.
  Every assertion that failed this batch was again mine or the queue's rather
  than the model's — six batches running now. Three of the queue's suggested
  assertions were simply false and had to be replaced with something stronger.
  (1) "The number of unhappy agents is non-increasing" is false for sequential
  Schelling: moving one agent can discontent its new neighbours. The honest
  replacement is a replay invariant — every mover was discontented at the
  moment it moved, and replaying the recorded move list reproduces the board
  cell for cell — plus strict monotonicity of the segregation score against a
  threshold ladder, which is the claim the page is actually about. (2) "A
  least-squares fit recovers Vmax and Km within five per cent from noisy data"
  is true of the median and false of the worst case; the worst of two hundred
  seeds misses Km by 49.7 per cent. Assert the median and the ratio against the
  linearisation, not a bound on every seed. (3) "(ab|a)*c is still exponential
  with a smaller base" is false — it is linear. (a|aa)*b is the page's
  golden-ratio case and the one the prose now describes.
  A better move than loosening a tolerance: assert the CONVERGENCE ORDER. The
  double-slit phasor sum agreed with the closed form to 1e-8 in a unitless
  prototype but only to 1.3e-5 on the real page, because wavelengths are in
  nanometres and apertures in micrometres, so the phase across an aperture is
  about a thousand times larger. Loosening the tolerance would have thrown the
  assertion away. Asserting that halving the step quarters the error — 9.95e-6
  at 150 samples, 2.49e-6 at 300, ratio required in [3.9, 4.1], measured 4.000
  — is a strictly stronger claim about the same code and is scale-free.
  Two practical notes. (1) The heredoc escape trap from batch/003 and /004
  recurred a third time, in its batch/004 form. Build the character with a
  named Python variable and concatenate — TRI = chr(0x25B6) — and never write
  a \uXXXX escape inside a quoted heredoc that a later patch must match.
  (2) The verifier's CONTROL_SEL does not include text inputs, so a free-text
  field is invisible to the control sweep. A live-code page can therefore carry
  editable text fields as long as two range or select controls also sit inside
  the controls landmark — which is what made the regex page's editable pattern
  and stress-unit fields possible.

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
