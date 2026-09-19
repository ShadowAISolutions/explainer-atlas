# Repair: floating-point-precision stage legibility

**Type:** repair (filed by AUDIT/001 — scored 2 on visual distinctiveness)
**Target:** `explainers/floating-point-precision/index.html`

## The defect

The page's writing and its ten assertions are among the best in the collection.
The stage is the problem:

- At 1280px the number-line tick labels, the `one gap = 2.220e-16` annotation,
  the `nothing exists between those ticks` caption and the `2^-10 … 2^-70`
  axis on the staircase panel are all at or past the limit of legibility.
- At 390px the whole canvas collapses into an unreadable grey smear. The page's
  primary visual channel is gone on a phone, which means the contract's
  "responsive to 360px" is met only nominally.
- There is an empty white box below the bit-field legend at 1280px — an element
  that renders with a border and no content.
- The stage column ends in a large block of dead whitespace because the control
  rail is taller than the canvas.

## What to do

Add a `layout()` that picks a different canvas size and panel arrangement below
about 620px of available width — the two panels stacked with a taller canvas and
a larger type scale, as batch/004 established — plus a debounced `resize`
listener. Raise the canvas type scale at wide widths too; the current sizes were
chosen for a 1000px canvas and never revisited. Remove or fill the empty box.
Consider letting the stage column's figure grow or moving the caption so the
column does not end in whitespace.

## Constraints

- Do not touch the model, the assertions or the prose. This is a presentation
  repair; all ten assertions must still pass unchanged and
  `assertions_count` must not move.
- Bump nothing else. Re-run `node tools/verify.mjs floating-point-precision`
  and read both screenshots back before committing.
