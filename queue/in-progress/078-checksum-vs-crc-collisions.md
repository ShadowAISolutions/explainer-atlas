# 078 — checksum-vs-crc-collisions

**Domain:** information-theory
**Suggested interaction pattern:** `race-two-methods`

## Concept

A sum-based checksum misses whole classes of error that a CRC of the same width catches every time.

## Why it benefits from interaction

Racing the two against the same corrupted messages and watching one let burst errors through is the case for CRC in one screen.

## What the reader should be able to do afterward

Choose an error-detecting code for a channel and explain what burst length a CRC of given degree guarantees.

## Assertions the selftest must make

- a CRC of degree n detects every burst error of length at most n, exhaustively, for n up to 16
- a CRC detects all single-bit and all double-bit errors for messages up to 1000 bits, exhaustively for single-bit
- a simple additive checksum fails to detect at least one transposition error, exhibited explicitly
- the CRC of a message equals the polynomial remainder computed by long division, verified two ways
- the measured undetected-error rate for random corruption is within 20 percent of 2^-n over 200000 seeded trials
