# ROADMAP

The atlas is **Phase 1 of three**. Phases 2 and 3 are approved directions, to be
started only on an explicit instruction from the repo owner in a live session.
Do not start them. Do not partially start them.

## Phase 1 — Interactive Explainer Atlas (active)

A growing collection of self-contained interactive explainers, one concept per
page, each teaching one idea through a working simulation the reader can
manipulate. See `FOUNDATION.md` for the contract and `CLAUDE.md` for the loop.

## Phase 2 — Puzzle corpus with solver gate (not started)

Generated puzzles validated by an independent solver for solvability, solution
uniqueness, and difficulty band. The solver is built and hardened **before** any
puzzle is generated — a generator trusted to grade its own output is a generator
that quietly ships unsolvable puzzles.

## Phase 3 — Concept graph (not started)

A typed knowledge graph over the atlas and beyond, where every edge carries a
relation type and a written justification, with periodic validation passes that
prune unjustified edges.

**Groundwork already laid:** the `prerequisites` field in every `meta.json` is a
deliberate down payment on Phase 3. The verifier enforces that every prerequisite
slug resolves to an explainer that actually exists, so by the time Phase 3 starts,
the atlas already carries a validated, acyclic prerequisite DAG — one typed
relation, fully populated, with no dangling edges. Keep filling it honestly.
