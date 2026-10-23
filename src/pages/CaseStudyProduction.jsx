import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { PageHero } from '../components/ui';
import { Chapter, WorkGroup, PullQuote } from '../components/caseStudy';

const WORK = [
  {
    title: 'Training and clinical documents',
    body:
      'Five full course manuals, 41 to 54 pages each, built to the brand design system and handed over as PDF and editable source so the trainers can revise them without coming back to us. Alongside them, nine clinical reference pieces — a serum selection wall chart, a treatment frequency table, a dermatoscope reference sheet, aftercare guides, consultation and inspection forms.',
  },
  {
    title: 'Design and brand production',
    body:
      'Eighteen course covers for the student portal, rebuilt to one typographic system, with device accuracy treated as a hard requirement rather than a stock-image approximation. Product brochures, a distributor edition, and a price book that regenerates itself when prices move instead of being retyped.',
  },
  {
    title: 'Commercial systems',
    body:
      'A 193-product catalogue migrated between platforms with currency conversion and images intact. The CRM restructure behind the attribution rebuild. Quote and brochure generation wired to the real price book, so a quote cannot quietly carry last quarter’s number.',
  },
  {
    title: 'Content',
    body:
      'A back catalogue of 64 videos captioned and brand-corrected, 32 of them prepared and published. A monthly newsletter, produced as both a designed deck and an HTML email.',
  },
];

export default function CaseStudyProduction() {
  return (
    <>
      <SEO
        title="One job became about ten — eighteen months inside one business"
        description="Manuals, course design, a 193-product catalogue migration, a captioned back catalogue and a monthly newsletter — almost all of it starting as a single one-off request."
        canonical="https://mikoraintelligence.com/case-studies/production"
      />
      <PageHero
        eyebrow="Case Study · The Whole Account"
        title="One job became about ten."
        subtitle="Eighteen months inside one business — and the sentence in the title is the client's, not ours."
      />

      <Chapter
        eyebrow="How This One Works"
        title="The reason the systems got built"
        paragraphs={[
          'The other two case studies are systems. This one is the reason those systems exist: once the support number worked, the brand kept asking for the next thing. Almost all of it started as a single request, priced on its own, with no retainer attached.',
          'It is here because most companies do not need a platform on day one. They need one job doing well.',
        ]}
      >
        <PullQuote attribution="The client, on eighteen months of work">
          He came in to do one job and has ended up doing about ten.
        </PullQuote>
      </Chapter>

      <Chapter bordered eyebrow="The Work" title="What eighteen months looked like">
        <WorkGroup groups={WORK} />
      </Chapter>

      <Chapter
        bordered
        eyebrow="The Outcome"
        title="No single number — the shape is the point"
        paragraphs={[
          'One relationship, eighteen months, and work that arrived because the previous piece had worked. There is no headline metric on this page because the result is not a metric: it is a business that stopped shopping around.',
          'Most of it began as a one-off job, which is how we would rather start.',
        ]}
      >
        <div className="mt-10">
          <Link
            to="/capabilities/production"
            className="inline-block rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight"
          >
            See how production works
          </Link>
        </div>
      </Chapter>

      <CTABanner
        heading="Want this behind your own business?"
        subtext="It starts with the assistant — the production work follows once we know your material."
      />
    </>
  );
}
