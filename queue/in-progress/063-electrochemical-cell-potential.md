# 063 — electrochemical-cell-potential

**Domain:** chemistry
**Suggested interaction pattern:** `drag-parameter`

## Concept

Cell voltage depends on concentration through the Nernst equation, and a cell runs down to exactly zero volts at equilibrium.

## Why it benefits from interaction

Dragging the two half-cell concentrations and watching the voltage cross zero exactly when the quotient reaches K makes the link between thermodynamics and electrochemistry concrete.

## What the reader should be able to do afterward

Compute a cell potential from concentrations and explain why a discharged battery is at equilibrium rather than empty.

## Assertions the selftest must make

- the Nernst equation gives the standard potential exactly at unit activities, to 1e-14
- the potential is zero exactly when the reaction quotient equals the equilibrium constant, to 1e-10
- the relation between the standard potential and K, E = (RT/nF) ln K, holds to 1e-9 at 40 seeded cells
- a tenfold concentration change shifts a one-electron cell by 59.16 mV at 298.15 K, to 0.01 mV
- Gibbs free energy equals minus nFE at every tested state, to 1e-9 relative
