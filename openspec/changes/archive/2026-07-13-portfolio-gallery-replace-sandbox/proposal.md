## Why

The sandbox/demo section communicates "preset templates" which contradicts the bespoke positioning. A portfolio gallery showing real client work builds credibility, stays inline with the landing page narrative, and lets prospects self-identify with past projects.

## What Changes

- Replace `Portfolio.tsx` (sandbox launcher + demo) with a gallery section showing 3 placeholder project cards
- Cards link to external pages (client sites, case studies) — placeholder URLs for now
- Strip demo code: remove `/demo/:projectId` route, demo components, demo data, demo CSS, demo context
- Remove `Portfolio.tsx` from landing page, replace with `ProjectGallery.tsx`
- **BREAKING**: `/demo/*` routes will 404 — the demo sandbox is removed entirely

## Capabilities

### New Capabilities
- `project-gallery`: Portfolio section showing client work with image placeholders, business names, industry tags, and result metrics

### Modified Capabilities
*(none)*

## Impact

- Remove: `Portfolio.tsx`, `Portfolio.module.css`, `app/routes/demo.$projectId.tsx`, entire `src/demo/` directory
- Remove: demo data files, demo components, demo context, demo CSS, demo preset registry
- Add: `ProjectGallery.tsx`, `ProjectGallery.module.css`, placeholder image helpers
- Modify: `app/routes/landing.tsx` — swap Portfolio import for ProjectGallery
- Remove: `<BackToTop />` is no longer needed since the new gallery stays inline (actually keep it)
