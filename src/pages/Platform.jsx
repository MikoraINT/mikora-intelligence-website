import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal, Eyebrow, PageHero } from '../components/ui';
import {
  TargetIcon,
  BellIcon,
  SyncIcon,
  ChartIcon,
  BrowserIcon,
  ChatIcon,
  ArrowIcon,
  MegaphoneIcon,
  FormIcon,
  RecordIcon,
  MailIcon,
} from '../components/icons';

/* ------------------------------------------------------------------ */
/* Section 2 — Platform overview (six domains)                         */
/* ------------------------------------------------------------------ */

const DOMAINS = [
  {
    title: 'Intelligent Lead Scoring',
    description:
      'Mikora scores every lead on fit and intent the moment it arrives, combining firmographic data, behavioural signals, and purchase intent into a single blended score.',
    to: '/capabilities/lead-scoring',
    Icon: TargetIcon,
  },
  {
    title: 'Real-Time Sales Alerts',
    description:
      'The moment a hot lead submits a form or chats on your website, your sales team receives an instant alert with the full lead profile, score, and recommended action.',
    to: '/capabilities/sales-alerts',
    Icon: BellIcon,
  },
  {
    title: 'CRM Sync & Pipeline Automation',
    description:
      'Every lead, every status update, every note syncs automatically between your sources and your CRM. No manual data entry, no missed updates, no duplicate records.',
    to: '/capabilities/crm-sync',
    Icon: SyncIcon,
  },
  {
    title: 'Spend Intelligence',
    description:
      'See exactly which campaigns, ad sets, and ads are producing real pipeline — not just clicks. Mikora connects your ad spend to your lead quality scores.',
    to: '/capabilities/ad-spend-tracking',
    Icon: ChartIcon,
  },
  {
    title: 'Website Intelligence',
    description:
      'Your website becomes an active lead capture and qualification tool. Every visitor who engages gets scored and routed automatically.',
    to: '/capabilities/website-assistant',
    Icon: BrowserIcon,
  },
  {
    title: 'WhatsApp Support Intelligence',
    description:
      'Your practitioners and customers get instant, accurate answers on WhatsApp around the clock, powered by your own knowledge base.',
    to: '/capabilities/whatsapp-support',
    Icon: ChatIcon,
  },
];

