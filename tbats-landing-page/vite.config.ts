import { defineConfig, loadEnv } from 'vite';
import { reactRouter } from '@react-router/dev/vite';
import { visualizer } from 'rollup-plugin-visualizer';
import viteImagemin from 'vite-plugin-imagemin';
import path from 'path';

export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const isAnalyze = mode === 'analyze' || env.ANALYZE === 'true';

  return {
    plugins: [
      reactRouter(),
      isAnalyze &&
        visualizer({
          open: false,
          gzipSize: true,
          brotliSize: true,
          filename: 'stats.html',
        }),
      command === 'build' &&
        viteImagemin({
          gifsicle: { optimizationLevel: 7, interlaced: false },
          optipng: { optimizationLevel: 7 },
          mozjpeg: { quality: 80 },
          pngquant: { quality: [0.8, 0.9], speed: 4 },
          svgo: {
            plugins: [
              { name: 'removeViewBox', active: false },
              { name: 'removeEmptyAttrs', active: false },
            ],
          },
        }),
    ].filter(Boolean),
    server: {
      allowedHosts: true,
      host: true,
      cors: true,
      port: 5173,
    },
    preview: {
      port: 4173,
      host: true,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components'),
        '@hooks': path.resolve(__dirname, './src/hooks'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@types': path.resolve(__dirname, './src/types'),
        '@styles': path.resolve(__dirname, './src/styles'),
        '@demo': path.resolve(__dirname, './src/demo'),
      },
    },
    build: {
      target: 'es2022',
      cssCodeSplit: true,
      sourcemap: true,
      rollupOptions: {
        output: {
          manualChunks: id => {
            if (id.includes('node_modules')) {
              if (
                id.includes('react') ||
                id.includes('react-dom') ||
                id.includes('react-router-dom')
              ) {
                return 'vendor-react';
              }
              if (id.includes('framer-motion')) {
                return 'vendor-motion';
              }
              if (id.includes('@emailjs/browser')) {
                return 'vendor-email';
              }
              return 'vendor-other';
            }
            if (
              id.includes('src/demo/presets/registry') ||
              id.includes('src/demo/components/index')
            ) {
              return 'demo-presets';
            }
          },
          chunkFileNames: 'assets/js/[name]-[hash].js',
          entryFileNames: 'assets/js/[name]-[hash].js',
          assetFileNames: assetInfo => {
            const info = assetInfo.name.split('.');
            const ext = info[info.length - 1];
            if (/\.(png|jpe?g|gif|svg|webp|avif|woff2?)$/.test(assetInfo.name)) {
              return `assets/media/[name]-[hash].${ext}`;
            }
            if (/\.css$/.test(assetInfo.name)) {
              return `assets/css/[name]-[hash].${ext}`;
            }
            return `assets/[name]-[hash].${ext}`;
          },
        },
      },
      minify: 'esbuild',
      cssMinify: true,
      reportCompressedSize: true,
      chunkSizeWarningLimit: 500,
    },
    optimizeDeps: {
      include: ['framer-motion', '@emailjs/browser', 'react-router'],
    },
    esbuild: {
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
  };
});
