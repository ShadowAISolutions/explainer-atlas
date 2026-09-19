# 035 — plate-tectonics-seafloor-age

**Domain:** earth-science
**Suggested interaction pattern:** `spatial-explore`

## Concept

Seafloor age increases with distance from a spreading ridge at a rate that
gives the spreading velocity.

## Why it benefits from interaction

Clicking points on a synthetic seafloor and reading age against distance turns
magnetic stripes into a measurement.

## What the reader should be able to do afterward

Estimate a spreading rate from age-distance data.

## Assertions the selftest must make

- age equals distance divided by half-spreading-rate to 1e-9
- the fitted spreading rate recovers the model's input rate within 1%
- the symmetric ridge produces mirrored ages either side to 1e-9
- ocean depth follows the sqrt(age) subsidence law with fitted exponent 0.5
  +/- 0.05
- no negative ages are produced anywhere on the grid
