# 040 — quicksort-pivot-choice

**Domain:** computer-science
**Suggested interaction pattern:** `race-two-methods`

## Concept

Quicksort's worst case is caused by pivot choice, not by the data being
adversarial by nature.

## Why it benefits from interaction

Racing last-element, random and median-of-three pivots on sorted input shows
the quadratic blow-up and its fix in one view.

## What the reader should be able to do afterward

Choose a pivot strategy for a given input distribution and justify it.

## Assertions the selftest must make

- last-element pivot performs exactly n(n-1)/2 comparisons on sorted input
- median-of-three on sorted input performs O(n log n) comparisons, under
  3*n*log2(n)
- all strategies return correctly sorted output for 100 seeded inputs
- sorting is a permutation: output multiset equals input multiset
- random-pivot comparison counts are reproducible from the same seed
