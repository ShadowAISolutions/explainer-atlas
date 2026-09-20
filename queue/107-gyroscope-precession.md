# 107 — gyroscope-precession

**Domain:** physics
**Suggested interaction pattern:** `drag-parameter`

## Concept

A spinning wheel pushed sideways does not fall; it turns at right angles to the push, at a rate inversely proportional to how fast it is spinning.

## Why it benefits from interaction

Pushing a spinning top and watching it answer at ninety degrees is the only way the counterintuitive direction ever lands.

## What the reader should be able to do afterward

Predict the precession rate of a gyroscope and say which way it will turn.

## Assertions the selftest must make

- the precession rate equals torque over angular momentum to 1e-10 at 200 seeded configurations
- doubling the spin rate exactly halves the precession rate, at 8 spin rates
- angular momentum magnitude is conserved to 1e-9 over 10000 integration steps
- energy is conserved to 1e-8 over the same run
- the precession direction is the cross product of the torque and the spin axis, verified by sign at 100 cases
