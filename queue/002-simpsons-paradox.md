# 002 — simpsons-paradox

**Domain:** statistics
**Suggested interaction pattern:** `compare-side-by-side`

## Concept

An association present in every subgroup can reverse when the subgroups are
pooled.

## Why it benefits from interaction

The reversal is arithmetic, not rhetorical. Letting the reader move group
sizes and see the pooled direction flip while both subgroup directions hold
fixed makes the mechanism unmistakable.

## What the reader should be able to do afterward

Construct a reversal from scratch and state the confounding condition that
permits it.

## Assertions the selftest must make

- pooled rates reproduce the published Berkeley 1973 admissions figures to 0.1
  percentage points
- each subgroup rate ordering is preserved while the pooled ordering reverses
- pooled rate equals the size-weighted average of subgroup rates exactly
- reversal is impossible when group size ratios are equal across arms
- total counts are conserved under every slider position
