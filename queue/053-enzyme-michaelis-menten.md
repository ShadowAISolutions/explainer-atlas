# 053 — enzyme-michaelis-menten

**Domain:** biology
**Suggested interaction pattern:** `tune-to-match`

## Concept

Enzyme rate saturates, and the two parameters that describe it can be read off a curve or off its double-reciprocal straight line.

## Why it benefits from interaction

Fitting Vmax and Km to noisy assay data, with the Lineweaver-Burk plot beside it, teaches both the modern and the classical method and why the classical one distorts the errors.

## What the reader should be able to do afterward

Extract Vmax and Km from assay data and identify competitive versus non-competitive inhibition from the shape change.

## Assertions the selftest must make

- the rate equals Vmax S/(Km + S) exactly, and equals Vmax/2 at S = Km to 1e-14
- the Lineweaver-Burk transform is exactly linear on noiseless data, R-squared 1 to 1e-12
- competitive inhibition raises apparent Km and leaves Vmax unchanged, to 1e-10, at 5 inhibitor levels
- non-competitive inhibition lowers Vmax and leaves Km unchanged, to 1e-10
- a least-squares fit recovers the generating Vmax and Km within 5 percent from noisy seeded data
