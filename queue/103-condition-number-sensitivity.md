# 103 — condition-number-sensitivity

**Domain:** mathematics
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

A linear system can be perfectly solvable and still useless: if the matrix is ill conditioned, a tiny change in the right hand side moves the answer enormously.

## Why it benefits from interaction

Nudging the right hand side by a pixel and watching the solution leap across the plane makes the condition number something you feel rather than compute.

## What the reader should be able to do afterward

Predict how much of their input precision a solve will destroy, from the condition number.

## Assertions the selftest must make

- the relative error in the solution is at most the condition number times the relative error in the input, on 300 seeded perturbations
- that bound is attained to within 1 percent by perturbing along the smallest singular vector
- the condition number of a 2 by 2 matrix matches the singular value ratio to 1e-12
- an orthogonal matrix has condition number exactly 1, at 8 rotation angles
- the computed solution satisfies A x = b to 1e-10 even when it is far from the true x, exhibited
