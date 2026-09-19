# 079 — tragedy-of-the-commons

**Domain:** game-theory
**Suggested interaction pattern:** `drag-parameter`

## Concept

Each herder's private optimum overgrazes the common, and the gap between the private and the social optimum widens with the number of users.

## Why it benefits from interaction

Dragging the number of herders and watching the Nash outcome pull away from the efficient one puts a number on a parable.

## What the reader should be able to do afterward

Compute the Nash and social optima for a common resource and evaluate which interventions close the gap.

## Assertions the selftest must make

- the symmetric Nash effort satisfies its first-order condition to 1e-12, at 60 parameter sets
- the social optimum maximises total payoff, matching an exhaustive scan to 1e-9
- the ratio of Nash to socially optimal extraction equals 2n/(n+1) for the standard quadratic model, to 1e-12
- with one user the Nash outcome equals the social optimum exactly
- a Pigouvian tax set to the externality restores the social optimum to 1e-10, at 40 parameter sets
