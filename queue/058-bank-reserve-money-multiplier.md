# 058 — bank-reserve-money-multiplier

**Domain:** economics
**Suggested interaction pattern:** `build-from-parts`

## Concept

Lending a deposit onward creates new deposits, and the total is bounded by the reserve ratio rather than by the number of rounds.

## Why it benefits from interaction

Adding one round of lending at a time and watching the running total approach its limit turns a geometric series into a bank ledger.

## What the reader should be able to do afterward

Compute the deposit expansion from a reserve ratio and say what leakages make the textbook multiplier an upper bound.

## Assertions the selftest must make

- the sum after n rounds equals D(1-(1-r)^(n+1))/r to 1e-12, for 100 seeded ratios
- the limit equals D/r exactly, matched by the running total to 1e-9 by round 300
- reserves held plus loans outstanding equals total deposits at every round, exactly
- adding a cash-drain leakage strictly lowers the limit, at 30 seeded leakage rates
- with r = 1 no expansion occurs: the total stays exactly D
