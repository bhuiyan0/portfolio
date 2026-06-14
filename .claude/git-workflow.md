# Git Workflow

## Branching

- `master` is the main/production branch.
- Do work on short-lived feature branches off `master`; never commit directly to `master`
  for non-trivial changes.
- Branch naming: `type/short-description` (kebab-case), e.g.
  - `feat/projects-section`
  - `fix/mobile-nav-overflow`
  - `chore/update-deps`

## Commits

Follow **Conventional Commits** (matches existing history like `feat: content added`,
`fix: reduce the section spacing`):

```
<type>: <imperative, lowercase summary>
```

**Types:** `feat`, `fix`, `chore`, `refactor`, `style`, `docs`, `test`, `perf`, `build`.

Guidelines:
- Summary in the imperative mood, ~50 chars, no trailing period.
- Keep commits small and focused — one logical change each.
- Add a body (after a blank line) when the *why* isn't obvious from the summary.
- Don't commit commented-out code, debug logs, or unrelated formatting churn.

## Before committing

1. `npm run lint` — clean.
2. `npm run build` — succeeds (catches type errors).
3. Review the diff; commit only intended changes (`git add -p` for partial staging).

## Pull requests

- Open PRs against `master`.
- Title uses the same Conventional Commit format as the squash summary.
- PR description: what changed, why, and how to verify (or a screenshot for UI changes).
- Keep PRs reviewable in size; split large work.

## Conventions for this repo

- `.next/`, `node_modules/`, and build artifacts are gitignored — never commit them.
- Don't commit secrets or `.env*` files.
- Only commit or push when explicitly asked.
