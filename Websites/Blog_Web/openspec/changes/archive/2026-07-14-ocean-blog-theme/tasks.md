## 1. Project Setup

- [x] 1.1 Scaffold Vite + React + TypeScript project in `Websites/Blog_Web/`
- [x] 1.2 Install dependencies: framer-motion
- [x] 1.3 Create folder structure: `src/components/`, `src/styles/`, `src/data/`, `src/hooks/`, `src/types/`

## 2. Design System — Tokens & Colors

- [x] 2.1 Create `src/styles/tokens.css` with CSS custom properties for both palettes (`tropical-shore` on `:root`, `ocean-depths` on `[data-theme="dark"]`)
- [x] 2.2 Define depth-zone sub-palettes (`surface`, `reef`, `abyss`) in tokens
- [x] 2.3 Set up spacing scale, border-radius, transition tokens
- [x] 2.4 Create `src/styles/fonts.css` with `@font-face` for display and body typefaces
- [x] 2.5 Create `src/styles/globals.css` with reset, base styles, and utility classes
- [x] 2.6 Create `src/styles/animations.css` with keyframes for navbar shimmer, bioluminescent dots, theme transitions

## 3. Theme Switching

- [x] 3.1 Create `src/hooks/useTheme.ts` — reads `localStorage`, sets `data-theme` on `<html>`, returns theme + toggle function
- [x] 3.2 Add inline script in `index.html` `<head>` to apply saved theme before first paint (prevent flash)
- [x] 3.3 Build ThemeToggle component with sun/moon icon that calls `useTheme().toggle`
- [x] 3.4 Add CSS transition on `background-color`, `color`, `border-color` etc. for smooth theme swap (0.5s ease)
- [x] 3.5 Respect `prefers-reduced-motion` — disable theme transition when set

## 4. Navbar

- [x] 4.1 Build Navbar component — fixed position, full-width, contains logo + navigation links + ThemeToggle
- [x] 4.2 Implement light-mode sand texture background (CSS gradient/grain overlay)
- [x] 4.3 Implement dark-mode water shimmer background (CSS animation)
- [x] 4.4 Add responsive mobile hamburger menu with framer-motion `AnimatePresence`

## 5. Layout & Depth Scroll

- [x] 5.1 Build HeroSection — full viewport, vertical hero image, title, subtitle, theme-responsive overlay
- [x] 5.2 Implement depth-scroll hook `useDepthZone` using framer-motion `useScroll` + `useTransform`
- [x] 5.3 Apply depth-zone background blending to page/section backgrounds as user scrolls
- [x] 5.4 Build Footer with abyss palette and optional bioluminescent dot animation
- [x] 5.5 Create `src/styles/depth-zones.css` with zone-specific color classes

## 6. Blog Post Components

- [x] 6.1 Create `src/types/blog.ts` — TypeScript types for BlogPost (title, date, slug, heroImage, body, etc.)
- [x] 6.2 Create `src/data/posts.ts` — typed array of sample blog posts
- [x] 6.3 Build PostCard component — vertical image, title, date excerpt, links to post page
- [x] 6.4 Build PostGrid component — responsive grid (3 cols desktop, 2 tablet, 1 mobile) displaying PostCards
- [x] 6.5 Build IndividualPost page component — hero image, title, date, body with readable measure
- [x] 6.6 Add placeholder ocean/beach images (public domain or generated)

## 7. Pages & Routing

- [x] 7.1 Implement lightweight client-side router (hash-based or `useState`-driven) in `src/hooks/useRouter.ts`
- [x] 7.2 Build Home page — HeroSection + PostGrid of recent posts
- [x] 7.3 Build Posts listing page — PostGrid with filtering/sorting
- [x] 7.4 Build About page — author bio with photo
- [x] 7.5 Build Contact page — simple contact form (EmailJS or mailto)

## 8. Polish

- [x] 8.1 Add subtle scroll-driven parallax or fade effects on hero images
- [x] 8.2 Tune depth-zone color transitions for smooth feel
- [x] 8.3 Test and fix responsive layout at all breakpoints
- [x] 8.4 Verify WCAG contrast in both themes
- [x] 8.5 Test `prefers-reduced-motion` behavior
- [x] 8.6 Final image optimization and lazy loading
