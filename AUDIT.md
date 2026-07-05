# Production-Readiness Audit — mikoraintelligence.com

Date: 5 July 2026. Scope: full codebase as shipped in this repo. Method: static analysis, WCAG contrast computation, production builds with and without the webhook environment variable, and an automated functional suite (51 tests: all 28 URLs, every internal link, both forms, the ROI calculator maths and gate, honeypots, double-submit, error boundary, structured data, sitemap parity). The audit environment has no browser, so pixel rendering, Lighthouse, and real-device checks are listed under handover.

Severity: **blocker** (would fail in production), **should-fix** (real defect or launch risk), **nice-to-have** (hygiene). Status: **fixed**, **pass** (verified, no change needed), **flagged** (documented, deliberately not changed), **handover** (needs the client, not code).

## Build and tooling

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| B1 | Clean `npm ci` from lockfile; production build zero errors and warnings (428 modules). Builds succeed **with and without** `VITE_CONSULTATION_WEBHOOK_URL`; the value inlines into exactly the three form chunks. | — | pass |
| B2 | No secrets, tokens, or junk files in the repo. Only `.env.example` present. | — | pass |
| B3 | No unused dependencies (all four runtime deps and all devDeps used). No unused exports in `icons.jsx` or `mockups.jsx` — every icon and mockup is imported somewhere. | — | pass |
| B4 | **No error boundary around the lazy routes.** A failed chunk load (stale deploy, dropped connection) rejected inside `Suspense` with nothing catching it → blank page. Added `src/components/ErrorBoundary.jsx` wrapping the route `Suspense` inside `<main>`, so the navbar and footer survive and the fallback offers Reload / Back to home. Covered by tests. | should-fix | fixed |
| B5 | Without the env var, submissions reach the honest error state ("Something went wrong. Please email hello@mikoraintelligence.com directly."). Graceful, with a working fallback path; the ROI breakdown stays gated in that state. | nice-to-have | flagged |

## Routing

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| R1 | Every internal link on all 22 pages and 6 posts resolves to a defined route (asserted per page by the test suite). Unknown paths and unknown blog slugs render the 404. `public/_redirects` provides the Cloudflare Pages SPA fallback for deep links. | — | pass |

## SEO

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| S1 | 28 unique titles and meta descriptions (uniqueness test-enforced). Canonicals on `https://mikoraintelligence.com` — no www, no trailing slashes, matching the sitemap exactly. | — | pass |
| S2 | OG + Twitter tags on every route, including `og:site_name` and `twitter:image`. Robots meta set per route; the 404 is `noindex, nofollow` with its canonical stripped, and the flag resets on client-side navigation. | — | pass |
| S3 | JSON-LD valid and parsed in tests: Organization (home), FAQPage (/how-it-works, /pricing), Article with publisher/dates/mainEntityOfPage (all six posts). | — | pass |
| S4 | `sitemap.xml` contains exactly the 22 pages + 6 posts and nothing else; `robots.txt` references it. Exactly one `h1` per page (test-enforced). `html lang="en"`, SVG favicon present. | — | pass |

