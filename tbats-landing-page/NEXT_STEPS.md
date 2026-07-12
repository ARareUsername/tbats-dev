# Next Steps & Known Issues

## Known Issues

1. **`vite preview` fails with SSR mode** — The `npm run preview` script uses `vite preview` which is a static file server. With React Router framework mode + SSR, use `npx react-router-serve build/server/index.js` instead (serves on port 3000 by default). The CI pipeline currently uses `vite preview` for E2E and Lighthouse; this should be updated to `react-router-serve` for accurate SSR preview.

2. **Team component not rendered** — `Team.tsx` exists with an `id="about"` section but is not imported in `app/routes/landing.tsx`. The old "About" nav link was removed. Either add Team back to the page or reconcile its content into another section.

3. **ESLint / oxlint config** — `.oxlintrc.json` exists but is not wired into any npm script. If oxlint is intended as a faster lint replacement, wire it up and decide whether to keep both or migrate.

4. **Coverage exclusions** — `src/demo/**` is excluded from test coverage thresholds. Verify this is intentional as the demo sandbox is a significant portion of the codebase.

5. **React Router future flags** — Build output shows several v8 future flag warnings (`v8_middleware`, `v8_splitRouteModules`, etc.). These should be addressed when upgrading to React Router v8.

## Deployment

- Production build: `cd tbats-landing-page && npm run build`
- Preview with SSR: `npx react-router-serve build/server/index.js`
- Deploy: CI auto-deploys to Netlify on push to `main`/`develop` branches
- PR previews: Netlify deploy previews are configured via GitHub Actions

## Follow-Up

- [ ] Port CI `preview` step from `vite preview` to `react-router-serve`
- [ ] Decide on Team.tsx inclusion or removal
- [ ] Wire up oxlint or remove `.oxlintrc.json`
- [ ] Review demo sandbox coverage exclusion
- [ ] Address React Router v8 future flags
