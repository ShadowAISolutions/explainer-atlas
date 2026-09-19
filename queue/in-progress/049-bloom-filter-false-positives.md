# 049 — bloom-filter-false-positives

**Domain:** computer-science
**Suggested interaction pattern:** `tune-to-match`

## Concept

A Bloom filter trades a known false-positive rate for a fraction of the memory, and the optimal number of hashes is fixed by the bits per element.

## Why it benefits from interaction

Tuning size and hash count against a target error rate shows the minimum sitting exactly where the closed form says.

## What the reader should be able to do afterward

Size a Bloom filter for a stated false-positive budget and say why more hash functions can make it worse.

## Assertions the selftest must make

- the measured false-positive rate over 200000 seeded probes matches (1 - e^(-kn/m))^k within 2 percent, at 12 configurations
- the optimal k equals (m/n) ln 2 rounded, matching an exhaustive scan over k at 20 sizes
- the filter never reports a false negative, over 50000 inserted keys
- the bits-set count matches m(1 - e^(-kn/m)) within 1 percent
- doubling m at optimal k squares the false-positive rate, within 5 percent, at 8 sizes
