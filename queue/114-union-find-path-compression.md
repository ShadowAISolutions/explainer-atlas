# 114 — union-find-path-compression

**Domain:** computer-science
**Suggested interaction pattern:** `step-through`

## Concept

Union find answers connectivity questions in almost constant time, and the trick is that every query flattens the tree it walked.

## Why it benefits from interaction

Stepping through unions and finds while watching the forest rearrange itself shows path compression doing its work.

## What the reader should be able to do afterward

Predict the cost of a sequence of operations and explain what the inverse Ackermann function is doing there.

## Assertions the selftest must make

- find returns the same root as a brute force search on 500 seeded operation sequences
- path compression never increases any node's depth, checked at every find
- union by rank keeps the tree height at most log2(n) even without compression, verified to n = 4096
- the total pointer updates for n unions and m finds stays below 4(n+m) on 200 seeded runs
- the number of distinct components equals n minus the number of successful unions, exactly
