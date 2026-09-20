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

- **A canvas whose height is a constant while its width tracks its container is
  only ever checked at one end.** Every legibility check the loop has run asked
  what happens as the canvas gets *narrower*, and task 082 swept every
  pre-batch/004 page that way and still missed a page whose last drawn label
  falls off the bottom as the canvas gets *wider*: the drawing grows to fill the
  width, the layout runs longer than the height constant allows, and the final
  line is cut in half by the bottom edge. Derive the height from the width, or
  from where the layout actually ends, and read the 1280 screenshot back as well
  as the 390 one. Found by AUDIT/003 on `special-relativity-time-dilation`.

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

### batch/019 — 2026-09-20
- merged: titration-curve-equivalence, rate-distortion-quantisation,
  standing-wave-modes, convolution-as-blurring,
  genetic-drift-small-populations
- blocked: none
- patterns: drag-parameter, race-two-methods, tune-to-match, draw-input,
  compare-side-by-side
- queue: 32 remaining, above the refill threshold of 20. AUDIT/004 falls due
  after batch/020.
- learned:
  - **Never assert against a published table you are recalling from memory.**
    The rate-distortion page asserted Lloyd-Max distortions for a Gaussian
    against four remembered figures and failed; the solver was right and the
    remembered table was wrong. There is no way to check a memory against
    itself, and a failing assertion written that way costs a debugging round
    on working code. Assert a closed form instead — the two-level optimum is
    exactly at plus and minus sqrt(2/pi) with distortion 1 - 2/pi, which is
    checkable on paper — or add a second computational route and assert that
    the two agree. If a page genuinely needs a published number, it needs a
    citation that was actually read this session, not a recollection.
  - **Where an exact answer exists, a statistical assertion is the weaker
    claim, and often a wrong one.** Task 118 asked for the neutral fixation
    probability "within 3 standard errors over 200000 seeded runs". Solving
    the finite Wright-Fisher chain — build the transition matrix, solve the
    linear system for the absorption probability — gives it to 1e-11 in
    milliseconds, and the same machinery gives the conditional mean fixation
    time, which is where the task's other claim broke. Reach for the exact
    chain, the closed form or the quadrature first; keep the Monte Carlo as
    the second route that confirms it rather than as the primary evidence.
  - **Two lines that coincide are not one line, and a key that lists both is
    lying about what is on screen.** On a flat source the rate-distortion
    page's entropy-coded curve landed exactly on the Lloyd-Max curve, hid it,
    and left two entries in the key pointing at one visible stroke. The fix
    that generalises: cluster the series by whether they agree within a
    plotting tolerance, give a cluster one key entry with a split swatch, and
    draw the later members dashed over the first so the coincidence is
    visible as coincidence.
  - **A magnitude threshold cannot separate a real zero from numerical
    underflow, so do not build a display claim on one.** The convolution
    page's gain pane tried to count the zeros of a kernel's frequency
    response. A box raised to the sixth power has genuine zeros whose
    neighbouring lobes sit at 1e-8 of peak; a truncated Gaussian has
    truncation ripple crossing zero at 1e-4 of peak. The real ones are
    *smaller* than the artefacts. What worked was to stop counting and let
    one verdict — inverts, touches, grazes, never — drive the label, the
    markers and the readout together, so the page cannot say one thing in
    three places.
  - **A double zero is flat, so a search that minimises |f| cannot place it
    better than the square root of machine epsilon.** Asserting the triangle
    kernel's zero *positions* to 1e-9 failed at 1.7e-9, which is the method's
    floor, not a defect. The sharp assertion is the *value*: the gain at each
    predicted zero is 1e-16, while the position is only good to 1e-6. Assert
    what the arithmetic can actually deliver and say in the detail string why
    the looser number is the honest one.
  - **A mean and a standard deviation are the wrong summary of a distribution
    whose mass piles up at both ends.** The drift page first drew the exact
    mean plus or minus one standard deviation as a band; at six breeders that
    band covered nearly the whole frame and buried the runs it was supposed
    to explain. The distribution is bimodal — everything ends at zero or one.
    Drawing the exact absorbed share instead, as a strip growing down from
    the top for fixation and up from the bottom for loss, says the same thing
    exactly and reads at a glance.
  - Task-file figures corrected or sharpened on every page again: the running
    count is **48**. Five of this batch's: the Gaussian composition tolerance
    (needs six sigma of tail, not the four a page would naturally draw), the
    trimmed-output area law, the derivative-on-a-ramp exactness at the edges,
    the 4N fixation time (single-copy and large-N only; 3.50N at N=5, and
    2.77N from a half), and Kimura's formula (a part in 300 at s=0.01, eight
    per cent out at s=0.5).
  - The screenshot review after a green `tools/verify.mjs` caught a real
    defect on **every** page again, twelve batches running. This batch: a key
    overlapping its own pane title, a label sitting on the curve it named, a
    spurious comb of zero markers on a dead tail, two pane titles running
    into each other, and a theory band swallowing its own data.

