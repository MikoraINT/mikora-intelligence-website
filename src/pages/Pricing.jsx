import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';
import { Reveal, Eyebrow, PageHero } from '../components/ui';
import { TickIcon } from '../components/icons';

/* ------------------------------------------------------------------ */
/* Shared pricing card pieces                                          */
/* ------------------------------------------------------------------ */

function FeatureList({ features }) {
  return (
    <ul className="mt-8 space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-3">
          <TickIcon className="mt-1 h-4 w-4 shrink-0 text-gold" />
          <span className="text-small text-white/90">{f}</span>
        </li>
      ))}
    </ul>
  );
}

function Price({ amount, period }) {
  return (
    <p className="mt-6 flex items-baseline gap-2">
      <span className="text-small text-muted">From</span>
      <span className="font-heading text-[2.5rem] font-bold leading-none text-white">
        {amount}
      </span>
      <span className="text-small text-muted">{period}</span>
    </p>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 — Mikora Intelligence tiers                               */
/* ------------------------------------------------------------------ */

const INTELLIGENCE_TIERS = [
  {
    name: 'Starter',
    amount: '£800',
    blurb: 'For businesses getting started with lead intelligence.',
    features: [
      'Intelligent lead scoring',
      'Single lead source',
      'CRM sync',
      'Real-time sales alerts',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    amount: '£1,800',
    blurb: 'For growing businesses that need full pipeline intelligence.',
    popular: true,
    note: 'Replaces a marketing operations hire at £40,000 per year.',
    features: [
      'Everything in Starter',
      'Three lead sources',
      'Spend intelligence',
      'Website intelligence',
      'WhatsApp support intelligence',
      'Priority support',
      'Monthly performance review',
    ],
  },
  {
    name: 'Enterprise',
    amount: '£3,500',
    blurb: 'For established operations that need the full Mikora stack.',
    features: [
      'Everything in Growth',
      'Unlimited lead sources',
      'Custom integrations',
      'Dedicated account management',
      'ROI calculator',
      'Bespoke scoring rules',
      'SLA guarantee',
    ],
  },
];

function IntelligenceTiers() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {INTELLIGENCE_TIERS.map(
            ({ name, amount, blurb, features, popular, note }, i) => (
              <Reveal key={name} delay={i * 0.1} className="flex flex-col">
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
                  <Price amount={amount} period="per month" />
                  <p className="mt-3 text-small text-muted">{blurb}</p>
                  <FeatureList features={features} />
                  <Link
                    to="/request-consultation"
                    className="mt-auto block pt-8 text-center"
                  >
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
                {note && (
                  <p className="mt-3 text-center text-small text-muted">
                    {note}
                  </p>
                )}
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Website Build pricing                                   */
/* ------------------------------------------------------------------ */

const SITE_TIERS = [
  {
    name: 'Starter Site',
    amount: '£1,500',
    features: [
      'Up to 5 pages',
      'Mobile responsive',
      'SEO optimised',
      'GitHub and Cloudflare deployment',
      '30 days post-launch support',
    ],
  },
  {
    name: 'Growth Site',
    amount: '£3,500',
    features: [
      'Up to 15 pages',
      'Everything in Starter',
      'Blog structure',
      'Lead capture form wired to your CRM',
      'Framer Motion animations',
    ],
  },
  {
    name: 'Full Platform Site',
    amount: '£6,500',
    features: [
      '20+ pages',
      'Everything in Growth',
      'ROI calculator widget',
      'Intelligence-powered chat',
      'Custom design system',
    ],
  },
];

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
            A standalone service. React websites built and deployed in days,
            not months. SEO optimised from day one.
          </p>
        </Reveal>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {SITE_TIERS.map(({ name, amount, features }, i) => (
            <Reveal key={name} delay={i * 0.1} className="flex">
              <div className="flex flex-1 flex-col rounded-2xl border border-border bg-surface p-8">
                <h3 className="font-heading text-h3 font-bold text-white">
                  {name}
                </h3>
                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-heading text-[2.5rem] font-bold leading-none text-white">
                    {amount}
                  </span>
                  <span className="text-small text-muted">one-off</span>
                </p>
                <FeatureList features={features} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-small text-muted">
            Optional add-on for all tiers: Monthly maintenance retainer from
            £500 per month.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — Pricing FAQ                                             */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    question: 'Is there a minimum contract length?',
    answer:
      'Mikora Intelligence plans are billed monthly with a three month minimum commitment. Website builds are one-off payments with no ongoing obligation unless you choose the maintenance retainer.',
  },
  {
    question: 'Can I upgrade my plan?',
    answer:
      'Yes. You can upgrade at any time and the difference is prorated to your next billing date.',
  },
  {
    question: 'What is included in onboarding?',
    answer:
      'All plans include a full onboarding session covering lead source connection, CRM configuration, scoring rule setup, and team training.',
  },
  {
    question: 'Do you offer a trial?',
    answer:
      'We offer a free 30 minute consultation where we map your current lead operation and show you exactly what Mikora would look like for your business.',
  },
];

function PricingFAQ() {
  return (
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
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Pricing() {
  return (
    <>
      <SEO
        title="Mikora Intelligence Pricing — Plans from £800 per month"
        description="Transparent pricing for intelligent lead scoring, CRM sync, sales alerts, and website builds. Plans from £800 per month with no hidden fees."
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
      <IntelligenceTiers />
      <WebsiteBuildTiers />
      <PricingFAQ />
      <CTABanner />
    </>
  );
}
