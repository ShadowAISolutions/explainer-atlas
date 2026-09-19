# 020 — newton-raphson-basins

**Domain:** mathematics
**Suggested interaction pattern:** `spatial-explore`

## Concept

Newton's method converges quadratically near a root and chaotically far from
one.

## Why it benefits from interaction

Clicking a starting point and watching the iterates fly across a fractal basin
boundary is the fastest route to understanding why initial guesses matter.

## What the reader should be able to do afterward

Predict when Newton's method will converge and estimate how many iterations it
needs.

## Assertions the selftest must make

- sqrt(2) is found to 1e-15 in at most 6 iterations from x0 = 1
- error squares each step near the root: e_(n+1) <= C*e_n^2 with C stable to
  20%
- the derivative-zero case is detected rather than dividing by zero
- for z^3 - 1 every converged point lands on one of the three cube roots of
  unity to 1e-10
- iteration count is finite for every sampled starting point
