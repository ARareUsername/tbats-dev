## Context

Vite 8 uses Rolldown (Rust-based bundler) instead of esbuild for production builds. The react-router plugin flags `esbuild` as a deprecated minifier option, recommending `oxc` instead. The `motion()` deprecation comes from react-router's internal dependency and is not actionable in user code.

## Goals / Non-Goals

**Goals:**
- Silence the `esbuild` deprecation warning from the react-router plugin
- Use Vite 8's recommended minifier (`oxc`)

**Non-Goals:**
- Fix the `motion()` deprecation (upstream in react-router deps)
- Change any runtime behavior or bundle output

## Decisions

| Decision | Choice | Rationale |
|---|---|---|
| Minifier | `oxc` | Vite 8's recommended replacement for esbuild minification. Produces equivalent output. |

## Risks / Trade-offs

| Risk | Mitigation |
|---|---|
| `oxc` minifier may produce slightly different output | Run build and verify bundle size/structure. Rollback to `esbuild` if issues. |
