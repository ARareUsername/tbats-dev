import type { ReactNode } from 'react';

export interface BrandProps {
  brandName?: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
}

export interface DemoCategory {
  name: string;
  slug: string;
}

export interface CategoryBarProps {
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  categories: DemoCategory[];
}

export interface ProductGridProps {
  children: ReactNode;
}

export interface DemoProduct {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  variants: string[];
  image: string;
}

export interface ProductCardProps {
  product: DemoProduct;
  type: string;
}

export interface FooterProps {
  brandName?: string;
}
