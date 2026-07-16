## 1. Vite Config Fix

- [x] 1.1 Change `minify: 'esbuild'` to `minify: 'oxc'` in `vite.config.ts`

## 2. Verification

- [x] 2.1 Run `npm run typecheck` — zero errors
- [x] 2.2 Run `npm run lint` — zero warnings
- [x] 2.3 Run `npm run build` — builds successfully
- [ ] 2.4 Verify dev server starts without the `esbuild` deprecation warning
