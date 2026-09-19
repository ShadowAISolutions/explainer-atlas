# 012 — floating-point-precision

**Domain:** computer-science
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

Doubles space real numbers unevenly, so the gap between representable values
grows with magnitude.

## Why it benefits from interaction

Letting the reader move a magnitude slider and see the ULP jump by powers of
two explains a class of bugs no amount of prose does.

## What the reader should be able to do afterward

Predict where 0.1 + 0.2 != 0.3 comes from and choose a tolerance for a
comparison sensibly.

## Assertions the selftest must make

- 0.1 + 0.2 - 0.3 equals exactly 5.551115123125783e-17
- ULP at 1.0 is 2^-52 and at 2^52 is exactly 1
- Number.MAX_SAFE_INTEGER + 2 equals MAX_SAFE_INTEGER + 1 in double arithmetic
- naive summation of 1e8 copies of 1e-8 differs from Kahan summation by more
  than 1e-9
- every decoded (sign, exponent, mantissa) triple reconstructs its double
  exactly
