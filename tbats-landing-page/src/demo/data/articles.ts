import type { BaseItem } from './products';

export interface Article extends BaseItem {
  date: string;
  readTime: string;
}

export const articles: readonly Article[] = [
  {
    id: 'a1',
    name: 'Designing the Future: The Generative Interface Era',
    category: 'design',
    description:
      'An in-depth look at how advanced generative models are reshaping digital canvas layouts and modern micro-interactions.',
    date: 'July 12, 2026',
    readTime: '6 min read',
    image:
      'https://images.unsplash.com/photo-1558655146-9f40138ed9b9?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'a2',
    name: 'Under the Hood of a Headless E-Commerce Engine',
    category: 'technology',
    description:
      'Exploring high-performance GraphQL endpoints, static build hooks, edge caching strategies, and instant checkout loops.',
    date: 'June 28, 2026',
    readTime: '10 min read',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45f?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'a3',
    name: 'Creating Resilient and Scalable Theme Systems',
    category: 'design',
    description:
      'A structural guide to establishing three-layer design tokens mapping from base values down to interactive component elements.',
    date: 'May 15, 2026',
    readTime: '8 min read',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'a4',
    name: 'The Case for Spring Physics in User Interfaces',
    category: 'design',
    description:
      'Why micro-interactions built with spring animations dramatically improve readability, visual comfort, and user retention.',
    date: 'April 20, 2026',
    readTime: '4 min read',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b2527d6f?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'a5',
    name: 'Optimizing Cumulative Layout Shifts at the Edge',
    category: 'technology',
    description:
      'How to write custom edge middleware to pre-render dynamic slots, preventing shifting and improving Google Lighthouse scores.',
    date: 'March 10, 2026',
    readTime: '7 min read',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b2527d6f?auto=format&fit=crop&w=400&h=500&q=80',
  },
  {
    id: 'a6',
    name: 'Mastering Asymmetric Layouts in Editorial Design',
    category: 'design',
    description:
      'A study of whitespace density, off-center headings, and delicate grid rules inspired by modern fashion journals.',
    date: 'Feb 18, 2026',
    readTime: '5 min read',
    image:
      'https://images.unsplash.com/photo-1583524004642-952a2b3a5b7b?auto=format&fit=crop&w=400&h=500&q=80',
  },
] as const;

export default articles;
