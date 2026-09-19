# 043 — map-projection-distortion

**Domain:** mathematics
**Suggested interaction pattern:** `drag-parameter`

## Concept

No flat map preserves area, angle and distance at once, and each projection chooses which to sacrifice.

## Why it benefits from interaction

Dragging a circle around the globe and watching it deform differently on Mercator, equal-area and equidistant projections makes Tissot's indicatrix something you feel rather than read about.

## What the reader should be able to do afterward

Choose a projection for a stated purpose and name exactly what it distorts.

## Assertions the selftest must make

- the Mercator projection preserves angles: the two principal scale factors are equal to 1e-12 at 200 sampled latitudes
- the cylindrical equal-area projection preserves area: the product of scale factors is exactly 1 at those latitudes
- Mercator's area inflation at 60 degrees is exactly 4, and at 75 degrees is within 1e-9 of 1/cos^2
- the great-circle distance between two named cities matches the haversine formula to 1e-9
- no projection in the set has all three scale factors equal to 1 anywhere except the standard parallel
