# 018 — eulers-identity-rotation

**Domain:** mathematics
**Suggested interaction pattern:** `time-scrubber`

## Concept

Multiplying by e^(i*theta) is a rotation, which is why e^(i*pi) = -1.

## Why it benefits from interaction

The identity reads as mysticism until the reader scrubs theta and watches the
point walk the unit circle.

## What the reader should be able to do afterward

Multiply two complex numbers geometrically and predict the result's angle and
modulus.

## Assertions the selftest must make

- |e^(i*theta)| equals 1 to 1e-15 for 100 sampled angles
- e^(i*pi) + 1 has modulus below 1e-15
- the product of two unit complex numbers has argument equal to the sum of
  arguments mod 2pi
- the Taylor series truncated at 20 terms matches cos+isin to 1e-12 for
  |theta| <= pi
- de Moivre: (e^(i*theta))^n equals e^(i*n*theta) to 1e-12
