## 1. Asset Setup

- [x] 1.1 Copy the generated Philippines map background image to the public/images directory
- [x] 1.2 Verify the image asset is accessible in the public workspace

## 2. Hero & Bento Updates

- [x] 2.1 Revert Hero heading font-family to var(--font-heading) (sans display Outfit) in Hero.module.css
- [x] 2.2 Reposition Hero overlapping cards diagonally (A left, B right, C bottom-left) in Hero.module.css
- [x] 2.3 Update Hero.tsx traffic surge percentage to +67%
- [x] 2.4 Load philippines-bg.jpg background image with gradient overlays (light/dark adaptive) in BentoServices.module.css

## 3. Navbar dropdowns & scroll animations

- [x] 3.1 Implement scroll listener in Header.tsx to toggle isScrolled state
- [x] 3.2 Add scrolled styles in Header.module.css (floating, rounded corners, detached margins)
- [x] 3.3 Add centered dropdown wrapper styles (left: 50%, transform: translateX(-50%)) and wider dimensions in Header.module.css
- [x] 3.4 Add title and short description text sub-labels inside Header.tsx dropdown items
- [x] 3.5 Style the sub-labels and title typography in Header.module.css

## 4. Pricing page overhaul

- [x] 4.1 Update src/data/pricing.ts data definitions to PHP packages (Starter, Growth, Merchant) and remove the care plan
- [x] 4.2 Rebuild app/routes/pricing.tsx layout structure (Cost header, custom plans grid, cancellations footer note)
- [x] 4.3 Implement glowing border, different colors, and taller/larger styling on the Growth package card in pricing.tsx
- [x] 4.4 Add "Need Something Different?" CTA card linking to the contact modal in pricing.tsx
- [x] 4.5 Add "Every Plan Includes" feature list block in pricing.tsx
- [x] 4.6 Append FAQAccordion and bottom colored slogan banner with Text/Message modal action buttons in pricing.tsx

## 5. Footer columns & verification

- [x] 5.1 Update Footer.tsx link layout to separate "Services" and "Company" column grids
- [x] 5.2 Validate code quality by running linter, formatting, typechecks, and production bundle build
