import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { PageHero } from '../components/ui';
import {
  MetricBand,
  Chapter,
  ProblemList,
  OutcomeList,
} from '../components/caseStudy';

const METRICS = [
  { value: '0 of 160', label: 'Won deals carrying any attribution, before' },
  { value: '10,939', label: 'Leads restaged into the new pipeline' },
  { value: '8', label: 'Stages, consolidated from 15 drifted values' },
  { value: '£552k', label: 'Closed business with no traceable source' },
];

const PROBLEMS = [
  'Enquiries from Meta lead ads, website forms and the website chat assistant landed in three places with no shared view.',
  'Sales could not tell a clinic owner ready to buy from somebody browsing.',
  'Follow-up speed depended on when a person next checked an inbox.',
];

const OUTCOMES = [
  'Attribution captured on arrival, where not one of 160 won deals had carried any.',
  '10,939 leads restaged into 8 stages, consolidated from 15 inconsistent values.',
  '£552,000 of closed business that had no traceable source now has one.',
  'Hot enquiries alert the team the moment they arrive, rather than waiting on an inbox check.',
];

export default function CaseStudyLeadAttribution() {
  return (
    <>
      <SEO
        title="£552,000 won and nobody could say why — Mikora case study"
        description="An attribution audit found 0 of 160 won deals carried any source. How a website assistant, intent scoring and a rebuilt 8-stage pipeline across 10,939 leads fixed it."
        canonical="https://mikoraintelligence.com/case-studies/lead-attribution"
      />
      <PageHero
        eyebrow="Case Study · Revenue Operations"
        title="£552,000 won, and nobody could say why."
        subtitle="A website assistant, intent scoring, and a CRM rebuilt underneath them both."
      />
      <MetricBand metrics={METRICS} />

      <Chapter
        eyebrow="The Problem"
        title="Three sources, three inboxes, no answers"
        paragraphs={[
          'Enquiries arrived from Meta lead ads, website forms and the website chat assistant, and landed in three different places with no unified view.',
          'Underneath that, the CRM had been recording nothing useful. An audit of the pipeline found not one of 160 won deals carried any attribution — across £552,000 of closed business there was no answer to which campaign, source or channel had produced it. Lead status had drifted into fifteen inconsistent values, several meaning the same thing and one of them blank.',
        ]}
      >
        <ProblemList items={PROBLEMS} />
      </Chapter>

      <Chapter
        bordered
        eyebrow="What We Built"
        title="Score it on arrival, then fix what it lands in"
        paragraphs={[
          'An assistant on the website that answers visitors from the same verified knowledge base as the WhatsApp number, captures the enquiry, and scores it on fit and intent before it reaches a human. Behavioural signals — pages viewed, return visits, campaign source, chat engagement — blend into one real-time intent score, so a quiet visitor who has read the pricing page three times is not treated like a first-time click.',
          'Then the pipeline underneath it was rebuilt. Fifteen drifted status values consolidated into eight stages across 10,939 leads, with a safety net installed before a single record moved — so inbound leads were covered from the first minute of the migration rather than the end of it.',
        ]}
      />

      <Chapter bordered eyebrow="The Outcome" title="What changed">
        <OutcomeList items={OUTCOMES} />
      </Chapter>

      <CTABanner />
    </>
  );
}
