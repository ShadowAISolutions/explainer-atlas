# 004 — monty-hall

**Domain:** game-theory
**Suggested interaction pattern:** `guess-then-reveal`

## Concept

Switching doors after the host reveals a goat wins two thirds of the time.

## Why it benefits from interaction

Almost nobody believes the answer from the proof. Playing it, with a visible
running tally against the theoretical curve, is what moves people.

## What the reader should be able to do afterward

State why the host's knowledge is the load-bearing assumption, and what
changes when the host opens a door at random.

## Assertions the selftest must make

- switching wins exactly 2/3 in the enumerated sample space
- staying wins exactly 1/3
- with a host who opens randomly, switching and staying both give 1/2
- seeded simulation of 10000 trials lands within 3 standard errors of 2/3
- generalised to N doors, switching wins (N-1)/(N(N-2)) for N > 3
