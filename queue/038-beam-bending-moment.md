# 038 — beam-bending-moment

**Domain:** engineering
**Suggested interaction pattern:** `drag-parameter`

## Concept

A beam's deflection goes as the cube of its length and inversely as the cube
of its depth.

## Why it benefits from interaction

Dragging length and depth independently makes the two cubes obvious, and
explains why joists are tall and thin.

## What the reader should be able to do afterward

Size a beam for a deflection limit and explain why depth beats width.

## Assertions the selftest must make

- simply supported centre deflection equals PL^3/(48EI) to 1e-10
- second moment of area for a rectangle equals bh^3/12 exactly
- doubling depth reduces deflection by a factor of 8 to 1e-10
- doubling width reduces deflection by a factor of 2 to 1e-10
- maximum bending moment equals PL/4 at midspan
