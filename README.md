# Mikora Intelligence — Website

The complete React site for mikoraintelligence.com: 22 pages covering the platform, how it works, pricing, three industry solutions, eight capabilities, a case study, the Mikora Journal (six launch articles), consultation and contact forms, an interactive ROI calculator, and the legal pages.

## Stack

Vite 5, React 18, React Router v6 (all routes lazy-loaded), Tailwind CSS 3, Framer Motion 11. Node 18+.

## Run locally

```
npm install
npm run dev
```

Production build with `npm run build` (outputs to `dist/`), preview locally with `npm run preview`.

## Environment

`VITE_CONSULTATION_WEBHOOK_URL` — the n8n webhook that receives consultation form, contact form, and ROI calculator submissions (see `.env.example`). Vite inlines it at build time, so it must also be set in the Cloudflare Pages build environment. Each submission carries a `source` field (`mikora_website`, `contact_form`, or `roi_calculator`) so the pipeline can route them.

## Deploy — Cloudflare Pages

Connect the GitHub repo and use the Vite framework preset. Build command `npm run build`, output directory `dist`. If the Pages default Node is older than 18, set the `NODE_VERSION` environment variable to `18` or higher. SPA routing on Pages is handled by `public/_redirects`.

## Design system

All tokens live in `tailwind.config.js` and nowhere else: colors (background, surface, border, gold, goldLight, white, muted, hot, warm, cold, success), font families (heading = Syne, body = Inter, mono = JetBrains Mono) and the type scale (hero, h1, h2, h3, body, small with their line heights and letter spacing). Google Fonts are loaded in `index.html` — Syne 600/700/800, Inter 400/500/600, JetBrains Mono 400.

## Structure

`src/components` holds the global components (Navbar, Footer, SEO, JsonLd, CTABanner, FAQ), the shared page template (`SolutionTemplate`), form primitives (`forms.jsx`), the icon set, UI helpers (`ui.jsx`), and the product-UI mockup cards (`mockups.jsx`). `src/App.jsx` holds the router — every page is lazy-loaded via React.lazy/Suspense so each route ships as its own chunk. `src/pages` has one file per route. `src/data/articles.js` holds the six Journal articles as structured blocks rendered by `BlogPost`. `public/` carries the SPA fallback (`_redirects`), `sitemap.xml`, and `robots.txt`.

## SEO

`SEO.jsx` manages title, meta description, robots, canonical, Open Graph and Twitter tags client-side, defaulting the canonical to https://mikoraintelligence.com plus the current path (no www). The 404 page sets `noindex`. `JsonLd.jsx` injects structured data: Organization on the homepage, FAQPage on How It Works and Pricing, Article on every blog post. `public/sitemap.xml` lists all 22 pages plus the six article URLs and is referenced from `robots.txt`.

## Notes

`public/og-default.png` is a generated placeholder — replace it with a branded export once available, since Syne isn't in the image pipeline. The LinkedIn URL in `Footer.jsx` is a guess at the company page slug and should be confirmed. `Privacy.jsx` and `Terms.jsx` are working drafts and should be reviewed by a solicitor before being relied upon.
