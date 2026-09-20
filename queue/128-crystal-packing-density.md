# 128 — crystal-packing-density

**Domain:** chemistry
**Suggested interaction pattern:** `build-from-parts`

## Concept

Stacking identical spheres, the best you can do is fill about 74 percent of space, and simple cubic packing wastes nearly half.

## Why it benefits from interaction

Building each lattice sphere by sphere and watching the packing fraction settle makes the geometry countable rather than quoted.

## What the reader should be able to do afterward

Compute a packing fraction from a unit cell and explain why metals prefer close packing.

## Assertions the selftest must make

- the packing fraction of simple cubic is exactly pi/6 to 1e-12
- body centred cubic is exactly sqrt(3) pi / 8 to 1e-12
- face centred cubic and hexagonal close packing are both exactly pi/(3 sqrt 2), equal to 1e-12
- the coordination number is 6, 8 and 12 respectively, counted from the built lattice
- the nearest neighbour distance matches the closed form for each lattice to 1e-12
