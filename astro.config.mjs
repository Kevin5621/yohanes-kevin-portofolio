// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import compress from 'astro-compress';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          disallow: ['/404', '/api/'],
        },
      ],
      sitemap: 'https://gilabs.id/sitemap-index.xml',
    }),
    compress({
      css: true,
      html: {
        removeAttributeQuotes: false,
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      },
      image: false, // Let Astro handle images
      svg: true,
      js: true,
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "id"],
    routing: {
      prefixDefaultLocale: false
    }
  },
  
  site: 'https://gilabs.id'
});