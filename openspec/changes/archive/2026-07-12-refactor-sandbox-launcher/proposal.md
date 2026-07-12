## Why

Replacing the grid of three static case study cards under the landing page's Portfolio section with a single unified, interactive "Control Deck" launcher simplifies the landing page layout, removes the redundant "View Code" actions, and introduces an engaging, gamified console. This lets visitors preview the swappability of presets and select their starting project and design preset directly before launching the full-screen commerce sandbox.

## What Changes

- **Control Deck Console**: Replace the three individual project grid cards in `src/components/Portfolio.jsx` with a single unified, glassmorphic Control Deck.
- **Identity & Preset Selectors**: Implement interactive buttons/tabs to select the target project identity (*Aether Finance*, *Kroma Studio*, *Novus Retail*) and styling preset (*Minimal*, *Dark Luxury*, *Editorial*, *Bold*, *Playful*).
- **Dynamic Previews**: Render dynamic context descriptions and tags corresponding to the active project and preset selections.
- **Unified Route Launcher**: Add a single, high-impact "Launch Live Demo" button that routes directly to `/demo/:selectedProject?preset=:selectedPreset`.
- **Remove Code Links**: Completely remove "View Code" links and individual external project anchors from the portfolio section.

## Capabilities

### New Capabilities

*(None)*

### Modified Capabilities

- `portfolio`: The portfolio capabilities are modified to replace the static multi-card catalog display with a unified, interactive project and preset launcher deck that handles sandbox demo routing.

## Impact

- `src/components/Portfolio.jsx`: Will undergo a complete layout refactoring to replace case study cards with the Control Deck container.
- Main Landing Page (`/`): The landing page layout is modified to showcase the new interactive launcher section instead of static portfolio cards.
