# 102 — convolution-as-blurring

**Domain:** mathematics
**Suggested interaction pattern:** `draw-input`

## Concept

Convolving a signal with a kernel is a weighted sliding average, and the kernel's shape is the entire behaviour: box blurs ring, Gaussians do not, and a derivative kernel finds edges.

## Why it benefits from interaction

Drawing a signal and dragging a kernel across it shows the output appearing under the pen, which no static figure manages.

## What the reader should be able to do afterward

Predict what a kernel will do to a signal from the kernel's shape alone.

## Assertions the selftest must make

- convolution is commutative: f*g equals g*f elementwise to 1e-12 on 200 random pairs
- the area of the output equals the area of the input times the kernel sum, exactly
- a Gaussian convolved with a Gaussian is a Gaussian of variance equal to the sum, to 1e-8
- the box kernel's frequency response has zeros at exactly k/N for integer k, checked by direct evaluation
- the derivative kernel applied to a straight line gives a constant, exactly
