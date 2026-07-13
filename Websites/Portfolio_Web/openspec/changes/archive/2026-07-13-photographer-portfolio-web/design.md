## Context

A freelance photographer portfolio SPA built with Vite + React + TypeScript. The project lives under `Werbsites/Portfolio_Web/` in a monorepo workspace. No existing code or dependencies — greenfield build.

## Goals / Non-Goals

**Goals:**
- Scaffold a working Vite + React + TypeScript project
- Fixed Navbar with logo, nav links, mobile hamburger menu
- Full-viewport hero showcase with gradient overlay and CTA
- Footer with social links, copyright, back-to-top button
- Responsive at mobile, tablet, desktop breakpoints
- Dark theme aesthetic to let photography pop

**Non-Goals:**
- No routing/multi-page — single page only
- No backend, CMS, or API integration
- No image heavy optimization pipeline — use placeholder gradients
- No animation library — vanilla CSS transitions only

## Decisions

- **Vite + React + TypeScript**: Aligns with the tbats-landing-page sibling project's stack; developer familiarity
- **CSS Modules over Tailwind**: Keeps the project zero-config and avoids adding Tailwind as a dependency for such a small site
- **CSS custom properties for theming**: Simple dark theme via `:root` variables; easy to rebrand later
- **No React Router**: Single-page layout means no routing needed; sections stack vertically
- **Hero uses CSS gradient overlay on placeholder background**: No real image dependency needed for initial build; easy to swap in actual photos later
- **Mobile hamburger menu via state toggle**: Simple React state, no third-party drawer library
- **All components in `src/components/`**: Flat structure for simplicity; each component gets its own `.module.css`

## Risks / Trade-offs

- No real images in initial build → hero section may feel empty; mitigated by using a dark gradient placeholder
- No backend → cannot add contact form without additional service; intentionally deferred
- No build-time image optimization → large photos could hurt Lighthouse score later; mitigated by recommending manual compression when images are added
