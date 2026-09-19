# 010 — hamming-code

**Domain:** information-theory
**Suggested interaction pattern:** `perturb-and-observe`

## Concept

Adding three parity bits to four data bits lets any single-bit error be
located and corrected.

## Why it benefits from interaction

Flipping a bit and watching the syndrome point straight at it is more
convincing than the parity-check matrix.

## What the reader should be able to do afterward

Correct a corrupted codeword by hand and explain why two-bit errors are
detected but miscorrected.

## Assertions the selftest must make

- all 16 Hamming(7,4) codewords have minimum pairwise distance 3
- every single-bit error yields a syndrome equal to the binary index of the
  flipped bit
- zero syndrome occurs only for valid codewords
- every two-bit error produces a nonzero syndrome
- the extended (8,4) code detects all two-bit errors via overall parity
