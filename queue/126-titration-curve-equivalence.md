# 126 — titration-curve-equivalence

**Domain:** chemistry
**Suggested interaction pattern:** `drag-parameter`

## Concept

The steep part of a titration curve is not where the acid is neutralised; the equivalence point of a weak acid sits above pH 7, and the half equivalence point hands you the pKa for free.

## Why it benefits from interaction

Dragging titrant in and watching the curve flatten, leap and flatten again locates both landmarks by eye.

## What the reader should be able to do afterward

Read a pKa off a titration curve and predict the equivalence pH for a weak acid.

## Assertions the selftest must make

- the pH at half equivalence equals the pKa to 1e-9 for 200 seeded weak acids
- the equivalence pH matches the closed form for the conjugate base hydrolysis to 1e-6
- charge balance holds at every point of the curve to 1e-10
- mass balance on the acid holds at every point to 1e-12
- a strong acid titration has its equivalence at pH 7.00 to 1e-6 at 25 degrees
