# 069 — heat-sink-fin-efficiency

**Domain:** engineering
**Suggested interaction pattern:** `drag-parameter`

## Concept

A longer fin dissipates more heat but with diminishing returns, and past a certain length the extra metal is nearly useless.

## Why it benefits from interaction

Dragging fin length and conductivity and watching efficiency fall while total dissipation saturates shows why heat sinks look the way they do.

## What the reader should be able to do afterward

Choose a fin length for a stated duty and explain why a very long fin is wasteful.

## Assertions the selftest must make

- the fin temperature profile matches the closed-form cosh solution to 1e-10 against a finite-difference solve
- fin efficiency equals tanh(mL)/(mL) to 1e-12 at 100 parameter sets
- efficiency tends to 1 as length tends to zero and to zero as length grows, monotonically
- total heat dissipated saturates: beyond mL = 3 the gain from doubling length is below 5 percent
- energy balance holds: heat conducted in at the base equals heat convected off the surface, to 1e-9
