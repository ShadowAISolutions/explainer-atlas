# 061 — multiple-comparisons-p-hacking

**Domain:** statistics
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

Testing twenty independent hypotheses at p < 0.05 on pure noise produces a significant result about two-thirds of the time.

## Why it benefits from interaction

Adding one more outcome variable at a time and watching the family-wise error rate climb makes the correction feel necessary rather than pedantic.

## What the reader should be able to do afterward

Compute a family-wise error rate and apply a Bonferroni or Benjamini-Hochberg correction correctly.

## Assertions the selftest must make

- the family-wise error rate for k independent tests matches 1 - 0.95^k within 1 percent over 200000 seeded families
- at k = 20 the simulated rate is between 0.62 and 0.66
- Bonferroni holds the family-wise rate at or below 0.05 for every k up to 50
- the p-values under the null are uniform on (0,1): a Kolmogorov-Smirnov statistic below its 1 percent critical value
- Benjamini-Hochberg controls the false discovery rate below 0.05 while rejecting strictly more often than Bonferroni
