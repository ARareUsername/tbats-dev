import type { Config } from '@react-router/dev/config';

export default {
  // Enable server-side rendering globally so landing page loaders/actions run
  ssr: true,
  prerender: [],
} satisfies Config;
