/* Single route manifest shared by generate-sitemap.js and prerender.mjs,
   so the sitemap and the prerendered pages can never drift apart.
   Add new top-level routes here; blog posts come from articles.js. */
import articles from '../src/data/articles.js';

export const SITE_URL = 'https://mikoraintelligence.com';

// Every top-level route in App.jsx except the dynamic /blog/:slug and the 404
// catch-all.
export const STATIC_ROUTES = [
  '/', '/platform', '/how-it-works', '/pricing', '/request-consultation',
  '/contact', '/about', '/blog', '/case-studies',
  '/case-studies/whatsapp-support', '/case-studies/lead-attribution',
  '/case-studies/production',
  '/solutions/aesthetic-devices', '/solutions/training-academies',
  '/solutions/agencies', '/capabilities/lead-scoring',
  '/capabilities/whatsapp-support', '/capabilities/crm-sync',
  '/capabilities/ad-spend-tracking',
  '/capabilities/sales-alerts', '/capabilities/website-assistant',
  '/capabilities/website-activity-scoring', '/capabilities/website-build',
  '/privacy', '/terms',
];

/** All routes as { loc, lastmod? } — statics first, then blog posts. */
export function allUrls() {
  return [
    ...STATIC_ROUTES.map((loc) => ({ loc })),
    ...articles.map((a) => ({ loc: `/blog/${a.slug}`, lastmod: a.dateISO })),
  ];
}
