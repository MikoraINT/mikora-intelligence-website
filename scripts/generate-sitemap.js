/* Generates dist/sitemap.xml at build time from the shared route manifest
   (scripts/routes.mjs) + the blog articles, so the sitemap never drifts from
   the real routes. No dependencies. Wired into `npm run build` (runs after
   `vite build`). */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { SITE_URL, allUrls } from './routes.mjs';

const urls = allUrls();

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
