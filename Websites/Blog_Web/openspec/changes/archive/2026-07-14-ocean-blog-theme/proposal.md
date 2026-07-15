## Why

A personal travel blog showcasing ocean and beach photography has no digital home yet. The opportunity is to build one from scratch — a photo-first, visually immersive site whose design language is inseparable from its subject matter: the shore, the shallows, and the depths. The theme itself tells the story.

## What Changes

- Create a new Vite + React + TypeScript project under `Websites/Blog_Web/`
- Establish a dual-mode design system: **Tropical Shore** (light) and **Ocean Depths** (dark)
- Build a photo-first layout centered on vertical images arranged in a journal/dive-log rhythm
- Implement a depth-scroll pattern where page sections progressively shift in color from warm/sunlit → cool/abyssal
- Design the navbar as a physical element — sandy shore in light mode, moonlit water shimmer in dark mode
- Include essential blog pages: home, post listing, individual post view, about, contact

## Capabilities

### New Capabilities
- `design-system`: Color palettes, typography, spacing, and theming for the tropical-shore / ocean-depths dual-mode identity
- `photo-blog-layout`: Page structure, navigation, depth-scroll zones, vertical-photo grid, and responsive layout system
- `theme-switching`: Light/dark mode toggle that transforms the entire visual experience from shore to sea

### Modified Capabilities

None — this is a greenfield project.

## Impact

- New project directory: `Websites/Blog_Web/src/` — no existing code affected
- New dependencies: Vite, React, TypeScript, framer-motion (for scroll-driven animations), CSS Modules (included by Vite)
- No APIs or backend — fully static, client-side rendered blog
- No changes to the existing `tbats-landing-page/` or workspace root
