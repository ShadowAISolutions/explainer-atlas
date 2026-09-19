# 080 — schelling-segregation-model

**Domain:** game-theory
**Suggested interaction pattern:** `spatial-explore`

## Concept

A mild individual preference for similar neighbours produces near-total segregation, so the pattern does not imply the preference that seems to explain it.

## Why it benefits from interaction

Setting a tolerance threshold and watching a mixed grid separate anyway is the clearest demonstration in social science that aggregate patterns do not reveal individual motives.

## What the reader should be able to do afterward

Explain why an emergent pattern need not reflect individual intent, and find the threshold where segregation takes off.

## Assertions the selftest must make

- at a tolerance threshold of 0.3 the final segregation index exceeds 0.7, over 30 seeded grids
- at a threshold of 0 no agent ever moves and the grid is unchanged, exactly
- the number of unhappy agents is non-increasing across the run, over 30 seeded grids
- agent counts by type are conserved exactly at every step
- the same seed reproduces the same final grid cell for cell, and 30 seeds give more than 25 distinct final segregation indices
