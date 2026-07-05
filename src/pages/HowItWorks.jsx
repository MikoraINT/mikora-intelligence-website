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
  SyncIcon,
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
    heading: 'Your leads arrive',
    body: 'Whether they come from a Meta Lead Ad, a website form, or a live chat conversation, every lead enters the Mikora intelligence layer automatically.',
    Icon: FormIcon,
  },
  {
    heading: 'Mikora scores instantly',
    body: 'Every lead receives a fit score based on who they are, an intent score based on what they want, and a blended temperature — hot, warm, or cold — in under 60 seconds.',
    Icon: TargetIcon,
  },
  {
    heading: 'Your CRM updates',
    body: 'The lead appears in your CRM with full scoring data, source attribution, and recommended action. No manual entry. No delays.',
    Icon: RecordIcon,
  },
  {
    heading: 'Your team gets alerted',
    body: 'If the lead is hot, your sales team receives an instant notification with the full lead profile. The right person knows, at the right moment, every time.',
    Icon: BellIcon,
  },
  {
    heading: 'Mikora keeps syncing',
    body: 'As your team updates the CRM, Mikora syncs status changes, notes, and follow-up actions back across every connected system.',
    Icon: SyncIcon,
  },
  {
    heading: 'You see the full picture',
    body: 'Your Mikora dashboard shows every lead, every score, every campaign, and every penny of ad spend — in one place.',
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
      'Most clients are fully connected and scoring leads within one week. The onboarding process covers your lead sources, CRM configuration, scoring rules, and alert setup.',
  },
  {
    question: 'Do I need to replace my existing CRM?',
    answer:
      'No. Mikora works alongside your existing CRM. It is Zoho-native and supports other CRM integrations.',
  },
  {
    question: 'What happens if a lead comes in outside business hours?',
    answer:
      'Mikora scores and syncs every lead around the clock. Your team receives alerts immediately and can action them whenever they are ready.',
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
        title="From lead to closed deal. Automatically."
        subtitle="Mikora runs silently in the background of your business, scoring every lead, updating your CRM, and alerting your team — without anyone lifting a finger."
      />
      <ProcessTimeline />
      <IntegrationStrip />
      <FAQSection />
      <CTABanner />
    </>
  );
}
