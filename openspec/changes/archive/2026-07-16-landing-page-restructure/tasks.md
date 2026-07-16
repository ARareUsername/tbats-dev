## 1. Routing Setup & Layouts

- [x] 1.1 Configure React Router routes in app/routes.ts for the new sub-pages
- [x] 1.2 Create route template page files in app/routes directory (about, pricing, contact, services, our-work)

## 2. Navigation Bar & Dropdowns

- [x] 2.1 Refactor Header.tsx to support dropdown menus and route links
- [x] 2.2 Add CSS rules in Header.module.css for dropdown card layout and transitions

## 3. Landing Page Restructuring

- [x] 3.1 Reorganize Landing Route sections in landing.tsx to the specified order
- [x] 3.2 Implement BentoServices.tsx service list grid component with glassmorphic cards
- [x] 3.3 Update ProjectGallery.tsx to display 3x2 grid preview with a "See Our Work" button linking to /our-work
- [x] 3.4 Create WhyChooseUs.tsx component presenting the four value propositions
- [x] 3.5 Create ReadyToGetStarted.tsx component containing SMS link and message route buttons

## 4. Verification & QA

- [x] 4.1 Validate code-safety with linting, formatting, and typechecking

## 5. Refinements & Polish

- [x] 5.1 Remove Sandbox navigation links and handlers from desktop and mobile headers
- [x] 5.2 Add CSS rules in Header.module.css to disable logo hover underlines and style solid, left-aligned dropdown menus
- [x] 5.3 Implement client-side theme toggle state and cookie helper in layout.tsx
- [x] 5.4 Integrate Framer Motion keyed route transitions wrapping <Outlet /> in layout.tsx
- [x] 5.5 Create Contact Modal overlay wrapping ConsultationForm in layout.tsx with blurred background
- [x] 5.6 Update landing.tsx CTA, Header "Start a Project" button, and page links to trigger the Contact Modal
- [x] 5.7 Rename "Fast to go live website" to "Rapid Deployment" and refine colors in WhyChooseUs.tsx
- [x] 5.8 Verify linter, formatting, typechecking, and build production output
