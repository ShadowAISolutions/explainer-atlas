# 067 — gear-train-ratio

**Domain:** engineering
**Suggested interaction pattern:** `build-from-parts`

## Concept

A gear train multiplies the ratios of its stages, and an idler changes direction without changing the ratio at all.

## Why it benefits from interaction

Adding gears one at a time and watching the output speed and direction update, with the idler visibly doing nothing to the ratio, kills a persistent misconception.

## What the reader should be able to do afterward

Compute the ratio and direction of a multi-stage train and say where an idler matters.

## Assertions the selftest must make

- the overall ratio equals the product of stage ratios exactly, over 200 seeded trains
- inserting an idler leaves the ratio unchanged to 1e-14 and flips the output direction, in every tested train
- output direction equals minus one to the power of the number of meshes, exactly
- torque times angular velocity is conserved through the train, to 1e-12, in the ideal case
- a compound train's ratio matches the product of tooth-count ratios by exact integer arithmetic
