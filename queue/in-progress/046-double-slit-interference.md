# 046 — double-slit-interference

**Domain:** physics
**Suggested interaction pattern:** `tune-to-match`

## Concept

Fringe spacing depends on wavelength, slit separation and screen distance, and the envelope comes from the single-slit width.

## Why it benefits from interaction

Tuning three parameters to reproduce a target pattern forces the reader to separate the fringe term from the envelope term.

## What the reader should be able to do afterward

Extract a wavelength from a measured fringe pattern and explain why widening a slit narrows the envelope.

## Assertions the selftest must make

- fringe maxima fall at d sin(theta) = m lambda to 1e-12, for 5 orders at 30 parameter sets
- the single-slit envelope has zeros at a sin(theta) = m lambda, checked to 1e-12
- total intensity integrated across the screen is conserved as slit width changes, to 1e-6
- the small-angle fringe spacing equals lambda L / d within 0.5 percent for L/d above 500
- the pattern is symmetric about the centre to 1e-14 at 200 sampled positions
