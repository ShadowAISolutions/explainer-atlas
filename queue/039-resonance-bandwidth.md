# 039 — resonance-bandwidth

**Domain:** engineering
**Suggested interaction pattern:** `tune-to-match`

## Concept

A resonant system's sharpness and its energy loss are the same number seen two
ways.

## Why it benefits from interaction

Tuning damping and watching the peak narrow while the ring-down lengthens
connects the frequency and time pictures.

## What the reader should be able to do afterward

Read a Q factor off a response curve and predict the ring-down time.

## Assertions the selftest must make

- Q equals f0 divided by the -3 dB bandwidth within 1%
- Q equals 1/(2*zeta) for the standard second-order system to 1e-9
- the ring-down envelope decays as exp(-zeta*omega0*t) to 1e-6
- the peak response amplitude equals Q at resonance within 1% for Q > 5
- the response is finite at every frequency for all nonzero damping
