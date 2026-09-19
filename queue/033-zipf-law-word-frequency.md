# 033 — zipf-law-word-frequency

**Domain:** linguistics
**Suggested interaction pattern:** `draw-input`

## Concept

Word frequency falls off as roughly 1/rank across every natural language
corpus examined.

## Why it benefits from interaction

Letting the reader type text and watch their own writing land on the same log-
log line is more persuasive than any corpus chart.

## What the reader should be able to do afterward

Fit a Zipf exponent to a text sample and say what deviations at the tails
mean.

## Assertions the selftest must make

- the fitted log-log slope for a bundled reference corpus lies between -0.9
  and -1.2
- rank-frequency products are constant within a factor of 2 over ranks 1 to
  100
- the tokeniser's total token count equals the sum of all frequencies
- Heaps' law vocabulary growth fits V = K*N^beta with beta between 0.4 and 0.6
- an artificially uniform text yields a slope near zero, confirming the fit is
  not forced