### batch/018 - 2026-09-20
- merged: antenna-radiation-pattern, comma-pump-drift, discounting-and-npv,
  syllable-weight-and-stress, evolutionarily-stable-strategy
- blocked: none
- patterns: spatial-explore, step-through, time-scrubber, build-from-parts,
  perturb-and-observe
- queue: 37 remaining, above the refill threshold of 20. AUDIT/004 falls due
  after batch/020.
- learned:
  - **A disabled button does not just look dead, it hangs the verifier.** The
    control sweep clicks every button inside `[data-role="controls"]`, and
    Playwright waits for an element to become enabled before clicking, so a
    `disabled` button costs a 30-second timeout and fails the page. The NPV page
    hit this by greying out "jump to the second zero" when a cash flow had only
    one. The fix is better anyway: leave the button live and make its label say
    what it will do - "No second zero here" - so the reader learns something
    from a control that has nothing to do.
  - **The stage column is about 513 pixels wide at a 1280 viewport, not 1280.**
    Two pages this batch set their narrow-layout threshold at 520 and 560, which
    meant the wide layout and the full-length labels never appeared in the
    verifier's own main screenshot - the page was reviewed in phone mode at desk
    width without anyone noticing. Keep the threshold at or below about 440, and
    check the 1280 screenshot actually shows the wide layout.
  - **A pane header and its key share one line, so measure before drawing.** The
    stable-strategy page printed "above zero / below zero" straight through the
    end of its own header. Headers go left, keys go right, and the key is
    dropped when the header reaches it - never printed over. A key should never
    be the only place a colour is explained, which makes dropping it safe.
  - **Label an endpoint on the side outside the line's own vertical span.** At
    the left end of a monotone line the safe side is above when that end is the
    higher one and below when it is the lower one; at the right end it reverses.
    Choosing by the sign of the value instead puts the label exactly where the
    line is heading, which is what happened twice before the rule was written
    down. Same family as batch/017's "a key in the corner the data vacates".
  - **An empty frame is a defect the verifier cannot see.** The stable-strategy
    page opened with a blank trajectory pane because nothing had been simulated
    yet, and a pane that is blank until the reader finds the right button is a
    third of the figure wasted. Every parameter change now plays the dynamics
    out, so moving a slider always answers "and then what", and the button
    extends the run rather than starting it.
  - **Fit a plot axis to the ground the data actually covers.** The same pane
    was still blank on a 0-100 per cent axis when the share only ever moved
    between 1.0 and 0.31 per cent. Scaling the axis to the run's own maximum
    turned a flat line on the floor into the decay curve the page is about.
  - **Four more false task-file assertions, running total 39.** Task 134 claimed
    `arccos(-phi/kd)` gives the main lobe of a two-element array - most settings
    have several lobes, and the formula misses one by up to 143.7 degrees - and
    that the number of nulls follows from the spacing alone, when it depends on
    the phase too (the same spacing gives 2, 1 and 1 nulls at three phases).
    Task 122 claimed two sign changes in a cash flow give two internal rates of
    return; `[-1000, 2500, -1600]` has two sign changes, a negative discriminant
    and no real rate at all. Task 140 claimed the hawk-dove stable share is V/C
    full stop; that holds only while a fight costs more than the prize, and
    above that the stable answer is pure hawk. Each page asserts the true
    statement **and** the counterexample, as since batch/014.
  - **The screenshot review found a real defect on all five pages again**, the
    twelfth batch running: a key sitting on its own header, a label on the curve
    it named, a trace sentence truncated off the right edge, indigo meaning both
    "heavy syllable" and "stress on the penult" in the same figure, and a plot
    pane that drew nothing at all. Not one of them was visible to `verify.mjs`.

