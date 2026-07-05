import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal, PageHero } from '../components/ui';

const PRINCIPLES = [
  {
    heading: 'Outcomes over buzzwords',
    body: 'We measure success in recovered revenue, not features shipped.',
  },
  {
    heading: 'Built alongside your stack',
    body: 'No rip and replace, ever.',
  },
  {
    heading: 'Operators first',
    body: 'Everything we build starts with a real operational problem.',
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="Built by operators, for operators — Mikora Intelligence"
        description="Mikora was born inside a real business with a real lead problem — not in a boardroom."
        canonical="https://mikoraintelligence.com/about"
      />
      <PageHero
        eyebrow="About Mikora"
        title="Built by operators, for operators"
        subtitle="Mikora was born inside a real business with a real lead problem — not in a boardroom."
      />

      {/* Story */}
      <section className="bg-background">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 pb-24 md:pb-32 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="text-body leading-relaxed text-muted">
              Mikora started as an internal system built to solve one
              company's lead chaos: enquiries scattered across ad platforms,
              forms, and chat; a CRM that never matched reality; and a sales
              team flying blind. We built the intelligence layer we could not
              buy — scoring every lead, syncing every system, and alerting the
              team in real time.
            </p>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-body leading-relaxed text-muted">
              It worked so well we productised it. Today Mikora runs the same
              intelligence for businesses that live and die by their lead flow
              — aesthetic device companies, training academies, and the
              agencies that serve them. We do not talk about artificial
              intelligence. We talk about outcomes: faster follow-up,
              better-qualified leads, and a sales team that knows exactly who
              to call.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Principles */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-3">
            {PRINCIPLES.map(({ heading, body }, i) => (
              <Reveal key={heading} delay={i * 0.1}>
                <div className="border-t-2 border-gold/60 pt-6">
                  <h2 className="font-heading text-h3 font-bold text-white">
                    {heading}
                  </h2>
                  <p className="mt-3 text-small text-muted">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
