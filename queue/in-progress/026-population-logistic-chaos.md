# 026 — population-logistic-chaos

**Domain:** biology
**Suggested interaction pattern:** `time-scrubber`

## Concept

A simple deterministic population model produces stable, cyclic, and chaotic
behaviour as one parameter rises.

## Why it benefits from interaction

Scrubbing r through the period-doubling cascade and watching the orbit split
is the bifurcation diagram experienced instead of read.

## What the reader should be able to do afterward

Locate the onset of chaos and explain what deterministic chaos does and does
not mean.

## Assertions the selftest must make

- fixed point for 1 < r < 3 equals (r-1)/r to 1e-10
- the first period-doubling occurs at r = 3 within 0.001
- the second occurs at r = 1+sqrt(6) = 3.4495 within 0.001
- the Feigenbaum ratio of successive bifurcation gaps approaches 4.669 within
  2%
- the orbit stays in [0,1] for all r in [0,4] and all seeded starts
