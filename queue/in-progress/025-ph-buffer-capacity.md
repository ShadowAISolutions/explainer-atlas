# 025 — ph-buffer-capacity

**Domain:** chemistry
**Suggested interaction pattern:** `drag-parameter`

## Concept

A buffer resists pH change most strongly when the weak acid and its conjugate
base are equal.

## Why it benefits from interaction

Adding strong base drop by drop and watching the buffer region flatten then
collapse is the titration curve told as a process.

## What the reader should be able to do afterward

Choose a buffer for a target pH and estimate how much base it can absorb.

## Assertions the selftest must make

- Henderson-Hasselbalch reproduces the numerical equilibrium pH to 0.02 units
- buffer capacity peaks exactly at pH = pKa
- the equivalence point of a weak acid titration is above pH 7
- charge balance holds at every titration point to 1e-12
- pH is monotonically increasing in added base
