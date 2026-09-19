# 064 — beat-frequency-tuning

**Domain:** music-theory
**Suggested interaction pattern:** `tune-to-match`

## Concept

Two close tones produce a beat at exactly their frequency difference, which is how instruments are tuned by ear.

## Why it benefits from interaction

Tuning a second string until the beats slow to a stop is the actual technique, and watching the envelope stretch as the difference shrinks explains why it works.

## What the reader should be able to do afterward

Tune two tones to unison by beat counting and compute a frequency difference from a beat rate.

## Assertions the selftest must make

- the beat rate equals |f1 - f2| exactly, measured from zero crossings of the summed envelope, at 60 frequency pairs
- the sum of two sinusoids equals the product form 2 cos(pi df t) cos(2 pi f_avg t) to 1e-13 at 2000 sampled times
- at exact unison the envelope is constant: its variance is below 1e-24
- beats per second double when the difference doubles, exactly, at 20 pairs
- the envelope period is 1/|df| and the amplitude period is 2/|df|, both to 1e-12
