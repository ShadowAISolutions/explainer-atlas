# 060 — regression-to-the-mean

**Domain:** statistics
**Suggested interaction pattern:** `guess-then-reveal`

## Concept

Extreme measurements are followed by less extreme ones with no cause required, and this alone manufactures the appearance of treatment effects.

## Why it benefits from interaction

Guessing the second-round score of the top performers before it is revealed, then seeing the slope, makes the artefact undeniable.

## What the reader should be able to do afterward

Recognise regression to the mean in a before-and-after comparison and design a control that survives it.

## Assertions the selftest must make

- for a correlation rho, the expected second score of a group selected at z equals rho z, to within 1 percent over 200000 seeded pairs
- selecting the top decile and re-measuring shows a mean drop matching (1 - rho) times the selection mean, within 2 percent
- with rho = 1 there is no regression: the second score equals the first exactly
- with rho = 0 the second score's mean is 0 regardless of selection, within 1 percent
- the naive before-and-after difference is non-zero even though the generating process has no treatment effect
