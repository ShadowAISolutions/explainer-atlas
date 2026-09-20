# 121 — network-effects-tipping

**Domain:** economics
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

When a product gets better as more people use it, there are two stable outcomes and an unstable one between them, and a small push near the middle decides everything.

## Why it benefits from interaction

Nudging the adoption share and watching it run away to nought or one shows a tipping point rather than a slope.

## What the reader should be able to do afterward

Identify the tipping point of an adoption model and say which side of it a market is on.

## Assertions the selftest must make

- the fixed points of the adoption map are found to 1e-10 and match the analytic roots for the logistic form
- the middle fixed point is unstable: the derivative of the map exceeds 1 there, at 100 seeded parameter sets
- trajectories starting either side of it converge to different fixed points, checked at 500 seeded starts
- the basin boundary equals the unstable fixed point to 1e-8, located by bisection
- a strong enough subsidy removes the middle fixed point entirely, with the critical subsidy located to 1e-8
