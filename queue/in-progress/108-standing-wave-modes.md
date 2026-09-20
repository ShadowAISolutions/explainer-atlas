# 108 — standing-wave-modes

**Domain:** physics
**Suggested interaction pattern:** `tune-to-match`

## Concept

A string clamped at both ends only accepts frequencies that fit a whole number of half wavelengths, and everything else dies out.

## Why it benefits from interaction

Sweeping the drive frequency and watching the string ignore you until it suddenly does not is the whole of quantisation in a form you can hear.

## What the reader should be able to do afterward

Predict the mode frequencies of a string and explain why a boundary condition quantises anything.

## Assertions the selftest must make

- the nth mode frequency is exactly n times the fundamental, for n up to 12
- the fundamental matches sqrt(tension/density)/(2L) to 1e-12 at 20 parameter settings
- each mode has exactly n-1 interior nodes, counted numerically
- the modes are orthogonal: the inner product of distinct modes is zero to 1e-12 for all pairs up to 12
- an arbitrary initial shape decomposes into modes whose sum reproduces it to 1e-9
