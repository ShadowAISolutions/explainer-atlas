# 077 — entropy-of-english-guessing

**Domain:** information-theory
**Suggested interaction pattern:** `guess-then-reveal`

## Concept

Shannon measured the entropy of English by having people guess the next letter, and the answer is about one bit per character, not the 4.7 an alphabet suggests.

## Why it benefits from interaction

Guessing the next letter of a hidden passage and watching the running bits-per-character fall is Shannon's 1951 experiment, run by the reader.

## What the reader should be able to do afterward

Estimate a source's entropy from prediction performance and explain why redundancy makes English compressible.

## Assertions the selftest must make

- the zero-order entropy of the uniform 27-symbol alphabet equals log2(27), to 1e-12
- the measured letter-frequency entropy of the built-in corpus is between 4.0 and 4.2 bits per character
- the order-1 through order-4 conditional entropies are strictly decreasing, each computed from the corpus counts
- the guessing-based upper and lower bounds bracket the conditional entropy, on 2000 seeded guess sequences
- a Huffman code built on the letter frequencies has expected length within 1 bit of the first-order entropy
