# 125 — power-and-sample-size

**Domain:** statistics
**Suggested interaction pattern:** `tune-to-match`

## Concept

A study can be perfectly correct and still almost certain to miss a real effect, and the sample size you need grows as the square of the precision you want.

## Why it benefits from interaction

Tuning sample size to hit eighty percent power and watching the requirement explode for small effects is the calculation most studies skip.

## What the reader should be able to do afterward

Compute the sample size a study needs and say what a null result from an underpowered study means.

## Assertions the selftest must make

- the power of a two sample z test matches the closed form to 1e-9 at 200 settings
- simulated power matches the closed form within 3 standard errors over 40000 seeded studies
- the sample size for 80 percent power scales exactly as the inverse square of the effect size, to 1e-12
- a study with 20 percent power that reports a significant result overstates the effect by a measured factor
- power is exactly the significance level when the true effect is zero, at 8 significance levels
