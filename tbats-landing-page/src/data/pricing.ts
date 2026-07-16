export type TierId = 'starter' | 'growth' | 'merchant';

export interface PricingTier {
  id: TierId;
  name: string;
  price: string;
  setupFee: string;
  desc: string;
  benefits: readonly string[];
  highlight?: boolean;
}

export const starter: PricingTier = {
  id: 'starter',
  name: 'Starter Plan',
  price: '₱1,499',
  setupFee: '₱2,999 setup fee',
  desc: 'Perfect for local brands needing a high-end single-page online presence.',
  benefits: [
    'Custom responsive single-page website',
    'Domain registration, hosting, SSL & security',
    '1 Google Workspace Business Email',
    'ADA & accessibility compliant',
    '10 content updates per month',
    'Blazing-fast speed optimization',
    'Basic local SEO setup',
    'Basic website traffic analytics',
    'Monthly uptime monitoring',
    '1 hour of monthly developer support',
  ],
};

export const growth: PricingTier = {
  id: 'growth',
  name: 'Growth Plan',
  price: '₱2,999',
  setupFee: '₱4,999 setup fee',
  desc: 'Our most popular plan for businesses wanting a standard multi-page website.',
  benefits: [
    'Custom responsive 5-to-8 page website',
    'Domain registration, hosting, SSL & security',
    '1 Google Workspace Business Email',
    'ADA & accessibility compliant',
    '10 content updates per month',
    'Blazing-fast speed optimization',
    'Standard local SEO setup',
    'Basic website traffic analytics',
    'Monthly uptime monitoring',
    'Basic e-commerce integrations',
    '3 hours of monthly developer support',
  ],
  highlight: true,
};

export const merchant: PricingTier = {
  id: 'merchant',
  name: 'Merchant Plan',
  price: '₱5,999',
  setupFee: '₱9,999 setup fee',
  desc: 'Your full digital team on-demand for full-featured e-commerce stores.',
  benefits: [
    'Everything in the Growth Plan',
    'Full online store & catalog checkout',
    'Payment gateway & shipping integrations',
    'Custom software & web features development',
    'One team managing every product & listing',
    '5 Google Workspace Business Emails',
    'Google Business Profile optimization',
    'Custom SEO strategy & content execution',
    'AI chatbot or custom automations setup',
    'Advanced analytics dashboard setup',
    'Dedicated account manager support',
    'Same-day developer support response',
    '5 hours of monthly developer support',
  ],
};

export const tiers: readonly PricingTier[] = [starter, growth, merchant];
