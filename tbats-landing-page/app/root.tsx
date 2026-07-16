/* eslint-disable react-refresh/only-export-components */
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'react-router';
import type { LoaderFunctionArgs } from 'react-router';
import { LazyMotion } from 'framer-motion';
import SkipLink from '@components/ui/SkipLink';
import GlobalFeatures from '../src/components/GlobalFeatures';
import '../src/index.css';

const loadFeatures = () => import('framer-motion').then(res => res.domAnimation);

function getCookieValue(cookieHeader: string | null, name: string): string | null {
  if (!cookieHeader) return null;
  const cookies = cookieHeader.split(';').map(c => c.trim());
  for (const cookie of cookies) {
    const [k, v] = cookie.split('=');
    if (k === name) return v || null;
  }
  return null;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const cookieHeader = request.headers.get('Cookie');
  const themeVal = getCookieValue(cookieHeader, 'theme');
  const systemTheme = getCookieValue(cookieHeader, 'systemTheme');
  const theme: 'light' | 'dark' = themeVal === 'light'
    ? 'light'
    : themeVal === 'dark'
      ? 'dark'
      : systemTheme === 'light' ? 'light' : 'dark';
  return { theme };
}

export default function Root() {
  const { theme } = useLoaderData<typeof loader>();

  // Dynamic theme class application is handled in the <html> tag class attribute below
  return (
    <html lang="en" className={theme === 'light' ? 'theme-light' : ''}>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />

        {/* Preload critical self-hosted fonts */}
        <link
          rel="preload"
          href="/fonts/inter-normal-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/outfit-normal-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Google Symbols for UI icons */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
          .google-symbols {
            font-family: 'Material Symbols Outlined';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-smoothing: antialiased;
          }
        `,
          }}
        />
        <Meta />
        <Links />
      </head>
      <body className={theme === 'light' ? 'theme-light' : ''}>
        <SkipLink />
        <LazyMotion features={loadFeatures} strict>
          <GlobalFeatures theme={theme} />
          <main id="main">
            <Outlet context={{ theme }} />
          </main>
        </LazyMotion>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
