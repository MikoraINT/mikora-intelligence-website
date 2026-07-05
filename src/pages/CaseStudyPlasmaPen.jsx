import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal, Eyebrow, PageHero } from '../components/ui';
import { ProblemSection } from '../components/SolutionTemplate';

/* ------------------------------------------------------------------ */
/* Section 2 — Client context                                          */
/* ------------------------------------------------------------------ */

const CLIENT_STATS = [
  ['INDUSTRY', 'Aesthetic Devices'],
  ['MARKETS', 'UK · US · Global'],
  ['SOURCES UNIFIED', '3'],
  ['LEADS SCORED', '9,600+'],
];

function ClientContext() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 md:pb-32 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <Reveal>
          <Eyebrow>The Client</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white">
            About the client
          </h2>
          <p className="mt-5 max-w-xl text-body text-muted">
            PlasmaPen by Louise Walsh is a global leader in plasma fibroblast
            technology, selling professional devices and training to
            practitioners across the UK, US, and beyond. With enquiries
            arriving from Meta lead ads, website forms, and live chat — and a
            busy sales team working across time zones — leads were arriving
            faster than they could be qualified.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="rounded-2xl border border-gold/40 bg-surface p-7 md:p-8">
            <dl className="space-y-4">
              {CLIENT_STATS.map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-center justify-between gap-6 border-b border-border pb-4 last:border-0 last:pb-0"
                >
                  <dt className="font-mono text-xs tracking-[0.2em] text-muted">
                    {k}
                  </dt>
                  <dd className="font-heading text-h3 font-bold text-gold">
                    {v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — What Mikora built                                       */
/* ------------------------------------------------------------------ */

const BUILD_BLOCKS = [
  {
    title: 'Every source connected',
    body: 'Meta lead ads, website enquiry forms, and the website chat assistant all flow into a single intelligence layer.',
  },
  {
    title: 'Every lead scored',
    body: 'Fit and intent scoring runs on arrival, producing a temperature and recommended action in under 60 seconds.',
  },
  {
    title: 'The CRM always current',
    body: 'Leads, statuses, scores, and notes sync automatically with the existing Zoho CRM — no manual entry.',
  },
  {
    title: 'The team always informed',
    body: 'Hot leads trigger instant email alerts with the full profile, and the sales dashboard shows the complete pipeline in real time.',
  },
];

function WhatMikoraBuilt() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            What Mikora built
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {BUILD_BLOCKS.map(({ title, body }, i) => (
            <Reveal key={title} delay={(i % 2) * 0.08}>
              <div className="flex h-full gap-5 rounded-xl border border-border bg-surface p-7">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-background font-mono text-small text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-heading text-h3 font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-2.5 text-small text-muted">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 5 — Results                                                 */
/* ------------------------------------------------------------------ */

const RESULTS = [
  ['9,600+', 'leads scored and synced'],
  ['3', 'lead sources unified into one pipeline'],
  ['Real-time', 'alerts on every hot lead'],
  ['Zero', 'manual data entry across the pipeline'],
];

function Results() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            The results
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {RESULTS.map(([value, label], i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-border bg-surface p-6">
                <p className="font-heading text-h2 font-bold text-gold md:text-h1">
                  {value}
                </p>
                <p className="mt-2 text-small text-muted">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 6 — Quote                                                   */
/* ------------------------------------------------------------------ */

function Quote() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-4xl px-6 pb-24 md:pb-32">
        <Reveal>
          <figure className="relative rounded-2xl border border-gold/40 bg-surface p-8 md:p-12">
            <span
              className="absolute -top-6 left-8 font-heading text-[5rem] font-bold leading-none text-gold"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote className="pt-4 font-heading text-h3 font-semibold leading-relaxed text-white md:text-h2">
              Mikora gave us something we never had — certainty. Every lead is
              scored, every hot enquiry reaches the team instantly, and the CRM
              finally reflects reality.
            </blockquote>
            <figcaption className="mt-6 text-small text-muted">
              Marketing and Technology Lead, PlasmaPen by Louise Walsh
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CaseStudyPlasmaPen() {
  return (
    <>
      <SEO
        title="How a global aesthetic device brand unified its entire lead operation — Mikora Intelligence"
        description="Three lead sources. One intelligence layer. Real-time scoring, routing, and sales alerts — live within weeks."
        canonical="https://mikoraintelligence.com/case-study/plasmapen"
      />
      <PageHero
        eyebrow="Case Study"
        title="How a global aesthetic device brand unified its entire lead operation"
        subtitle="Three lead sources. One intelligence layer. Real-time scoring, routing, and sales alerts — live within weeks."
      />
      <ClientContext />
      <ProblemSection
        heading="The challenge"
        problems={[
          'Enquiries from three different sources landed in three different places with no unified view.',
          'Sales had no way to tell a ready-to-buy clinic owner from a curious browser.',
          'Follow-up speed depended entirely on when someone checked the inbox.',
        ]}
      />
      <WhatMikoraBuilt />
      <Results />
      <Quote />
      <CTABanner />
    </>
  );
}
