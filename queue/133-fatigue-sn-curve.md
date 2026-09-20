# 133 — fatigue-sn-curve

**Domain:** engineering
**Suggested interaction pattern:** `drag-parameter`

## Concept

A part can survive a load a million times and fail at the same load on the million and first cycle, and the relationship between stress and life is a power law over four decades.

## Why it benefits from interaction

Dragging the stress amplitude and watching the predicted life fall by a factor of ten for a small change makes the exponent real.

## What the reader should be able to do afterward

Read an S-N curve, predict a life, and apply Miner's rule to a mixed load history.

## Assertions the selftest must make

- the Basquin power law fit recovers the generating exponent to 1e-8 from noiseless data
- a 10 percent stress rise cuts the predicted life by a factor matching the exponent to 1e-10
- Miner's rule damage sums to exactly 1 at the predicted failure point for 200 seeded load histories
- the order of blocks in a load history does not change the Miner sum, to 1e-12
- a stress below the endurance limit contributes exactly zero damage in the model, checked
