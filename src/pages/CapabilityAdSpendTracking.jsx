import SolutionTemplate from '../components/SolutionTemplate';
import {
  SpendSyncMock,
  CampaignQualityMock,
  SpendDashboardMock,
} from '../components/mockups';

export default function CapabilityAdSpendTracking() {
  return (
    <SolutionTemplate
      seo={{
        title:
          'See which campaigns actually make you money — Mikora Intelligence',
        description:
          'Clicks do not pay the bills. Mikora connects your ad spend to scored leads and real pipeline — so you know exactly where every pound works hardest.',
        canonical:
          'https://mikoraintelligence.com/capabilities/ad-spend-tracking',
      }}
      hero={{
        eyebrow: 'Spend Intelligence',
        title: 'See which campaigns actually make you money',
        subtitle:
          'Clicks and impressions do not pay the bills. Mikora connects your ad spend to scored leads and real pipeline — so you know exactly where every pound works hardest.',
      }}
      problems={[
        'Ad platforms report clicks, not customers.',
        'Spend decisions made on vanity metrics.',
        'No way to see cost per quality lead, only cost per lead.',
      ]}
      solutions={[
        {
          title: 'Spend synced daily from your ad accounts',
          description:
            'Campaign level spend, impressions, and clicks flow in automatically.',
          mock: <SpendSyncMock />,
        },
        {
          title: 'Connected to lead quality',
          description:
            'Every campaign linked to the scored leads it produced, not just raw volume.',
          mock: <CampaignQualityMock />,
        },
        {
          title: 'Cost per hot lead',
          description:
            'The metric that matters: what does a genuinely sales-ready lead cost from each campaign.',
          mock: <SpendDashboardMock />,
        },
      ]}
      outcomes={[
        'Kill wasteful campaigns with confidence.',
        'Double down on what produces pipeline.',
        'One view across Meta and Google.',
      ]}
      related={[
        { title: 'Lead Scoring', to: '/capabilities/lead-scoring' },
        { title: 'CRM Sync', to: '/capabilities/crm-sync' },
        { title: 'ROI Calculator', to: '/capabilities/roi-calculator' },
      ]}
    />
  );
}
