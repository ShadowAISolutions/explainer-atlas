# 138 — rain-shadow-orographic-lift

**Domain:** earth-science
**Suggested interaction pattern:** `drag-parameter`

## Concept

Air forced over a mountain cools at one rate going up and warms at a faster rate coming down, which is why one side is a rainforest and the other a desert.

## Why it benefits from interaction

Dragging the mountain height and watching the leeward temperature climb above the windward makes the two lapse rates the whole story.

## What the reader should be able to do afterward

Predict the leeward temperature and rainfall for a given mountain and airmass.

## Assertions the selftest must make

- the dry adiabatic lapse rate equals g over cp to 1e-6, and matches the published 9.8 K per km
- the lifting condensation level matches the closed form in temperature and dew point to 1e-6
- the leeward temperature exceeds the windward temperature by exactly the height above condensation times the lapse rate difference, to 1e-9
- total water is conserved: precipitation equals the drop in mixing ratio, to 1e-10
- with no condensation the leeward and windward temperatures are exactly equal, to 1e-12
