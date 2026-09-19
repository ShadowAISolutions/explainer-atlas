# 006 — nash-equilibrium-mixed

**Domain:** game-theory
**Suggested interaction pattern:** `drag-parameter`

## Concept

In a game with no pure-strategy equilibrium, each player randomises to make
the opponent indifferent.

## Why it benefits from interaction

The indifference condition is invisible in a payoff matrix and obvious on a
best-response diagram the reader can drag.

## What the reader should be able to do afterward

Find a mixed equilibrium by hand and explain why a player's own payoffs do not
determine their own mixing probability.

## Assertions the selftest must make

- matching pennies equilibrium is (1/2, 1/2) for both players
- each player's equilibrium mix makes the opponent's two pure payoffs equal to
  1e-12
- rock-paper-scissors equilibrium is (1/3, 1/3, 1/3)
- best-response correspondences intersect exactly at the computed equilibrium
- expected payoffs sum to zero in every zero-sum case tested
