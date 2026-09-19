# 028 — predator-prey-cycles

**Domain:** biology
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

Lotka-Volterra populations cycle forever, and the cycle's shape encodes a
conserved quantity.

## Why it benefits from interaction

Perturbing the populations and watching the phase-space orbit shift to a
different closed loop reveals the conserved quantity directly.

## What the reader should be able to do afterward

Read a phase portrait and predict the effect of removing predators.

## Assertions the selftest must make

- the coexistence equilibrium is (gamma/delta, alpha/beta) to 1e-12
- the conserved quantity V is constant along a trajectory to 1e-6 under RK4
- phase-space orbits are closed: the state returns within 1e-4 after one
  period
- both populations remain strictly positive for all tested initial conditions
- the small-oscillation period matches 2*pi/sqrt(alpha*gamma) within 2%
