# 059 — confidence-interval-coverage

**Domain:** statistics
**Suggested interaction pattern:** `draw-input`

## Concept

A 95 percent interval means 95 percent of intervals contain the parameter, not that the parameter is 95 percent likely to be in yours.

## Why it benefits from interaction

Drawing a population, then watching a hundred intervals appear and roughly five miss, replaces the wrong sentence with the right picture.

## What the reader should be able to do afterward

State what a confidence interval covers, and explain why coverage degrades for skewed populations at small n.

## Assertions the selftest must make

- the z interval for a known-variance normal covers at 95.0 percent within 1 percent over 200000 seeded samples
- the t interval covers at its nominal rate for normal populations at n = 5, 10, 30, within 1 percent
- interval width scales exactly as 1/sqrt(n), to 1e-12
- coverage for a strongly skewed population at n = 5 is measurably below nominal, by more than 2 percent
- the sample mean and sample variance match their closed forms to 1e-12 on every drawn sample
