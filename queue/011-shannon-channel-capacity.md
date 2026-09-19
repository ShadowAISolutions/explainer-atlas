# 011 — shannon-channel-capacity

**Domain:** information-theory
**Suggested interaction pattern:** `drag-parameter`

## Concept

A noisy channel has a hard capacity above which no code can achieve
arbitrarily low error.

## Why it benefits from interaction

Dragging the crossover probability and watching capacity collapse to zero at p
= 0.5 makes the symmetry of noise concrete.

## What the reader should be able to do afterward

Compute binary symmetric channel capacity and explain why p and 1-p give the
same capacity.

## Assertions the selftest must make

- BSC capacity equals 1 - H(p) to 1e-12
- capacity is zero at p = 0.5 and one at p = 0 and p = 1
- capacity is symmetric under p -> 1-p
- binary entropy H(0.11) equals 0.5 bits to 3 decimals
- capacity is convex in p on each side of 0.5
