# 127 — activation-energy-arrhenius

**Domain:** chemistry
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

A ten degree rise roughly doubles a reaction rate, and the reason is an exponential in one over temperature rather than in temperature.

## Why it benefits from interaction

Nudging temperature and watching the rate leap, then switching to an Arrhenius plot and watching it become a straight line, is the whole idea.

## What the reader should be able to do afterward

Extract an activation energy from rate data and predict a rate at a new temperature.

## Assertions the selftest must make

- the fitted activation energy recovers the generating value to 1e-8 from noiseless synthetic data at 6 temperatures
- the Arrhenius plot is exactly linear in 1/T with correlation 1 to 1e-12 for noiseless data
- the rate ratio for a ten degree rise near 300 K is between 1.5 and 4 for activation energies between 40 and 80 kJ per mole, computed
- the catalysed and uncatalysed rates differ by exactly exp(dEa/RT), at 40 settings
- the fitted pre exponential factor recovers the generating value to 4 significant figures
