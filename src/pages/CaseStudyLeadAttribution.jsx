import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { PageHero } from '../components/ui';
import {
  StatementBand,
  Chapter,
  ProblemList,
  OutcomeList,
} from '../components/caseStudy';

const PROBLEMS = [
  'Enquiries from Meta lead ads, website forms and the website chat assistant landed in three places with no shared view.',
  'Sales could not tell a clinic owner ready to buy from somebody browsing.',
  'Follow-up speed depended on when a person next checked an inbox.',
];

const OUTCOMES = [
  'Attribution captured on arrival, where won deals had previously carried none.',
  'Every historical lead restaged into a clean pipeline, with no record left behind.',
  'Closed business that had no traceable source now has one.',
  'Hot enquiries alert the team the moment they arrive, rather than waiting on an inbox check.',
];

export default function CaseStudyLeadAttribution() {
  return (
    <>
      <SEO
        title="CRM restructure and lead attribution — Mikora case study"
        description="How we rebuilt a drifted sales pipeline: a website assistant that scores enquiries on arrival, attribution captured at source, and every historical record migrated behind a safety net."
        canonical="https://mikoraintelligence.com/case-studies/lead-attribution"
      />
      <PageHero
        eyebrow="Case Study · Revenue Operations"
        title="Nobody could say where the deals came from."
        subtitle="A website assistant, intent scoring, and a CRM rebuilt underneath them both."
      />
      <StatementBand
        title="We restructure and re-automate CRMs."
        body="Pipelines rebuilt, stages consolidated, records migrated in bulk and the automations behind them rewired — with a safety net in place before a single record moves."
      />

      <Chapter
        eyebrow="The Problem"
        title="Three sources, three inboxes, no answers"
        paragraphs={[
          'Enquiries arrived from Meta lead ads, website forms and the website chat assistant, and landed in three different places with no unified view.',
          'Underneath that, the CRM had been recording nothing useful. An audit of the pipeline found that won deals carried no attribution at all — across a substantial book of closed business there was no answer to which campaign, source or channel had produced any of it. Lead status had drifted into a long tail of inconsistent values, several meaning the same thing and one of them blank.',
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
          'Then the pipeline underneath it was rebuilt. The drifted status values were consolidated into a clean stage model and every historical record migrated in bulk, with a safety net installed before a single record moved — so inbound leads were covered from the first minute of the migration rather than the end of it.',
        ]}
      />

      <Chapter bordered eyebrow="The Outcome" title="What changed">
        <OutcomeList items={OUTCOMES} />
      </Chapter>

      <CTABanner />
    </>
  );
}
