## ADDED Requirements

### Requirement: Preset Registry
The system SHALL maintain a registry of 5 e-commerce design presets, each defining a complete visual language.

#### Scenario: Preset registry contains all 5 presets
- **GIVEN** the preset registry initializes
- **THEN** it contains exactly 5 presets: `minimal`, `dark-luxury`, `editorial`, `bold`, `playful`
- **AND** each preset has a unique `id`, human-readable `label`, and `description`

#### Scenario: Preset defines complete CSS variable set
- **GIVEN** any preset from the registry
- **THEN** it defines CSS variables for:
  - Colors: `--color-bg`, `--color-surface`, `--color-primary`, `--color-secondary`, `--color-text`, `--color-muted`, `--color-border`, `--color-accent`
  - Typography: `--font-heading`, `--font-body`, `--font-mono`
  - Spacing: `--space-unit`, `--container-max`, `--radius`
  - Layout: `--hero-layout` (centered|editorial|split|full), `--product-grid` (grid|masonry|list|carousel), `--header-style` (centered|split|minimal|bold)
  - Effects: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--transition-base`

### Requirement: CSS Variable Injection
The system SHALL apply the active preset's CSS variables to the sampler page root.

#### Scenario: Preset change injects new variables
- **GIVEN** user switches from `minimal` to `dark-luxury`
- **WHEN** the preset changes
- **THEN** all `--color-*`, `--font-*`, `--space-*`, `--radius`, `--shadow-*`, `--transition-*` variables update on `[data-preset]` element
- **AND** the DOM updates within 100ms (no visual flash)

#### Scenario: Variables scoped to sampler only
- **GIVEN** preset variables are applied
- **THEN** they are scoped to `[data-preset]` attribute on sampler root
- **AND** main site styles remain unaffected

### Requirement: Component Variant Mapping
Each preset SHALL map to specific component variants for Header, Hero, CategoryBar, ProductGrid, ProductCard, Footer.

#### Scenario: Preset defines component variant per component type
- **GIVEN** the `dark-luxury` preset
- **THEN** it specifies:
  - `Header: 'HeaderLuxury'` (logo left, nav center, icons right, gold accent line)
  - `Hero: 'HeroEditorial'` (asymmetric, headline left, image right, gold accent)
  - `CategoryBar: 'CategoryBarMinimal'` (horizontal scroll, subtle indicators)
  - `ProductGrid: 'ProductGridMasonry'` (uneven columns, varied aspect ratios)
  - `ProductCard: 'ProductCardLuxury'` (large image, serif name, gold price, hover zoom)
  - `Footer: 'FooterEditorial'` (multi-column, newsletter, social links)

#### Scenario: Variant components render based on active preset
- **GIVEN** active preset is `editorial`
- **WHEN** `EcommerceDemo` renders
- **THEN** it dynamically imports and renders `HeroEditorial`, `ProductGridMasonry`, etc.
- **AND** switching preset swaps component variants without remounting entire page

### Requirement: Preset Definitions (Design Tokens)

#### Minimal Preset
- Colors: Neutral grayscale, single accent (#000/#fff + #2563eb)
- Fonts: Inter (heading + body), JetBrains Mono (mono)
- Layout: Centered hero, 4-col grid, generous whitespace, 8px radius
- Components: Minimal header, centered hero, grid product grid, clean cards

#### Dark Luxury Preset
- Colors: Near-black bg (#0a0a0a), gold primary (#d4a843), warm grays
- Fonts: Playfair Display (heading), Inter (body)
- Layout: Editorial hero, masonry grid, sharp corners (0px radius)
- Components: Luxury header, editorial hero, masonry grid, luxury cards

#### Editorial Preset
- Colors: Off-white bg (#fafafa), charcoal text (#1a1a1a), emerald accent (#059669)
- Fonts: Playfair Display (heading), Inter (body)
- Layout: Asymmetric hero, masonry grid, moderate radius (8px)
- Components: Split header, editorial hero, masonry grid, editorial cards

#### Bold/Expressive Preset
- Colors: High contrast, vibrant accent (#ef4444 or #f97316), pure black/white
- Fonts: Outfit (heading), Inter (body)
- Layout: Full-bleed hero, dynamic grid, large radius (16px)
- Components: Bold header, full-bleed hero, dynamic grid, bold cards

#### Playful/Soft Preset
- Colors: Pastel palette, soft accent (#f472b6 or #60a5fa), warm white bg
- Fonts: Outfit (heading), Inter (body)
- Layout: Rounded hero, card-based grid, large radius (24px)
- Components: Centered header, rounded hero, card grid, soft cards