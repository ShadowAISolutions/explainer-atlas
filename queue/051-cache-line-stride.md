# 051 — cache-line-stride

**Domain:** computer-science
**Suggested interaction pattern:** `spatial-explore`

## Concept

Walking an array with a stride larger than a cache line wastes most of every line fetched, and the cost is a step function, not a smooth curve.

## Why it benefits from interaction

Sweeping the stride across a simulated cache and watching the miss pattern paint itself makes the line size visible as a sharp knee.

## What the reader should be able to do afterward

Predict the memory cost of a traversal pattern and explain why row-major and column-major loops differ so much.

## Assertions the selftest must make

- with stride 1 the simulated miss rate equals 1 / (line size in elements) to 1e-12
- with stride at or above the line size every access misses, exactly, at 6 line sizes
- the total lines touched matches the closed form ceil(n * stride / line) for 200 stride and length pairs
- a direct-mapped cache with capacity c and stride c thrashes: 100 percent misses, exactly
- row-major and column-major traversal of the same matrix touch identical element sets, verified by multiset equality
