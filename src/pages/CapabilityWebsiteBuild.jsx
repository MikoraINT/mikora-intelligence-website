import { Link } from 'react-router-dom';
import SolutionTemplate from '../components/SolutionTemplate';
import { Reveal } from '../components/ui';
import { ArrowIcon } from '../components/icons';
import { BrowserMock, PipelineMock, SEOMock } from '../components/mockups';

const PRICE_POINTS = [
  ['Starter Site', '£1,500', 'one-off'],
  ['Growth Site', '£3,500', 'one-off'],
  ['Full Platform Site', '£6,500', 'one-off'],
];

function PricingNote() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-2xl border border-border border-l-4 border-l-gold bg-surface p-8 md:p-10">
            <h2 className="font-heading text-h2 font-bold text-white">
              Website build pricing
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {PRICE_POINTS.map(([name, price, period]) => (
                <div
                  key={name}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <p className="text-small text-muted">{name}</p>
                  <p className="mt-1.5 flex items-baseline gap-2">
                    <span className="font-heading text-h2 font-bold text-gold">
                      {price}
                    </span>
                    <span className="text-small text-muted">{period}</span>
                  </p>
                </div>
              ))}
            </div>
            <Link
              to="/pricing"
              className="group mt-8 inline-flex items-center gap-2 text-body font-medium text-gold transition-colors hover:text-goldLight"
            >
              See full pricing
              <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function CapabilityWebsiteBuild() {
  return (
    <SolutionTemplate
      seo={{
        title:
          'A website that works as hard as you do — Mikora Intelligence',
        description:
          'React websites designed, built, and deployed in days — SEO optimised, conversion focused, and wired directly into your lead pipeline from day one.',
        canonical: 'https://mikoraintelligence.com/capabilities/website-build',
      }}
      hero={{
        eyebrow: 'Intelligent Website Build',
        title: 'A website that works as hard as you do',
        subtitle:
          'React websites designed, built, and deployed in days — SEO optimised, conversion focused, and wired directly into your lead pipeline from day one.',
      }}
      problems={[
        'Agencies quote three months and five figures for a basic site.',
        'Your current site looks fine but captures nothing.',
        'Every change request costs money and takes weeks.',
      ]}
      solutions={[
        {
          title: 'Built and live in days not months',
          description:
            'Modern React architecture deployed on global infrastructure.',
          mock: <BrowserMock />,
        },
        {
          title: 'Wired into your pipeline',
          description:
            'Every form, chat, and calculator feeds scored leads directly into your CRM.',
          mock: <PipelineMock sources={['Forms', 'Chat', 'Calculator']} />,
        },
        {
          title: 'SEO from the foundation',
          description:
            'Proper structure, metadata, schema, and performance built in, not bolted on.',
          mock: <SEOMock />,
        },
      ]}
      outcomes={[
        'From brief to live in days.',
        'Every visitor a potential scored lead.',
        'Built to rank from day one.',
      ]}
      related={[
        { title: 'Website Assistant', to: '/capabilities/website-assistant' },
        { title: 'ROI Calculator', to: '/capabilities/roi-calculator' },
        { title: 'Lead Scoring', to: '/capabilities/lead-scoring' },
      ]}
      extra={<PricingNote />}
    />
  );
}
