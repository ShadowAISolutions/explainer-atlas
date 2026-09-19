# 007 — compound-interest-doubling

**Domain:** economics
**Suggested interaction pattern:** `time-scrubber`

## Concept

Exponential growth's doubling time depends only on the rate, and the rule of
72 is a first-order approximation to it.

## Why it benefits from interaction

Scrubbing through decades while the rate is adjustable shows the gap between
the rule of thumb and the truth opening up at high rates.

## What the reader should be able to do afterward

Compute a doubling time exactly and say where the rule of 72 breaks down.

## Assertions the selftest must make

- exact doubling time equals ln2/ln(1+r) to 1e-12
- rule of 72 is within 0.5% of exact for r between 4% and 12%
- rule of 72 error exceeds 5% by r = 30%
- continuous compounding limit equals exp(rt) as compounding periods increase
- balance is monotonically increasing in both rate and time
