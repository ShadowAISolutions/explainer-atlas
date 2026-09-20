# 139 — rate-distortion-quantisation

**Domain:** information-theory
**Suggested interaction pattern:** `drag-parameter`

## Concept

You cannot describe a real number in finite bits, and the trade between bits spent and error accepted has a hard floor that no clever coder can beat.

## Why it benefits from interaction

Dragging the bit budget and watching the reconstruction error fall by exactly six decibels per bit makes the bound audible and visible at once.

## What the reader should be able to do afterward

Choose a bit depth for an error budget and say why a coder cannot do better.

## Assertions the selftest must make

- the rate distortion function for a Gaussian source is exactly 0.5 log2(var/D) for D below the variance, to 1e-12
- a uniform quantiser with n bits achieves a signal to noise ratio within 0.25 dB of 6.02n + 1.76 on a uniform source
- the Lloyd Max quantiser never has higher distortion than the uniform one, on 200 seeded sources
- the Lloyd Max centroid condition holds at convergence to 1e-9
- each extra bit exactly quarters the mean squared error for a uniform source, to within 1 percent over 8 bit depths
