# 005 — prisoners-dilemma-iterated

**Domain:** game-theory
**Suggested interaction pattern:** `race-two-methods`

## Concept

Cooperation can be stable under repetition even when defection dominates a
single round.

## Why it benefits from interaction

Strategy interaction is a tournament, not a table. Watching tit-for-tat, grim
trigger, always-defect and a noisy variant play each other over rounds shows
why the shadow of the future matters.

## What the reader should be able to do afterward

Explain the discount-factor threshold above which tit-for-tat resists
defection.

## Assertions the selftest must make

- one-shot Nash equilibrium is mutual defection for the standard T>R>P>S
  payoffs
- tit-for-tat against itself scores exactly R per round
- grim trigger against always-defect scores S once then P thereafter
- the folk-theorem threshold delta >= (T-R)/(T-P) is computed correctly
- total payoff is conserved across the full round-robin matrix
