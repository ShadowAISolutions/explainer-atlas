# 041 — taylor-series-remainder

**Domain:** mathematics
**Suggested interaction pattern:** `build-from-parts`

## Concept

A truncated Taylor series is exact plus a remainder, and the Lagrange form of that remainder bounds the error before you ever compute it.

## Why it benefits from interaction

Adding terms one at a time and watching the error envelope shrink, then widen again as you move away from the expansion point, turns a formula into a picture of where a polynomial is allowed to be trusted.

## What the reader should be able to do afterward

Say how many terms are needed for a given accuracy over a given interval, and explain why the answer depends on distance from the centre.

## Assertions the selftest must make

- the degree-n partial sum of exp at 0 equals the exact value to within the Lagrange bound |x|^(n+1) e^|x| / (n+1)! at 200 sampled points
- the remainder of sin's degree-n sum is bounded by |x|^(n+1)/(n+1)! exactly, for n up to 15
- the partial sums of the geometric series match (1-r^(n+1))/(1-r) to 1e-14 for 100 seeded r in (-1,1)
- doubling the degree at least squares the error for |x| < 1, over 50 sampled x
- the alternating-series bound holds: the error of a truncated alternating sum is smaller than the first omitted term, on 300 cases
