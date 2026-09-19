# 048 — blackbody-spectrum-peak

**Domain:** physics
**Suggested interaction pattern:** `compare-side-by-side`

## Concept

Hotter bodies do not merely glow brighter, they glow bluer, and the peak moves as 1/T.

## Why it benefits from interaction

Two spectra side by side with independent temperatures shows Wien's law and the Stefan-Boltzmann fourth power as consequences of one curve.

## What the reader should be able to do afterward

Estimate a star's temperature from its colour and explain why the total output rises so much faster than the peak shifts.

## Assertions the selftest must make

- the Planck curve's peak satisfies Wien's displacement law, lambda_max T = 2.8977719e-3 m K, to 1e-6 relative at 40 temperatures
- numerically integrating the Planck curve reproduces sigma T^4 to 1e-4 relative
- the Rayleigh-Jeans limit matches Planck to 1e-6 relative for hc/(lambda k T) below 0.01
- the Wien limit matches Planck to 1e-6 relative for hc/(lambda k T) above 30
- doubling the temperature exactly halves the peak wavelength and multiplies total output by 16, to 1e-9
