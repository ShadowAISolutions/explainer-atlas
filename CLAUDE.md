# CLAUDE.md — Operating rules for the Interactive Explainer Atlas

Read `FOUNDATION.md` first. It is the contract. This file is the loop.

The atlas is a long-running, multi-month, largely unattended build. Optimize for
consistency and additive progress over cleverness. **A thousand good pages beats
one perfect architecture.**

Work autonomously. If you face an ambiguous choice, pick the option that adds a
working page and record the decision in `STATE.md`.

---

## ANTI-DRIFT RULES

*(verbatim, permanent)*

- Never modify frozen files.
- Never carry a previous page's code into a new one. Always start from `template/`.
- Never widen scope mid-session.
- Never weaken the verifier to make a page pass.
- Never merge red CI.
- A blocked page is an acceptable outcome. A broken merged page is not.
- Write proposals, do not act on them.

---

## SESSION LOOP

Repeat indefinitely:

1. `git pull --rebase`.
2. **If a file named `PAUSE` exists at the repo root: stop immediately.** Write a
   summary of current state to `STATE.md`, commit, push, and report. Do nothing else.
3. Read `STATE.md` and the three most recent files in `AUDIT/`. Apply their lessons.
4. Claim a batch: move 5 task files from `queue/` to `queue/in-progress/`. Commit
   this claim on a new branch `batch/<NNN>`.
5. For each claimed task, **starting fresh from `template/explainer.template.html`**:
   - Build the explainer to the UNIT CONTRACT.
   - Run `node tools/verify.mjs <slug>` locally. Iterate until green.
   - If still failing after 3 serious attempts, move the task to `queue/blocked/`
     with a notes file explaining the obstacle, and move on. Do not sink a session
     into one page.
   - Commit green pages individually: `add(<slug>): <title>`.
6. Run `node tools/build_index.mjs`. Run `node tools/verify.mjs --all`. Commit.
7. Push the branch, open a PR, wait for CI, and merge **only if CI is green**. If
   CI fails, fix forward on the same branch. Never merge red. Never push to `main`.
8. Update `STATE.md`: pages merged, blocked, interaction patterns used, anything
   learned that a future session should know.
9. **Every 5th batch, run an AUDIT pass** (below).
10. If `queue/` holds fewer than 20 tasks, generate 40 more (below).
11. Return to step 1.

Do not stop between batches. Do not summarize and wait. Continue until `PAUSE`
appears, usage is exhausted, or the incident condition triggers.

**Incident stop:** if three consecutive batches fail to merge, write `INCIDENT.md`
describing the failure pattern, push it, and stop.

---

## VARIETY

The single biggest risk to this project is every page converging on the same shape.
Guard against it actively.

Record `interaction_pattern` in each `meta.json`, drawn from a growing vocabulary:
`drag-parameter`, `step-through`, `draw-input`, `compare-side-by-side`,
`time-scrubber`, `build-from-parts`, `guess-then-reveal`, `live-code`,
`spatial-explore`, `tune-to-match`, `perturb-and-observe`, `race-two-methods`.

Before starting a page, read the last 20 entries in `STATE.md`. **Do not use the
same interaction pattern more than 3 times in any 20 consecutive pages.** Vary
layout, colour treatment, and typographic scale between pages too, within the
template's structural constraints. Pages should feel like a collection, not a
mail merge.

---

## TOPIC GENERATION

When refilling the queue, spread across domains: mathematics, physics, computer
science, biology, economics, statistics, chemistry, music theory, engineering,
linguistics, earth science, information theory, game theory.

Prefer concepts where interaction genuinely beats prose: anything with a parameter
space, a process over time, a counterintuitive result, a tradeoff surface, or an
algorithm with visible intermediate state. Skip concepts that are just a definition.

Check every candidate slug against existing `explainers/` and the current queue to
avoid duplicates. Write each as `queue/<NNN>-<slug>.md` containing: concept, why it
benefits from interaction, what the reader should be able to do afterward, suggested
interaction pattern, and the specific numerical assertions the selftest should make.

---

## AUDIT

Every 5th batch:

1. Sample 5 merged explainers at random, weighted toward older ones.
2. Open each, examine the screenshots in `.artifacts/`, and score 1–5 on:
   explanatory clarity, interaction quality, visual distinctiveness, assertion
   rigor, correctness.
3. Write `AUDIT/<NNN>.md` with scores, the running average, and observed drift.
4. For anything scoring 2 or below on any axis, file a repair task into `queue/`.
5. If the running average has fallen for three consecutive audits, write the
   diagnosis prominently at the top of `STATE.md` so the next session corrects for it.

---

## STATE FORMAT

`STATE.md` is append-forward. Newest batch at the top, under `## Batches`. One
entry per batch:

```
### batch/007 — 2026-10-02
- merged: slug-a, slug-b, slug-c, slug-d
- blocked: slug-e (reason in queue/blocked/NNN-slug-e.notes.md)
- patterns: drag-parameter, step-through, race-two-methods, draw-input
- learned: <one or two lines a future session would want to know>
```

Anything that must be read before the next page is written goes at the very top of
the file, above `## Batches`, under `## Standing corrections`.
