## 1. Setup & Mappings

- [x] 1.1 Import `useState` and React Router's `Link` in `src/components/Portfolio.jsx`
- [x] 1.2 Define the `LAUNCHER_MAPPINGS` configurations mapping project + preset combos to distinct tags and description copy

## 2. Console Interface Layout

- [x] 2.1 Refactor the portfolio grid container into a single centered Control Deck card container
- [x] 2.2 Implement the project tab buttons (Aether Finance, Kroma Studio, Novus Retail) with state hooks
- [x] 2.3 Implement the preset selection pills (Minimal, Dark Luxury, Editorial, Bold, Playful) with state hooks
- [x] 2.4 Render active tag lists and description paragraphs dynamically based on active selection states

## 3. Navigation & Polish

- [x] 3.1 Implement the main "Launch Live Demo" primary routing button binding to the dynamic target URL
- [x] 3.2 Add Framer Motion spring layout animations to the active tab indicators and description transitions
- [x] 3.3 Ensure all legacy "View Code" button anchors and redundant link elements are removed from the portfolio card area

## 4. Build & Verify

- [x] 4.1 Run the local production build (`npm run build`) to verify that the refactored JSX files compile with zero bundling errors
- [x] 4.2 Validate that the landing page compiles cleanly and launcher links correctly initialize presets on target `/demo/:projectId` routes
