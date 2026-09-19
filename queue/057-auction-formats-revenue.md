# 057 — auction-formats-revenue

**Domain:** economics
**Suggested interaction pattern:** `race-two-methods`

## Concept

First-price and second-price auctions raise the same expected revenue under the standard assumptions, even though the bids look nothing alike.

## Why it benefits from interaction

Running both formats on the same drawn valuations and watching two very different bid distributions produce the same average revenue is the revenue equivalence theorem made visible.

## What the reader should be able to do afterward

Explain why a second-price auction makes truthful bidding optimal and when revenue equivalence breaks.

## Assertions the selftest must make

- truthful bidding is a dominant strategy in the second-price auction: no deviation improves payoff in 10000 seeded cases
- the symmetric first-price equilibrium bid equals v(n-1)/n for uniform values, to 1e-12
- expected revenue of both formats matches (n-1)/(n+1) for uniform values within 1 percent over 20000 seeded auctions
- the winner is the highest-value bidder in both formats, in every seeded auction
- adding a reserve price raises seller revenue and lowers efficiency, with both effects measured
