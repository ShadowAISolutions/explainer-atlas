# STATE

The running log. Newest batch at the top. Read this and the three most recent
files in `AUDIT/` before starting any batch.

## Standing corrections

*(Nothing yet. Anything written here must be read and applied before the next
page is written — it is where a failing audit trend gets escalated.)*

## Decisions

- **2026-09-19** — The atlas lives in its own repository rather than inside
  `ShadowAISolutions/website`. That repo's own CLAUDE.md freezes a different
  process, its CI auto-merges and deploys www.shadowaisolutions.com, and three
  of its pre-commit rules collide structurally with the unit contract (no two
  files may share a basename; every new file needs a `Developed by:` footer;
  every added file needs a README tree entry). A separate repo lets the mission
  run verbatim with no carve-outs and no path from this loop to the live site.
- **2026-09-19** — `tools/verify.mjs` honours an optional `ATLAS_CHROMIUM`
  environment variable for Chromium's `executablePath`. CI still installs its
  own browser; this only lets a machine with Chromium already on disk skip the
  download. It relaxes no check.
- **2026-09-19** — Selftests assert the **model**, not the current UI state, so
  they hold under the verifier's full control sweep. Write them as pure
  functions of known inputs.

## Batches

*(none yet)*
