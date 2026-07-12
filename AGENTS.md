# AGENTS.md

Guidance for OpenCode sessions working in this repo. Only non-obvious, verified facts are included.

## Workspace layout

- This is a workspace repo. The only runnable app is **`tbats-landing-page/`** (React 19 + Vite 8 + TypeScript, SPA).
- The repo root has **no `package.json`**. All `npm` commands must run from `tbats-landing-page/` — running them at the root fails. CI does `cd tbats-landing-page && ...` for every job.
- `openspec/` holds spec-driven development specs/changes. `tbats-landing-page/` is the only place where code changes land.
- `netlify.toml` points `[functions]` at `netlify/functions` and redirects `/api/*` to `.netlify/functions/:splat`, but that directory does not exist yet (the contact endpoint is still client-side EmailJS via `VITE_EMAILJS_*`).

## Install

- CI installs with `npm ci --legacy-peer-deps` (React 19 vs. Storybook 8 / other peers conflict). Use `--legacy-peer-deps` locally too if `npm install` errors on peers.

## Commands (run inside `tbats-landing-page/`)

- `npm run dev` — Vite dev server on port 5173 (`--host`).
- `npm run build` — production build to `dist/`; also runs image minification.
- `npm run build:analyze` — sets `ANALYZE=true` and emits `stats.html` bundle report.
- `npm run typecheck` — `tsc --noEmit` (strict: `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noUnusedLocals/Parameters`).
- `npm run lint` — ESLint with **`--max-warnings 0`**: must be completely clean (zero warnings) or it fails. Also passes `--report-unused-disable-directives`.
- `npm run test` — `vitest run` (unit/integration, jsdom).
- `npm run test:coverage` — enforces **80% thresholds** on statements/branches/functions/lines. Excludes `src/demo/**`.
- `npm run test:e2e` — Playwright. See E2E notes below.
- `npm run format` — Prettier (`printWidth: 100`, `singleQuote`, `arrowParens: avoid`, `endOfLine: lf`).

## E2E (Playwright) gotchas

- Tests live in `e2e/` (`testDir` in `playwright.config.ts`), not `src/`. That directory does not exist yet.
- The suite runs **against `npm run preview` (port 4173), not the dev server**. You must `npm run build` first.
- CI installs only Chromium for e2e (`npx playwright install --with-deps chromium`); the config lists Firefox/WebKit/Mobile too. Run `npx playwright install` before local e2e.
- `baseURL` is `http://localhost:4173` and a `webServer` auto-starts `npm run preview`.

## Conventions

- **Conventional Commits are enforced** via commitlint + Husky. Allowed types: `feat fix docs style refactor perf test chore build ci revert`. Subject must be sentence-case, non-empty, ≤72 chars.
- **Pre-commit = lint-staged**: `eslint --fix --max-warnings 0` + `prettier --write` on `*.{ts,tsx}`, prettier only on `*.{json,css,md}`.
- Import path aliases (defined in `vite.config.ts`, `vitest.config.ts`, `tsconfig.json`): `@`, `@components`, `@hooks`, `@utils`, `@types`, `@styles`, `@demo` → `src/*`. Use these, not relative `../../`.
- `@typescript-eslint/consistent-type-imports` is error-level: use `import type { ... }` for type-only imports.

## Deploy / infra

- Deploys to **Netlify**. Build command `npm run build`, publish `dist/`. Strict CSP and security headers are set in `netlify.toml`. Production should use the serverless contact proxy (env `EMAILJS_*`, server-only) rather than client `VITE_EMAILJS_*`.
- Lighthouse budget is enforced in CI via `lighthouse-budget.json`.

## OpenSpec workflow

- Spec-driven changes live in `openspec/`. Use the bundled `/opsx-propose`, `/opsx-apply`, `/opsx-archive`, etc. commands (skills under `.opencode/skills/`) for that flow; don't hand-edit spec files ad hoc.
