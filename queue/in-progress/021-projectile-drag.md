# 021 — projectile-drag

**Domain:** physics
**Suggested interaction pattern:** `compare-side-by-side`

## Concept

Air resistance breaks the 45-degree rule and makes the trajectory asymmetric.

## Why it benefits from interaction

Running the vacuum parabola and the drag trajectory side by side from the same
launch makes the departure visible rather than asserted.

## What the reader should be able to do afterward

Find the optimal launch angle under drag and explain why it is below 45
degrees.

## Assertions the selftest must make

- vacuum range equals v^2*sin(2*theta)/g to 1e-9
- vacuum optimum is exactly 45 degrees
- vacuum flight is symmetric: ascent time equals descent time to 1e-9
- with quadratic drag the optimal angle is strictly below 45 degrees
- energy in the vacuum case is conserved to 1e-8 over the integration
