# 013 — big-o-crossover

**Domain:** computer-science
**Suggested interaction pattern:** `race-two-methods`

## Concept

Asymptotic order does not decide which algorithm is faster at the sizes you
actually run.

## Why it benefits from interaction

Racing insertion sort against merge sort with an adjustable constant factor
shows the crossover point moving, which is what real library implementations
exploit.

## What the reader should be able to do afterward

Pick between two algorithms for a given input size and constant factor.

## Assertions the selftest must make

- insertion sort performs exactly n(n-1)/2 comparisons on reversed input
- merge sort comparison count matches the n*ceil(log2 n) - 2^ceil(log2 n) + 1
  bound
- both sorts return correctly ordered output for every seeded input tested
- the computed crossover point satisfies both cost models within one element
- sorting is a permutation: multiset of output equals multiset of input
