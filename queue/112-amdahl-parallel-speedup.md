# 112 — amdahl-parallel-speedup

**Domain:** computer-science
**Suggested interaction pattern:** `drag-parameter`

## Concept

The part of a program you cannot parallelise sets a hard ceiling on speedup, and that ceiling is reached much sooner than anyone expects.

## Why it benefits from interaction

Dragging the serial fraction and the core count and watching the curve flatten shows why a five percent serial section caps you at twenty times whatever hardware you buy.

## What the reader should be able to do afterward

Predict the maximum useful core count for a workload and explain the difference between Amdahl and Gustafson.

## Assertions the selftest must make

- speedup equals 1/((1-p) + p/n) to 1e-12 at 200 settings
- the limit as n grows without bound is exactly 1/(1-p), approached to within 1 percent at a computed n
- the core count at which speedup reaches half its ceiling is exactly p/(1-p), derived on the page and checked against the simulated curve to 1e-10
- Gustafson's scaled speedup is exactly (1-p) + p*n, and so is linear in n with slope p, checked at 100 settings
- efficiency, speedup over n, is strictly decreasing in n for every p below 1, checked to n = 1024
