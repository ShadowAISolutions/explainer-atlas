# 105 — simplex-vertex-walk

**Domain:** mathematics
**Suggested interaction pattern:** `step-through`

## Concept

Linear programming's answer is always at a corner, and the simplex method walks corner to corner uphill until no neighbour is better.

## Why it benefits from interaction

Watching the walk cross the polygon, one edge at a time, with the objective direction as a draggable arrow, shows why corners and only corners matter.

## What the reader should be able to do afterward

Explain why an optimum sits at a vertex and predict which vertex a given objective picks.

## Assertions the selftest must make

- the optimum found equals the best of all enumerated vertices, for 300 random 2D problems
- the objective is non decreasing at every pivot step, checked on every step of every problem
- the number of vertices of a feasible region with m constraints is at most m choose 2 in the plane, verified by enumeration
- a degenerate problem with a tied objective returns a vertex, and the tie is exhibited
- an unbounded problem is detected rather than returning a finite answer, at 20 seeded cases
