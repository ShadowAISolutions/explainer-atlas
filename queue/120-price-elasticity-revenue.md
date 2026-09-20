# 120 — price-elasticity-revenue

**Domain:** economics
**Suggested interaction pattern:** `drag-parameter`

## Concept

Raising a price raises revenue only while demand is inelastic, and the revenue maximum sits exactly where elasticity equals one.

## Why it benefits from interaction

Dragging the price along a demand curve and watching revenue rise, peak and fall puts the elasticity condition where it belongs.

## What the reader should be able to do afterward

Predict whether a price rise will raise revenue, from the elasticity alone.

## Assertions the selftest must make

- revenue is maximised exactly where the point elasticity equals -1, to 1e-9, for 200 seeded demand curves
- for a constant elasticity curve revenue is monotone in price, with the direction set by the exponent, checked at 40 exponents
- the elasticity of a linear demand curve is -1 exactly at the midpoint of the price intercept, to 1e-12
- total surplus falls when price moves away from marginal cost, computed by integration at 100 settings
- the arc elasticity converges to the point elasticity as the interval shrinks, with the gap falling as the square of the interval
