# 017 — fourier-series-square-wave

**Domain:** mathematics
**Suggested interaction pattern:** `build-from-parts`

## Concept

Adding sine waves in the right proportions builds any periodic signal, and the
overshoot at a discontinuity never goes away.

## Why it benefits from interaction

Adding one harmonic at a time and seeing the Gibbs overshoot refuse to shrink
is a result readers will not believe from a formula.

## What the reader should be able to do afterward

Compute the coefficients of a square wave and state what Gibbs overshoot
converges to.

## Assertions the selftest must make

- odd harmonic coefficients equal 4/(n*pi) for the unit square wave
- even harmonic coefficients are exactly zero
- Gibbs overshoot converges to 1.17898 times the half-jump within 0.1% by 50
  terms
- Parseval: sum of squared coefficients equals the signal's mean square to 1%
- partial sums converge pointwise away from the discontinuity