## Accessibility

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| A1 | **Contrast failures** (WCAG 2.1 ratios computed against the locked palette). Failing pairs and fixes, none touching a token value: input placeholder `muted/50` on background **2.52:1 → muted/85 = 4.89:1**; select empty-state `muted/70` **3.71 → muted/85 = 4.89**; social-proof strip `muted/60` on surface **2.91 → muted = 5.56**; chip text on 15% tint fills — hot **3.82** and cold **3.88** — chips restyled to bordered `bg-background`, giving hot **5.09**, cold **5.39**, warm **8.75**, gold **7.89**, success **7.79** (matches the existing outlined-pill language; one map in `mockups.jsx` plus the home hero badge). | should-fix | fixed |
| A2 | All other measured pairs pass: muted 6.25 (background) / 5.56 (surface); gold 7.89 / 7.02; gold/80 links 4.99; white/90 12.98; white/80 11.59; error text (hot on surface) 4.53; button text (background on gold) 7.89; focus ring 4.48 against a 3:1 non-text requirement; slider thumb on track 5.58. | — | pass |
| A3 | Keyboard: skip-to-content link; dropdowns open on Enter, close on Escape (focus returned) and on focus-out, `aria-haspopup`/`aria-expanded`; mobile overlay closes on Escape; FAQ uses `aria-expanded`/`aria-controls`/`role="region"`; forms have labels, `aria-invalid`, `role="alert"` errors, `role="status"` success, and focus moves to the first invalid field; sliders are focusable with a visible ring and each has a paired number input. | — | pass |
| A4 | Reduced motion: `MotionConfig reducedMotion="user"` stills every framer animation globally; the LIVE ping dot and travelling connector pulses are additionally conditioned on `useReducedMotion`; CSS smooth scrolling is behind `prefers-reduced-motion: no-preference`. | — | pass |
| A5 | Decorative SVGs and ornaments carry `aria-hidden="true"` (enforced by the shared `IconBase`). | — | pass |

## Performance

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| P1 | No Lighthouse available in the audit environment (no browser). Proxies audited: route-level code splitting (each page 1–31 kB raw), main bundle ~96 kB gzip (React + Router + Framer Motion — expected), fonts preconnected with `display=swap`, entrance animations are transform/opacity only (no layout shift), `theme-color` set. Run Lighthouse on the Cloudflare preview URL before launch. | — | pass / handover |
| P2 | The Blog chunk (11.8 kB gzip) carries all six full article bodies on the listing page. Fine at this size; split article metadata from bodies if the Journal grows past ~15 posts. | nice-to-have | flagged |
| P3 | Google Fonts adds a third-party request chain; self-hosting would shave first-paint latency. Out of minimal-diff scope. | nice-to-have | flagged |

## Cross-browser and responsive

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| C1 | `overflow-x-clip` on `<main>` is unsupported in Safari ≤ 15 (treated as `visible`, losing the overflow guard). Added `@supports not (overflow: clip)` fallback to `overflow-x: hidden`. | should-fix | fixed |
| C2 | `100svh` on the home hero is unsupported before Safari 15.4 (invalid → hero loses its height). Now `min-h-screen` baseline with `supports-[height:100svh]:min-h-[100svh]`. | should-fix | fixed |
| C3 | iOS dark mode rendered native controls (select popovers, autofill) in light UI on the dark theme. Added `color-scheme: dark` on `html`. | should-fix | fixed |
| C4 | Range inputs no longer depend on `accent-color` (custom cross-engine track/thumb via `-webkit-`/`-moz-` pseudo-elements, 44px hit area); `accent-gold` retained as a harmless fallback. | — | pass |
| C5 | Touch: dropdown hover is restricted to mouse pointers so a tap toggles cleanly (previously mouseenter + click opened then instantly closed on large touch devices); card hovers are enhancements only; 44px targets throughout. | — | pass |
| C6 | 320/390/768/1024/1440 verified structurally: all fixed widths are lg-only, max-widths, or percentages; the spend table scrolls; grids and the architecture diagram stack. Long unbreakable hero words ("Automatically.", "Intelligence") guarded with `break-words` against clipping at 320 in the wide display face. One real-device pass recommended (handover). | should-fix | fixed |

## Forms

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| F1 | Validation complete on all three forms: required fields, email format, inline errors, `aria-invalid`. | — | pass |
| F2 | **Double-submit** relied only on the disabled button; an implicit (Enter-key) submission could race it. In-flight guard added to all three handlers; test proves exactly one request under a race. | should-fix | fixed |
| F3 | **No spam protection.** Honeypot field (`company_fax`) added to the consultation form, contact form, and ROI gate: off-screen, `aria-hidden`, `tabindex="-1"`, `autocomplete="off"` — invisible to people and assistive tech (tested), no visible form change. Filled trap → silent success, webhook never called, payload shape untouched for n8n. | should-fix | fixed |
| F4 | Payloads are clean flat JSON with `source` discriminators (`mikora_website`, `contact_form`, `roi_calculator`) and ISO `submitted_at`; every field asserted in tests. | — | pass |
| F5 | Keyboard submission works; honest error states with a mailto fallback. | — | pass |

