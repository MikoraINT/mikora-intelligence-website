import { Link } from 'react-router-dom';
import { Reveal, Eyebrow } from './ui';
import { TickIcon, WarnIcon, ArrowIcon } from './icons';

/* Shared pieces for the three case study pages. Proof-first layout: the
   numbers land before the narrative, which is the opposite of the
   capability pages built on SolutionTemplate. */

/** Outcome figures directly under the hero. Four reads best; three works. */
export function MetricBand({ metrics }) {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map(({ value, label }, i) => (
            <Reveal key={label} delay={i * 0.08}>
              <div className="h-full rounded-xl border border-border bg-background p-6">
                <p className="font-heading text-h2 font-bold leading-none text-gold">
                  {value}
                </p>
                <p className="mt-3 text-small text-muted">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Capability statement in the band slot, where figures would overexpose
    a client's commercial data. */
export function StatementBand({ title, body }) {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <Reveal>
          <h2 className="font-heading text-h2 font-bold text-white">{title}</h2>
          <p className="mx-auto mt-5 max-w-2xl text-body leading-relaxed text-muted">
            {body}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/** Narrative block: eyebrow, heading, paragraphs. */
export function Chapter({ eyebrow, title, paragraphs, children, bordered }) {
  return (
    <section className={bordered ? 'border-t border-border bg-background' : 'bg-background'}>
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-24">
        <Reveal>
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h2 className="font-heading text-h2 font-bold text-white">{title}</h2>
          {paragraphs?.map((p) => (
            <p key={p.slice(0, 40)} className="mt-5 text-body leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/** Red-flagged problem list. */
export function ProblemList({ items }) {
  return (
    <div className="mt-10 space-y-4">
      {items.map((text, i) => (
        <Reveal key={text} delay={i * 0.08}>
          <div className="flex items-start gap-4 rounded-xl border border-border bg-surface p-5">
            <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-hot/40 bg-hot/10 text-hot">
              <WarnIcon />
            </span>
            <p className="text-body text-white/90">{text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Gold-ticked outcome list. */
export function OutcomeList({ items }) {
  return (
    <ul className="mt-10 space-y-4">
      {items.map((text, i) => (
        <Reveal key={text} delay={i * 0.06}>
          <li className="flex items-start gap-3.5 rounded-xl border border-border bg-surface p-5">
            <TickIcon className="mt-1 h-4 w-4 shrink-0 text-gold" />
            <span className="text-body text-white/90">{text}</span>
          </li>
        </Reveal>
      ))}
    </ul>
  );
}

/** Single-line claim, set apart. */
export function PullQuote({ children, attribution }) {
  return (
    <Reveal className="mt-12">
      <blockquote className="rounded-2xl border border-gold/30 border-l-4 border-l-gold bg-surface p-7 md:p-9">
        <p className="font-heading text-h3 font-bold leading-snug text-white">
          {children}
        </p>
        {attribution && (
          <footer className="mt-4 text-small text-muted">{attribution}</footer>
        )}
      </blockquote>
    </Reveal>
  );
}

/** Themed group of work — used by the production case study. */
export function WorkGroup({ groups }) {
  return (
    <div className="mt-10 grid gap-5 md:grid-cols-2">
      {groups.map(({ title, body }, i) => (
        <Reveal key={title} delay={(i % 2) * 0.08}>
          <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-6 md:p-7">
            <h3 className="font-heading text-h3 font-bold text-white">{title}</h3>
            <p className="mt-3 flex-1 text-small leading-relaxed text-muted">{body}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Card used on the index and on the homepage proof strip. */
export function CaseStudyCard({ to, eyebrow, title, blurb, metric, delay = 0 }) {
  return (
    <Reveal delay={delay} className="flex">
      <Link
        to={to}
        className="group flex flex-1 flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_16px_40px_-16px_rgba(200,169,106,0.25)]"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          {eyebrow}
        </p>
        <h3 className="mt-4 font-heading text-h3 font-bold leading-snug text-white">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-small text-muted">{blurb}</p>
        {metric && (
          <p className="mt-6 font-heading text-h3 font-bold text-gold">{metric}</p>
        )}
        <span className="mt-5 inline-flex items-center gap-1.5 text-small font-medium text-gold/80 transition-colors group-hover:text-gold">
          Read the case study
          <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </Link>
    </Reveal>
  );
}

/* The three studies, shared by the index page and the homepage strip so the
   two can never drift. */
export const CASE_STUDIES = [
  {
    to: '/case-studies/whatsapp-support',
    eyebrow: 'Technical Support',
    title: 'Verified answers on WhatsApp',
    blurb:
      'A training library turned into verified answers in seconds, with clinical questions escalated to named trainers.',
  },
  {
    to: '/case-studies/lead-attribution',
    eyebrow: 'Revenue Operations',
    title: 'Attribution and a rebuilt pipeline',
    blurb:
      'An attribution audit, a website assistant that scores on arrival, and a CRM restructured and re-automated underneath both.',
  },
  {
    to: '/case-studies/production',
    eyebrow: 'The Whole Account',
    title: 'One job became about ten',
    blurb:
      'Manuals, course design, a catalogue migration and a captioned back catalogue — almost all of it starting as a single request.',
  },
];
