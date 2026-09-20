# 122 — discounting-and-npv

**Domain:** economics
**Suggested interaction pattern:** `time-scrubber`

## Concept

A pound in thirty years is worth a fraction of a pound now, and which project wins depends entirely on a discount rate nobody can measure.

## Why it benefits from interaction

Scrubbing the discount rate and watching two projects trade places shows why the rate is the whole argument.

## What the reader should be able to do afterward

Compute a net present value and explain why the internal rate of return can mislead.

## Assertions the selftest must make

- net present value matches the closed form for a level annuity to 1e-10 at 100 settings
- the internal rate of return found by bisection makes the net present value zero to 1e-10
- a cash flow with two sign changes has two internal rates of return, both found and exhibited
- the crossover discount rate between two projects is located to 1e-10 and the ranking flips across it
- the present value of a perpetuity equals the payment over the rate, to 1e-12, at 40 rates
