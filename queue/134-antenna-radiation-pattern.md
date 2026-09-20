# 134 — antenna-radiation-pattern

**Domain:** engineering
**Suggested interaction pattern:** `spatial-explore`

## Concept

An antenna made of two elements has a pattern set entirely by their spacing and phase, and small changes swing the beam right round.

## Why it benefits from interaction

Dragging spacing and phase while the lobe pattern turns is the fastest route to understanding an array.

## What the reader should be able to do afterward

Predict the direction of the main lobe of a two element array from spacing and phase.

## Assertions the selftest must make

- the array factor matches the closed form 2 cos((kd cos t + phi)/2) to 1e-12 at 400 angles
- the main lobe direction matches the analytic solution to 1e-9 at 200 seeded settings
- a half wavelength spacing with opposite phase puts nulls exactly broadside, to 1e-12
- the total radiated power integrates to the analytic value to 1e-8
- the number of nulls in the pattern matches a closed form in the spacing, for 100 spacings
