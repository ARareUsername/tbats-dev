# Change: Portfolio Cards Overhaul

## Why

The "Featured Projects" (ProjectGallery) section is the weakest visually on the
landing page and reads as lackluster next to its siblings:

1. It is the only section with an off-palette green gradient wash background,
   breaking the consistent flat `var(--bg-dark-end)` used by BentoServices and
   WhyChooseUs.
2. Its 6 cards use hardcoded rainbow placeholder gradients that clash with the
   green/teal brand palette.
3. The cards pop in on load with no scroll-reveal or stagger, while every other
   landing section fades/rises on scroll — so the block feels static.
4. Once we swap gradients for real `<img>` elements, the section currently has
   no alt text, no lazy loading, and no fixed aspect ratio (CLS risk) — these
   become required, not optional.

Goal: flatten the background, replace rainbow gradients with abstract
landing-page placeholder images (Unsplash, license-free), and bring the
section's motion in line with the rest of the landing with correct a11y/perf
for the new images.

## What Changes

- `src/components/ProjectGallery.module.css`
  - `.section` background: replace the green linear-gradient wash with the flat
    `var(--bg-dark-end)` used by sibling sections.
- `src/components/ProjectGallery.tsx`
  - Replace the `gradient` field on each project with an `image` (path under
    `/public/images/projects/`) + descriptive `alt`.
  - Render the card media as `<img loading="lazy" ...>` with
    `object-fit: cover`, fixed `aspect-ratio` (match existing 320px card
    height) to avoid layout shift. Keep the existing noise/spotlight/overlay
    hover layers on top.
  - Give each of the 6 cards its own `whileInView` fade+rise with a stagger
    delay, reusing the existing `prefersReducedMotion` hook and the
    `m.div`/framer-motion pattern already used by `ScrollReveal` in
    `app/routes/landing.tsx`.
- New assets
  - Add 6 abstract landing-page placeholder images
    (`/public/images/projects/*.webp`, AVIF/WebP) sourced from Unsplash
    (license-free landing-page / web UI shots). Since they remain placeholders,
    abstract compositions are fine.

## Impact

- Affected: `ProjectGallery` component, its CSS module, landing route (imports
  unchanged), and 6 new public image assets.
- No route or API changes. Placeholder `href`s to `https://example.com` stay
  as-is (content/real-case-study linking is out of scope).
- Users: section now matches the site palette, animates in like its siblings,
  and the images are accessible (alt) and performant (lazy + fixed ratio).
