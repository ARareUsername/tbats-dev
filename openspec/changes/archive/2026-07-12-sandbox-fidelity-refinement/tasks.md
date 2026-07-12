## 1. CSS & Icon Fixes

- [x] 1.1 Fix the sidebar CSS override in `src/demo/demo.css` to exclude `.material-symbols-outlined` elements
- [x] 1.2 Replace the Unsplash image tag in `src/demo/components/Hero/HeroEditorial.jsx` with a styled geometric grid CSS block

## 2. Custom Agent Skill Creation

- [x] 2.1 Create `/home/rare/Dev/TBATS/.agent/skills/sandbox-high-fidelity-checks/SKILL.md` with instructions for theme checks, polymorphic context checks, and font override safety

## 3. Polymorphic Headers, Footers, and Heroes

- [x] 3.1 Refactor all 5 `Header` variants (`Minimal`, `Luxury`, `Editorial`, `Bold`, `Playful`) in `src/demo/components/Header/` to conditionally render navigation lists and CTAs, and hide the cart drawer toggle for Blog and Portfolio pages
- [x] 3.2 Refactor all 5 `Footer` variants (`Minimal`, `Luxury`, `Editorial`, `Bold`, `Playful`) in `src/demo/components/Footer/` to conditionally adjust directory links and newsletter/description copy depending on `projectId`
- [x] 3.3 Update `src/pages/EcommerceSamplerPage.jsx` to dynamically supply `ctaText` to `HeroComponent` based on whether it is a Blog, Portfolio, or E-Commerce page

## 4. Build Verification

- [x] 4.1 Run build checks (`npm run build`) to ensure zero bundling errors
