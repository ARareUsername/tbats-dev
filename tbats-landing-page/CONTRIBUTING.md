# Contributing

## Branch Naming

Use the format: `type/description` (e.g., `feat/add-dark-mode`, `fix/header-overlap`).

## Commit Format

This project uses [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>: <description>

[optional body]
```

Allowed types: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `build`, `ci`, `revert`.

## PR Checklist

- [ ] TypeScript compiles with zero errors (`npm run typecheck`)
- [ ] Lint passes with zero warnings (`npm run lint`)
- [ ] All tests pass (`npm run test`)
- [ ] Coverage meets thresholds (`npm run test:coverage`)
- [ ] E2E tests pass (`npm run test:e2e`)
- [ ] Production build succeeds (`npm run build`)
- [ ] No new ESLint warnings introduced
- [ ] Changes are scoped and focused
