import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  server: {
    EMAILJS_SERVICE_ID: z.string().min(1).default('service_tbats'),
    EMAILJS_TEMPLATE_ID: z.string().min(1).default('template_tbats'),
    EMAILJS_PUBLIC_KEY: z.string().min(1).default('YOUR_PUBLIC_KEY'),
    EMAILJS_PRIVATE_KEY: z.string().optional(),
  },
  clientPrefix: 'VITE_',
  client: {
    VITE_EMAILJS_SERVICE_ID: z.string().optional(),
    VITE_EMAILJS_TEMPLATE_ID: z.string().optional(),
    VITE_EMAILJS_PUBLIC_KEY: z.string().optional(),
  },
  runtimeEnv: typeof process !== 'undefined' ? process.env : import.meta.env,
  emptyStringAsUndefined: true,
});
