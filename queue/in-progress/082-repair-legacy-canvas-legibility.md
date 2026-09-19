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

## Progress

- [x] `numerical-integration-error` — batch/006. Container-tracking `layout()`,
      13px decade labels right-aligned in the gutter, x ticks at powers of four,
      a trapezoid/Simpson legend, and a shortened lower-pane title below 470px.
- [x] `damped-harmonic-oscillator` — batch/006. Container-tracking `layout()`,
      13px fonts, named panes, phase portrait re-centred on a radius computed
      from the pane rather than a fixed 880x620 canvas.
- [x] `huffman-coding` — batch/006. Container-tracking `fitCanvas()` (the page
      already had a `layout()` for the tree, so the canvas sizer needed its own
      name), taller aspect below 470px, padding scaled to the width.
- [x] `central-limit-theorem` — batch/007. Container-tracking `fitCanvas()`,
      13px pane titles, taller aspect below 470px so the two stacked panes each
      get room, pointer mapping rewritten against the CSS-pixel space.
- [x] `monty-hall` — batch/007. Container-tracking `fitCanvas()` with the
      canvas height derived from its parts rather than fixed at 420. Below
      470px the padding and the bar gutters shrink and the legend shortens;
      when a door is narrower than 36px its contents become a colour block,
      which is what makes the twelve-door case legible on a phone.
- [x] `fourier-series-square-wave` — batch/008. Container-tracking `fitCanvas()`
      with the wave pane taller than wide below 470px, pads and type scaled to
      the width, and a shortened bar-pane title. The old fixed 960x600 surface
      squeezed into a 390px viewport left a wave about 90px tall.
- [x] `population-logistic-chaos` — batch/008. Container-tracking `fitCanvas()`;
      below 470px the orbit pane drops to three horizontal rules and the
      bifurcation axis to four r ticks, and the `r =` marker label moved inside
      the lower pane on a backing, because above it it collided with the pane
      title whenever r sat mid-range.
      (`floating-point-precision` was repaired in batch/005 under task 081.)
- [x] `dijkstra-vs-astar` — batch/009. Container-tracking `fitCanvas()` with the
      cell size derived from the width so the 25-wide maze fills it, cell
      outlines dropped below 9px a cell, and the four-bar comparison chart
      rebuilt: it measures its own labels and falls back from one line, to a
      name over a number, to horizontal rows when a phone leaves sixty pixels
      per bar. The old fixed 900x762 surface put the bar labels at under five
      effective pixels at 390.
- [x] `equal-temperament` — batch/009. Container-tracking `fitCanvas()`; below
      470px the two wave panels stack instead of sitting side by side so each
      keeps the full width, the twelve-bar cents chart switches to two-letter
      interval names when the full ones do not fit, and the cents figure is
      kept only on the selected bar rather than smeared across all twelve. The
      beat-rate label gained a backing, since the wave fills the panel behind it.
- [x] `pid-controller` — batch/009. Container-tracking `fitCanvas()` with the
      gutter, both pane heights and all type derived from the width; below 470px
      the time ticks thin from every 2s to every 5s and the two long labels
      shorten. The effort strip had vanished entirely at 390.
- [ ] batch/002 pages — `newton-raphson-basins`, `supply-demand-tax-incidence`
      remain
- [ ] batch/003 pages

**Use the container-tracking pattern, not the two-fixed-sizes one.** Clamp the
container width, set the backing store to twice it, scale the context by two,
and let the NARROW flag pick only the arrangement and the wording. The pages
named in step 2 above predate that correction; see STATE.md batch/005.

## Constraints

- Presentation only. No model, assertion or prose changes; `assertions_count`
  must not move on any page touched.
- A page that already reads acceptably at 390 needs no change — check before
  editing.
- Tick pages off in this file as they are done, and close the task when the
  list is exhausted.
