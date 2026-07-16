## Why

The Vite dev server emits two deprecation warnings at startup: the react-router plugin passes an `esbuild` option that should be `oxc`, and `motion()` should be `motion.create()`. These are noise that will become errors in future releases.

## What Changes

- Replace `esbuild` minify option with `oxc` in `vite.config.ts`
- Replace deprecated `motion()` calls with `motion.create()` throughout the codebase
- Verify no regressions via typecheck, lint, and build

## Capabilities

### New Capabilities

*(none — purely a build-tooling/internal change, no new user-facing capability)*

### Modified Capabilities

*(none — no spec-level behavior changes)*

## Impact

- `tbats-landing-page/vite.config.ts` — replace `minify: 'esbuild'` and `esbuild` config with `oxc` equivalent
- `tbats-landing-page/src/` — replace `motion()` → `motion.create()` calls (if any exist in source; otherwise it's in dependencies only)
