# 118 — genetic-drift-small-populations

**Domain:** biology
**Suggested interaction pattern:** `time-scrubber`

## Concept

In a small population an allele can go to fixation with no selection at all, purely by sampling noise, and the expected time to fixation scales with population size.

## Why it benefits from interaction

Scrubbing generations while changing the population size shows drift overwhelming selection below a threshold nobody guesses correctly.

## What the reader should be able to do afterward

Predict whether drift or selection dominates for a given population size and selection coefficient.

## Assertions the selftest must make

- the probability of fixation of a neutral allele equals its starting frequency, within 3 standard errors over 200000 seeded runs
- the expected heterozygosity decays by exactly 1-1/(2N) per generation, measured over 100 generations
- the fixation probability of a beneficial allele matches Kimura's formula to within 3 standard errors
- selection dominates drift when 2Ns exceeds 1, with the crossover located by simulation
- the mean time to fixation of a neutral allele is about 4N generations, measured within 10 percent
