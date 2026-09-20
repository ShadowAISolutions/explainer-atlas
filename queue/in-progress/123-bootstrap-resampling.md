# 123 — bootstrap-resampling

**Domain:** statistics
**Suggested interaction pattern:** `race-two-methods`

## Concept

You can get a confidence interval for almost any statistic by resampling your own data, without knowing its sampling distribution at all.

## Why it benefits from interaction

Racing the bootstrap against the textbook formula on the same sample, for a statistic the formula does not cover, shows what resampling is for.

## What the reader should be able to do afterward

Build a bootstrap interval and say when it is better than a formula.

## Assertions the selftest must make

- the bootstrap interval for the mean covers the true mean 95 percent of the time, within 3 standard errors over 20000 seeded samples
- the bootstrap standard error of the mean converges to the textbook sigma over root n, within 2 percent at 2000 resamples
- the bootstrap interval for the median is wider than for the mean on normal data, measured
- the textbook formula for the mean and the bootstrap agree to within 3 percent on normal data
- on a heavy tailed sample the textbook interval undercovers and the bootstrap does not, both measured
