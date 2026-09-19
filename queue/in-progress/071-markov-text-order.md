# 071 — markov-text-order

**Domain:** linguistics
**Suggested interaction pattern:** `live-code`

## Concept

A Markov model of order n reproduces the statistics of its training text up to length n and nothing beyond, which is why order 1 is gibberish and order 5 is plagiarism.

## Why it benefits from interaction

Letting the reader paste in a training text and slide the order, then watching output go from noise to verbatim quotation, shows the memorisation cliff directly.

## What the reader should be able to do afterward

Choose a Markov order for a purpose and explain the tradeoff between novelty and coherence.

## Assertions the selftest must make

- the order-n transition counts sum to the number of n-grams in the text, exactly
- generated text has n-gram frequencies matching the training text within 3 percent for n at or below the model order, over 50000 generated characters
- at order equal to the text length minus one the model reproduces the training text exactly
- the same seed produces the same output, and 30 different seeds produce more than 25 distinct outputs
- the model's cross-entropy on its own training text is non-increasing in the order, over orders 1 to 6
