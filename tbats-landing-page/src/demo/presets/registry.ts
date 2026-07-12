export type PresetId =
  | 'minimal'
  | 'dark-luxury'
  | 'editorial'
  | 'bold'
  | 'playful';

export type HeaderVariant =
  | 'HeaderMinimal'
  | 'HeaderLuxury'
  | 'HeaderEditorial'
  | 'HeaderBold'
  | 'HeaderPlayful';

export type HeroVariant =
  | 'HeroMinimal'
  | 'HeroLuxury'
  | 'HeroEditorial'
  | 'HeroBold'
  | 'HeroPlayful';

export type CategoryBarVariant =
  | 'CategoryBarMinimal'
  | 'CategoryBarLuxury'
  | 'CategoryBarEditorial'
  | 'CategoryBarBold'
  | 'CategoryBarPlayful';

export type ProductGridVariant =
  | 'ProductGridGrid'
  | 'ProductGridMasonry'
  | 'ProductGridList'
  | 'ProductGridCarousel';

export type ProductCardVariant =
  | 'ProductCardMinimal'
  | 'ProductCardLuxury'
  | 'ProductCardEditorial'
  | 'ProductCardBold'
  | 'ProductCardPlayful';

export type FooterVariant =
  | 'FooterMinimal'
  | 'FooterLuxury'
  | 'FooterEditorial'
  | 'FooterBold'
  | 'FooterPlayful';

export interface PresetComponents {
  Header: HeaderVariant;
  Hero: HeroVariant;
  CategoryBar: CategoryBarVariant;
  ProductGrid: ProductGridVariant;
  ProductCard: ProductCardVariant;
  Footer: FooterVariant;
}

export interface PresetCssVars {
  '--color-bg': string;
  '--color-surface': string;
  '--color-primary': string;
  '--color-secondary': string;
  '--color-text': string;
  '--color-muted': string;
  '--color-border': string;
  '--color-accent': string;
  '--font-heading': string;
  '--font-body': string;
  '--font-mono': string;
  '--space-unit': string;
  '--container-max': string;
  '--radius': string;
  '--shadow-sm': string;
  '--shadow-md': string;
  '--shadow-lg': string;
  '--transition-base': string;
  '--hero-layout': 'centered' | 'editorial' | 'split' | 'full';
  '--product-grid': 'grid' | 'masonry' | 'list' | 'carousel';
  '--header-style': 'minimal' | 'centered' | 'split' | 'bold';
}

export interface Preset {
  id: PresetId;
  label: string;
  description: string;
  cssVars: PresetCssVars;
  components: PresetComponents;
}