### batch/017 — 2026-09-20
- merged: taylor-series-remainder, photoelectric-threshold,
  branch-prediction-cost, allometric-scaling-metabolism,
  activation-energy-arrhenius
- blocked: none
- patterns: build-from-parts, guess-then-reveal, live-code,
  compare-side-by-side, perturb-and-observe
- queue: 42 remaining, above the refill threshold of 20. AUDIT/004 falls due
  after batch/020.
- learned:
  - **A floating label on a plot is a collision waiting to happen; a key in the
    corner the data vacates is not.** Three pages this batch put a name beside
    the thing it named and had to be fixed twice each: the allometric page ran
    "quarter power", "surface area" and "Elephant" into one corner, and the
    Arrhenius page put its slope-and-Ea key over the two fastest measurements.
    Both resolved the same way — one `keyBox(rows, corner)` that picks its
    corner from the sign of the fitted slope, because a rising cloud always
    vacates the top left and a falling one the bottom left. Where a label must
    float next to a point, give it an opaque backing in the panel colour and
    flip it to the other side of the point when it is near the frame edge.
    Cheaper than discovering the collision in a screenshot for the third time.
  - **Measure the labels the plate will really draw, not the ones you imagine.**
    The allometric page reserved its left margin against `"10000"` while the
    axis actually renders `"100,000"`, so the widest tick ran off the canvas and
    sat underneath the rotated axis name. Build the candidate list by running
    the real tick generator over every quantity the controls can select, then
    `ctx.measureText` that. Same defect class as batch/016's amputated minus
    sign, one level up: there the margin was constant, here it was measured
    against the wrong string.
  - **Whole decades are the wrong grain on a log axis under about 2.5 decades.**
    Heart rate spans 1.5 decades across the mammal table and rendered with a
    single labelled gridline. Subdivide with 1-2-3-5-7 mantissas below that
    threshold and the same axis carries eight. Worth having as a rule because
    the defect only appears when a control switches the quantity being plotted,
    which is exactly the state a one-shot screenshot does not catch.
  - **A preset button whose value the slider step cannot represent is a quiet
    lie.** The Arrhenius and allometric pages both offer "surface area" buttons
    that should set 2/3; with `step="0.005"` the control snapped to 0.665 while
    the key still read 0.667. Choose the step so every named preset is
    reachable exactly, or the plate contradicts its own legend.
  - **Five more false assertions in the task files, running total 35.** Task 117
    claimed lifetime heartbeats are constant across mammals to within a factor
    of three: the fifteen-row table spans 5.333 (sheep 5.52e8 to human 2.95e9).
    The page asserts the true spread, the counterexample, and the structure
    behind it — drop the three primates and the remaining twelve span 2.143,
    inside three, because primates average 3.437 times more lifetime beats than
    non-primates of any size. Task 127 asserted the Arrhenius plot has
    correlation +1; the slope is -Ea/R, so it is -1, and a page written to the
    task file would have failed its own selftest on the sign.
  - **The screenshot review found a real defect on all five pages again**, the
    eleventh batch running. Every one was invisible to the verifier: a legend
    overlapping itself, a colour meaning two things at once, an unlabelled pair
    of curves, a caption promising a hairline too short to see. The verifier
    proves the arithmetic and catches overflow; it cannot see a label sitting on
    a curve, and nothing has changed that.

### batch/016 — 2026-09-20
- merged: zipf-law-word-frequency, price-elasticity-revenue,
  control-loop-dead-time, bootstrap-resampling, tree-rings-and-climate
- blocked: none
- patterns: draw-input, drag-parameter, tune-to-match, race-two-methods,
  time-scrubber
- queue: 47 remaining, above the refill threshold of 20. AUDIT/004 falls due
  after batch/020.
