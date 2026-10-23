import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal, Eyebrow, PageHero } from '../components/ui';
import { TickIcon } from '../components/icons';
import { PRODUCTION } from '../data/pricing';

/* Document and content production. Deliberately unpriced: this is work we
   quote for clients already on a plan, not a menu to shop from. */

const STEPS = [
  {
    title: 'It starts with the assistant',
    body: 'Building your knowledge base means reading everything you have — the manuals, the protocols, the training decks, the gaps between them. By the time the assistant is answering, we know your material better than almost anyone outside your business.',
  },
  {
    title: 'Then the gaps become obvious',
    body: 'The question log shows what your network asks and what nothing in your library answers. That is usually the brief for the next manual, the next reference sheet, the next video — written from evidence rather than a guess.',
  },
  {
    title: 'And it is produced to your brand',
    body: 'Finished artwork plus editable source, every time, so your own people can revise it later without coming back to us. Pricing is per piece, quoted up front against a scope you have agreed.',
  },
];

function WhyGated() {
  return (
    <section className="border-t border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center md:py-24">
        <Reveal>
          <Eyebrow>Who this is for</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white">
            Available to clients on a plan
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-body leading-relaxed text-muted">
            We do not take this work on its own. Good documents come from
            knowing a business properly, and the assistant build is how we
            learn it — which is why production is something our clients call
            on, rather than something we sell from a list.
          </p>
          <Link
            to="/pricing"
            className="mt-10 inline-block rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight"
          >
            See the plans
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export default function CapabilityProduction() {
  return (
    <>
      <SEO
        title="Document and Content Production — Mikora Intelligence"
        description="Manuals, brochures, price books, catalogue migrations, video and newsletters, produced to your brand for businesses already running a Mikora assistant."
        canonical="https://mikoraintelligence.com/capabilities/production"
      />
      <PageHero
        eyebrow="Document & Content Production"
        title="The paper behind the platform"
        subtitle="Manuals, brochures, price books, catalogues, video and newsletters — produced to your brand by the same people who built your knowledge base."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PRODUCTION.map(({ name, blurb }, i) => (
              <Reveal key={name} delay={(i % 3) * 0.08}>
                <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6">
                  <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                    <TickIcon className="h-5 w-5" />
                  </span>
                  <h2 className="font-heading text-h3 font-bold text-white">
                    {name}
                  </h2>
                  <p className="mt-3 flex-1 text-small leading-relaxed text-muted">
                    {blurb}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
              Written from what your network actually asks
            </h2>
          </Reveal>
          <div className="mt-14 space-y-5">
            {STEPS.map(({ title, body }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-6 md:flex-row md:gap-7 md:p-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/50 bg-background font-mono text-small text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-heading text-h3 font-bold text-white">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-small leading-relaxed text-muted">
                      {body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <WhyGated />
      <CTABanner />
    </>
  );
}
