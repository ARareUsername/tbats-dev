# Proposal: Navigation Dropdown, Contact Form, & About Page Polish

## Why

We want to enhance the alignment of our navbar dropdown menus so that they are shifted slightly to the left, preventing right-edge viewport overlaps. We also want to simplify the conversion user experience by replacing the modal popup overlay with a direct route redirect to the `/contact` page.

On the Contact page, we want the form to blend seamlessly into the luxury theme. We will do this by keeping the contact details direct on the page backdrop, while wrapping only the form itself in a rounded glassmorphic card container. Styling headers with gradient-accented serif typography, mapping budget choices to our overhauled peso plans, and updating CTA buttons to have highly rounded capsule boundaries and glowing emerald accents will deliver a unified, premium look.

Furthermore, we want to overhaul the `/about` page to share our agency story. By adding a "Since 2026" marker, a paraphrased visual header, and a 4-column multilingual team layout showing individual developer roles, spoken languages, and custom 3D avatar graphics, we build high-converting trust. Moving the "Ready to Get Started" CTA to the global layout makes it span the full viewport width on every page with distinct colors and premium typography, maintaining consistency.

## What Changes

- **Dropdown Menu Positioning**: Adjust the dropdown horizontal offsets from a perfect `50%/50%` center to a left-biased centering (`left: 0%; transform: translateX(-35%);`).
- **Direct Routing Overlays Removal**: Remove the Contact Modal and blur state in `layout.tsx`. Update all "Start a Project" and "Get Started" triggers to route directly to `/contact`.
- **Contact Page Form Restructure**:
  - Remove the global card wrapper around the entire Contact section.
  - Place only the right-hand input form inside the glassmorphic `editorial-card` container.
  - Format titles in serif typography (`Playfair Display`) using the color shifting gradient text class (`.text-gradient`).
  - Update Budget selection dropdown options to show Starter, Growth, and Merchant plans.
- **Rounded Glassmorphic Buttons**:
  - Style buttons with capsule borders (`border-radius: 9999px`).
  - Style primary CTA buttons (especially "Start a Project") in the emerald green theme color (`var(--color-accent)`) with glowing hover states.
- **Hero Floating Cards Scaling**: Increase width, height, and padding of the three overlapping metrics cards.
- **Serif Price Values**: Render the currency symbol and numeric prices on the pricing page in the tall serif font face `Playfair Display`.
- **Agency Cost Comparison Copy**: Change upfront cost references inside the pricing section introduction copy to read `₱15,000 to ₱30,000`.
- **Growth Plan Features Upgrade**:
  - List "Everything in Starter Plan" as the first benefit in the Growth Plan.
  - Improved multi-page feature set descriptions to make the Growth Plan clearly superior.
- **Technical Tooltip Descriptions**: Revise tooltips on accessibility standards (ADA), business emails (Google Workspace), maps listings, and custom development to explain terms in simple, plain-language text.
- **Featured Projects Backdrop**: Apply a light gradient shifting from white/dark-bg to subtle emerald green (`rgba(16, 185, 129, 0.04)`) behind the projects grid to reduce eye strain.
- **About Page Overhaul**:
  - Add `"Since 2026"` badge at the top of the header.
  - Add paraphrased introduction: `"The Digital Craftsmen Behind Your Next Website. We build websites that convert visitors into customers. No code-bloat, no developer jargon — just clean, high-performance design built to scale your business."`
  - Meet the Team: `"Real builders crafting real platforms. A multilingual crew of designers, developers, and search analysts."`
  - Render a responsive 4-column developer grid containing custom 3D character avatars (`avatar-karl.jpg`, `avatar-emmanuel.jpg`, `avatar-mark.jpg`, `avatar-daile.jpg`), roles, and spoken languages.
  - Append an `"Our Story"` section at the bottom with professional narrative placeholder paragraphs.
- **Global Ready to Get Started**:
  - Move the `ReadyToGetStarted` component to `layout.tsx` (above `Footer.tsx`) to show on every single route.
  - Update layout styles to cover full screen width (`width: 100vw; max-width: none; border-radius: 0;`).
  - Colorize section background in a distinct tint (dark mode: deep forest black `#060e0a`; light mode: light sage `#f0f7f4`) with premium typographic sizes.

## Capabilities

- **Navbar Alignment**: Left-biased dropdown menus and direct router paths.
- **Contact Route Refactoring**: Card-wrapped form container, serif gradient titles, and updated budget dropdown choices.
- **Capsule Button Aesthetics**: Highly rounded, theme-colored glassmorphic primary and secondary buttons.
- **Hero & Projects Visual Overhaul**: Larger metrics cards and eye-strain reducing white-to-green project gallery background gradient.
- **Plain-Language Tooltips & Cost Copy**: Paraphrased cost references and detailed educational hover labels.
- **About Page & Multilingual Team**: 4-column developer cards with custom character avatars, multilingual labels, and historical narrative blocks.
- **Global Full-Width CTA**: Persistent fluid bottom subscription section on all routes.
