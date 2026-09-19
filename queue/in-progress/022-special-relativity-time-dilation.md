# 022 — special-relativity-time-dilation

**Domain:** physics
**Suggested interaction pattern:** `drag-parameter`

## Concept

Moving clocks run slow by the Lorentz factor, which is negligible until you
approach c.

## Why it benefits from interaction

The flatness of gamma below 0.5c and its blow-up near 1 is a shape, and a
slider is the only way to feel it.

## What the reader should be able to do afterward

Compute a dilation factor and say why everyday speeds show no effect.

## Assertions the selftest must make

- gamma equals 1/sqrt(1-v^2/c^2) to 1e-12
- gamma at v = 0.866c equals 2.000 to 3 decimals
- gamma at 300 m/s differs from 1 by less than 1e-12
- velocity addition never exceeds c for any pair of sub-c inputs
- the invariant interval s^2 = c^2t^2 - x^2 is preserved under boost to 1e-10
