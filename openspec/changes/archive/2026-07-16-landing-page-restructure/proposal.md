## Why

The current website layout is a long single-page application with hash anchors. To offer a cleaner, simpler user experience and improve conversion, we need a revised section flow on the landing page (highlighting web design services in Pampanga, features/services, a short 3x2 portfolio preview, value propositions, and direct "Text Us" and message options). Additionally, we need to transition the site to a multi-page structure with dedicated pages and an organized dropdown navigation bar.

## What Changes

- **Navigation Bar**: Update links to About, Services (dropdown with Web Design, SEO, AI Solutions, 1-on-1 Website Help), Our Work (dropdown with Case Studies, Portfolio), Pricing, and Contact. Links point to separate pages, and multi-destination links open left-aligned opaque dropdown menus. There is no Sandbox link in the header.
- **Hero Section**: Simplified clean intro.
- **Bento Box Section**: Introduces features/services with a small "What We Do" header, big "Web Design Services in Pampanga" title, description, and glassmorphic minimalist-icon cards.
- **Our Work Section**: Replaces the full gallery on the landing page with a 3x2 grid preview, followed by a "See Our Work" tab/button linking to the `/our-work` page.
- **Why Choose Us Section**: A simple layout showcasing: Affordable Pricing, Mobile Compatible Design, Rapid Deployment, Ongoing Support.
- **Ready to Get Started Section**: Short CTA block with "Text Us" (SMS link) and "Send us a Message" (launches the Contact Modal overlay).
- **Contact Modal**: A global modal for the Consultation Form (Get in Touch) that pops up with a blurred background when a user clicks "Start a Project" or "Send us a Message".
- **Page Transitions**: Smooth slide and fade transitions during route changes.
- **Multi-page Routing**: Transition the application to support dedicated pages/routes.

## Capabilities

### New Capabilities
- None

### Modified Capabilities
- `landing-page`: Restructure layout into Hero, Bento Box, 3x2 Our Work preview, Why Choose Us, and Ready to Get Started.
- `portfolio`: Relocate the full gallery component to a dedicated `/our-work` route and sub-routes `/our-work/case-studies` and `/our-work/portfolio`.
- `site-aesthetics-and-links`: Update the global navigation bar to support dropdown menus, route-based navigation, and SMS protocol links.

## Impact

- **app/routes.ts**: Configures React Router paths for `/about`, `/services/*`, `/our-work/*`, `/pricing`, and `/contact`.
- **components/Header.tsx**: Implements dropdown behavior and routes.
- **components/Hero.tsx**: Refines the hero presentation.
- **components/ServicesList.tsx** / **components/BentoServices.tsx**: Implements the Bento Box service grid with glassmorphic cards and custom minimalist icons.
- **components/ProjectGallery.tsx**: Redesigns the portfolio preview grid on the landing page and links to the full portfolio route.
