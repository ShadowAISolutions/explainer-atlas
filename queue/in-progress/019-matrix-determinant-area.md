# 019 — matrix-determinant-area

**Domain:** mathematics
**Suggested interaction pattern:** `drag-parameter`

## Concept

The determinant of a 2x2 matrix is the signed area of the parallelogram its
columns span.

## Why it benefits from interaction

Dragging the two column vectors and watching the determinant read out as an
area, going negative when they cross, makes the sign meaningful.

## What the reader should be able to do afterward

Say what a zero determinant means geometrically and why the sign flips.

## Assertions the selftest must make

- determinant equals ad - bc exactly
- shoelace area of the parallelogram equals |det| to 1e-12
- det is zero exactly when the columns are linearly dependent
- swapping the two columns negates the determinant
- det(AB) equals det(A)det(B) for 50 seeded pairs to 1e-10
