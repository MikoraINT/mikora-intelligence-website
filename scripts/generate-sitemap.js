/* Generates dist/sitemap.xml at build time from one route manifest + the blog
   articles, so the sitemap never drifts from the real routes. No dependencies.
   Wired into `npm run build` (runs after `vite build`). */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import articles from '../src/data/articles.js';

const SITE_URL = 'https://mikoraintelligence.com';

// Every top-level route in App.jsx except the dynamic /blog/:slug and the 404
// catch-all. Add new top-level routes here.
const STATIC_ROUTES = [
  '/', '/platform', '/how-it-works', '/pricing', '/request-consultation',
  '/contact', '/about', '/blog', '/case-study/plasmapen',
  '/solutions/aesthetic-devices', '/solutions/training-academies',
  '/solutions/agencies', '/capabilities/lead-scoring',
  '/capabilities/whatsapp-support', '/capabilities/crm-sync',
  '/capabilities/ad-spend-tracking', '/capabilities/roi-calculator',
  '/capabilities/sales-alerts', '/capabilities/website-assistant',
  '/capabilities/website-build', '/privacy', '/terms',
];

const urls = [
  ...STATIC_ROUTES.map((loc) => ({ loc })),
  ...articles.map((a) => ({ loc: `/blog/${a.slug}`, lastmod: a.dateISO })),
];

const body = urls
  .map(({ loc, lastmod }) => {
    const abs = loc === '/' ? SITE_URL : `${SITE_URL}${loc}`;
    const mod = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : '';
    return `  <url>\n    <loc>${abs}</loc>${mod}\n  </url>`;
  })
  .join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

const outDir = resolve(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
await writeFile(resolve(outDir, 'sitemap.xml'), xml, 'utf8');
console.log(`sitemap.xml written with ${urls.length} URLs`);
