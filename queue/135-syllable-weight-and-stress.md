# 135 — syllable-weight-and-stress

**Domain:** linguistics
**Suggested interaction pattern:** `build-from-parts`

## Concept

Many languages place stress by counting syllable weight from the end of the word, and the rule is a small automaton rather than a list.

## Why it benefits from interaction

Building words syllable by syllable and watching the stress jump when a heavy syllable appears makes the rule visible.

## What the reader should be able to do afterward

Apply a weight sensitive stress rule to a novel word.

## Assertions the selftest must make

- the Latin stress rule places stress correctly on all 120 built in test words
- the rule never places stress before the antepenult, checked exhaustively over all weight patterns up to 8 syllables
- the number of distinct stress outcomes for n syllables matches a closed form, for n up to 12
- a quantity insensitive rule and a weight sensitive rule differ on exactly the words with a light penult, counted
- the automaton accepts and rejects the same words as a brute force implementation on 5000 seeded patterns
