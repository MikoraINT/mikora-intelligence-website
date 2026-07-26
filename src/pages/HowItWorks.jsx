import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import CTABanner from '../components/CTABanner';
import FAQ from '../components/FAQ';
import { Reveal, Eyebrow, PageHero } from '../components/ui';
import {
  FormIcon,
  TargetIcon,
  RecordIcon,
  BellIcon,
  CheckIcon,
  ChartIcon,
  MegaphoneIcon,
  ChatIcon,
  CursorIcon,
  MailIcon,
  SmsIcon,
  CloudIcon,
} from '../components/icons';

/* ------------------------------------------------------------------ */
/* Section 2 — Six step process timeline                               */
/* ------------------------------------------------------------------ */

const STEPS = [
  {
    heading: 'Load your knowledge',
    body: 'Manuals, SOPs, protocols, training decks, internal docs — wherever your knowledge lives, Mikora ingests and structures it in days.',
    Icon: FormIcon,
  },
  {
    heading: 'Your experts sign it off',
    body: 'Named validators approve every knowledge source, so every answer is traceable to a person and a document — and corrections outrank the knowledge base the moment they are confirmed.',
    Icon: CheckIcon,
  },
  {
    heading: 'Your people ask on WhatsApp',
    body: 'Teams, technicians, franchisees and field staff message Mikora like a colleague — and get a verified answer in seconds, day or night.',
    Icon: ChatIcon,
  },
  {
    heading: 'Humans stay in the loop',
    body: 'Questions that need judgement escalate to the right expert automatically, with the full conversation attached. Nothing sensitive gets guessed.',
    Icon: BellIcon,
  },
  {
    heading: 'Your lead engine runs on the same platform',
    body: 'Enquiries from ads, forms and website chat are scored on fit and intent, routed to your team, and synced to your CRM automatically.',
    Icon: TargetIcon,
  },
  {
    heading: 'You see the full picture',
    body: 'Questions answered, knowledge gaps, leads, campaigns and spend — one dashboard across your entire operation.',
    Icon: ChartIcon,
  },
];

function ProcessTimeline() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-5xl px-6 pb-24 md:pb-32">
        <div className="relative">
          {/* Timeline line — left rail on mobile, centre line on desktop */}
          <div
            className="absolute bottom-2 left-[21px] top-2 w-px bg-gradient-to-b from-gold/60 via-border to-border lg:left-1/2 lg:-translate-x-1/2"
            aria-hidden="true"
          />

          <ol className="space-y-10 lg:space-y-16">
            {STEPS.map(({ heading, body, Icon }, i) => {
              const left = i % 2 === 0;
              return (
                <li
                  key={heading}
                  className="relative pl-16 lg:grid lg:grid-cols-2 lg:gap-x-24 lg:pl-0"
                >
                  {/* Number marker on the line */}
                  <span className="absolute left-0 top-0 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-gold/60 bg-background font-mono text-small text-gold lg:left-1/2 lg:-translate-x-1/2">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <Reveal
                    x={left ? -32 : 32}
                    className={left ? 'lg:col-start-1' : 'lg:col-start-2'}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-border bg-surface p-6 md:p-7">
                      <Icon className="absolute -bottom-3 -right-3 h-20 w-20 text-gold/[0.08]" />
                      <h3 className="relative font-heading text-h3 font-bold text-white">
                        {heading}
                      </h3>
                      <p className="relative mt-3 text-small text-muted">
                        {body}
                      </p>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — Integration strip                                       */
/* ------------------------------------------------------------------ */

const INTEGRATIONS = [
  { name: 'Meta Ads', Icon: MegaphoneIcon },
  { name: 'Gravity Forms', Icon: FormIcon },
  { name: 'Zoho CRM', Icon: RecordIcon },
  { name: 'WhatsApp', Icon: ChatIcon },
  { name: 'Google Ads', Icon: CursorIcon },
  { name: 'Resend', Icon: MailIcon },
  { name: 'Twilio', Icon: SmsIcon },
  { name: 'Cloudflare', Icon: CloudIcon },
];

function IntegrationStrip() {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Integrations</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            Works with the tools you already use
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 xl:grid-cols-8">
          {INTEGRATIONS.map(({ name, Icon }, i) => (
            <Reveal key={name} delay={(i % 4) * 0.06}>
              <div className="flex h-full flex-col items-center gap-3 rounded-xl border border-border bg-surface p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-gold/60">
                <Icon className="h-6 w-6 text-gold" />
                <span className="text-small text-white/90">{name}</span>
              </div>
            </Reveal>
          ))}
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
    question: 'How long does it take to set up Mikora?',
    answer:
      'Most teams go live within weeks: knowledge ingestion, expert sign-off, then WhatsApp connection. Lead sources, CRM configuration and alerts are connected in the same onboarding.',
  },
  {
    question: 'Do I need to replace my existing CRM?',
    answer:
      'No. Mikora works alongside your existing CRM. It is Zoho-native and supports other CRM integrations.',
  },
  {
    question: 'What happens outside business hours?',
    answer:
      'Mikora answers around the clock — a technician on a night shift or a franchisee on a weekend gets the same verified answer in seconds. Questions that need a human are escalated with full context, and every lead is scored and synced the moment it arrives.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'All data is processed and stored in EU infrastructure, fully GDPR compliant. Mikora never sells or shares your data.',
  },
];

function FAQSection() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
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

export default function HowItWorks() {
  return (
    <>
      <SEO
        title="How Mikora Works — Intelligent Lead Scoring and CRM Sync"
        description="See exactly how Mikora scores every lead, syncs your CRM, and alerts your sales team automatically from the moment a lead arrives."
        canonical="https://mikoraintelligence.com/how-it-works"
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
        eyebrow="How It Works"
        title="From question to verified answer. Automatically."
        subtitle="Load your knowledge, have your experts sign it off, and give your whole network instant answers on WhatsApp — while the same platform scores and routes every lead in the background."
      />
      <ProcessTimeline />
      <IntegrationStrip />
      <FAQSection />
      <CTABanner />
    </>
  );
}
