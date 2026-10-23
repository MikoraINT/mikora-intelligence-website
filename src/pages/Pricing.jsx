import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';
import { Reveal, Eyebrow, PageHero } from '../components/ui';
import { TickIcon, ArrowIcon } from '../components/icons';
import { PLANS, SITE_TIERS, MAINTENANCE, PRODUCTION } from '../data/pricing';

/* ------------------------------------------------------------------ */
/* Shared pieces                                                       */
/* ------------------------------------------------------------------ */

function FeatureList({ features }) {
  return (
    <ul className="mt-8 flex-1 space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-3">
          <TickIcon className="mt-1 h-4 w-4 shrink-0 text-gold" />
          <span className="text-small text-white/90">{f}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------ */
/* Section 1 — Monthly plans                                           */
/* ------------------------------------------------------------------ */

function Plans() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {PLANS.map(({ name, price, blurb, features, popular }, i) => (
            <Reveal key={name} delay={i * 0.1} className="flex">
              <div
                className={`relative flex flex-1 flex-col rounded-2xl border bg-surface p-8 ${
                  popular
                    ? 'border-gold shadow-[0_24px_60px_-24px_rgba(200,169,106,0.35)]'
                    : 'border-border'
                }`}
              >
                {popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1 text-xs font-semibold text-background">
                    Most Popular
                  </span>
                )}
                <h2 className="font-heading text-h3 font-bold text-white">
                  {name}
                </h2>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="text-small text-muted">From</span>
                  <span className="font-heading text-[2.5rem] font-bold leading-none text-white">
                    {price}
                  </span>
                  <span className="text-small text-muted">per month</span>
                </p>
                <p className="mt-3 text-small text-muted">{blurb}</p>
                <FeatureList features={features} />
                <Link to="/request-consultation" className="mt-8 block text-center">
                  <span
                    className={`block rounded-full px-7 py-3.5 text-small font-semibold transition-colors ${
                      popular
                        ? 'bg-gold text-background hover:bg-goldLight'
                        : 'border border-gold/50 text-gold hover:bg-gold/10'
                    }`}
                  >
                    Request a Consultation
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
/* Section 2 — What clients can also call on                           */
/* ------------------------------------------------------------------ */

function ClientServices() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>For Clients On A Plan</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            The rest of what we do
          </h2>
          <p className="mt-5 text-body text-muted">
            Once your assistant is running, the same team produces the
            documents, catalogues and content behind it. This work is quoted
            per piece for businesses already on a plan — it is not sold
            separately.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTION.map(({ name, blurb }, i) => (
            <Reveal key={name} delay={(i % 3) * 0.08}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
                <h3 className="font-heading text-h3 font-bold text-white">
                  {name}
                </h3>
                <p className="mt-3 flex-1 text-small leading-relaxed text-muted">
                  {blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <Link
            to="/capabilities/production"
            className="group inline-flex items-center gap-2 text-body font-medium text-gold transition-colors hover:text-goldLight"
          >
            See how production works
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Website builds                                          */
/* ------------------------------------------------------------------ */

function WebsiteBuildTiers() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Website Build</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            Intelligent Website Build
          </h2>
          <p className="mt-5 text-body text-muted">
            A standalone service. Fast, modern websites built and deployed
            in days, not months. SEO optimised from day one.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
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
                <FeatureList features={features} />
                {/* The previous version of this page rendered these three
                    cards with no call to action at all. */}
                <Link to="/request-consultation" className="mt-8 block text-center">
                  <span className="block rounded-full border border-gold/50 px-7 py-3.5 text-small font-semibold text-gold transition-colors hover:bg-gold/10">
                    Start this
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-small text-muted">
            Optional add-on for all tiers: monthly maintenance retainer from{' '}
            {MAINTENANCE} per month.
          </p>
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
    question: 'Is there a minimum contract length?',
    answer:
      'Plans are billed monthly with a three month minimum commitment. Website builds are one-off payments with no ongoing obligation unless you choose the maintenance retainer.',
  },
  {
    question: 'Can I upgrade my plan?',
    answer:
      'Yes. You can upgrade at any time and the difference is prorated to your next billing date.',
  },
  {
    question: 'What is included in onboarding?',
    answer:
      'Every plan includes a full onboarding: your knowledge ingested and structured, expert sign-off on each source, WhatsApp connection, and team training. On Growth and Enterprise it also covers lead source connection, CRM configuration and scoring rules.',
  },
  {
    question: 'Can you produce our manuals and content as well?',
    answer:
      'Yes, for clients on a plan. Manuals, brochures, price books, catalogue migrations, video and newsletters are quoted per piece once your assistant is running. We do not sell that work on its own — it depends on knowing your business, which the assistant build is how we learn.',
  },
  {
    question: 'Do you offer a trial?',
    answer:
      'We offer a free 30 minute consultation where we map your current operation and show you exactly what Mikora would look like for your business.',
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Pricing() {
  return (
    <>
      <SEO
        title="Mikora Intelligence Pricing — Plans from £600 per month"
        description="Transparent pricing for verified WhatsApp support, website assistants, lead scoring, CRM sync and website builds. Plans from £600 per month with no hidden fees."
        canonical="https://mikoraintelligence.com/pricing"
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
        eyebrow="Pricing"
        title="Straightforward pricing. No surprises."
        subtitle="Choose the intelligence layer that fits your operation. Scale as you grow."
      />
      <Plans />
      <ClientServices />
      <WebsiteBuildTiers />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Pricing FAQ</Eyebrow>
            <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
              Frequently asked questions
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-14">
            <FAQ items={FAQ_ITEMS} />
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
