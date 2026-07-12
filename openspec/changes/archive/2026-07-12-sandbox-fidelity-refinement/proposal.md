## Why

To achieve maximum visual fidelity, we need to ensure that the sandbox layout headers, heroes, and footers dynamically adapt their copy, navigation links, and CTAs per website category (Blog, Portfolio, E-Commerce), resolve the literal icon text bug in the sidebar caused by CSS font overrides, and establish a custom agent skill to prevent theme contrast and layout regressions in future sessions.

## What Changes

- **Custom Agent Skill**: Create `/home/rare/Dev/TBATS/.agent/skills/sandbox-high-fidelity-checks/SKILL.md` to record validation rules for theme legibility, polymorphic copy matching, and font override safety.
- **Header & Footer Content Adaptations**: Refactor all 5 header and 5 footer variants to dynamically display category-appropriate links (e.g., Stories/Articles for Blog, Works/Services for Portfolio) and hide the checkout bag trigger for non-commerce pages.
- **Hero Dynamic Call-to-Actions**: Pass dynamic `ctaText` values (e.g. "Read Latest Posts", "Explore Projects") from the sampler page to heroes.
- **HeroEditorial Visual Cleanup**: Replace the hardcoded Unsplash image inside `HeroEditorial.jsx` with a clean abstract geometric CSS block.
- **Material Symbols Font Exclude**: Refactor the wildcard sidebar font override in `demo.css` to exclude `.material-symbols-outlined` elements, fixing literal icon strings.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `ecommerce-sampler`: Refactor header/footer/hero variants, fix icon rendering stylesheets, and author a custom quality-assurance skill.

## Impact

- `src/demo/demo.css`: Refine font-family resets.
- `src/demo/components/Header/*`: Polymorphic headers.
- `src/demo/components/Footer/*`: Polymorphic footers.
- `src/demo/components/Hero/HeroEditorial.jsx`: Replace image with geometric block.
- `src/pages/EcommerceSamplerPage.jsx`: Dynamic hero properties.
- `.agent/skills/sandbox-high-fidelity-checks/SKILL.md`: Quality checks list.
