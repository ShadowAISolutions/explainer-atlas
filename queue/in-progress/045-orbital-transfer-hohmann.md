# 045 — orbital-transfer-hohmann

**Domain:** physics
**Suggested interaction pattern:** `spatial-explore`

## Concept

Moving to a higher orbit requires two burns, and speeding up puts you higher and therefore slower.

## Why it benefits from interaction

Placing the burns by hand and watching the transfer ellipse miss, then land, teaches the counterintuitive part: prograde thrust raises the opposite side of the orbit.

## What the reader should be able to do afterward

Compute the delta-v for a Hohmann transfer and explain why a spacecraft that speeds up ends up going slower.

## Assertions the selftest must make

- circular orbital speed equals sqrt(mu/r) to 1e-12 at 50 radii
- the two Hohmann burns sum to the closed-form total delta-v to 1e-10 for 40 radius ratios
- specific orbital energy and angular momentum are conserved along the transfer ellipse to 1e-9 over a full arc
- the transfer time equals half the ellipse's Kepler period to 1e-10
- the Hohmann transfer costs less than any tested two-burn alternative for ratios below 11.94, and more above it
