/**
 * Build-time prerendering. Runs after `vite build` (client) and
 * `vite build --ssr` (server bundle in dist-ssr/):
 *
 *   for every route in public/sitemap.xml, render the app to HTML and write
 *   dist/<route>/index.html with the route's real <title>, meta description,
 *   canonical, robots and OG/Twitter tags baked in.
 *
 * Result: every URL serves complete HTML to crawlers, link-preview bots and
 * AI agents without executing JavaScript. The client bundle still mounts on
 * top for interactivity (src/main.jsx). Routes come from the shared manifest
 * (scripts/routes.mjs) — new pages, including blog posts, prerender
 * automatically once added there.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { SITE_URL, allUrls } from './routes.mjs';

const DIST = 'dist';

const esc = (s) =>
  String(s)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');

// -- routes from the shared manifest ---------------------------------------
const routes = allUrls().map(({ loc }) => loc);

if (routes.length === 0) {
  throw new Error('prerender: no routes in scripts/routes.mjs');
}

// -- template + server renderer --------------------------------------------
const template = await readFile(path.join(DIST, 'index.html'), 'utf8');
const { render } = await import(
  path.resolve('dist-ssr', 'entry-server.js')
);

function headTags(meta, route) {
  const url = meta.url || `${SITE_URL}${route === '/' ? '' : route}`;
  const tags = [
    `<link rel="canonical" href="${esc(url)}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, nofollow' : 'index, follow'}" />`,
    `<meta property="og:site_name" content="Mikora Intelligence" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:image" content="${esc(meta.image)}" />`,
    `<meta property="og:url" content="${esc(url)}" />`,
    `<meta property="og:type" content="${esc(meta.type || 'website')}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(meta.title)}" />`,
    `<meta name="twitter:description" content="${esc(meta.description)}" />`,
    `<meta name="twitter:image" content="${esc(meta.image)}" />`,
  ];
  return tags.join('\n    ');
}

// framer-motion serialises `initial` animation states (opacity:0, translate
// offsets) into inline styles. Fine for text crawlers, but a no-JS visitor —
// or a user on a slow connection — would see hidden sections until React
// mounts. React replaces the prerendered DOM wholesale (createRoot.render,
// no hydration), so we can safely rewrite those styles to their final state.
function unhideAnimationInitialStates(html) {
  return html.replace(/style="([^"]*)"/g, (match, css) => {
    const cleaned = css
      .replace(/opacity:\s*0(?![.\d])/g, 'opacity:1')
      .replace(/transform:[^;"]*;?/g, '');
    return `style="${cleaned}"`;
  });
}

let failures = 0;
for (const route of routes) {
  try {
    const { html: rawHtml, meta } = await render(route);
    const html = unhideAnimationInitialStates(rawHtml);
    if (!meta.title || !meta.description) {
      throw new Error(`route rendered without SEO meta`);
    }

    let page = template
      .replace(
        /<title>[^<]*<\/title>/,
        `<title>${esc(meta.title)}</title>`
      )
      .replace(
        /<meta name="description" content="[^"]*" \/>/,
        `<meta name="description" content="${esc(meta.description)}" />`
      )
      .replace('</head>', `    ${headTags(meta, route)}\n  </head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outDir =
      route === '/' ? DIST : path.join(DIST, ...route.split('/').filter(Boolean));
    await mkdir(outDir, { recursive: true });
    await writeFile(path.join(outDir, 'index.html'), page);
    console.log(`prerendered ${route} (${(page.length / 1024).toFixed(0)} kB)`);
  } catch (err) {
    failures += 1;
    console.error(`FAILED ${route}: ${err.message}`);
  }
}

if (failures > 0) {
  throw new Error(`prerender: ${failures} route(s) failed`);
}
console.log(`prerender: ${routes.length} routes written`);
