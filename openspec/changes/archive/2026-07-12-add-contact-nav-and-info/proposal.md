## Why

The current agency landing page lacks a dedicated "Contact" navigation link in both desktop and mobile headers, making it less intuitive for users seeking direct contact options. Additionally, while the site has a consultation form and simple footer links, it does not prominently display key contact info (email, physical location, availability, and timezone) next to the form to establish professional credibility.

## What Changes

- Add a "Contact" navigation link to the desktop and mobile navigation bars that scrolls the user smoothly to the contact section.
- Redesign the contact section (`#contact`) to use a responsive split-column layout on desktop viewports.
- Display the official agency email, location, and operating hours in a styled contact details panel next to the form.
- Add CSS transition hover styles for header navigation links to improve interactive feedback.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `agency-landing-page`: Update requirements to specify a two-column contact section layout with location, email, and timezone-aware availability info, plus a header navigation link for Contact.

## Impact

- **Affected Code**: `Header.jsx` (nav links), `ConsultationForm.jsx` (contact section layout and info details), and `index.css` (custom grid and hover states).
- **APIs**: No changes to backend APIs or dependencies.
- **Dependencies**: Uses standard React, Framer Motion, and Material Symbols already present in the workspace.
