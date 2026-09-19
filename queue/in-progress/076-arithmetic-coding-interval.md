# 076 — arithmetic-coding-interval

**Domain:** information-theory
**Suggested interaction pattern:** `step-through`

## Concept

Arithmetic coding narrows a single interval once per symbol and can spend a fractional number of bits per symbol, which Huffman cannot.

## Why it benefits from interaction

Stepping through the interval narrowing and watching the binary expansion emerge shows where the fractional bits come from.

## What the reader should be able to do afterward

Encode a short string by hand with arithmetic coding and explain when it beats Huffman.

## Assertions the selftest must make

- the final interval width equals the product of the symbol probabilities, to 1e-12, on 200 seeded strings
- the code length is within 2 bits of the Shannon entropy of the string, on every tested string
- decoding returns the original string exactly, for 500 seeded strings over 5 alphabets
- for a skewed binary source the code beats Huffman's length on at least 90 percent of tested strings
- the encoded interval is contained in the previous interval at every step, with no gaps or overlaps between symbol subintervals
