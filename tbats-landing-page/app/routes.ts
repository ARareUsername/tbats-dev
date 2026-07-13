import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/landing.tsx'),
  route('api/contact', 'routes/api.contact.ts'),
] satisfies RouteConfig;
