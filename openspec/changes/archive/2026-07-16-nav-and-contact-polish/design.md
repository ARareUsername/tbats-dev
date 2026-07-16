## Context

We need to resolve three primary visual and usability issues:
1. The centered header navigation dropdowns are shifted too far to the right, overflowing the layout on narrow screens.
2. The blurred Contact Modal overlay causes interaction complexity; all CTAs should redirect directly to the `/contact` route.
3. The Contact page form looks boxed-in; we will restructure it so only the input form has a card container, while the headers use gradient serif typography. Buttons will be updated to be highly rounded capsule shapes styled in emerald green.

Additionally, we are overhauling several visual components across the landing page and pricing view: scaling up the Hero's floating cards, utilizing the Playfair Display serif font for price values, adjusting the agency upfront fee comparison copy to ₱15,000–₱30,000, explicitly referencing Starter features within the Growth Plan, adding plain-language technical descriptions to all tooltips, and applying an eye-strain-friendly white-to-green gradient to the project gallery section backdrop.

Finally, we are modernizing the About page with an agency narrative, a "Since 2026" marker, and a 4-column multilingual strategist cards grid showcasing custom 3D character avatars and languages spoken. The "Ready to Get Started" CTA is transitioned to the global layouts page to span the full viewport width on every route with distinct colors.

## Goals / Non-Goals

**Goals:**
- Shift header dropdown alignment slightly leftward (`transform: translateX(-35%)` relative to `left: 0`).
- Remove the blurred Contact Modal state and overlay from `layout.tsx`.
- Map all CTA triggers to link directly to `/contact`.
- Style buttons as capsules (`border-radius: 9999px`) and colorize primary CTAs in green (`var(--color-accent)`).
- Restructure the contact page form so that only the form itself is wrapped in an editorial card, while the details blend into the page.
- Apply serif fonts and color gradients to contact headers.
- Update the budget selection dropdown in `ConsultationForm.tsx`.
- Scale up Hero overlapping metrics cards size.
- Style prices with a tall serif font face (`Playfair Display`).
- Update cost comparison copy on the pricing page.
- Modify the Growth Plan data benefits to highlight the Starter package and display superior multi-page advantages.
- Provide simple educational explanations for all `ⓘ` tooltips.
- Add a soft white-to-green gradient to the project gallery background.
- Refactor the About page with a "Since 2026" banner, a paraphrased intro, and a 4-column team list showing character avatars and languages.
- Append an "Our Story" section to the About page.
- Globalize the Ready to Get Started section to render at the bottom of every route above the footer, spanning the full screen width.

**Non-Goals:**
- Rewriting form submit logic.

## Decisions

### 1. Left-Biased Dropdown Alignments
- Modify `.dropdownMenu` in `Header.module.css` to use:
  ```css
  left: 0;
  transform: translateX(-35%);
  ```
  This positions the left edge of the menu slightly to the left of the hovered text button, ensuring it stays fully centered on the screen.

### 2. Direct Router Navigation
- Remove the overlay markup, `isContactOpen` state, and `openContactModal` context from `layout.tsx`.
- Replace all button click events triggering the modal with direct route transitions.
- Change CTA tags in `Header.tsx`, `Hero.tsx`, and `pricing.tsx` to utilize React Router `<Link to="/contact">`.

### 3. Capsule and Emerald Buttons
- **Global Buttons**: Modify `src/components/ui/Button.module.css` to update `border-radius: 9999px`.
- **Specific CTA Buttons**:
  - Update `Hero.module.css` primary/secondary `.heroLink` buttons to use `border-radius: 9999px`.
  - Update `.planButton` in `pricing.module.css` to use `border-radius: 9999px`.
  - Apply `background: var(--color-accent)` and `color: var(--bg-dark)` for primary CTAs to make them pop out.

### 4. Contact Form Restructure & Select Dropdown
- In `ConsultationForm.tsx`, remove the outer card wrapper surrounding the columns. Wrap only `<div className={styles.formContainer}>` inside `<div className={`editorial-card ${styles.formCard}`}>`.
- Set headers `.infoTitle` and `.formTitle` to use `font-family: var(--font-serif)` and apply the class `text-gradient`.
- In the budget selection `<Select>`, update options to Starter Plan, Growth Plan, and Merchant Plan.

### 5. Hero Card Dimensions & Pricing Serif Font
- **Enlarge Floating Cards**:
  - Scale standard card widths to `310px` and traffic card to `350px`. Increase padding to `1.5rem`.
- **Tall Serif Prices**:
  - Apply `font-family: var(--font-serif)` to `.priceSymbol` and `.priceAmount` in `pricing.module.css`. Increase price text thickness and size for a tall, premium serif look.

### 6. Copylist, Tooltips, and Gallery Backdrops
- **Upfront Cost Copy**: Update the intro paragraph in `app/routes/pricing.tsx` to read: "...Most traditional agencies charge ₱15,000 to ₱30,000 upfront..."
- **Growth Benefits**:
  - First feature item: `"Everything in Starter Plan"`.
  - Followed by multi-page highlights (up to 8 pages, advanced keyword mapping, basic shop checkout).
- **Plain-Language Tooltips**: Update title attributes to explain ADA, Google Workspace, Google Business, and custom code features in a user-friendly manner.
- **Projects Gallery Background**: Set the section background in `ProjectGallery.module.css` to use a gradient from dark/white to `rgba(16, 185, 129, 0.04)`.

### 7. About Page & Multilingual Team Cards Grid
- **Header**: Render `"Since 2026"` badge. Update title and description to paraphrased custom copy.
- **Team Grid**: Remove list references inside `about.tsx` and build a 4-column responsive grid layout using `.teamCard` and `.teamGrid` definitions.
- **Content**: Display Karl, Emmanuel, Mark, and Daile. Show character avatar image on top, name, role, and languages:
  - Karl: `"English, Tagalog, Kapampangan"`
  - Emmanuel: `"English, Tagalog, Kapampangan"`
  - Mark: `"English, Tagalog, Spanish"`
  - Daile: `"English, Tagalog, French"`
- **Our Story Section**: Render a narrative container with professional placeholder text at the bottom.

### 8. Global Full-Width Ready CTA
- Refactor `layout.tsx` to place `<ReadyToGetStarted />` directly above `<Footer />`. Remove it from individual route files to avoid duplicates.
- Refactor `ReadyToGetStarted.module.css` to remove card borders and containers, making it full width (`width: 100vw; margin: 0; border-radius: 0; border-left: none; border-right: none;`).
- Style background in dark mode as `#060e0a` and light mode as `#f0f7f4`.

## Risks / Trade-offs

- **[Risk]**: Full width sections on narrow screens can look stretched if copy is too wide.
  - **[Mitigation]**: Keep the text within a nested `.content` wrapper inside `ReadyToGetStarted.tsx` that enforces a `max-width` limit (e.g. 700px) and margin centering.
