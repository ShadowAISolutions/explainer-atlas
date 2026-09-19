# 073 — coriolis-deflection

**Domain:** earth-science
**Suggested interaction pattern:** `spatial-explore`

## Concept

On a rotating planet a straight-line path looks curved to anyone standing on the surface, and the deflection depends on latitude, not on any force acting sideways.

## Why it benefits from interaction

Firing a projectile from a chosen latitude and watching the inertial and rotating views side by side dissolves the force that is not there.

## What the reader should be able to do afterward

Predict the direction and size of Coriolis deflection at a latitude and explain why it vanishes at the equator.

## Assertions the selftest must make

- in the inertial frame the trajectory is exactly straight: deviation from the chord below 1e-10
- the Coriolis parameter equals 2 Omega sin(latitude), to 1e-14, at 90 latitudes
- deflection is exactly zero for motion at the equator, and reverses sign across it
- the inertial-oscillation period equals 2 pi / f to 1e-9 at 40 latitudes
- transforming the rotating-frame trajectory back to the inertial frame recovers the straight line to 1e-9
