# 030 — doppler-effect

**Domain:** physics
**Suggested interaction pattern:** `drag-parameter`

## Concept

Observed frequency shifts with relative motion, and the shift is asymmetric
between a moving source and a moving observer.

## Why it benefits from interaction

Dragging source and observer speeds independently exposes an asymmetry most
people assume away.

## What the reader should be able to do afterward

Compute an observed frequency and explain why the two cases differ.

## Assertions the selftest must make

- observed frequency matches f*(c+vo)/(c-vs) to 1e-12
- a moving source and a moving observer at the same speed give different
  shifts
- the difference between the two cases vanishes to second order in v/c
- the sonic-boom singularity at vs = c is handled without Infinity reaching
  the output
- a stationary pair gives exactly the source frequency
