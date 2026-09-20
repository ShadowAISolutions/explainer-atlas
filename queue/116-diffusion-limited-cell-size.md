# 116 — diffusion-limited-cell-size

**Domain:** biology
**Suggested interaction pattern:** `drag-parameter`

## Concept

A cell cannot grow past a certain size on diffusion alone, because volume grows as the cube of radius and surface as the square.

## Why it benefits from interaction

Dragging the radius and watching the core go anoxic at a sharp threshold makes the square cube law a hard limit rather than a slogan.

## What the reader should be able to do afterward

Predict the maximum radius for a given metabolic rate and explain why large organisms need plumbing.

## Assertions the selftest must make

- the steady state concentration profile satisfies the diffusion equation to 1e-9 by finite differences
- the critical radius matches sqrt(6 D c0 / q) to 1e-12 at 40 parameter settings
- the surface to volume ratio is exactly 3/r for a sphere, at 20 radii
- doubling the metabolic rate divides the critical radius by exactly sqrt(2), to 1e-12
- the total consumption equals the total flux through the surface to 1e-8, a conservation check
