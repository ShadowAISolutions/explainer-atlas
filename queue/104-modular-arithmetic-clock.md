# 104 — modular-arithmetic-clock

**Domain:** mathematics
**Suggested interaction pattern:** `spatial-explore`

## Concept

Arithmetic on a circle of n positions: adding a fixed step repeatedly visits every position exactly when the step and n are coprime, and otherwise traps you in a smaller ring.

## Why it benefits from interaction

Stepping round a dial and watching the orbit close early or late makes the greatest common divisor visible as the size of the ring.

## What the reader should be able to do afterward

Predict the cycle length of repeated addition modulo n, and explain why a generator exists.

## Assertions the selftest must make

- the orbit of step s modulo n has length exactly n/gcd(s,n), for all n up to 60 and all s
- the number of generators of the additive group modulo n equals Euler's totient of n, for n up to 200
- multiplication modulo a prime p has a primitive root, found and verified for all primes under 200
- Fermat's little theorem holds: a^(p-1) is 1 modulo p for all a and all primes under 100
- the sum of every orbit of a step s is congruent to a closed form, checked for 400 pairs