## Content

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| T1 | Figures consistent sitewide: intelligence tiers £800 / £1,800 / £3,500 pm; builds £1,500 / £3,500 / £6,500 one-off; retainer from £500 pm; 9,600+ in all five occurrences; the article worked example matches the calculator's actual maths (200 × 8% × £4,000 × 0.35 = £22,400/mo; £268,800/yr). | — | pass |
| T2 | Standalone "AI" appears zero times; the About sentence is the only artificial-intelligence reference. British English throughout (licence/licensed used correctly). Article display dates match their ISO stamps on all six posts. | — | pass |
| T3 | Wording concerns — flagged, not changed (copy is client-verbatim): (a) the contact form success message reads "Your request has been received and scored by Mikora", inherited from the consultation form — on a general message, "request/scored" may read oddly; (b) "Support available 24 hours a day 7 days a week." would normally take a comma after "day"; (c) "For consultations, use our consultation form for the fastest response" repeats "for" — grammatical, slightly clunky. | nice-to-have | flagged |
| T4 | No placeholder text or lorem anywhere. The solicitor-review comments atop `Privacy.jsx`/`Terms.jsx` are intentional dev notes (see handover). | — | pass |

## Handover — needs the client, not code

1. `public/og-default.png` is a generated placeholder — supply a branded 1200×630 export (it is also the JSON-LD Organization/publisher logo).
2. The Footer LinkedIn URL (`linkedin.com/company/mikora-intelligence`) is an unconfirmed guess at the slug.
3. Set `VITE_CONSULTATION_WEBHOOK_URL` in the Cloudflare Pages build environment and make sure the n8n `mikora-consultation` webhook is live before launch — the variable is inlined at build time.
4. Privacy Policy and Terms are working drafts and need solicitor review before being relied upon.
5. The previously open item "add /capabilities/website-build to the Navbar and Footer" is **already done in this build** and verified by automated test — nothing outstanding.
6. Run Lighthouse against the Cloudflare preview URL and do one visual pass on real devices (a 320px-wide phone and iOS Safari in dark mode especially); this audit's environment has no browser for pixel verification.

## Re-verification

After all fixes: clean production builds with and without the env var; the full automated suite passes — 51/51 — covering all routes and heads, link integrity, structured data, sitemap parity, both forms end-to-end, calculator maths and gate, honeypots, double-submit protection, and the error boundary.

---

## Post-audit addendum — brand integration (5 July 2026)

Client-supplied logo assets (hexagon mark + full lockup) integrated on top of the audited build. No audit fixes were touched.

**Added assets (public/):** `logo-mark.png` (trimmed mark, native 309×362, used in header/footer), `favicon.svg` (vector trace of the mark, validated at 0.890 mask-IoU against the source raster), `favicon-32.png` / `favicon-16.png` / `apple-touch-icon.png` (derived from the vector; apple-touch on brand background), `logo.png` (512×512 lockup for Organization schema), and a rebuilt branded `og-default.png` (1200×630 — mark, Syne-set MIKORA in the gold gradient, Inter tagline; fonts are the site's own Google Fonts OFL faces).

**Code changes:** `Navbar.jsx` Wordmark now renders the mark image (explicit intrinsic dimensions, no CLS) beside the MIKORA text — the trailing dot span was retired since the mark's droplet carries the motif; `index.html` gained the PNG favicon and apple-touch links; Home's Organization JSON-LD `logo` now points at `/logo.png`.

**Verified:** all seven brand assets serve 200; mark renders in header and footer across sampled routes; icons present in head; Organization logo URL correct; 390px header height and overflow unchanged; zero page errors; production build clean.

**Handover updates:** the branded og-image item is now RESOLVED. Still open: LinkedIn slug confirmation, Cloudflare env var + n8n webhook, solicitor pass, and the visual device pass — extended to include a favicon check at browser-tab size, since this environment cannot render pixels for eyeball verification.
