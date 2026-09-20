# 106 — magnetic-dipole-field

**Domain:** physics
**Suggested interaction pattern:** `spatial-explore`

## Concept

The field of a small magnet falls as the inverse cube of distance, not the inverse square, and its shape depends on whether you stand on the axis or beside it.

## Why it benefits from interaction

Dragging a probe around the dipole and reading the field strength and direction makes the axial and equatorial factor of two obvious.

## What the reader should be able to do afterward

Predict the field of a dipole at any point and explain why fridge magnets have such a short reach.

## Assertions the selftest must make

- the axial field is exactly twice the equatorial field at the same distance, to 1e-12, at 10 distances
- the field magnitude falls as r^-3, with the fitted exponent within 1e-6 of -3 over two decades
- the divergence of the field is zero to 1e-9 by finite differences at 200 seeded points
- the flux through a closed surface around the dipole is zero to 1e-8 by numerical integration
- the field on the axis matches the closed form 2 m / r^3 in the chosen units to 1e-12
