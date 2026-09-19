# 074 — river-meander-migration

**Domain:** earth-science
**Suggested interaction pattern:** `time-scrubber`

## Concept

A river bend erodes on its outside and deposits on its inside, so meanders grow and migrate downstream until they cut themselves off.

## Why it benefits from interaction

Scrubbing through decades of migration and watching an oxbow lake pinch off is a process no static diagram conveys.

## What the reader should be able to do afterward

Explain why meanders migrate and predict where a cutoff will occur.

## Assertions the selftest must make

- channel length increases monotonically until a cutoff, then drops by the length of the abandoned loop, exactly
- sinuosity equals channel length over valley length at every step, to 1e-12
- erosion and deposition balance: total channel area is conserved to 1 percent across the run
- a cutoff fires exactly when two non-adjacent centreline points come within one channel width
- the simulation is reproducible from its seed, and two different seeds give different cutoff times
