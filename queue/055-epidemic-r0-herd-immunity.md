# 055 — epidemic-r0-herd-immunity

**Domain:** biology
**Suggested interaction pattern:** `guess-then-reveal`

## Concept

The herd immunity threshold is 1 - 1/R0, and the final size of an epidemic overshoots it.

## Why it benefits from interaction

Guessing the final infected fraction before running the model, then seeing the overshoot, corrects the most common intuition error in epidemiology.

## What the reader should be able to do afterward

Compute a herd immunity threshold from R0 and explain why an unmitigated epidemic infects more people than that threshold.

## Assertions the selftest must make

- the herd immunity threshold equals 1 - 1/R0 exactly at 50 values of R0
- the SIR final size solves 1 - x = exp(-R0 x) to 1e-12, checked against bisection
- the final size strictly exceeds the herd immunity threshold for every R0 above 1, at 50 values
- S + I + R is conserved to 1e-11 across the whole integration
- no epidemic occurs for R0 below 1: the final size tends to zero as the seed shrinks
