import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { PageHero } from '../components/ui';
import {
  MetricBand,
  Chapter,
  ProblemList,
  OutcomeList,
  PullQuote,
} from '../components/caseStudy';

const METRICS = [
  { value: '200', label: 'Practitioners supported on one number' },
  { value: '54', label: 'Technical documents delivered on request' },
  { value: '24/7', label: 'Answer coverage, where support was office hours' },
  { value: '49', label: 'Source documents signed off by a named validator' },
];

const PROBLEMS = [
  'Questions arrived mid-treatment — a device reading nobody recognised, a contraindication that needed checking.',
  'Two trainers held the answers, and they were in class, asleep, or answering the same question for the hundredth time.',
  'The knowledge existed, in manuals and protocols nobody opens with gloves on.',
];

const OUTCOMES = [
  '200 practitioners supported through a single WhatsApp number.',
  '54 technical documents delivered on request, with no portal login.',
  'Answers in seconds, day or night, where support had run office hours.',
  'Clinical questions escalated to a named trainer rather than guessed at, with the full conversation attached.',
];

export default function CaseStudyWhatsAppSupport() {
  return (
    <>
      <SEO
        title="200 practitioners, one WhatsApp number — Mikora case study"
        description="How a global aesthetic device brand turned its training library into verified answers on WhatsApp: 200 practitioners, 54 technical documents on request, clinical questions escalated to named trainers."
        canonical="https://mikoraintelligence.com/case-studies/whatsapp-support"
      />
      <PageHero
        eyebrow="Case Study · Technical Support"
        title="200 practitioners. One WhatsApp number."
        subtitle="Technical support for a global aesthetic device brand."
      />
      <MetricBand metrics={METRICS} />

      <Chapter
        eyebrow="The Problem"
        title="Support ran office hours. Questions did not."
        paragraphs={[
          'Practitioners had questions mid-treatment — a device reading they did not recognise, a contraindication they wanted checked, a setting for a skin type they had not treated before. The people who could answer were two trainers, and the queue ran through both of them.',
        ]}
      >
        <ProblemList items={PROBLEMS} />
      </Chapter>

      <Chapter
        bordered
        eyebrow="What We Built"
        title="The training library, answering on WhatsApp"
        paragraphs={[
          "A single WhatsApp number backed by the brand's own training material. Manuals, protocols and course content ingested, chunked and made searchable — 49 documents behind a retrieval layer, with every answer traceable to the source document it came from.",
          'Two things make it safe rather than clever. Every knowledge source is signed off by a named clinical validator before it can answer, and a confirmed correction outranks the library the moment a trainer records it. Anything carrying clinical judgement escalates to a human with the full conversation attached, rather than being guessed at.',
          'Practitioners can also ask for a document and have it sent back — 54 technical support files, on request, in the chat they were already in.',
        ]}
      >
        <PullQuote attribution="How every answer is sourced">
          Verified, not generated. Every answer traces to a named validator and
          a source document.
        </PullQuote>
      </Chapter>

      <Chapter bordered eyebrow="The Outcome" title="What changed">
        <OutcomeList items={OUTCOMES} />
      </Chapter>

      <CTABanner />
    </>
  );
}
