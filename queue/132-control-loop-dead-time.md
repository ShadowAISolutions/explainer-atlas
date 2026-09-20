# 132 — control-loop-dead-time

**Domain:** engineering
**Suggested interaction pattern:** `tune-to-match`

## Concept

A delay between acting and seeing the result is the one thing a controller cannot tune its way out of: past a certain gain the loop oscillates no matter what you do.

## Why it benefits from interaction

Tuning gains against a slider that adds dead time, and watching a stable loop become an oscillator, shows the limit that PID tuning rules hide.

## What the reader should be able to do afterward

Predict the maximum stable gain for a loop with a known delay.

## Assertions the selftest must make

- the critical gain for a first order plant with dead time matches the analytic crossover to 1e-6 at 40 settings
- the simulated loop is stable below that gain and oscillates above it, at 100 seeded settings
- the phase margin computed from the frequency response matches the simulated damping to within 5 percent
- doubling the dead time at least halves the critical gain, checked at 20 settings
- with zero dead time the first order loop is stable at every finite gain, verified to gain 1e6
