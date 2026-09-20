# 129 — comma-pump-drift

**Domain:** music-theory
**Suggested interaction pattern:** `step-through`

## Concept

Sing a common four chord progression in pure intervals and you come back a comma flat every time round, which is why fixed pitch instruments must temper something.

## Why it benefits from interaction

Stepping round the progression and watching the pitch slide down shows the problem equal temperament was invented to solve.

## What the reader should be able to do afterward

Explain why just intonation cannot be consistent on a fixed keyboard.

## Assertions the selftest must make

- the syntonic comma is exactly 81/80, and its size in cents matches 21.506 to 0.001
- the I vi ii V progression in pure intervals returns a pitch exactly one syntonic comma flat, to 1e-12
- twelve pure fifths exceed seven octaves by exactly the Pythagorean comma, 531441/524288, to 1e-12
- equal temperament distributes that comma evenly: each fifth is flat by exactly 1/12 of it, to 0.001 cents
- the drift after n times round the progression is exactly n commas, for n up to 20
