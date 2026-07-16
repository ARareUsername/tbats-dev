## 1. Navbar Dropdown Alignment

- [x] 1.1 Shift dropdown positions to left-biased centering (left: 0, transform: translateX(-35%)) in Header.module.css
- [x] 1.2 Verify dropdown layouts sit comfortably within the desktop navigation boundaries
- [x] 1.3 Copy generated character avatar images (avatar_karl, avatar_emmanuel, avatar_mark, avatar_daile) to the public/images/ directory
- [x] 1.4 Verify avatar images exist and are accessible in the public directory

## 2. Direct Router Transitions & Hero Scale

- [x] 2.1 Remove Contact Modal state, overlay markup, and openContactModal context in layout.tsx
- [x] 2.2 Change Start a Project navbar button in Header.tsx to navigate directly to /contact using Link
- [x] 2.3 Update Hero.tsx primary CTA button to link directly to /contact
- [x] 2.4 Update pricing.tsx plan CTA buttons and the "Need Something Different" CTA to link directly to /contact
- [x] 2.5 Update bottom slogan "Send us a Message" button in pricing.tsx to link directly to /contact
- [x] 2.6 Scale up Hero overlapping metrics cards size (width 310px/350px, increased padding) in Hero.module.css

## 3. Capsule & Emerald Buttons

- [x] 3.1 Update standard buttons in Button.module.css to have capsule borders (border-radius: 9999px)
- [x] 3.2 Adjust primary Button variant in Button.module.css to colorize in emerald green (var(--color-accent))
- [x] 3.3 Apply border-radius: 9999px to custom buttons (heroLink in Hero.module.css, planButton in pricing.module.css)

## 4. Pricing Page & Tooltip Updates

- [x] 4.1 Style price symbols and amounts with tall serif font face Playfair Display in pricing.module.css
- [x] 4.2 Paraphrase pricing cost comparison paragraph to mention ₱15,000 to ₱30,000 upfront fees in pricing.tsx
- [x] 4.3 Update Growth Plan benefits to explicitly state "Everything in Starter Plan" and detail superior features in pricing.tsx
- [x] 4.4 Update all technical hover tooltips with simple, plain-language descriptions in pricing.tsx

## 5. Contact Form Refactoring

- [x] 5.1 Remove outer editorial-card wrapping container in ConsultationForm.tsx
- [x] 5.2 Wrap right-hand input column in a new editorial-card styled container in ConsultationForm.tsx
- [x] 5.3 Update contact page and form headers to use serif typography (var(--font-serif)) and the text-gradient class
- [x] 5.4 Update budget Select options to display Starter, Growth, and Merchant subscription plan choices in ConsultationForm.tsx
- [x] 5.5 Apply capsule styling to the form submit button in ConsultationForm.tsx
- [x] 5.6 Clean up padding and flex configurations in ConsultationForm.module.css to support columns sitting directly on the background

## 6. About Page Overhaul & Multilingual Team

- [x] 6.1 Rebuild app/routes/about.tsx layout (Since 2026 badge, paraphrased titles and introduction text)
- [x] 6.2 Implement a 4-column responsive team cards grid in about.tsx
- [x] 6.3 Display developer profile avatars on top, names, roles, and lists of spoken languages in about.tsx
- [x] 6.4 Append "Our Story" section with detailed narrative placeholder paragraphs in about.tsx
- [x] 6.5 Style the About page, team grid, avatars, and story narrative blocks in a dedicated CSS module or global style sheet

## 7. Global Full-Width Ready CTA

- [x] 7.1 Refactor layout.tsx to import and place ReadyToGetStarted globally above Footer.tsx
- [x] 7.2 Remove redundant ReadyToGetStarted component imports and render tags from individual route pages (landing.tsx, etc.)
- [x] 7.3 Update ReadyToGetStarted.tsx and ReadyToGetStarted.module.css layout to span full width (width: 100vw, border-radius: 0)
- [x] 7.4 Style the global Ready block background in dark green (#060e0a) for dark mode and light sage (#f0f7f4) for light mode

## 8. Projects Gradient & Verification

- [x] 8.1 Apply light white-to-green gradient backdrop to ProjectGallery section in ProjectGallery.module.css
- [x] 8.2 Validate code quality by running linter, formatting, typechecks, and production bundle build
