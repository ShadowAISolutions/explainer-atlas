# 029 — diffusion-random-walk

**Domain:** physics
**Suggested interaction pattern:** `step-through`

## Concept

Random walkers spread as the square root of time, which is why diffusion is
slow over long distances.

## Why it benefits from interaction

Stepping the walk forward and watching the RMS displacement track sqrt(t)
rather than t is the whole result.

## What the reader should be able to do afterward

Estimate a diffusion time over a given distance and say why it scales as
distance squared.

## Assertions the selftest must make

- mean displacement is zero within 3 standard errors for a seeded ensemble
- mean squared displacement equals n*step^2 within 3%
- RMS displacement grows as sqrt(n) with fitted exponent 0.5 +/- 0.03
- the distribution after 1000 steps matches a Gaussian by chi-squared at p >
  0.01
- the walk is reproducible bit-for-bit from the same seed
