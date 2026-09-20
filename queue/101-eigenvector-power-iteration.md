# 101 — eigenvector-power-iteration

**Domain:** mathematics
**Suggested interaction pattern:** `step-through`

## Concept

Repeatedly multiplying any starting vector by a matrix drags it onto the dominant eigenvector, and the rate it converges is set by the ratio of the top two eigenvalues.

## Why it benefits from interaction

Watching a vector swing round and settle, step by step, with the ratio of eigenvalues as a dial, turns an abstract limit into a visible spiral.

## What the reader should be able to do afterward

Predict how many iterations a matrix needs, and say why a matrix with two close eigenvalues is slow.

## Assertions the selftest must make

- the converged vector satisfies A v = lambda v to 1e-10 for 200 random 3 by 3 matrices
- the error after n steps falls as (lambda2/lambda1)^n, checked against the measured ratio over 50 steps
- the Rayleigh quotient converges quadratically for symmetric matrices and linearly otherwise, measured
- a matrix with a repeated dominant eigenvalue does not converge to a unique direction, exhibited
- the dominant eigenvalue matches the closed form for 2 by 2 matrices to 1e-12
