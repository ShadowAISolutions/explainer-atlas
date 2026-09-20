# Repair: special-relativity-time-dilation clips its own headline number

**Type:** repair (filed by AUDIT/003 — scored 2 on visual distinctiveness)
**Target:** `explainers/special-relativity-time-dilation/index.html`

## The defect

At 1280px the stage canvas is about ten pixels too short for what it draws. The
last line it paints is the moving clock's tick readout — `moving clock: 24.00
ticks` — and that line is cut through the middle by the bottom edge of the
canvas. Only the top half of the glyphs survives. The `your clock: 48 ticks`
line above it renders in full, so the reader sees one of the two numbers the
whole page exists to compare.

This is the page's headline quantity. Everything above it — two light clocks,
a triangle, a Lorentz factor readout — is there to make 48 against 24 mean
something, and 24 is the half that is unreadable.

At 390px the same drawing has room and both lines render in full, which is why
the batch/013 legibility repair did not catch it: that sweep was looking for
things that break as the canvas narrows, and this breaks as it widens.

## What to do

Measure the bottom of the drawing rather than assuming it. The tick rulers and
their labels are laid out from a running y, so the canvas height at wide widths
should be derived from where that layout actually ends, with the label's line
box included, instead of from a constant chosen when the drawing was shorter.
A reserved row for the second label, of the kind batches 013 and 014 adopted
after the same class of defect, is the straightforward fix.

Read the 1280 screenshot back afterwards and confirm both readouts sit clear of
the canvas edge and clear of the figure caption below it. Check 390 and 360 have
not regressed.

## Constraints

- Presentation only. Do not touch the model, the twelve assertions or the prose,
  and do not move `assertions_count`.
- Re-run `node tools/verify.mjs special-relativity-time-dilation` and read both
  screenshots back before committing.
