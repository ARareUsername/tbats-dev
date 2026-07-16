import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  layout('routes/layout.tsx', [
    index('routes/landing.tsx'),
    route('about', 'routes/about.tsx'),
    route('services/web-design', 'routes/services/web-design.tsx'),
    route('services/seo', 'routes/services/seo.tsx'),
    route('services/ai-solutions', 'routes/services/ai-solutions.tsx'),
    route('services/1-on-1-help', 'routes/services/help.tsx'),
    route('our-work', 'routes/our-work/index.tsx'),
    route('our-work/case-studies', 'routes/our-work/case-studies.tsx'),
    route('our-work/portfolio', 'routes/our-work/portfolio.tsx'),
    route('pricing', 'routes/pricing.tsx'),
    route('contact', 'routes/contact.tsx'),
  ]),
  route('api/contact', 'routes/api.contact.ts'),
] satisfies RouteConfig;
