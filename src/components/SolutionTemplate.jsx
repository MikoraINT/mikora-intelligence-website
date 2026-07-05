import { Link } from 'react-router-dom';
import SEO from './SEO';
import CTABanner from './CTABanner';
import { Reveal, PageHero } from './ui';
import {
  WarnIcon,
  ArrowIcon,
  TargetIcon,
  BellIcon,
  SyncIcon,
  ChatIcon,
  BrowserIcon,
  ChartIcon,
  CalculatorIcon,
  CodeIcon,
  BookIcon,
} from './icons';

const RELATED_ICONS = {
  'Lead Scoring': TargetIcon,
  'Sales Alerts': BellIcon,
  'CRM Sync': SyncIcon,
  'WhatsApp Support': ChatIcon,
  'Website Assistant': BrowserIcon,
  'Ad Spend Tracking': ChartIcon,
  'ROI Calculator': CalculatorIcon,
  'Website Build': CodeIcon,
  'Training Academies': BookIcon,
};

/* ------------------------------------------------------------------ */
/* Sections                                                            */
/* ------------------------------------------------------------------ */

export function ProblemSection({ problems, heading = 'The problem' }) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            {heading}
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((text, i) => (
            <Reveal key={text} delay={i * 0.1}>
              <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-surface p-6">
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

function SolutionSection({ solutions }) {
  return (
    <section className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            How Mikora solves it
          </h2>
        </Reveal>

        <div className="mt-16 space-y-20 md:space-y-28">
          {solutions.map(({ title, description, mock }, i) => {
            const mockLeft = i % 2 === 1;
            return (
              <div
                key={title}
                className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20"
              >
                <Reveal
                  x={mockLeft ? 32 : -32}
                  className={mockLeft ? 'lg:order-2' : ''}
                >
                  <h3 className="font-heading text-h3 font-bold text-white md:text-h2">
                    {title}
                  </h3>
                  <p className="mt-4 max-w-xl text-body text-muted">
                    {description}
                  </p>
                </Reveal>
                <Reveal
                  x={mockLeft ? -32 : 32}
                  className={mockLeft ? 'lg:order-1' : ''}
                >
                  <div className="mx-auto w-full max-w-md lg:max-w-none">
                    {mock}
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OutcomesStrip({ outcomes }) {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-16">
        <div className="grid gap-10 text-center md:grid-cols-3 md:gap-8 md:divide-x md:divide-border">
          {outcomes.map((text, i) => (
            <Reveal key={text} delay={i * 0.1} className="md:px-6">
              <p className="font-heading text-h3 font-bold text-gold">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedSection({ related }) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            Related capabilities
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {related.map(({ title, to }, i) => {
            const Icon = RELATED_ICONS[title] || TargetIcon;
            return (
              <Reveal key={to} delay={i * 0.1}>
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
                  <span className="mt-4 inline-flex items-center gap-1.5 text-small font-medium text-gold/80 transition-colors group-hover:text-gold">
                    Explore
                    <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Template                                                            */
/* ------------------------------------------------------------------ */

export default function SolutionTemplate({
  seo,
  hero,
  problems,
  solutions,
  outcomes,
  related,
  extra = null,
}) {
  return (
    <>
      <SEO {...seo} />
      <PageHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
      >
        <Link
          to="/request-consultation"
          className="rounded-full bg-gold px-7 py-3.5 text-center text-small font-semibold text-background transition-colors hover:bg-goldLight"
        >
          Request a Consultation
        </Link>
      </PageHero>
      <ProblemSection problems={problems} />
      <SolutionSection solutions={solutions} />
      <OutcomesStrip outcomes={outcomes} />
      <RelatedSection related={related} />
      {extra}
      <CTABanner />
    </>
  );
}
