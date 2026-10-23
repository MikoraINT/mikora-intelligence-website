import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { PageHero, Reveal } from '../components/ui';
import { CaseStudyCard, CASE_STUDIES } from '../components/caseStudy';

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case studies — Mikora Intelligence"
        description="Eighteen months inside a global aesthetic device brand: verified WhatsApp support for 200 practitioners, an attribution rebuild across 10,939 leads, and the production work that followed."
        canonical="https://mikoraintelligence.com/case-studies"
      />
      <PageHero
        eyebrow="Case Studies"
        title="Three stories. One client."
        subtitle="Everything below was delivered for a single global aesthetic device brand over eighteen months — the support system, the revenue operations behind it, and the work that arrived once both were running."
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
          <div className="grid items-stretch gap-5 md:grid-cols-3">
            {CASE_STUDIES.map((cs, i) => (
              <CaseStudyCard key={cs.to} {...cs} delay={i * 0.1} />
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-small text-muted">
              Client named on request. Figures are taken from the live systems
              and the migration runbooks, not from a brochure.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
