# Repair: legacy canvas legibility sweep (pre-batch/004 pages)

**Type:** repair (filed by AUDIT/001 — systemic finding, oldest pages first)

## The defect

AUDIT/001 found that every page merged before batch/004 treats its canvas as a
fixed-size illustration rather than a responsive surface. Three of the five
sampled pages draw labels at sizes chosen for a ~1000px-wide canvas, and none of
the five has a `layout()` that changes canvas dimensions or pane arrangement
below ~620px. Scaling a wide canvas into a 390px viewport produces an illegible
strip; enlarging fonts alone does not fix it.

Confirmed in the sample:

- `numerical-integration-error` — log-axis labels borderline at 1280; stage
  column ends in dead whitespace below the figure.
- `damped-harmonic-oscillator` — phase-portrait axis labels ("velocity",
  "displacement") unreadable at 1280.
- `shannon-channel-capacity` — chart axis labels vanish at 390.

`floating-point-precision` is the worst case and has its own task (081).

## What to do

Work oldest first and take no more than two or three pages in a single batch —
this is maintenance, not the batch's whole content. For each page:

1. Read `.artifacts/<slug>/390.png` and `1280.png`.
2. If the canvas is unreadable at 390, add a `layout()` picking a narrow canvas
   size and pane arrangement plus a debounced `resize` listener, following the
   pattern in `matrix-determinant-area`, `quicksort-pivot-choice` and
   `reaction-rate-order`.
3. Raise any canvas type that is undersized at 1280.
4. Re-run the verifier and read both screenshots back.

Order: `numerical-integration-error`, `damped-harmonic-oscillator`,
`huffman-coding` (batch/000), then the batch/001 pages, then batch/002, then
batch/003.

## Constraints

- Presentation only. No model, assertion or prose changes; `assertions_count`
  must not move on any page touched.
- A page that already reads acceptably at 390 needs no change — check before
  editing.
- Tick pages off in this file as they are done, and close the task when the
  list is exhausted.
