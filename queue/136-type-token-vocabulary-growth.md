# 136 — type-token-vocabulary-growth

**Domain:** linguistics
**Suggested interaction pattern:** `drag-parameter`

## Concept

Vocabulary grows as a power of text length, not linearly, so the type token ratio falls as you read and comparing it across texts of different lengths is meaningless.

## Why it benefits from interaction

Dragging the sample length and watching the ratio slide shows why the most cited lexical diversity measure is the wrong one.

## What the reader should be able to do afterward

Measure lexical diversity in a way that does not depend on text length.

## Assertions the selftest must make

- Heaps law holds on the built in corpus with a fitted exponent between 0.4 and 0.8 and R squared above 0.98
- the type token ratio falls monotonically with sample size on 200 seeded subsamples
- the standardised measure is flat in sample size, with slope within 3 standard errors of zero
- Heaps and Zipf exponents satisfy the analytic relation to within 10 percent on the same corpus
- vocabulary size for a sample of n tokens matches the closed form to within 3 percent at 20 sizes
