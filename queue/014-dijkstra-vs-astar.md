# 014 — dijkstra-vs-astar

**Domain:** computer-science
**Suggested interaction pattern:** `step-through`

## Concept

A* explores strictly fewer nodes than Dijkstra when given an admissible
heuristic, and both return the same shortest path.

## Why it benefits from interaction

Stepping the frontier forward node by node makes the heuristic's pull visible
as a shape on the grid.

## What the reader should be able to do afterward

Explain what admissibility buys and what an inadmissible heuristic costs.

## Assertions the selftest must make

- both algorithms return paths of identical cost on 50 seeded grids
- A* with the zero heuristic expands exactly the same node count as Dijkstra
- Manhattan distance is admissible on a 4-connected unit-cost grid: h <= true
  cost for every node
- A* node expansions are never more than Dijkstra's with an admissible
  heuristic
- returned path cost equals the sum of its edge weights
