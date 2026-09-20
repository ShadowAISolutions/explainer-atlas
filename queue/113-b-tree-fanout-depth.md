# 113 — b-tree-fanout-depth

**Domain:** computer-science
**Suggested interaction pattern:** `build-from-parts`

## Concept

A B tree is shallow because each node holds hundreds of keys, and the depth is a logarithm in a base you choose by choosing the node size.

## Why it benefits from interaction

Building a tree key by key and watching it split and grow makes the relationship between page size, fanout and disk reads concrete.

## What the reader should be able to do afterward

Predict the number of disk reads a lookup costs and choose a node size for a given key size.

## Assertions the selftest must make

- the tree height is exactly ceil(log_f(n)) for f between 2 and 256 and n up to a million, against brute force
- every node except the root holds at least half the maximum keys, checked after 10000 seeded inserts
- all leaves are at the same depth after every insert, checked at every step
- an in order traversal of the tree returns the keys sorted, for 200 seeded key sets
- doubling the fanout reduces the height by the ratio of the logarithms, to within one level, at 40 settings
