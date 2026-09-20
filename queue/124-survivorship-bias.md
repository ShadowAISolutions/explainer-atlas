# 124 — survivorship-bias

**Domain:** statistics
**Suggested interaction pattern:** `guess-then-reveal`

## Concept

The famous armoured bomber problem: the holes are where the planes can be hit and come home, so you armour where there are no holes.

## Why it benefits from interaction

Guessing where to put the armour before the returning and non returning planes are separated is the only way the reversal lands.

## What the reader should be able to do afterward

Spot a survivorship filtered sample and say what the missing data would have shown.

## Assertions the selftest must make

- the observed hole distribution over survivors equals the true hit distribution times the survival probability, normalised, to 1e-12
- armouring the modal survivor hole region saves fewer planes than armouring its complement, computed exactly at 200 seeded settings
- the inferred true hit distribution recovered from survivors matches the generating distribution within 3 standard errors over 100000 planes
- the bias vanishes exactly when survival does not depend on hit location, checked
- a mutual fund survivorship example inflates the average return by a computed amount, exhibited
