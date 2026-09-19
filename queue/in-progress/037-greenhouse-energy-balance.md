# 037 — greenhouse-energy-balance

**Domain:** earth-science
**Suggested interaction pattern:** `drag-parameter`

## Concept

Planetary temperature follows from a radiation balance, and one emissivity
parameter captures most of the greenhouse effect.

## Why it benefits from interaction

Dragging albedo and emissivity and watching equilibrium temperature move gives
the reader a working zero-dimensional climate model.

## What the reader should be able to do afterward

Compute an equilibrium temperature and say what the single-layer model leaves
out.

## Assertions the selftest must make

- Earth's no-atmosphere equilibrium temperature is 255 K within 1 K for albedo
  0.3
- Stefan-Boltzmann flux equals sigma*T^4 to 1e-9
- the single-layer grey model gives a surface temperature 2^(1/4) times the
  skin temperature
- absorbed solar equals emitted longwave at equilibrium to 1e-9
- temperature is monotonically decreasing in albedo
