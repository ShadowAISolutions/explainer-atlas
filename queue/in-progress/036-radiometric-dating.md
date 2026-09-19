# 036 — radiometric-dating

**Domain:** earth-science
**Suggested interaction pattern:** `time-scrubber`

## Concept

Half-life dating works because the parent-daughter ratio is a clock that does
not care about starting amount.

## Why it benefits from interaction

Scrubbing time while the initial quantity is adjustable shows the ratio is
invariant to it.

## What the reader should be able to do afterward

Date a sample from a parent-daughter ratio and state the assumptions the date
rests on.

## Assertions the selftest must make

- remaining fraction equals 2^(-t/halflife) to 1e-12
- the computed age is independent of initial quantity to 1e-10
- carbon-14 at 5730 years gives exactly half remaining
- parent plus daughter equals the initial amount at every time to 1e-12
- the isochron slope recovers the model age within 0.5%
