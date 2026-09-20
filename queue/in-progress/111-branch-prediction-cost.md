# 111 — branch-prediction-cost

**Domain:** computer-science
**Suggested interaction pattern:** `live-code`

## Concept

A mispredicted branch throws away the work already in the pipeline, so a loop over sorted data can run several times faster than the same loop over shuffled data.

## Why it benefits from interaction

Writing the branch condition yourself and watching the predictor's accuracy and the simulated cycle count move is the experiment everyone reads about and nobody runs.

## What the reader should be able to do afterward

Predict which branches are cheap and explain why sorting the input can speed up a loop that does not sort anything.

## Assertions the selftest must make

- a two bit saturating predictor on an alternating pattern achieves exactly 0 percent accuracy after warm up
- on a pattern with period 2 the same predictor achieves 100 percent after at most 4 warm up steps
- total cycles equal the base count plus the misprediction penalty times the miss count, exactly
- the predictor's accuracy on a seeded random condition converges to the larger of p and 1-p, within 3 standard errors over 200000 branches
- a one bit predictor is never more accurate than a two bit one on any of 300 seeded patterns
