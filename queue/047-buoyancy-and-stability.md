# 047 — buoyancy-and-stability

**Domain:** physics
**Suggested interaction pattern:** `drag-parameter`

## Concept

A floating body sinks until it displaces its own weight, and whether it stays upright depends on the metacentre, not the centre of gravity alone.

## Why it benefits from interaction

Reshaping a hull and watching it settle, then heel and either right itself or capsize, makes metacentric height concrete.

## What the reader should be able to do afterward

Predict whether a given cross-section floats stably and say what change would fix it.

## Assertions the selftest must make

- the draught solves displaced volume times fluid density equals mass, to 1e-12, for 60 seeded shapes
- Archimedes holds: buoyant force equals displaced weight at every equilibrium found
- the metacentric height equals I/V minus BG to 1e-9, computed two ways
- shapes with positive metacentric height return to upright and those with negative do not, over 40 cases
- the righting moment is zero at zero heel and changes sign exactly at the angle of vanishing stability
