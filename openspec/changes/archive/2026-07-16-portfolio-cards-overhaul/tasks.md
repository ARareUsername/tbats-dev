# Tasks

## 1. Flatten ProjectGallery background
- [ ] In `src/components/ProjectGallery.module.css`, set `.section` background
      to `var(--bg-dark-end)` and remove the green linear-gradient wash.

## 2. Source and add placeholder images
- [ ] Download 6 abstract landing-page / web-UI placeholder images from
      Unsplash (license-free) as WebP.
- [ ] Save to `/public/images/projects/project-1.webp` … `project-6.webp`.
- [ ] ponytail: stock placeholders; replace with real client shots later.

## 3. Swap gradients for images in ProjectGallery
- [ ] In `src/components/ProjectGallery.tsx`, replace the `gradient` field with
      `image` (path) + `alt` on each project.
- [ ] Render card media as `<img loading="lazy" src={project.image}
      alt={project.alt} />` and remove `style={{ background: project.gradient }}`.
- [ ] In the CSS module, style `.image` (the img) with `object-fit: cover` and
      a fixed `aspect-ratio` (match the existing ~320px card height) to prevent
      CLS. Keep hover noise/spotlight/overlay layers above it.

## 4. Add per-card scroll-reveal stagger
- [ ] Replace the single whole-section `ScrollReveal` wrap (for the grid) with
      per-card `m.div` `whileInView` fade+rise, `viewport={{ once: true,
      margin: '-50px' }}`, and `transition.delay = i * 0.08`.
- [ ] Use the existing `prefersReducedMotion` hook for the reveal duration so
      reduced-motion users get a near-instant reveal (consistent with
      `ScrollReveal` in `app/routes/landing.tsx`).

## 5. Validate
- [ ] `npm run typecheck`, `npm run lint --max-warnings 0`, `npm run build`.
- [ ] Manual: section bg matches siblings, 6 images load with alt, cards
      stagger on scroll, no layout shift on image load.
