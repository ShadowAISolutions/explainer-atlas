# 115 — cache-replacement-policies

**Domain:** computer-science
**Suggested interaction pattern:** `race-two-methods`

## Concept

Least recently used is not always the best policy: on a cyclic access pattern one line too big for the cache it is the worst possible choice, and random eviction beats it.

## Why it benefits from interaction

Racing two policies over the same access stream and watching LRU lose to a coin flip is the result nobody believes without seeing.

## What the reader should be able to do afterward

Choose a replacement policy for an access pattern and explain why LRU has a pathological case.

## Assertions the selftest must make

- on a cyclic pattern of k+1 lines through a k way set LRU misses 100 percent of the time, exactly
- random eviction on the same pattern misses about k/(k+1) of the time, within 3 standard errors over 200000 accesses
- on a stream with a stable working set smaller than the cache both policies miss only compulsory misses, exactly
- Belady's optimal policy never misses more than either, on 300 seeded streams
- LRU has the stack property and random does not, exhibited by a counterexample
