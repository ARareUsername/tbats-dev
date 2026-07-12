## Context

The nav bar (Header.tsx) has a dead "About" anchor link — `Team.tsx` renders `id="about"` but is not imported in `landing.tsx`. Anchor links jump abruptly with no smooth scrolling, and there's no visual indicator for which section the user is currently viewing. The Care Plan card in the pricing section uses centered text and a dashed border that feels disconnected from the tier cards above it, and its first benefit line is semantically redundant with the card's description.

## Goals / Non-Goals

**Goals:**
- Remove the dead About link from desktop and mobile nav
- Enable smooth anchor scrolling site-wide
- Highlight the active nav link based on scroll position via IntersectionObserver
- Fix CSS typo (`fontsize` → `font-size`) in Header.module.css
- Rewrite the redundant Care Plan benefit to be meaningful on its own
- Restyle the Care Plan card to visually match the tier cards (left-aligned benefits, solid border)

**Non-Goals:**
- No changes to page layout, hero, or other sections
- No new dependencies or packages
- No changes to the React Router or SSR setup
- No touch to the demo sandbox or preset system

## Decisions

1. **IntersectionObserver over scroll events** — Using IntersectionObserver is more performant than scroll listeners + getBoundingClientRect calls. The hook observes all section elements with IDs and returns the currently visible one. Falls back gracefully if IO is unavailable.

2. **New `useActiveSection` hook** — Dedicated hook keeps the scroll-tracking logic reusable and out of Header.tsx. Accepts a list of section IDs and an offset (for the sticky nav height).

3. **Remove About link instead of adding Team back** — Team.tsx was intentionally excluded from the landing page (likely during the comprehensive modernization). Restoring it would require reviewing its content and fitting it into the page flow. Removing the dead link is simpler and the nav stays at 5 items which is cleaner UX.

4. **Left-align Care Plan benefits** — Matches the tier card pattern for visual consistency. The current centered text + dashed border makes it look like a footnote rather than part of the pricing section. Solid border + left alignment integrates it visually.

5. **CSS-only smooth scrolling** — `scroll-behavior: smooth` on `<html>` is the simplest zero-dependency solution, supported in all modern browsers. No JS needed.

## Risks / Trade-offs

- [Active section highlights may be off by a few pixels] → Use a `rootMargin` of `-80px 0px -40% 0px` so the highlight triggers when a section enters the viewport accounting for the sticky header
- [Removing About link may surprise users expecting one] → About content is minimal and overlaps with the brand story told in the hero and process sections; no data suggests users navigate to it
- [Care Plan restyling may reduce visual distinction from tiers] → Keep the card visually subordinate by using slightly muted background vs. the highlighted growth card
