# 015 — hash-collisions-birthday

**Domain:** computer-science
**Suggested interaction pattern:** `drag-parameter`

## Concept

Collisions appear far sooner than the table size suggests, at roughly the
square root of the space.

## Why it benefits from interaction

Moving the table size and item count and watching the collision probability
curve jump early is the birthday paradox made operational.

## What the reader should be able to do afterward

Estimate the collision probability for a given hash width and load.

## Assertions the selftest must make

- 23 people give a shared-birthday probability of 0.5073 to 4 decimals
- collision probability matches 1 - prod(1 - i/N) to 1e-10
- the 50% threshold occurs near 1.1774*sqrt(N) within 2%
- probability is monotonically increasing in item count
- seeded simulation collision rate lands within 3 standard errors of the
  analytic value
