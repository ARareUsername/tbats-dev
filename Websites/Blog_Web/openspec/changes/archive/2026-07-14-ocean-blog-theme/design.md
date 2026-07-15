## Context

Greenfield Vite + React + TypeScript travel blog. No existing codebase — design decisions are unconstrained. The visual identity IS the content: a blog about ocean and beach photography whose design language mirrors the subject.

The tbats-landing-page workspace sibling uses CSS Modules + design tokens + framer-motion. We follow the same technical stack for consistency but build an entirely distinct design identity.

## Goals / Non-Goals

**Goals:**
- Dual-mode design system (light: Tropical Shore, dark: Ocean Depths) driven by CSS custom properties
- Photo-first layout optimized for vertical images in a journal/dive-log rhythm
- Depth-scroll: page sections shift palette from warm/sunlit (top) → cool/abyssal (bottom)
- Navbar as a physical metaphor: sand texture (light) / moonlit water shimmer (dark)
- Responsive: mobile-first, vertical photos adapt to single-column on small screens
- Static, client-side rendered — no backend, no API

**Non-Goals:**
- CMS integration or headless backend (content will be hand-authored or Markdown-based initially)
- Comments, user accounts, or social features
- E-commerce or booking functionality
- Server-side rendering or SSG (static SPA is sufficient)
- Animation library beyond framer-motion (no GSAP, no Three.js)

## Decisions

**Decision 1: CSS Modules + tokens over Tailwind**
Rationale: The workspace already has this pattern; it gives full control over the color-palette transformations between modes. Tailwind's utility classes would fight the atmospheric, photography-centric design.

**Decision 2: framer-motion for scroll-driven depth transitions**
Considered: Intersection Observer + manual class toggling; CSS scroll-driven animations.
Chosen framer-motion because: The depth scroll needs progress-driven blending (not binary breakpoints), and framer-motion's `useScroll` + `useTransform` gives smooth interpolation between palette zones.

**Decision 3: Vertical photos as the primary image format**
Rationale: Vertical (portrait) images dominate mobile-first photography (Instagram, phone cameras). They stack naturally in a journal/dive-log rhythm. Desktop can show 2-3 columns preserving the vertical crop.

**Decision 4: No router library — simple hash-based or memory routing**
Rationale: For a small blog with 4-5 pages, React Router adds unnecessary weight. A lightweight custom hook over `window.location` or hash-based routing keeps the bundle minimal. Revisit if the blog grows beyond ~10 pages.

**Decision 5: Theme toggle as a physical transformation, not just a CSS swap**
The light→dark transition should feel like submerging: the navbar texture changes, the accent colors shift, the background deepens. This is a coordinated palette swap, not a simple `invert()`.

**Decision 6: Static content via TypeScript data files initially**
No CMS, no Markdown parser. Blog posts live as typed data objects in `src/data/`. This keeps iteration fast and avoids build-pipeline complexity. Can be migrated to Markdown or headless CMS later.

## Risks / Trade-offs

- **Risk**: Vertical photos on desktop leave horizontal space unused → **Mitigation**: Use generous typography, negative space, and supporting content in the horizontal margins
- **Risk**: Depth-scroll may feel gimmicky if overdone → **Mitigation**: Subtle palette shifts (not drastic), let photography be the hero
- **Risk**: No CMS means content updates require code changes → **Accepted**: Acceptable for a personal blog; migration path to Markdown exists
- **Risk**: Sand texture in navbar could impact readability → **Mitigation**: Keep nav text high-contrast against the textured background; use subtle grain, not aggressive noise
- **Risk**: theme-switching animations could trigger motion sickness → **Mitigation**: Respect `prefers-reduced-motion`; disable palette transitions when set