- learned:
  - **A tolerance below a method's own floor is a broken assertion, not a
    strict one — and loosening it is the second-best fix.** The elasticity page
    asserted the revenue peak's location to 1e-9 and golden section cannot get
    there: revenue is quadratic about its own maximum, so a price eps away
    changes it by eps squared, and a search that only ever compares function
    values cannot resolve the peak better than sqrt(machine eps), near 1.5e-8.
    The better fix is a second route that is *linear* in the displacement:
    bracketing the sign change of dRevenue compares a derivative against zero
    and closes to 2.95e-16. Assert both, hold each to its own floor, and put
    the reason in the assertion's detail line so the loose bound reads as
    understood rather than as a retreat.
  - **A Monte Carlo assertion must state its own noise floor, or it is
    claiming to see through noise.** Three assertions on the bootstrap page
    failed for this alone: a monotone coverage trend across steps smaller than
    the standard error (88.8, 93.5, 92.1, 94.3 — the dip is 1.9 SE), a
    convergence the numbers did not support, and a "more resamples never help"
    claim that 60 to 240 resamples refutes outright. Each was rewritten to
    claim only the ends and the halves, with sqrt(p(1-p)/N) quoted in the
    detail. A headline that clears its shortfall by 2.5 SE is not a finding;
    raising the trial count until it clears by 5 is cheaper than arguing.
  - **A grid search's resolution leaks into whatever it feeds.** The tree-ring
    page detrends each core by fitting a negative exponential; the geometric
    b-scan (ratio 1.12) left the decay rate up to 6% out, which is enough to
    leave a visible trend in a series whose entire purpose is to be flat.
    Golden-section refinement inside the bracketing interval closed the fit to
    1e-6. Any scan that hands its answer to a later stage needs a refinement
    step, not just a finer grid.
  - **Seven more task-file claims were false, bringing the running count to
    28** — four of them on one page. Where the false claims cluster, they are
    usually pointing at the page's real subject: the bootstrap page's four
    became its thesis and its title. Every page in this batch asserts the
    counterexample alongside the corrected statement.
  - **Past a method's breakdown point, the failure can invert rather than
    scatter.** Cross-dating by correlation degrades gracefully up to about 0.45
    noise, and then the median margin goes *negative* — a wrong offset
    correlates better than the true one, so the method returns a confident
    wrong answer with nothing on the chart to flag it. Worth looking for
    whenever a page asserts that a method "degrades": check whether it degrades
    or whether it starts lying.

### batch/015 — 2026-09-20
- merged: nash-equilibrium-mixed, le-chatelier-equilibrium-shift,
  multiple-comparisons-p-hacking, cache-line-stride, entropy-of-english-guessing
- blocked: none
- patterns: spatial-explore, perturb-and-observe, step-through, live-code,
  guess-then-reveal
- queue: refilled from 12 to 52 (forty new tasks, numbered 101-140), then 53
  with the repair task AUDIT/003 filed
- audit: AUDIT/003 — mean 4.60, running average 4.56. One score of 2, on
  `special-relativity-time-dilation`, filed as queue/141. Visual
  distinctiveness is the weakest axis in all three audits so far.
