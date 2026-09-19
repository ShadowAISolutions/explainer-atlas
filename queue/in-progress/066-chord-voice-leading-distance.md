# 066 — chord-voice-leading-distance

**Domain:** music-theory
**Suggested interaction pattern:** `build-from-parts`

## Concept

Chords that sound smooth in succession are the ones whose notes move the shortest total distance, and that distance is computable.

## Why it benefits from interaction

Building a progression note by note and watching the total movement fall as voices are reassigned turns an aesthetic judgement into an optimisation.

## What the reader should be able to do afterward

Find the smoothest voicing between two chords and explain what a common tone buys you.

## Assertions the selftest must make

- the minimal total voice-leading distance between two triads matches an exhaustive search over all voice assignments, at 100 seeded pairs
- the distance from a chord to itself is exactly zero
- the distance is symmetric: d(A,B) equals d(B,A) for all tested pairs
- the triangle inequality holds for 500 seeded triples
- chords sharing two common tones have distance at most 2 semitones, in every tested case
