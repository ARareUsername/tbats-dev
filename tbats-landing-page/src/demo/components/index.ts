// @ts-nocheck
// Header imports
import HeaderMinimal from './Header/HeaderMinimal';
import HeaderLuxury from './Header/HeaderLuxury';
import HeaderEditorial from './Header/HeaderEditorial';
import HeaderBold from './Header/HeaderBold';
import HeaderPlayful from './Header/HeaderPlayful';

// Hero imports
import HeroMinimal from './Hero/HeroMinimal';
import HeroLuxury from './Hero/HeroLuxury';
import HeroEditorial from './Hero/HeroEditorial';
import HeroBold from './Hero/HeroBold';
import HeroPlayful from './Hero/HeroPlayful';

// CategoryBar imports
import CategoryBarMinimal from './CategoryBar/CategoryBarMinimal';
import CategoryBarLuxury from './CategoryBar/CategoryBarLuxury';
import CategoryBarEditorial from './CategoryBar/CategoryBarEditorial';
import CategoryBarBold from './CategoryBar/CategoryBarBold';
import CategoryBarPlayful from './CategoryBar/CategoryBarPlayful';

// ProductGrid imports
import ProductGridGrid from './ProductGrid/ProductGridGrid';
import ProductGridMasonry from './ProductGrid/ProductGridMasonry';
import ProductGridList from './ProductGrid/ProductGridList';
import ProductGridCarousel from './ProductGrid/ProductGridCarousel';

// ProductCard imports
import ProductCardMinimal from './ProductCard/ProductCardMinimal';
import ProductCardLuxury from './ProductCard/ProductCardLuxury';
import ProductCardEditorial from './ProductCard/ProductCardEditorial';
import ProductCardBold from './ProductCard/ProductCardBold';
import ProductCardPlayful from './ProductCard/ProductCardPlayful';

// Footer imports
import FooterMinimal from './Footer/FooterMinimal';
import FooterLuxury from './Footer/FooterLuxury';
import FooterEditorial from './Footer/FooterEditorial';
import FooterBold from './Footer/FooterBold';
import FooterPlayful from './Footer/FooterPlayful';

import type { ComponentType } from 'react';

export interface ComponentMap {
  HeaderMinimal: ComponentType<{ brandName?: string }>;
  HeaderLuxury: ComponentType<{ brandName?: string }>;
  HeaderEditorial: ComponentType<{ brandName?: string }>;
  HeaderBold: ComponentType<{ brandName?: string }>;
  HeaderPlayful: ComponentType<{ brandName?: string }>;

  HeroMinimal: ComponentType<{ title: string; subtitle: string; ctaText?: string }>;
  HeroLuxury: ComponentType<{ title: string; subtitle: string; ctaText?: string }>;
  HeroEditorial: ComponentType<{ title: string; subtitle: string; ctaText?: string }>;
  HeroBold: ComponentType<{ title: string; subtitle: string; ctaText?: string }>;
  HeroPlayful: ComponentType<{ title: string; subtitle: string; ctaText?: string }>;

  CategoryBarMinimal: ComponentType<{
    activeCategory: string;
    onSelectCategory: (category: string) => void;
    categories: { name: string; slug: string }[];
  }>;
  CategoryBarLuxury: ComponentType<{
    activeCategory: string;
    onSelectCategory: (category: string) => void;
    categories: { name: string; slug: string }[];
  }>;
  CategoryBarEditorial: ComponentType<{
    activeCategory: string;
    onSelectCategory: (category: string) => void;
    categories: { name: string; slug: string }[];
  }>;
  CategoryBarBold: ComponentType<{
    activeCategory: string;
    onSelectCategory: (category: string) => void;
    categories: { name: string; slug: string }[];
  }>;
  CategoryBarPlayful: ComponentType<{
    activeCategory: string;
    onSelectCategory: (category: string) => void;
    categories: { name: string; slug: string }[];
  }>;

  ProductGridGrid: ComponentType<{ children: React.ReactNode }>;
  ProductGridMasonry: ComponentType<{ children: React.ReactNode }>;
  ProductGridList: ComponentType<{ children: React.ReactNode }>;
  ProductGridCarousel: ComponentType<{ children: React.ReactNode }>;

  ProductCardMinimal: ComponentType<{
    product: {
      id: string;
      name: string;
      price: number;
      category: string;
      description: string;
      variants: string[];
      image: string;
    };
    type: string;
  }>;
  ProductCardLuxury: ComponentType<{
    product: {
      id: string;
      name: string;
      price: number;
      category: string;
      description: string;
      variants: string[];
      image: string;
    };
    type: string;
  }>;
  ProductCardEditorial: ComponentType<{
    product: {
      id: string;
      name: string;
      price: number;
      category: string;
      description: string;
      variants: string[];
      image: string;
    };
    type: string;
  }>;
  ProductCardBold: ComponentType<{
    product: {
      id: string;
      name: string;
      price: number;
      category: string;
      description: string;
      variants: string[];
      image: string;
    };
    type: string;
  }>;
  ProductCardPlayful: ComponentType<{
    product: {
      id: string;
      name: string;
      price: number;
      category: string;
      description: string;
      variants: string[];
      image: string;
    };
    type: string;
  }>;

  FooterMinimal: ComponentType<{ brandName?: string }>;
  FooterLuxury: ComponentType<{ brandName?: string }>;
  FooterEditorial: ComponentType<{ brandName?: string }>;
  FooterBold: ComponentType<{ brandName?: string }>;
  FooterPlayful: ComponentType<{ brandName?: string }>;
}

const componentMap: ComponentMap = {
  // Headers
  HeaderMinimal,
  HeaderLuxury,
  HeaderEditorial,
  HeaderBold,
  HeaderPlayful,

  // Heroes
  HeroMinimal,
  HeroLuxury,
  HeroEditorial,
  HeroBold,
  HeroPlayful,

  // CategoryBars
  CategoryBarMinimal,
  CategoryBarLuxury,
  CategoryBarEditorial,
  CategoryBarBold,
  CategoryBarPlayful,

  // ProductGrids
  ProductGridGrid,
  ProductGridMasonry,
  ProductGridList,
  ProductGridCarousel,

  // ProductCards
  ProductCardMinimal,
  ProductCardLuxury,
  ProductCardEditorial,
  ProductCardBold,
  ProductCardPlayful,

  // Footers
  FooterMinimal,
  FooterLuxury,
  FooterEditorial,
  FooterBold,
  FooterPlayful,
};

 
const typedComponentMap: Record<string, ComponentType<any>> = componentMap;

export { typedComponentMap as ComponentMap };