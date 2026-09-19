# 068 — truss-force-distribution

**Domain:** engineering
**Suggested interaction pattern:** `draw-input`

## Concept

Every member of a statically determinate truss carries a force fixed entirely by geometry and the applied load, and some members carry nothing at all.

## Why it benefits from interaction

Drawing a truss and loading it, then watching zero-force members grey out, teaches the method of joints faster than any worked example.

## What the reader should be able to do afterward

Solve a simple truss by the method of joints and identify zero-force members by inspection.

## Assertions the selftest must make

- every joint is in equilibrium: the summed force vector has magnitude below 1e-9, for 40 seeded trusses
- global equilibrium holds: summed external forces and moments are below 1e-9
- the solved member forces match an independent matrix solve of the equilibrium system to 1e-9
- members meeting the classical zero-force conditions carry force below 1e-12
- doubling the load exactly doubles every member force, to 1e-12
