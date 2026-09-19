# 031 — equal-temperament

**Domain:** music-theory
**Suggested interaction pattern:** `compare-side-by-side`

## Concept

Twelve-tone equal temperament makes every key usable by making every interval
slightly wrong.

## Why it benefits from interaction

Comparing just and equal intervals as beat frequencies turns a tuning argument
into something audible and measurable.

## What the reader should be able to do afterward

Compute the cents error of an equal-tempered interval against its just ratio.

## Assertions the selftest must make

- the equal-tempered semitone ratio is 2^(1/12) = 1.059463 to 6 decimals
- the equal-tempered fifth is 1.955 cents flat of the 3:2 just fifth
- the equal-tempered major third is 13.686 cents sharp of 5:4
- twelve equal fifths exceed seven octaves by the Pythagorean comma, 23.46
  cents
- cents between any two frequencies equals 1200*log2(f2/f1) to 1e-9
