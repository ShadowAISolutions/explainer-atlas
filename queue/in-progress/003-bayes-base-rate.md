# 003 — bayes-base-rate

**Domain:** statistics
**Suggested interaction pattern:** `tune-to-match`

## Concept

Posterior probability after a positive test depends far more on the base rate
than on the test's accuracy.

## Why it benefits from interaction

The counterintuitive result is quantitative. A reader who can set sensitivity,
specificity and prevalence independently discovers the dominance of prevalence
themselves.

## What the reader should be able to do afterward

Compute a posterior from a base rate and a test's operating characteristics,
and explain why a 99% accurate test can still be wrong most of the time.

## Assertions the selftest must make

- posterior matches Bayes' theorem closed form to 1e-12 across the parameter
  grid
- the classic 1% prevalence / 99% sensitivity / 95% specificity case gives
  0.1667 to 4 decimals
- posterior equals prevalence exactly when sensitivity equals 1 minus
  specificity
- posterior is monotonically increasing in prevalence
- true positives plus false negatives equals the diseased population exactly
