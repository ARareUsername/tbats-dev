## Why

The root `README.md` is a 28-line stub that undersells the project. On GitHub it's the first — often only — impression for clients, collaborators, and contributors. Meanwhile the project has a polished app with 12+ scripts, strict quality gates, conventional commits, 80% code coverage, design tokens, SSR, E2E tests, Storybook, Lighthouse budgets, and a full Netlify deployment pipeline. None of that is visible at the repo level. A strong README signals professionalism, helps agency clients evaluate TBATS, and makes the repo navigable for anyone who clones it.

## What Changes

Complete rewrite of the root `README.md` using a **meta-README** approach (School A):

- **Title + tagline + one-liner pitch** — "Crafting Digital Experiences That Convert"
- **Badge bar** — live site, license, tech stack, CI status
- **Project structure diagram** — visual explanation of the workspace layout (app / specs / agent config)
- **The App section** — tech stack table, quick-start (1-2-3), full scripts table, feature highlights (SSR, design tokens, accessibility, animated UI, dark/light mode, contact form, pricing estimator)
- **The OpenSpec section** — what spec-driven development means in this repo
- **Quality & Conventions section** — conventional commits, pre-commit hooks, strict TypeScript, 80% coverage, Lighthouse budget, E2E
- **Deployment section** — Netlify, build command, preview
- **Contributing section** — link to `CONTRIBUTING.md`
- **License section** — MIT (or private, as appropriate)
- **Live site link** prominently in the badge bar

## Capabilities

### New Capabilities
- `workspace-readme`: Content requirements, structure, and formatting for the root repository README

### Modified Capabilities

None.

## Impact

Only the root `README.md` is modified. No code, configuration, or other documentation changes.
