# 140 — evolutionarily-stable-strategy

**Domain:** game-theory
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

A strategy can be unbeatable in a population without being the best reply to itself, and the condition that separates the two is what makes a mix stable.

## Why it benefits from interaction

Injecting a small share of mutants and watching them die out or take over is the definition acted out rather than stated.

## What the reader should be able to do afterward

Test whether a strategy is evolutionarily stable and find the stable mix of a game.

## Assertions the selftest must make

- the hawk dove stable share equals V/C exactly, to 1e-12, at 40 payoff settings
- injecting a 1 percent mutant share at the stable mix shrinks it, on 300 seeded perturbations
- every evolutionarily stable strategy is a Nash equilibrium, verified for 500 random 2 by 2 games
- the converse fails: a Nash equilibrium that is not stable is exhibited and its invasion demonstrated
- the replicator dynamic converges to the stable mix from 500 seeded starting points, to 1e-8
