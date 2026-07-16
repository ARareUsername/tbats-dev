# Design

## Context

ProjectGallery is mounted on the landing route between BentoServices and
WhyChooseUs. Those two siblings use a flat `var(--bg-dark-end)` background and
reveal their content on scroll (`whileInView` + `viewport once`). ProjectGallery
currently:
- wraps the whole section in a single `ScrollReveal` (so it fades as one block),
- gives each card a CSS `background: project.gradient` (6 hardcoded rainbow
  gradients),
- has no `<img>`, no alt, no lazy loading, no fixed aspect ratio.

Tokens (`src/styles/tokens.css`): `--bg-dark-end`, `--color-accent`,
`--grid-dot-color`. Motion: framer-motion `m.div` + a `prefersReducedMotion`
hook already imported in `app/routes/landing.tsx` (used by `ScrollReveal`).

## Goals / Non-Goals

- Goals: flatten bg, swap gradients → abstract landing-page placeholder images,
  add per-card scroll-reveal stagger, make images a11y/perf correct.
- Non-Goals: real case-study content/links (hrefs stay `example.com`),
  filtering/category UI, varied card sizes, real client screenshots.

## Decisions

1. **Background** → `var(--bg-dark-end)` (reuse sibling token; zero new design).
2. **Images** → Unsplash abstract landing-page / web-UI shots, saved as
   WebP under `/public/images/projects/`. Abstract is acceptable since they
   remain placeholders. License-free, no attribution headaches.
   - ponytail: stock placeholders; swap for real client shots later.
3. **Image element** → `<img>` (not background-image) so alt + lazy + aspect
   ratio apply. Keep the existing `.noise`, spotlight, and gradient overlay as
   absolutely-positioned layers above the `<img>`.
4. **Motion** → remove the single whole-section `ScrollReveal` wrap for the
   grid; instead give each card `whileInView` with `transition.delay =
   i * 0.08`, reusing `prefersReducedMotion` for the duration. Mirrors the
   BentoServices/WhyChooseUs reveal so the landing rhythm is consistent.

## Risks

- Unsplash images must be downloaded once and committed (no hotlinking) to
  respect CSP + offline build. Fix: vendor them into `/public/images/projects/`.
- CLS if `<img>` lacks dimensions — fixed via `aspect-ratio` in CSS module.
