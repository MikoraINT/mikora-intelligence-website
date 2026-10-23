import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';
import { Reveal, Eyebrow, PageHero } from '../components/ui';
import { TickIcon, ArrowIcon } from '../components/icons';
import { PROJECTS, SITE_TIERS, PROJECT_SLOTS } from '../data/pricing';

/* ------------------------------------------------------------------ */
/* Section 1 — The project menu                                        */
/* ------------------------------------------------------------------ */

function ProjectMenu() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-6 pb-20 md:pb-24">
        <div className="space-y-4">
          {PROJECTS.map(({ name, price, blurb }, i) => (
            <Reveal key={name} delay={(i % 4) * 0.06}>
              <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-gold/50 md:flex-row md:items-start md:gap-8 md:p-7">
                <div className="flex-1">
                  <h2 className="font-heading text-h3 font-bold text-white">
                    {name}
                  </h2>
                  <p className="mt-2.5 text-small leading-relaxed text-muted">
                    {blurb}
                  </p>
                </div>
                <p className="shrink-0 font-heading text-h3 font-bold text-gold md:pt-0.5 md:text-right">
                  {price}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center text-small text-muted">
            {PROJECT_SLOTS} Prices are fixed before work starts — if the scope
            turns out to be bigger, you hear it before you are billed for it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 — Website builds                                          */
/* ------------------------------------------------------------------ */

function WebsiteBuilds() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Website Build</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            Sites built in days, not months
          </h2>
          <p className="mt-5 text-body text-muted">
            React, deployed on global infrastructure, SEO structured from the
            first commit. This site is one of them.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {SITE_TIERS.map(({ name, price, features }, i) => (
            <Reveal key={name} delay={i * 0.1} className="flex">
              <div className="flex flex-1 flex-col rounded-2xl border border-border bg-surface p-8">
                <h3 className="font-heading text-h3 font-bold text-white">
                  {name}
                </h3>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-[2.5rem] font-bold leading-none text-white">
                    {price}
                  </span>
                  <span className="text-small text-muted">one-off</span>
                </p>
                <ul className="mt-8 flex-1 space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <TickIcon className="mt-1 h-4 w-4 shrink-0 text-gold" />
                      <span className="text-small text-white/90">{f}</span>
                    </li>
                  ))}
                </ul>
                {/* The old pricing page rendered these three cards with no
                    call to action at all. */}
                <Link to="/request-consultation" className="mt-8 block text-center">
                  <span className="block rounded-full border border-gold/50 px-7 py-3.5 text-small font-semibold text-gold transition-colors hover:bg-gold/10">
                    Start this
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Where projects lead                                     */
/* ------------------------------------------------------------------ */

function NextStep() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <Reveal>
          <Eyebrow>After the first job</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white">
            Most of this started as one request
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body leading-relaxed text-muted">
            Our longest-running client came to us for a single piece of work
            and has now had about ten. There is no obligation to go further
            than the job you came for — but when it makes sense, the assistant
            pilot is usually what follows.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/pricing"
              className="rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight"
            >
              See the pilot and retainer
            </Link>
            <Link
              to="/case-studies/production"
              className="group inline-flex items-center gap-2 text-body font-medium text-gold transition-colors hover:text-goldLight"
            >
              Read that case study
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — FAQ                                                     */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    question: 'Do I have to sign up to anything ongoing?',
    answer:
      'No. Every project on this page is a one-off with a fixed price and no minimum term. You can have one piece of work done and never hear from us again.',
  },
  {
    question: 'What if my job is not on the list?',
    answer:
      'Ask. The list is the work we do most often, not the limit of it. If it is close to something here, it is usually priced like it.',
  },
  {
    question: 'How quickly do projects start?',
    answer:
      'We take a limited number of project slots each month so that work in progress does not slip. If the month is full, you are told the date before you commit, not after.',
  },
  {
    question: 'Can a project turn into something ongoing?',
    answer:
      'Often, but only if you want it to. The usual path is a project, then the 90 day assistant pilot, then a retainer — in that order, and never all at once.',
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Services() {
  return (
    <>
      <SEO
        title="Services — fixed-price projects from £750 | Mikora Intelligence"
        description="One-off work with a fixed price and no minimum term: knowledge audits, manuals, brochures, CRM rebuilds, catalogue migrations, captioned video and website builds."
        canonical="https://mikoraintelligence.com/services"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ_ITEMS.map(({ question, answer }) => ({
            '@type': 'Question',
            name: question,
            acceptedAnswer: { '@type': 'Answer', text: answer },
          })),
        }}
      />
      <PageHero
        eyebrow="Projects"
        title="Start with one job."
        subtitle="Fixed price, agreed before anything begins. No retainer, no minimum term, no platform to buy into. If you only ever need this one thing, that is a perfectly good outcome."
      />
      <ProjectMenu />
      <WebsiteBuilds />
      <NextStep />

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
              Before you ask
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <FAQ items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      <CTABanner
        heading="Got one job that needs doing?"
        subtext="Tell us what it is. You will get a price and a date, not a discovery process."
      />
    </>
  );
}
