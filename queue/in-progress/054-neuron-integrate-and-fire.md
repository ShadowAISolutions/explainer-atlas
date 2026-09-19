# 054 — neuron-integrate-and-fire

**Domain:** biology
**Suggested interaction pattern:** `drag-parameter`

## Concept

A neuron integrates input until it crosses threshold, fires, and resets, so its firing rate is a saturating function of input current with a hard cutoff below rheobase.

## Why it benefits from interaction

Dragging the input current across the rheobase and watching the output go from silent to regular firing shows a threshold nonlinearity that no smooth function captures.

## What the reader should be able to do afterward

Compute a firing rate from membrane parameters and explain why weak input produces no output at all.

## Assertions the selftest must make

- the interspike interval matches tau ln((I R - V_reset)/(I R - V_threshold)) to 1e-10, at 60 currents
- no spikes occur for I R below the threshold voltage, exactly, at 200 sampled currents
- the subthreshold membrane potential matches the closed-form exponential charging curve to 1e-11
- firing rate is monotone increasing in current and bounded by 1/refractory period
- Euler integration at 1e-5 ms reproduces the closed-form interval to 0.1 percent
