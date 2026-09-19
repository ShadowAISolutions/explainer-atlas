# 075 — earthquake-magnitude-energy

**Domain:** earth-science
**Suggested interaction pattern:** `guess-then-reveal`

## Concept

One step of magnitude is about 32 times the energy, so a magnitude 8 releases as much as a thousand magnitude 6 events.

## Why it benefits from interaction

Guessing how many smaller quakes equal one larger one before the answer appears corrects an intuition that almost everyone gets wrong.

## What the reader should be able to do afterward

Convert between magnitude and energy and explain what a logarithmic scale hides.

## Assertions the selftest must make

- energy equals 10^(1.5 M + 4.8) joules, to 1e-9 relative, at 60 magnitudes
- one magnitude step multiplies energy by exactly 10^1.5, which is 31.6227766, to 1e-7
- two magnitude steps multiply energy by exactly 1000, to 1e-9
- the Gutenberg-Richter law gives event counts matching 10^(a - bM) to 1e-10 at 40 magnitudes
- with b = 1 the total energy released is dominated by the largest events: the top decile carries above 90 percent
