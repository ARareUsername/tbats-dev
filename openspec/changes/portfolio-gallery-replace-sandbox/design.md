## Context

Replacing the sandbox Portfolio section with a gallery. Three placeholder projects: Boutique Coffee Co., Tech Startup, Real Estate Agency (matching testimonials). Two-column grid with the third card full-width. Each card has a CSS gradient placeholder image, business name, industry tag, result metric, and a link to an external page.

## Goals / Non-Goals

**Goals:**
- Remove sandbox/demo code entirely
- Replace with a gallery that positions TBATS as bespoke
- 3 project cards with placeholder visuals
- Clean removal of demo route and components

**Non-Goals:**
- No actual demo interactivity — these are static gallery cards that link out
- No image assets yet — pure CSS placeholders
- The demo page route is deleted, not preserved

## Decisions

- **Project data**: Matches the 3 testimonials clients — Boutique Coffee Co. (+40% bookings), Tech Startup ("sleek platform"), Real Estate Agency ("on-time delivery"). Same names, consistent brand story.
- **Placeholder images**: CSS gradients with subtle patterns, one distinct color per project. Coffee = warm amber, Tech = cool blue, Real Estate = deep teal.
- **Layout**: `grid-3` pattern, third card spans full width on mobile (single column). On desktop, 3 equal columns.
- **Links**: `<a href="https://example.com" target="_blank" rel="noopener noreferrer">` — placeholder until real sites exist.
- **Demo code removal**: Delete `src/demo/` entirely, remove `routes/demo.$projectId.tsx`, remove demo imports from index.css, remove demo context references.
