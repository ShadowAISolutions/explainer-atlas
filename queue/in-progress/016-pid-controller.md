# 016 — pid-controller

**Domain:** engineering
**Suggested interaction pattern:** `tune-to-match`

## Concept

Proportional, integral and derivative terms each fix one failure and introduce
another.

## Why it benefits from interaction

Tuning a controller is famously a feel. Giving the reader the three gains and
a step response is the only honest way to teach it.

## What the reader should be able to do afterward

Diagnose steady-state error, overshoot and oscillation from a step response
and name the term that fixes each.

## Assertions the selftest must make

- pure proportional control leaves a steady-state error of 1/(1+Kp) for a
  unit-gain plant
- adding integral action drives steady-state error below 1e-6
- the analytic second-order overshoot formula exp(-pi*zeta/sqrt(1-zeta^2))
  matches the simulated peak to 1%
- the closed-loop system is unstable exactly when the Routh-Hurwitz condition
  fails
- simulation output is finite for every gain combination in the control ranges
