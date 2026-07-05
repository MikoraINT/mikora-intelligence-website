import SolutionTemplate from '../components/SolutionTemplate';
import {
  CampaignQualityMock,
  SpendDashboardMock,
  WhiteLabelMock,
} from '../components/mockups';

export default function SolutionAgencies() {
  return (
    <SolutionTemplate
      seo={{
        title:
          'White-label intelligence for your clients — Mikora Intelligence',
        description:
          'You run the campaigns. Mikora proves they work. Give every client scored leads, real-time alerts, and spend-to-pipeline reporting — under your brand.',
        canonical: 'https://mikoraintelligence.com/solutions/agencies',
      }}
      hero={{
        eyebrow: 'For Marketing Agencies',
        title: 'White-label intelligence for your clients',
        subtitle:
          'You run the campaigns. Mikora proves they work. Give every client scored leads, real-time alerts, and spend-to-pipeline reporting — under your brand.',
      }}
      problems={[
        'Clients ask what happened to the leads you generated and you have no good answer.',
        'Reporting stops at clicks and form fills, not revenue.',
        'Every client has a different CRM and a different mess.',
      ]}
      solutions={[
        {
          title: 'Lead scoring on every campaign',
          description:
            'Show clients not just lead volume but lead quality, scored automatically.',
          mock: <CampaignQualityMock />,
        },
        {
          title: 'Spend-to-pipeline reporting',
          description:
            'Connect ad spend to scored leads to closed deals in one view.',
          mock: <SpendDashboardMock />,
        },
        {
          title: 'White-label delivery',
          description:
            'Mikora runs under your agency brand with your clients none the wiser.',
          mock: <WhiteLabelMock />,
        },
      ]}
      outcomes={[
        'Prove campaign quality not just quantity.',
        'Retain clients with revenue-level reporting.',
        'Add a recurring revenue line to your agency.',
      ]}
      related={[
        { title: 'Ad Spend Tracking', to: '/capabilities/ad-spend-tracking' },
        { title: 'Lead Scoring', to: '/capabilities/lead-scoring' },
        { title: 'Website Build', to: '/capabilities/website-build' },
      ]}
    />
  );
}
