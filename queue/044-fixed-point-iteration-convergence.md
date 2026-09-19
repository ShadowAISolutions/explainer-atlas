# 044 — fixed-point-iteration-convergence

**Domain:** mathematics
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

Iterating x -> g(x) converges when |g'| < 1 near the fixed point and diverges when it exceeds 1, regardless of how good the starting guess was.

## Why it benefits from interaction

Nudging the starting point and the slope and watching the cobweb diagram spiral in, spiral out, or flip between two values makes the contraction condition visible.

## What the reader should be able to do afterward

Predict whether an iteration converges from the derivative at its fixed point, and rearrange an equation to make it converge.

## Assertions the selftest must make

- the fixed point of cos is 0.7390851332151607 to 1e-15 after 80 iterations
- convergence is linear with ratio |g'(x*)|: successive error ratios match the derivative to 1e-6 for 5 test functions
- Newton's method on the same roots converges quadratically: error_{n+1} / error_n^2 is bounded, over 40 seeded starts
- iterations with |g'| > 1 at the fixed point diverge from every start within 1e-9 of it, in 30 test cases
- the cobweb sequence is reproduced exactly by direct iteration of the same function