function PlatformOverview() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="grid gap-5 md:grid-cols-2">
          {DOMAINS.map(({ title, description, to, Icon }, i) => (
            <Reveal key={to} delay={(i % 2) * 0.08}>
              <Link
                to={to}
                className="group flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_16px_40px_-16px_rgba(200,169,106,0.25)]"
              >
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Icon />
                </span>
                <h3 className="font-heading text-h3 font-bold text-white">
                  {title}
                </h3>
                <p className="mt-3 flex-1 text-small text-muted">
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
/* Section 3 — Architecture diagram                                    */
/* ------------------------------------------------------------------ */

const SOURCES = [
  { name: 'Meta Ads', Icon: MegaphoneIcon },
  { name: 'Gravity Forms', Icon: FormIcon },
  { name: 'Website Chat', Icon: ChatIcon },
  { name: 'Zoho CRM', Icon: RecordIcon },
];

const OUTPUTS = [
  { label: 'WhatsApp', line: 'Verified answers, 24/7', Icon: ChatIcon },
  { label: 'CRM', line: 'Zoho synced', Icon: SyncIcon },
  { label: 'Alerts', line: 'Email + WhatsApp notifications', Icon: MailIcon },
  { label: 'Dashboard', line: 'Retool intelligence view', Icon: ChartIcon },
];

function Connector({ vertical = false }) {
  const reduce = useReducedMotion();

  if (vertical) {
    return (
      <div
        className="relative mx-auto h-10 w-px bg-gold/30 lg:hidden"
        aria-hidden="true"
      >
        {!reduce && (
          <motion.span
            className="absolute -left-[2.5px] h-1.5 w-1.5 rounded-full bg-gold"
            animate={{ top: ['0%', '90%'], opacity: [0, 1, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
          />
        )}
      </div>
    );
  }

  return (
    <div
      className="relative hidden h-px min-w-[40px] flex-1 self-center bg-gold/30 lg:block"
      aria-hidden="true"
    >
      {!reduce && (
        <motion.span
          className="absolute -top-[2.5px] h-1.5 w-1.5 rounded-full bg-gold"
          animate={{ left: ['0%', '94%'], opacity: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
        />
      )}
    </div>
  );
}

function StackDiagram() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-2xl border border-border bg-surface p-8 md:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <Eyebrow>Architecture</Eyebrow>
              <h2 className="font-heading text-h2 font-bold text-white">
                How Mikora fits into your stack
              </h2>
            </div>

            <div className="mt-12 flex flex-col gap-0 lg:flex-row lg:items-center lg:gap-4">
              {/* Sources */}
              <div className="rounded-xl border border-border bg-background p-5 lg:w-60 lg:shrink-0">
                <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted">
                  SOURCES
                </p>
                <ul className="grid grid-cols-2 gap-2.5 lg:grid-cols-1">
                  {SOURCES.map(({ name, Icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-3 py-2.5"
                    >
                      <Icon className="h-4 w-4 shrink-0 text-gold" />
                      <span className="text-small text-white/90">{name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Connector vertical />
              <Connector />

              {/* Hub */}
              <motion.div
                className="rounded-xl border border-gold/60 bg-gold/15 p-6 text-center lg:w-60 lg:shrink-0"
                animate={
                  reduce
                    ? undefined
                    : {
                        boxShadow: [
                          '0 0 0px rgba(200,169,106,0.0)',
                          '0 0 32px rgba(200,169,106,0.25)',
                          '0 0 0px rgba(200,169,106,0.0)',
                        ],
                      }
                }
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <p className="font-heading text-h3 font-bold text-gold">
                  Mikora Intelligence
                </p>
                <p className="mt-2 font-mono text-[11px] tracking-[0.2em] text-goldLight/80">
                  ANSWERS · ESCALATIONS · INSIGHTS
                </p>
              </motion.div>

              <Connector vertical />
              <Connector />

              {/* Outputs */}
              <div className="grid gap-3 sm:grid-cols-2 lg:w-[22rem] lg:shrink-0">
                {OUTPUTS.map(({ label, line, Icon }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-border bg-background p-5"
                  >
                    <p className="font-mono text-xs tracking-[0.2em] text-muted">
                      {label.toUpperCase()}
                    </p>
                    <Icon className="mt-4 h-5 w-5 text-gold" />
                    <p className="mt-3 text-small text-white/90">{line}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-10 text-center text-small text-muted">
              Mikora works alongside your existing tools. No rip and replace.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 4 — Built for operators                                     */
/* ------------------------------------------------------------------ */

const OPERATOR_POINTS = [
  {
    heading: 'No data science team needed',
    body: 'Mikora handles the scoring logic, the sync rules, and the routing — your team just works the leads.',
  },
  {
    heading: 'GDPR compliant from day one',
    body: 'All data processed and stored in EU infrastructure. Built for UK and European businesses.',
  },
  {
    heading: 'Works with your existing CRM',
    body: 'Mikora is Zoho-native with integrations for other CRMs available. No migration required.',
  },
];

function BuiltForOperators() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Mikora</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            Built for operators
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {OPERATOR_POINTS.map(({ heading, body }, i) => (
            <Reveal key={heading} delay={i * 0.1}>
              <div className="border-t-2 border-gold/60 pt-6">
                <h3 className="font-heading text-h3 font-bold text-white">
                  {heading}
                </h3>
                <p className="mt-3 text-small text-muted">{body}</p>
              </div>
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

export default function Platform() {
  return (
    <>
      <SEO
        title="The Mikora Intelligence Platform — Lead Scoring CRM Sync and Sales Alerts"
        description="One operational intelligence layer that scores every lead, syncs your CRM automatically, and alerts your sales team in real time."
        canonical="https://mikoraintelligence.com/platform"
      />
      <PageHero
        eyebrow="Platform"
        title="Every lead. Every source. One intelligence layer."
        subtitle="Mikora connects your forms, ads, CRM, and website into a single operational system that scores, routes, and syncs automatically."
      >
        <Link
          to="/request-consultation"
          className="rounded-full bg-gold px-7 py-3.5 text-center text-small font-semibold text-background transition-colors hover:bg-goldLight"
        >
          Request a Consultation
        </Link>
      </PageHero>
      <PlatformOverview />
      <StackDiagram />
      <BuiltForOperators />
      <CTABanner />
    </>
  );
}
