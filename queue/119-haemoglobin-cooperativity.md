# 119 — haemoglobin-cooperativity

**Domain:** biology
**Suggested interaction pattern:** `tune-to-match`

## Concept

Haemoglobin's oxygen binding curve is a sigmoid rather than a hyperbola because the four sites help each other, and that sigmoid is what lets blood unload oxygen in tissue.

## Why it benefits from interaction

Tuning the Hill coefficient to match the published curve and watching the unloading fraction change shows what cooperativity buys.

## What the reader should be able to do afterward

Read a binding curve, estimate a Hill coefficient, and explain why myoglobin cannot do haemoglobin's job.

## Assertions the selftest must make

- the Hill equation with n = 1 is exactly the Michaelis Menten hyperbola, to 1e-12
- the fitted Hill coefficient of the built in haemoglobin data is between 2.5 and 3.2
- myoglobin's fitted coefficient is within 0.1 of 1.0 on the built in data
- the fraction unloaded between arterial and venous partial pressures is larger for n = 2.8 than for n = 1, computed exactly
- the P50 recovered by the fit matches the published 26 mmHg to within 2 mmHg
