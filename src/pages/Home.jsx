import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import CTABanner from '../components/CTABanner';
import { Reveal, Eyebrow } from '../components/ui';
import {
  FormIcon,
  TargetIcon,
  RecordIcon,
  MailIcon,
  CheckIcon,
  WarnIcon,
  BellIcon,
  SyncIcon,
  ChartIcon,
  BrowserIcon,
  ChatIcon,
  ArrowIcon,
} from '../components/icons';

/* ------------------------------------------------------------------ */
/* Section 1 — Hero data flow diagram                                  */
/* ------------------------------------------------------------------ */

const FLOW_STEPS = [
  { title: 'Lead Captured', Icon: FormIcon },
  { title: 'Scored by Mikora', Icon: TargetIcon, badge: true },
  { title: 'CRM Updated', Icon: RecordIcon },
  { title: 'Team Alerted', Icon: MailIcon },
  { title: 'Deal Closed', Icon: CheckIcon, success: true },
];

const STEP_BASE_DELAY = 0.45;
const STEP_STAGGER = 0.3;

function DataFlowDiagram() {
  const reduce = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md">
      {/* Ambient glow behind the card */}
      <div
        className="absolute -inset-10 rounded-full bg-gold/[0.07] blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        className="relative rounded-2xl border border-gold/20 bg-surface p-6 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] sm:p-8"
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Card header */}
        <div className="mb-7 flex items-center justify-between border-b border-border pb-4">
          <span className="font-mono text-xs tracking-[0.2em] text-muted">
            LEAD PIPELINE
          </span>
          <span className="flex items-center gap-2 font-mono text-xs text-gold">
            <span className="relative flex h-2 w-2">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-gold" />
            </span>
            LIVE
          </span>
        </div>

        {/* Steps + connecting line */}
        <div className="relative">
          <motion.span
            className="absolute bottom-6 left-[21px] top-6 w-0.5 origin-top bg-gradient-to-b from-gold via-gold/70 to-gold/30"
            aria-hidden="true"
            initial={reduce ? false : { scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5, duration: 1.3, ease: 'easeInOut' }}
          />

          <ul className="relative space-y-5">
            {FLOW_STEPS.map(({ title, Icon, badge, success }, i) => {
              const delay = STEP_BASE_DELAY + i * STEP_STAGGER;
              return (
                <motion.li
                  key={title}
                  className="flex items-center gap-4"
                  initial={reduce ? false : { opacity: 0.15, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay, duration: 0.45, ease: 'easeOut' }}
                >
                  <motion.span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border bg-background ${
                      success
                        ? 'border-success/50 text-success'
                        : 'border-gold/40 text-gold'
                    }`}
                    initial={
                      reduce
                        ? false
                        : { boxShadow: '0 0 0px rgba(200,169,106,0)' }
                    }
                    animate={
                      reduce
                        ? undefined
                        : {
                            boxShadow: [
                              '0 0 0px rgba(200,169,106,0)',
                              `0 0 22px ${
                                success
                                  ? 'rgba(34,197,94,0.4)'
                                  : 'rgba(200,169,106,0.45)'
                              }`,
                              '0 0 0px rgba(200,169,106,0)',
                            ],
                          }
                    }
                    transition={{ delay: delay + 0.1, duration: 0.9 }}
                  >
                    <Icon />
                  </motion.span>

                  <span className="text-small font-medium text-white sm:text-body">
                    {title}
                  </span>

                  {badge && (
                    <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-background px-2.5 py-1">
                      <span className="font-mono text-sm font-semibold text-gold">
                        87
                      </span>
                      <span className="rounded-full border border-hot/40 px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wider text-hot">
                        HOT
                      </span>
                    </span>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section 1 — Hero                                                    */
/* ------------------------------------------------------------------ */

const TRUST_INDICATORS = [
  { highlight: '9,600+', rest: 'Leads Scored' },
  { highlight: '3', rest: 'Sources Unified' },
  { highlight: 'Real-Time', rest: 'Sales Alerts' },
];

function Hero() {
  const reduce = useReducedMotion();

  const fadeUp = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  });

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-background supports-[height:100svh]:min-h-[100svh]">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-28">
        {/* Copy */}
        <div>
          <motion.h1
            {...fadeUp(0)}
            className="break-words font-heading text-[2.75rem] font-bold leading-[1.1] tracking-[-0.03em] text-white md:text-[3.5rem] lg:text-hero"
          >
            The Operational{' '}
            <span className="text-gold">Intelligence Layer</span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.12)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Score every lead. Sync every CRM. Alert every sale. In real time.
          </motion.p>

          <motion.div
            {...fadeUp(0.24)}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to="/request-consultation"
              className="rounded-full bg-gold px-7 py-3.5 text-center text-small font-semibold text-background transition-colors hover:bg-goldLight"
            >
              Request a Consultation
            </Link>
            <Link
              to="/how-it-works"
              className="rounded-full border border-white/40 px-7 py-3.5 text-center text-small font-medium text-white transition-colors hover:bg-white/10"
            >
              See How It Works
            </Link>
          </motion.div>

          <motion.ul
            {...fadeUp(0.36)}
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3"
          >
            {TRUST_INDICATORS.map(({ highlight, rest }) => (
              <li
                key={rest}
                className="flex items-center gap-2.5 text-small text-muted"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <span>
                  <span className="font-semibold text-white">{highlight}</span>{' '}
                  {rest}
                </span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Animated data flow diagram */}
        <DataFlowDiagram />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 — Social proof strip                                      */
/* ------------------------------------------------------------------ */

const CLIENT_TYPES = [
  'Aesthetic Device Brand',
  'Training Academy',
  'Marketing Agency',
  'Franchise Network',
  'Device Distributor',
];

function SocialProofStrip() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <Reveal>
          <p className="text-center text-small text-muted">
            Trusted by operators who demand results
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">
            {CLIENT_TYPES.map((label) => (
              <li
                key={label}
                className="font-heading text-base font-semibold tracking-wide text-muted"
              >
                {label}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — The Problem                                             */
/* ------------------------------------------------------------------ */

const PROBLEMS = [
  'Slow follow-up loses hot leads within minutes.',
  "Unscored leads waste your sales team's time.",
  'Disconnected tools mean no single source of truth.',
];

function Problem() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 md:py-32 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <Eyebrow>The Problem</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            Your leads are slipping through the gaps
          </h2>
          <p className="mt-6 max-w-xl text-body text-muted">
            Most businesses have the traffic. They have the ads. They even have
            the CRM. What they are missing is the intelligence layer that
            connects them — scoring every lead the moment it arrives, routing
            it to the right person, and syncing everything automatically.
          </p>
        </Reveal>

        <div className="space-y-5">
          {PROBLEMS.map((text, i) => (
            <Reveal key={text} delay={i * 0.1}>
              <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hot/40 bg-hot/10 text-hot">
                  <WarnIcon />
                </span>
                <p className="text-body text-white/90">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — The Solution (capability grid)                          */
/* ------------------------------------------------------------------ */

const CAPABILITIES = [
  {
    title: 'Intelligent Lead Scoring',
    description: 'Every lead scored on fit and intent the moment it arrives.',
    to: '/capabilities/lead-scoring',
    Icon: TargetIcon,
  },
  {
    title: 'Real-Time Sales Alerts',
    description: 'Your team knows about hot leads before they go cold.',
    to: '/capabilities/sales-alerts',
    Icon: BellIcon,
  },
  {
    title: 'CRM Sync',
    description: 'Every lead, every status, every note. Synced automatically.',
    to: '/capabilities/crm-sync',
    Icon: SyncIcon,
  },
  {
    title: 'Spend Intelligence',
    description: 'See exactly which campaigns produce real pipeline.',
    to: '/capabilities/ad-spend-tracking',
    Icon: ChartIcon,
  },
  {
    title: 'Website Intelligence',
    description:
      'Your website captures and scores visitors as leads automatically.',
    to: '/capabilities/website-assistant',
    Icon: BrowserIcon,
  },
  {
    title: 'WhatsApp Support',
    description:
      'Your practitioners get instant answers on WhatsApp, 24 hours a day.',
    to: '/capabilities/whatsapp-support',
    Icon: ChatIcon,
  },
];

function Solution() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>The Solution</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            Mikora connects your entire lead operation
          </h2>
          <p className="mt-5 text-body text-muted">
            One intelligence layer across every source, every channel, every
            team member.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map(({ title, description, to, Icon }, i) => (
            <Reveal key={to} delay={(i % 3) * 0.08}>
              <Link
                to={to}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_16px_40px_-16px_rgba(200,169,106,0.25)]"
              >
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Icon />
                </span>
                <h3 className="font-heading text-h3 font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2.5 flex-1 text-small text-muted">
                  {description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-small font-medium text-gold/80 transition-colors group-hover:text-gold">
                  Explore
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 5 — How It Works preview                                    */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    title: 'Connect your stack',
    description: 'Link your forms, ads, CRM and website in one session.',
  },
  {
    title: 'Mikora scores and routes',
    description:
      'Every lead gets a fit score, intent score and temperature automatically.',
  },
  {
    title: 'Your team closes',
    description: 'Alerts fire, CRM updates, nothing falls through.',
  },
];

function HowItWorksPreview() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            Live in three steps
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Connecting line between step markers (desktop) */}
          <div
            className="absolute left-[16.67%] right-[16.67%] top-[22px] hidden h-px bg-border md:block"
            aria-hidden="true"
          />

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {STEPS.map(({ title, description }, i) => (
              <Reveal key={title} delay={i * 0.12}>
                <div className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/50 bg-background font-mono text-small text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 font-heading text-h3 font-bold text-white">
                    {title}
                  </h3>
                  <p className="mt-2.5 max-w-xs text-small text-muted">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14 text-center">
          <Link
            to="/how-it-works"
            className="group inline-flex items-center gap-2 text-body font-medium text-gold transition-colors hover:text-goldLight"
          >
            See the full process
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 6 — Case study strip                                        */
/* ------------------------------------------------------------------ */

const CASE_METRICS = [
  ['9,600+', 'Leads Scored'],
  ['3', 'Sources Unified'],
  ['Real-Time', 'Alerts'],
  ['Intelligent', 'Routing'],
];

function CaseStudyStrip() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-2xl border border-border border-l-4 border-l-gold bg-surface p-8 md:p-12">
            <div className="max-w-2xl">
              <Eyebrow>Case Study</Eyebrow>
              <h2 className="font-heading text-h2 font-bold text-white">
                See Mikora in action
              </h2>
              <p className="mt-4 text-body text-muted">
                A global aesthetic device brand unified three lead sources,
                scored over 9,600 leads, and gave their sales team real-time
                intelligence for the first time.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CASE_METRICS.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <p className="font-heading text-h3 font-bold text-gold md:text-h2">
                    {value}
                  </p>
                  <p className="mt-1 text-small text-muted">{label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/case-study/plasmapen"
              className="mt-10 inline-block rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight"
            >
              Read the Case Study
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 7 — Solutions strip                                         */
/* ------------------------------------------------------------------ */

const SOLUTIONS = [
  {
    title: 'Aesthetic Device Companies',
    description: 'From lead ad to Zoho in seconds.',
    to: '/solutions/aesthetic-devices',
  },
  {
    title: 'Training Academies',
    description: 'Support every practitioner on WhatsApp, around the clock.',
    to: '/solutions/training-academies',
  },
  {
    title: 'Marketing Agencies',
    description: 'White-label intelligence for your clients.',
    to: '/solutions/agencies',
  },
];

function SolutionsStrip() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Solutions</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            Built for your industry
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {SOLUTIONS.map(({ title, description, to }, i) => (
            <Reveal key={to} delay={i * 0.1}>
              <Link
                to={to}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_16px_40px_-16px_rgba(200,169,106,0.25)]"
              >
                <h3 className="font-heading text-h3 font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2.5 flex-1 text-small text-muted">
                  {description}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-small font-medium text-gold/80 transition-colors group-hover:text-gold">
                  Explore
                  <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Home() {
  return (
    <>
      <SEO
        title="Mikora Intelligence — The Operational Intelligence Layer"
        description="Score every lead, sync your CRM and alert your sales team in real time. Mikora is the operational intelligence layer for businesses that cannot afford to miss a lead."
        canonical="https://mikoraintelligence.com"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Mikora Intelligence',
          url: 'https://mikoraintelligence.com',
          logo: 'https://mikoraintelligence.com/logo.png',
        }}
      />
      <Hero />
      <SocialProofStrip />
      <Problem />
      <Solution />
      <HowItWorksPreview />
      <CaseStudyStrip />
      <SolutionsStrip />
      <CTABanner />
    </>
  );
}
