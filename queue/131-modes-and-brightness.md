# 131 — modes-and-brightness

**Domain:** music-theory
**Suggested interaction pattern:** `compare-side-by-side`

## Concept

The seven modes of the major scale are the same seven notes started in seven places, and they line up in a strict order of brightness set by one accidental at a time.

## Why it benefits from interaction

Putting two modes side by side and flipping one note at a time shows the brightness ladder as a single chain.

## What the reader should be able to do afterward

Name a mode from its intervals and order modes by brightness.

## Assertions the selftest must make

- the seven modes are rotations of the same pitch class set, verified by multiset equality
- the brightness order Lydian to Locrian changes exactly one note between neighbours, verified for all six steps
- each mode's interval vector matches the published values for the diatonic set
- the diatonic set is the unique seven note set with all intervals represented a distinct number of times, verified by exhaustive search over all 792 seven note sets
- the circle of fifths ordering of the modes matches the brightness ordering exactly
