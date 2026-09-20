# 110 — thermal-transient-cooling

**Domain:** physics
**Suggested interaction pattern:** `time-scrubber`

## Concept

A hot object does not cool at a steady rate: it cools fastest at the start, and the time constant depends on its size, its material and the air around it.

## Why it benefits from interaction

Scrubbing time back and forth while changing the object's size shows the exponential and the time constant as one gesture.

## What the reader should be able to do afterward

Predict how long something takes to cool and explain why doubling its size more than doubles the time.

## Assertions the selftest must make

- the temperature follows an exponential to the ambient, with the fitted time constant within 1e-8 of mc/hA
- the half life of the temperature difference is exactly the time constant times ln 2, at 12 settings
- energy leaving the body equals the integral of the flux to 1e-9 over the whole run
- the Biot number below 0.1 justifies the lumped model, and above 1 the page says so rather than pretending
- doubling the radius of a sphere exactly doubles the time constant, to 1e-12
