import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';
import { Reveal, Eyebrow, PageHero } from '../components/ui';
import { TickIcon, ArrowIcon } from '../components/icons';
import { PILOT, RETAINER, PROJECT_SLOTS } from '../data/pricing';

/* ------------------------------------------------------------------ */
/* Section 1 — The three ways to buy                                   */
/* ------------------------------------------------------------------ */

const WAYS = [
  {
    name: 'A project',
    price: 'From £750',
    period: 'one-off',
    blurb:
      'One job, one fixed price, no minimum term. Audits, manuals, brochures, migrations, video and websites.',
    cta: 'See the project menu',
    to: '/services',
  },
  {
    name: 'The assistant pilot',
    price: PILOT.build,
    period: `build, then ${PILOT.monthly} a month`,
    blurb:
      'Ninety days with your manuals answering on your website and on WhatsApp. The usual place to start.',
    cta: 'Start a pilot',
    to: '/request-consultation',
    featured: true,
  },
  {
    name: 'Ongoing work',
    price: `From ${RETAINER.from}`,
    period: 'per month',
    blurb:
      'A named week of my time each month, scoped in days. Knowledge, revenue operations and production in one place.',
    cta: 'Talk it through',
    to: '/request-consultation',
  },
];

function Ladder() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
        <div className="grid items-stretch gap-6 lg:grid-cols-3">
          {WAYS.map(({ name, price, period, blurb, cta, to, featured }, i) => (
            <Reveal key={name} delay={i * 0.1} className="flex">
              <div
                className={`relative flex flex-1 flex-col rounded-2xl border bg-surface p-8 ${
                  featured
                    ? 'border-gold shadow-[0_24px_60px_-24px_rgba(200,169,106,0.35)]'
                    : 'border-border'
                }`}
              >
                {featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gold px-4 py-1 text-xs font-semibold text-background">
                    Where most start
                  </span>
                )}
                <h2 className="font-heading text-h3 font-bold text-white">
                  {name}
                </h2>
                <p className="mt-6 font-heading text-[2.5rem] font-bold leading-none text-white">
                  {price}
                </p>
                <p className="mt-2 text-small text-muted">{period}</p>
                <p className="mt-5 flex-1 text-small leading-relaxed text-muted">
                  {blurb}
                </p>
                <Link to={to} className="mt-8 block text-center">
                  <span
                    className={`block rounded-full px-7 py-3.5 text-small font-semibold transition-colors ${
                      featured
                        ? 'bg-gold text-background hover:bg-goldLight'
                        : 'border border-gold/50 text-gold hover:bg-gold/10'
                    }`}
                  >
                    {cta}
                  </span>
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-small text-muted">
            No tiers, no feature gates, nothing locked behind a plan name.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 — The pilot, in full                                      */
/* ------------------------------------------------------------------ */

function PilotDetail() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <Reveal>
          <div className="rounded-2xl border border-gold/40 bg-surface p-8 md:p-12">
            <Eyebrow>The 90 Day Pilot</Eyebrow>
            <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
              Your manuals, answering for themselves
            </h2>
            <p className="mt-5 max-w-2xl text-body leading-relaxed text-muted">
              Your customers research a two thousand pound machine at nine
              o'clock on a Sunday. Your engineers are the only people who can
              answer them, and they finished at four. Ninety days is long
              enough to find out what that is costing you, and short enough
              that you are not betting the year on it.
            </p>

            <div className="mt-10 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-y border-border py-6">
              <span className="font-heading text-[2.5rem] font-bold leading-none text-gold">
                {PILOT.build}
              </span>
              <span className="text-body text-muted">
                to build, then {PILOT.monthly} a month for {PILOT.term}
              </span>
            </div>

            <ul className="mt-8 grid gap-3.5 md:grid-cols-2">
              {PILOT.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <TickIcon className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-small text-white/90">{f}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/request-consultation"
              className="mt-10 inline-block rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight"
            >
              Start a pilot
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Ongoing work                                            */
/* ------------------------------------------------------------------ */

function Retainer() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Ongoing</Eyebrow>
            <h2 className="font-heading text-h2 font-bold text-white">
              When one job turns into the work
            </h2>
            <p className="mt-5 text-body leading-relaxed text-muted">
              Our longest-running client started with a single piece of work
              and now has the support system, the revenue operations and the
              document production in one place. That is a retainer, and it is
              scoped in days of attention rather than a list of features —
              because the useful thing next month is rarely the thing you
              would have written down this month.
            </p>
            <Link
              to="/case-studies/production"
              className="group mt-8 inline-flex items-center gap-2 text-body font-medium text-gold transition-colors hover:text-goldLight"
            >
              See what that looked like
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="flex">
            <div className="flex flex-1 flex-col rounded-2xl border border-border bg-surface p-8">
              <p className="flex items-baseline gap-2">
                <span className="text-small text-muted">From</span>
                <span className="font-heading text-[2.5rem] font-bold leading-none text-white">
                  {RETAINER.from}
                </span>
                <span className="text-small text-muted">per month</span>
              </p>
              <ul className="mt-8 flex-1 space-y-3">
                {RETAINER.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <TickIcon className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    <span className="text-small text-white/90">{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/request-consultation" className="mt-8 block text-center">
                <span className="block rounded-full border border-gold/50 px-7 py-3.5 text-small font-semibold text-gold transition-colors hover:bg-gold/10">
                  Talk it through
                </span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — FAQ                                                     */
/* ------------------------------------------------------------------ */

const FAQ_ITEMS = [
  {
    question: 'Do you do one-off work, or is it all retainers?',
    answer:
      'Both, and the one-off work is real work rather than a taster. Audits, manuals, brochures, CRM rebuilds, catalogue migrations, video and websites all have a fixed price and no ongoing obligation. Plenty of people buy one thing and nothing else.',
  },
  {
    question: 'Is there a minimum term?',
    answer:
      'Projects have none at all. The pilot runs for ninety days because that is how long it takes to produce evidence worth reading. Ongoing work is monthly and you can stop at the end of any month.',
  },
  {
    question: 'What happens at the end of the pilot?',
    answer:
      'You get the question log — everything your network asked, including what the assistant could not answer. That tells you whether it is worth keeping. Carry on monthly, move to a retainer, or stop. Nothing renews on its own.',
  },
  {
    question: 'Why no Starter, Growth and Enterprise tiers?',
    answer:
      'Because they described plans rather than work, and they priced by how many lead sources you connected, which is not a thing anybody wants to buy. What you see here is what it actually costs to do the job.',
  },
  {
    question: 'How fast can you start?',
    answer: `${PROJECT_SLOTS} We would rather tell you the real date than take the money and join a queue you cannot see.`,
  },
  {
    question: 'Do you work with my CRM?',
    answer:
      'Mikora is Zoho-native and works alongside other CRMs. Nothing gets ripped out and replaced.',
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Pricing() {
  return (
    <>
      <SEO
        title="Pricing — projects from £750, assistant pilot from £1,200 | Mikora"
        description="Three ways to work with Mikora: fixed-price one-off projects with no minimum term, a 90 day assistant pilot, or ongoing systems work from £2,200 a month."
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
        title="Three ways to work with us."
        subtitle="Start with a single job if that is all you need. Most people do."
      />
      <Ladder />
      <PilotDetail />
      <Retainer />

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
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
