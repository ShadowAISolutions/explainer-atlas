# 034 — levenshtein-distance

**Domain:** linguistics
**Suggested interaction pattern:** `step-through`

## Concept

Edit distance is computed by filling a table where every cell is a small
decision.

## Why it benefits from interaction

Stepping through the dynamic programming table cell by cell shows why the
algorithm is quadratic and where the alignment comes from.

## What the reader should be able to do afterward

Compute an edit distance by hand and recover the alignment from the table.

## Assertions the selftest must make

- distance between 'kitten' and 'sitting' is exactly 3
- distance to the empty string equals the string's length
- the metric is symmetric for 200 seeded string pairs
- the triangle inequality holds for 200 seeded triples
- the backtracked alignment's edit count equals the table's final cell
