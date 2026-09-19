# 001 — central-limit-theorem

**Domain:** statistics
**Suggested interaction pattern:** `draw-input`

## Concept

The sampling distribution of a mean approaches a normal distribution
regardless of the shape of the population it is drawn from.

## Why it benefits from interaction

The claim is about a limit, and a limit is a process. Letting the reader draw
an arbitrary population shape and then watch the sampling distribution of the
mean converge turns an assertion into something they caused.

## What the reader should be able to do afterward

Predict the spread of a sample mean from the population's variance and the
sample size, and say when the approximation is still poor.

## Assertions the selftest must make

- variance of the sampling distribution equals population variance / n, to 1%,
  for n = 1, 4, 16, 64
- mean of the sampling distribution equals the population mean to 1e-3
- for a Bernoulli(0.5) population the exact sampling distribution of the sum
  matches binomial coefficients / 2^n
- skewness of the sampling distribution falls as 1/sqrt(n) for an exponential
  population
- Kolmogorov-Smirnov distance to the normal CDF decreases monotonically over n
  = 1, 2, 4, 8, 16, 32
