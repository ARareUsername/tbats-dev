## Context

We are redesigning the `tbats-landing-page` codebase to serve as `tbats.dev`—a premium, dark, sleek landing page for a web development agency. The target audience consists of business owners and consumers with little to no technical background. The page needs to wow visitors immediately with animations, present a clear, non-technical breakdown of how we work (starting from specifications), list competitive PHP pricing tiers, showcase testimonials, and offer a simple way to schedule a consultation.

## Goals / Non-Goals

**Goals:**
- Implement a premium, responsive dark-sleek theme with smooth micro-animations.
- Create an interactive feature (e.g. "Interactive Pricing & Layout Estimator") that lets users visual-select website components and see a simulated web preview and live PHP price.
- Clearly present the 5-step development lifecycle (Specs -> Design -> Develop -> Optimize -> Launch).
- Show 3 transparent price tiers in Philippine Pesos (PHP).
- Create a beautiful testimonial grid/carousel and a client consultation form.
- Keep the design accessible, clean, and free of overly technical jargon.

**Non-Goals:**
- Setting up a real email server or backend CRM for the contact form (the submission will be simulated with a success state and success toast in React).
- Creating multiple standalone subpages (it will be a single-page website with smooth anchor navigation).

## Decisions

### 1. Theme and Aesthetic Choice
We will offer 3 design options to the user:
- **Option A (Cyber-Minimalism & Neon Glassmorphism)**: Deep space `#0D0E15` base, frosted glass cards with gradient neon borders (violet to cyan), floating glowing orbs, modern sans-serif typography (Inter/Outfit).
- **Option B (Bento Grid & Warm Accents)**: Ink-dark `#121214` base, golden/amber highlights, modular grid structures to split sections into neat, visual cards.
- **Option C (Artistic Pure Black & Serif)**: Pure black `#000000` base, metallic silver text, large elegant serif headings, high-contrast minimal layouts.

*Default implementation will lean towards Option A (Cyber-Minimalism & Neon Glassmorphism) as it aligns with the name `tbats.dev` and provides the maximum "wow" factor with neon highlights.*

### 2. Replacing the Forecasting Decomposition Simulator
The old SVG mathematical decomposition simulator will be replaced with an **"Interactive Web Estimator"**:
- Left Panel: Interactive checkboxes/sliders for project parameters (e.g., Number of Pages, Custom Logo, E-Commerce, Blog/CMS).
- Right Panel: A dynamic visual representation of a website wireframe (header, footer, hero, and section blocks appearing/disappearing based on selections) and a real-time price calculator showing the total in Philippine Pesos (PHP).
- Why: This keeps the interactive element but pivots it to showcase web design capabilities in an engaging, consumer-friendly way.

### 3. Step-by-Step Client Journey
We will build a visually appealing Timeline component displaying our 5-phase process:
1. **Specs & Discovery**: Discussing specifications, goals, and layout blueprints.
2. **Visual Mockups**: High-fidelity custom designs matching the client's brand.
3. **Responsive Development**: Turning mockups into lightning-fast React/Vite code.
4. **Speed & SEO Optimization**: Fine-tuning load times, responsiveness, and Google ranking readiness.
5. **Launch & Support**: Pushing the site live and providing guidance.

### 4. Pricing Architecture (PHP)
Three distinct, profitable pricing tiers will be laid out in cards:
- **Starter (₱29,000)**: Single-page site, responsive, contact form, basic SEO.
- **Grow (₱69,000)**: Multi-page site (up to 5 pages), basic CMS, advanced animations, full SEO setup.
- **Scale (₱129,000+)**: E-Commerce integration, payment gateways, custom web applications, advanced interactive tools.

## Risks / Trade-offs

- **Risk**: Excessive custom CSS animations causing lag on low-end devices.
  - **Mitigation**: Rely on hardware-accelerated CSS properties (`transform`, `opacity`) and avoid animating width/height or top/left directly. Use CSS keyframes with `will-change` hints where necessary.
- **Risk**: Moving away from the mathematical theme might lose some unique branding.
  - **Mitigation**: Rebrand the name "TBATS" in a fun, tech-focused way (e.g. "Tech, Branding, Animations, Trust, and Scale" or "The Best Agency Tech Solutions").
