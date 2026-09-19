# 052 — regex-backtracking-blowup

**Domain:** computer-science
**Suggested interaction pattern:** `step-through`

## Concept

A backtracking regex engine can take exponential time on a pattern that a finite automaton matches in linear time.

## Why it benefits from interaction

Stepping the backtracking search and watching the tree explode, with the automaton finishing beside it, shows that the pattern is not the problem, the engine is.

## What the reader should be able to do afterward

Recognise a catastrophically backtracking pattern and say what makes the automaton immune.

## Assertions the selftest must make

- the backtracking step count for (a+)+b against n a's is exactly 2^n - 1 at n up to 20
- the Thompson automaton's step count for the same input is exactly n + 1
- both engines agree on accept or reject for 500 seeded pattern and input pairs
- the automaton's state count is at most the pattern length plus one, for all tested patterns
- adding one character to the input at least doubles the backtracking count, for 10 catastrophic patterns
