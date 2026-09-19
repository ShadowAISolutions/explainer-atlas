# 070 — phoneme-vowel-space-formants

**Domain:** linguistics
**Suggested interaction pattern:** `spatial-explore`

## Concept

Vowels are distinguished mainly by two resonant frequencies, and the vowel chart linguists draw is a map of those two numbers.

## Why it benefits from interaction

Moving a point around the formant plane and hearing or seeing which vowel it names makes the chart a coordinate system rather than a diagram.

## What the reader should be able to do afterward

Place a vowel on the formant plane and explain what tongue position corresponds to each axis.

## Assertions the selftest must make

- the synthesised vowel's first two spectral peaks land within 2 percent of the requested formants, at 40 targets
- the nearest-vowel classifier reproduces published reference formant values for 10 cardinal vowels
- the two-tube model's resonances match the closed-form quarter-wavelength frequencies to 1e-9
- formant frequencies scale inversely with vocal tract length, exactly, over 30 lengths
- the classifier's decision boundaries partition the plane with no gaps or overlaps, checked on a 200 by 200 grid
