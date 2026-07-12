import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('routes/landing.tsx'),
  route('demo/:projectId', 'routes/demo.$projectId.tsx'),
  route('api/contact', 'routes/api.contact.ts'),
] satisfies RouteConfig;
