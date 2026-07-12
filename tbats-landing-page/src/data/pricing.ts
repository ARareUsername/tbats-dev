export type TierId = 'starter' | 'growth' | 'custom';

export interface PricingTier {
  id: TierId;
  name: string;
  price: string;
  priceNote?: string;
  desc: string;
  benefits: readonly string[];
  highlight?: boolean;
}

export interface CarePlan {
  name: string;
  price: string;
  desc: string;
  benefits: readonly string[];
}

export const starter: PricingTier = {
  id: 'starter',
  name: 'Starter',
  price: '₱20,000',
  priceNote: 'one-time',
  desc: 'Perfect for barbershops, cafés, and thrift stores ready to look like a real brand.',
  benefits: [
    'Look like an established brand, not just a Facebook page.',
    'Live in 2–3 weeks — get found on Google, not only Facebook.',
    'Customers reach you 24/7 through a real contact form.',
    'We set up your Google Business Profile so locals find you.',
  ],
};

export const growth: PricingTier = {
  id: 'growth',
  name: 'Growth',
  price: '₱49,000',
  priceNote: 'one-time',
  desc: 'For owners who want to grow and manage their own content with confidence.',
  benefits: [
    'Update your own site in minutes — no waiting on a developer.',
    'See which pages bring customers, so you know what works.',
    'Rank higher on Google with built-in local SEO.',
    'Room to grow — up to 10 pages, a blog, and more.',
  ],
  highlight: true,
};

export const custom: PricingTier = {
  id: 'custom',
  name: 'Custom',
  price: "Let's scope together",
  desc: 'E-commerce, booking, or a bigger platform built around your needs.',
  benefits: [
    "E-commerce, booking, or a larger platform? We'll scope it with you.",
    'Priced around your needs — no template, no jargon.',
    'The same experienced team, same plain-language support.',
  ],
};

export const tiers: readonly PricingTier[] = [starter, growth, custom];

export const carePlan: CarePlan = {
  name: 'Care Plan',
  price: '₱2,500/mo',
  desc: 'We host, update, and manage the backend so you never touch the tech.',
  benefits: [
    'Never touch the tech — we host, update, and manage the backend.',
    'Your site stays fast and secure as you grow.',
    'Real developers on call, in plain language — no ghosting.',
  ],
};

export const paymentTerms = 'Flexible terms: 50% to start, 50% on launch.';

export const launchOffer =
  'First 3 clients get a case-study rate in exchange for a testimonial and permission to showcase their site.';
