import type { BaseItem } from './products';

export interface PortfolioItem extends BaseItem {
  client: string;
  year: string;
}

export const portfolioItems: readonly PortfolioItem[] = [
  {
    id: 'w1',
    name: 'Aether Wealth Client App',
    category: 'branding',
    description:
      'Bespoke corporate identity guidelines, typography systems, and high-fidelity interface design for a premium wealth manager.',
    client: 'Aether Group',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45f?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'w2',
    name: 'Kroma WebGL Creative Portfolio',
    category: 'development',
    description:
      'An immersive online showcase demonstrating work for an award-winning creative studio, utilizing web 3D rendering.',
    client: 'Kroma Studio',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89ab106f6e?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'w3',
    name: 'Novus E-Commerce Architecture',
    category: 'development',
    description:
      'A headless storefront system constructed with dynamic theme switching and a persistent checkout flow.',
    client: 'Novus Retail',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'w4',
    name: 'Vesper Luxury Brand Guidelines',
    category: 'branding',
    description:
      'Minimal print mockups, foil-stamped business cards, and packaging concepts for an organic luxury perfume range.',
    client: 'Vesper Cosmetics',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1595428774241-dec231879fc3?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'w5',
    name: 'Solaris Energy Dashboard UI',
    category: 'development',
    description:
      'High-density metrics screens with interactive line grids showing global solar harvest fields in real time.',
    client: 'Solaris Global',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1517999144091-3d9dca6d1e43?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'w6',
    name: 'Nebula Creative Identity Design',
    category: 'branding',
    description: 'Logo variants, dynamic generative graphics, and editorial brand assets for a post-production studio.',
    client: 'Nebula Media',
    year: '2026',
    image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?auto=format&fit=crop&w=400&h=500&q=80',
  },
] as const;

export default portfolioItems;