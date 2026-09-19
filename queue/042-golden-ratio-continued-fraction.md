# 042 — golden-ratio-continued-fraction

**Domain:** mathematics
**Suggested interaction pattern:** `step-through`

## Concept

Every irrational has a best rational approximation at each denominator, and the golden ratio is the hardest number in existence to approximate.

## Why it benefits from interaction

Stepping the continued fraction forward and watching each convergent land, alongside the same process for pi and sqrt(2), shows why all-ones is the worst possible expansion.

## What the reader should be able to do afterward

Compute a continued fraction expansion, generate its convergents, and explain what makes a number badly approximable.

## Assertions the selftest must make

- the convergents of phi are exactly consecutive Fibonacci ratios, to n = 30, by integer comparison
- each convergent p/q satisfies |x - p/q| < 1/q^2 for phi, pi, e and sqrt(2), at 25 depths each
- phi's approximation error times q^2 tends to 1/sqrt(5), the Hurwitz constant, within 1e-6 by depth 25
- pi's third convergent is exactly 355/113 and its error is below 3e-7
- every convergent is in lowest terms: gcd(p,q) = 1 at all tested depths
