# 024 — reaction-rate-order

**Domain:** chemistry
**Suggested interaction pattern:** `tune-to-match`

## Concept

Reaction order is read off the shape of a concentration curve, not from the
balanced equation.

## Why it benefits from interaction

Fitting a rate law to data by tuning order and rate constant teaches the
method chemists actually use.

## What the reader should be able to do afterward

Identify a reaction order from concentration data and extract the rate
constant.

## Assertions the selftest must make

- first-order half-life equals ln2/k independent of initial concentration
- second-order half-life is inversely proportional to initial concentration
- zero-order concentration falls linearly with slope -k
- the integrated rate law matches numerical integration to 1e-8
- concentration never goes negative for any parameter setting
