# 117 — allometric-scaling-metabolism

**Domain:** biology
**Suggested interaction pattern:** `compare-side-by-side`

## Concept

Metabolic rate scales as body mass to the three quarters, not to the two thirds a surface area argument predicts, across twenty orders of magnitude.

## Why it benefits from interaction

Putting a mouse and an elephant on the same log log axes and dragging the exponent shows how much a quarter power differs from a third.

## What the reader should be able to do afterward

Read a log log plot, estimate an exponent, and say what the exponent implies about lifespan and heart rate.

## Assertions the selftest must make

- a least squares fit on the built in published mass and metabolic rate table gives an exponent between 0.70 and 0.80
- the fitted intercept and slope reproduce the table values with an R squared above 0.98
- a pure surface area model gives exactly 2/3 and is rejected by the fit at the measured residual
- heart rate scales as mass to the minus quarter in the built in table, fitted exponent within 0.05 of -0.25
- lifetime heartbeats are constant across the table to within a factor of three, computed
