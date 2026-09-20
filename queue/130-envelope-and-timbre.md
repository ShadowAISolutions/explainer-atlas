# 130 — envelope-and-timbre

**Domain:** music-theory
**Suggested interaction pattern:** `build-from-parts`

## Concept

Take the attack off a piano note and most listeners cannot name the instrument: the envelope carries more identity than the harmonic spectrum does.

## Why it benefits from interaction

Building a note from an envelope and a spectrum separately, and swapping them between instruments, makes the point in one gesture.

## What the reader should be able to do afterward

Describe a sound in terms of envelope and spectrum, and say which one carries instrument identity.

## Assertions the selftest must make

- the total energy of a synthesised note equals the integral of the envelope squared times the spectrum power, to 1e-9
- an exponential decay envelope has a half life of exactly ln 2 times its time constant, at 20 settings
- swapping envelopes between two spectra leaves the long term spectrum unchanged to 1e-12
- the spectral centroid is independent of the envelope, to 1e-12, at 100 seeded pairs
- a note with zero attack time has a click whose bandwidth exceeds a computed bound, measured by transform
