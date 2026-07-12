export interface Category {
  name: string;
  slug: string;
}

export const categories: readonly Category[] = [
  { name: 'All Products', slug: 'all' },
  { name: 'Furniture', slug: 'furniture' },
  { name: 'Lighting', slug: 'lighting' },
  { name: 'Kitchenware', slug: 'kitchenware' },
  { name: 'Textiles', slug: 'textiles' },
  { name: 'Accessories', slug: 'accessories' },
  { name: 'Stationery', slug: 'stationery' },
] as const;

export default categories;
