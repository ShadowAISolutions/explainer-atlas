# 072 — sound-change-chain-shift

**Domain:** linguistics
**Suggested interaction pattern:** `step-through`

## Concept

Sound changes happen in chains: one vowel moves, the gap pulls a neighbour in, and the whole system rearranges without any two vowels merging.

## Why it benefits from interaction

Stepping through the Great Vowel Shift one change at a time and watching the system stay distinct at every step shows why chains, not isolated changes, are the rule.

## What the reader should be able to do afterward

Trace a chain shift through its stages and explain why languages avoid mergers that destroy contrasts.

## Assertions the selftest must make

- no two vowels occupy the same position at any step of the shift, with minimum pairwise distance above a fixed threshold
- the number of distinct vowel phonemes is conserved at every step of a pull chain
- applying the full Middle English to Modern English shift to 12 reference words gives their attested modern vowels
- a push chain and a pull chain over the same endpoints produce different intermediate stages, verified position by position
- reversing the shift step by step returns every vowel to its starting position, to 1e-12
