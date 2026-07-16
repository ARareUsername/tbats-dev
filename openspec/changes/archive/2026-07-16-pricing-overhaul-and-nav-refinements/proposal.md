# Proposal: Pricing Overhaul & Navigation Refinements

## Why

We want to align our subscription pricing tiers with the Philippine peso (PHP) economy, offering clear Starter, Growth, and Merchant packages designed for local businesses. To support conversion and visual hierarchy, we will overhaul the `/pricing` layout with custom popular highlights, tooltips, Cancelling Policies, FAQs, and a Need Something Different CTA. 

Additionally, we will polish the navigation and Hero layout by reverting back to the clean Outfit/sans typography, adding sub-descriptions to the dropdown items to clarify our services, implementing a responsive scroll-detached rounded floating navbar, and swapping the bento grid section background to an elegant digital asset representing the Philippines.

## What Changes

- **Typography & Hero Polish**: Revert the Hero heading back to the Outfit sans font, adjust floating card coordinates to a balanced diagonal layout, and set the visitor growth card to show `+67%`.
- **Philippines Bento Backdrop**: Add the new digital map of the Philippines as the background of the services bento grid with theme-adaptive overlays.
- **Header Dropdowns with Descriptions**: Expand dropdown links under Services and Our Work to include small, centered, descriptive captions beneath each link title, and increase dropdown box widths.
- **Scroll-Detached Rounded Navbar**: Implement a scroll listener in `Header.tsx` to transform the header into a detached, floating, rounded bar once the user scrolls down.
- **Full Pricing Package Overhaul**:
  - **Starter**: ₱1,499/mo (₱2,999 setup) for a single-page landing site.
  - **Growth (Most Popular)**: ₱2,999/mo (₱4,999 setup) for a 5-to-8 page site. Make this card longer (taller) and add a glowing text/border outline highlight.
  - **Merchant**: ₱5,999/mo (₱9,999 setup) for full e-commerce + payment integrations.
  - Remove Care Plan.
- **Pricing Content & Standard Inclusions**:
  - Paraphrased agency cost-comparison header ("Stop losing customers...").
  - "No contracts. Cancel anytime" guarantee note.
  - "Need Something Different?" CTA section linking to the contact modal.
  - "Every Plan Includes" grid presenting standard features (Custom Design, Domain/Hosting/Security, Mobile Responsive, Ongoing Support).
  - Bottom Slogan Section: Separately styled footer block displaying the 5-day preview slogan with Text/Message buttons.
- **Footer Structure**: Divide links in the footer under separate "Services" and "Company" columns.

## Capabilities

- **Hero & Navbar Refinements**: Sans typography, balanced floats, and scroll-detached floating bar.
- **Services Philippines Backdrop**: Philippines map overlay.
- **Descriptive Header Dropdowns**: Multi-column styled dropdowns with captions and centered alignment.
- **Pricing Page Redesign**: Local PHP packages, glowing Growth card, standard inclusions, cancellation note, different CTA, and bottom slogan block.
- **Footer Updates**: Columns for Services and Company.