export const presets: readonly Preset[] = [
  {
    id: 'minimal',
    label: 'Minimalist',
    description: 'Clean typography, ample whitespace, and focused grid systems.',
    cssVars: {
      '--color-bg': '#ffffff',
      '--color-surface': '#fafafa',
      '--color-primary': '#000000',
      '--color-secondary': '#71717a',
      '--color-text': '#18181b',
      '--color-muted': '#a1a1aa',
      '--color-border': '#e4e4e7',
      '--color-accent': '#2563eb',
      '--font-heading': "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      '--font-body': "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      '--font-mono': "'JetBrains Mono', monospace",
      '--space-unit': '8px',
      '--container-max': '1200px',
      '--radius': '8px',
      '--shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
      '--shadow-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      '--shadow-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      '--transition-base': 'all 0.2s ease',
      '--hero-layout': 'centered',
      '--product-grid': 'grid',
      '--header-style': 'minimal',
    },
    components: {
      Header: 'HeaderMinimal',
      Hero: 'HeroMinimal',
      CategoryBar: 'CategoryBarMinimal',
      ProductGrid: 'ProductGridGrid',
      ProductCard: 'ProductCardMinimal',
      Footer: 'FooterMinimal',
    },
  },
  {
    id: 'dark-luxury',
    label: 'Dark Luxury',
    description: 'Rich dark backdrops, serif elegance, and golden accents.',
    cssVars: {
      '--color-bg': '#0a0a0a',
      '--color-surface': '#121212',
      '--color-primary': '#d4a843',
      '--color-secondary': '#a3a3a3',
      '--color-text': '#f5f5f5',
      '--color-muted': '#737373',
      '--color-border': '#262626',
      '--color-accent': '#d4a843',
      '--font-heading': "'Playfair Display', Georgia, serif",
      '--font-body': "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      '--font-mono': "'JetBrains Mono', monospace",
      '--space-unit': '10px',
      '--container-max': '1400px',
      '--radius': '0px',
      '--shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.3)',
      '--shadow-md': '0 4px 12px rgba(0, 0, 0, 0.5)',
      '--shadow-lg': '0 12px 24px rgba(0, 0, 0, 0.6)',
      '--transition-base': 'all 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
      '--hero-layout': 'editorial',
      '--product-grid': 'masonry',
      '--header-style': 'centered',
    },
    components: {
      Header: 'HeaderLuxury',
      Hero: 'HeroLuxury',
      CategoryBar: 'CategoryBarLuxury',
      ProductGrid: 'ProductGridMasonry',
      ProductCard: 'ProductCardLuxury',
      Footer: 'FooterLuxury',
    },
  },
  {
    id: 'editorial',
    label: 'Editorial',
    description: 'High contrast off-white, editorial typography, and asymmetric alignment.',
    cssVars: {
      '--color-bg': '#fafafa',
      '--color-surface': '#ffffff',
      '--color-primary': '#1a1a1a',
      '--color-secondary': '#4b5563',
      '--color-text': '#111827',
      '--color-muted': '#9ca3af',
      '--color-border': '#e5e7eb',
      '--color-accent': '#059669',
      '--font-heading': "'Playfair Display', Georgia, serif",
      '--font-body': "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      '--font-mono': "'JetBrains Mono', monospace",
      '--space-unit': '8px',
      '--container-max': '1100px',
      '--radius': '8px',
      '--shadow-sm': '0 1px 2px rgba(0, 0, 0, 0.02)',
      '--shadow-md': '0 4px 10px rgba(0, 0, 0, 0.05)',
      '--shadow-lg': '0 12px 20px rgba(0, 0, 0, 0.08)',
      '--transition-base': 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      '--hero-layout': 'split',
      '--product-grid': 'masonry',
      '--header-style': 'split',
    },
    components: {
      Header: 'HeaderEditorial',
      Hero: 'HeroEditorial',
      CategoryBar: 'CategoryBarEditorial',
      ProductGrid: 'ProductGridMasonry',
      ProductCard: 'ProductCardEditorial',
      Footer: 'FooterEditorial',
    },
  },
  {
    id: 'bold',
    label: 'Bold Neo-brutalism',
    description: 'High contrast vibrant accents, hard borders, and retro aesthetic.',
    cssVars: {
      '--color-bg': '#ffffff',
      '--color-surface': '#f3f4f6',
      '--color-primary': '#000000',
      '--color-secondary': '#374151',
      '--color-text': '#000000',
      '--color-muted': '#6b7280',
      '--color-border': '#000000',
      '--color-accent': '#ef4444',
      '--font-heading': "'Outfit', 'Inter', sans-serif",
      '--font-body': "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      '--font-mono': "'JetBrains Mono', monospace",
      '--space-unit': '6px',
      '--container-max': '1200px',
      '--radius': '16px',
      '--shadow-sm': '2px 2px 0px rgba(0, 0, 0, 1)',
      '--shadow-md': '4px 4px 0px rgba(0, 0, 0, 1)',
      '--shadow-lg': '8px 8px 0px rgba(0, 0, 0, 1)',
      '--transition-base': 'all 0.15s ease-in-out',
      '--hero-layout': 'full',
      '--product-grid': 'grid',
      '--header-style': 'bold',
    },
    components: {
      Header: 'HeaderBold',
      Hero: 'HeroBold',
      CategoryBar: 'CategoryBarBold',
      ProductGrid: 'ProductGridGrid',
      ProductCard: 'ProductCardBold',
      Footer: 'FooterBold',
    },
  },
  {
    id: 'playful',
    label: 'Playful Pastel',
    description: 'Soft organic shapes, gentle pastel gradients, and bouncy animations.',
    cssVars: {
      '--color-bg': '#fffafb',
      '--color-surface': '#fff1f2',
      '--color-primary': '#db2777',
      '--color-secondary': '#4b5563',
      '--color-text': '#1f2937',
      '--color-muted': '#9ca3af',
      '--color-border': '#fecdd3',
      '--color-accent': '#f472b6',
      '--font-heading': "'Outfit', 'Inter', sans-serif",
      '--font-body': "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      '--font-mono': "'JetBrains Mono', monospace",
      '--space-unit': '8px',
      '--container-max': '1150px',
      '--radius': '24px',
      '--shadow-sm': '0 2px 8px rgba(219, 39, 119, 0.05)',
      '--shadow-md': '0 8px 24px rgba(219, 39, 119, 0.08)',
      '--shadow-lg': '0 16px 40px rgba(219, 39, 119, 0.12)',
      '--transition-base': 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
      '--hero-layout': 'centered',
      '--product-grid': 'carousel',
      '--header-style': 'centered',
    },
    components: {
      Header: 'HeaderPlayful',
      Hero: 'HeroPlayful',
      CategoryBar: 'CategoryBarPlayful',
      ProductGrid: 'ProductGridCarousel',
      ProductCard: 'ProductCardPlayful',
      Footer: 'FooterPlayful',
    },
  },
] as const;

export const getPresetById = (id: PresetId): Preset =>
  presets.find((p) => p.id === id)!;