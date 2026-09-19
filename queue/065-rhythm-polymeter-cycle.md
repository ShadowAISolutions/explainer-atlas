# 065 — rhythm-polymeter-cycle

**Domain:** music-theory
**Suggested interaction pattern:** `time-scrubber`

## Concept

Two rhythms of different lengths played together realign only after their least common multiple, which is why a 3-against-4 pattern takes twelve beats to repeat.

## Why it benefits from interaction

Scrubbing through the combined cycle and watching the downbeats drift apart and snap back makes the least common multiple audible rather than arithmetic.

## What the reader should be able to do afterward

Compute the repeat length of a polymeter and say which pairs of cycle lengths produce long patterns.

## Assertions the selftest must make

- the combined pattern's period equals lcm(a,b) exactly for all pairs up to 24, by direct comparison of the generated sequences
- coprime pairs produce a period equal to their product, checked for all coprime pairs up to 24
- the number of coincident onsets in one full cycle equals gcd(a,b), exactly, for all pairs up to 24
- the generated pattern is identical after one full period and differs at every earlier offset
- Euclidean rhythms with k onsets in n steps distribute onsets as evenly as possible: the maximum gap minus the minimum gap is at most 1, for all n up to 32
