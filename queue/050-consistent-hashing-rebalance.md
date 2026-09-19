# 050 — consistent-hashing-rebalance

**Domain:** computer-science
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

Adding a server to a modulo-hashed cluster moves almost every key; adding one to a consistent-hashing ring moves only its share.

## Why it benefits from interaction

Removing a node and watching the two schemes' key movement side by side is the entire argument for the technique in one gesture.

## What the reader should be able to do afterward

Explain why consistent hashing is used for caches and what virtual nodes are for.

## Assertions the selftest must make

- modulo hashing moves at least 1 - 1/n of keys when growing from n-1 to n servers, over 100000 seeded keys at 8 sizes
- consistent hashing moves within 20 percent of 1/n of keys under the same change
- every key maps to exactly one node in both schemes, with no key unassigned
- with 200 virtual nodes per server the load imbalance stays below 10 percent at 8 cluster sizes
- removing then re-adding the same node restores the exact original assignment for every key
