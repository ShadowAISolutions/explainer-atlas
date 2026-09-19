# 027 — hardy-weinberg

**Domain:** biology
**Suggested interaction pattern:** `drag-parameter`

## Concept

Allele frequencies stay put across generations unless something acts on them.

## Why it benefits from interaction

Dragging selection and mutation rates and watching equilibrium drift shows
what the null model is a null for.

## What the reader should be able to do afterward

Test a population for Hardy-Weinberg equilibrium and name the assumption that
fails.

## Assertions the selftest must make

- genotype frequencies sum to exactly 1
- p^2 + 2pq + q^2 equals 1 to 1e-14 for 100 sampled p
- allele frequencies are unchanged after one generation with no selection
- with selection coefficient s the frequency change matches the standard
  delta-q formula to 1e-9
- heterozygosity is maximised at p = 0.5, equal to exactly 0.5