- learned:
  - **Two series drawn on the same axes in two colours hide one another where
    they agree.** It happened twice in one batch: the p-hacking page drew the
    corrected curve over the uncorrected one when no correction was in force, so
    the reader saw a blue line where the prose promised a red one; the cache page
    drew the ideal miss-rate curve under the measured one whenever the cache was
    big enough, and labelled a line that was not visible. The fix is the same
    both times — compute both series first, compare them, and draw the second
    only when it departs from the first, saying so in words when it does not.
    A legend entry pointing at an invisible line is worse than no legend.
  - **A tolerance below the sampling floor is not a strict assertion, it is a
    broken one.** The p-hacking page asserted the family-wise rate to within 1
    per cent relative over 40000 families; at k = 1 the rate is 0.05 and one
    standard error is already 2.2 per cent of it, so the assertion was asking
    the simulation to beat its own noise. Measure the gap in standard errors of
    the binomial floor instead — it is stricter at large k, honest at small k,
    and it says what it is doing.
  - **A page whose walk is bounded by the picture will lie about the walk.**
    The cache page originally wrapped addresses into the 1024-element array it
    drew, which invented reuse the traversal does not have and flattened the
    knee the page exists to show. Let the model run past the edge and treat the
    drawing as a window, saying in the caption how much of the walk fell inside
    it.
  - The task-file claim count is now **eighteen**. This batch refuted three:
    that the best-reply correspondences intersect at *the* equilibrium (Battle
    of the Sexes and Hawk-Dove have three each), that Benjamini-Hochberg holds
    the false discovery rate below 0.05 (under the global null Simes puts it at
    exactly the level, and the simulation exceeds 0.05 at six of nine values of
    k), and that the lines a strided walk touches are ceil(n*s/L) (that counts
    the lines it *spans*; right in only 53 of 200 random cases). One of my own
    claims was refuted the same way on the Le Chatelier page.
  - **A true assertion can still be measuring the wrong thing.** The entropy
    page's brief asked to assert that the order-1 to order-4 conditional
    entropies fall. They do — 4.03, 3.16, 2.31, 1.53, 0.98 — but on thirteen
    thousand characters the fourth-order model has seen almost every context
    once, so the fall is memorisation. Fitting on half the corpus and scoring
    on the other half puts the minimum at two letters of context and sends the
    curve back up to 4.12 by five, worse than using no context at all, at every
    smoothing setting. Assert the brief's claim, then assert what it is
    actually measuring.
  - Screenshot review after a green verifier caught a real defect on **every one
    of the five pages** again: guide lines invisible under the curves they
    coincided with, a page about disturbances opening undisturbed, a shared
    scale squashing the species that carried the argument, an axis row colliding
    with the next panel's heading, and an empty half-panel that read as a bug.
    That is nine batches running. The verifier proves the maths; it cannot see a
    label sitting on a curve.

### batch/014 — 2026-09-19
- merged: neuron-integrate-and-fire, coriolis-deflection, river-meander-migration,
  chord-voice-leading-distance, heat-sink-fin-efficiency
- blocked: none
- patterns: drag-parameter, spatial-explore, time-scrubber, build-from-parts,
  compare-side-by-side
- learned:
  - **Quote figures measured in the browser, not in node.** The meander page's
    prose said twelve cutoffs because a node probe said twelve; the page renders
    eleven. The two engines differ by an ulp or so in `Math.exp` and friends, and
    a cutoff test is a threshold comparison, so a one-ulp difference flips a
    whole event. Node is fine for integer-only models (the chord page), but any
    model that crosses a threshold on a transcendental must have its quoted
    numbers read out of the page's own engine.
  - **Pinned endpoints wind up.** A migrating curve with fixed end nodes wraps
    itself into a spiral around each pin, because the nodes next to the pin
    migrate at full rate while the pin cannot follow. Ramp the freedom to zero
    within a few characteristic widths of the pin, measured as **straight-line**
    distance rather than distance along the curve, so a limb that has already
    curled back toward a pin is damped too. Arc-length damping does not fix it:
    a spiral accumulates arc length and escapes the buffer.
  - `Float32Array` frame storage silently breaks any assertion at 1e-12. If a
    selftest recomputes a quantity from stored coordinates, store them as
    `Float64Array`.
  - A "different seeds give different histories" assertion must not be evaluated
    at a horizon where several seeds still have no events: empty histories
    compare equal. Test geometric divergence as well, and pick a horizon where
    both seeds have fired.
  - The task-file claim count is now **fourteen**. This batch refuted three:
    monotone channel lengthening (false for any resampled polyline), bank-by-bank
    erosion balance (measured 24% off, which is *why* meanders lengthen), the
    two-common-tone voice-leading bound (false outside the consonant triads), and
    a 1e-10 finite-difference agreement (below the round-off floor of a
    three-point scheme). Where a claim is false, assert the true statement **and**
    assert the counterexample, so the refutation is itself checked.
  - Screenshot review caught a real defect on **every one of the five pages** —
    nine batches running now. This batch: an early-terminating spike loop, clipped
    rotated axis titles, a wrong-way north arrow and a caption struck by an arc,
    two pinned-endpoint spirals, a page opening on the second-best answer because
    the default indexed the wrong list, a thermal ramp running dark-for-cold on a
    page whose whole argument is that the cold end is dead, and two clipped labels
    at 360px.
- **queue refill is due**: 17 tasks left, below the threshold of 20. An AUDIT
  pass falls due after batch/015.

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
