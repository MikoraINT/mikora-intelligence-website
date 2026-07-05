import SolutionTemplate from '../components/SolutionTemplate';
import {
  FitMock,
  IntentMock,
  ScoreBreakdownMock,
} from '../components/mockups';

export default function CapabilityLeadScoring() {
  return (
    <SolutionTemplate
      seo={{
        title: 'Know who to call first. Every time — Mikora Intelligence',
        description:
          'Mikora scores every lead on fit and intent the moment it arrives — so your team spends time on buyers, not browsers.',
        canonical: 'https://mikoraintelligence.com/capabilities/lead-scoring',
      }}
      hero={{
        eyebrow: 'Intelligent Lead Scoring',
        title: 'Know who to call first. Every time.',
        subtitle:
          'Mikora scores every lead on fit and intent the moment it arrives — so your team spends time on buyers, not browsers.',
      }}
      problems={[
        'All leads look the same in a CRM list.',
        'Sales time wasted on low-intent enquiries.',
        'Hot leads discovered days too late.',
      ]}
      solutions={[
        {
          title: 'Fit scoring — who they are',
          description:
            'Business type, clinic ownership, location, and profile completeness.',
          mock: <FitMock />,
        },
        {
          title: 'Intent scoring — what they want',
          description:
            'Purchase timeline, finance readiness, device interest, and engagement signals.',
          mock: <IntentMock />,
        },
        {
          title: 'Blended temperature — one clear signal',
          description:
            'Hot, warm, or cold, with a recommended action attached.',
          mock: <ScoreBreakdownMock />,
        },
      ]}
      outcomes={[
        'Every lead scored in under 60 seconds.',
        'Clear priority for every sales conversation.',
        'Scoring rules tuned to your business.',
      ]}
      related={[
        { title: 'Sales Alerts', to: '/capabilities/sales-alerts' },
        { title: 'CRM Sync', to: '/capabilities/crm-sync' },
        { title: 'ROI Calculator', to: '/capabilities/roi-calculator' },
      ]}
    />
  );
}
