# 032 — harmonic-series-timbre

**Domain:** music-theory
**Suggested interaction pattern:** `build-from-parts`

## Concept

Timbre is the recipe of harmonic amplitudes over the same fundamental.

## Why it benefits from interaction

Building a waveform harmonic by harmonic and watching a square, saw and
triangle emerge from the amplitude pattern makes timbre concrete.

## What the reader should be able to do afterward

Identify a waveform from its harmonic amplitudes.

## Assertions the selftest must make

- square wave odd-harmonic amplitudes fall as 1/n
- sawtooth amplitudes fall as 1/n over all harmonics
- triangle odd-harmonic amplitudes fall as 1/n^2 with alternating sign
- the fundamental frequency of the summed waveform matches the requested pitch
  to 0.1 Hz by zero-crossing count
- RMS amplitude of the synthesised waveform matches Parseval to 1%
