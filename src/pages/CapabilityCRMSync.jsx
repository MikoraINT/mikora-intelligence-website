import SolutionTemplate from '../components/SolutionTemplate';
import {
  PipelineMock,
  TwoWaySyncMock,
  ActivityMock,
} from '../components/mockups';

export default function CapabilityCRMSync() {
  return (
    <SolutionTemplate
      seo={{
        title:
          'Your CRM, always up to date. Automatically — Mikora Intelligence',
        description:
          'Every lead, every status change, every note — synced across your entire stack without anyone touching a keyboard. Mikora is Zoho-native.',
        canonical: 'https://mikoraintelligence.com/capabilities/crm-sync',
      }}
      hero={{
        eyebrow: 'CRM Sync and Pipeline Automation',
        title: 'Your CRM, always up to date. Automatically.',
        subtitle:
          'Every lead, every status change, every note — synced across your entire stack without anyone touching a keyboard. Mikora is Zoho-native with other CRM integrations available.',
      }}
      problems={[
        'Manual data entry eats hours and introduces errors.',
        'Duplicate records make reporting meaningless.',
        'Status updates in one tool never reach another.',
      ]}
      solutions={[
        {
          title: 'Automatic lead creation and deduplication',
          description:
            'Every source feeds one clean CRM record, matched intelligently on email and identity.',
          mock: <PipelineMock sources={['Website', 'Ads', 'Chat']} />,
        },
        {
          title: 'Two-way status sync',
          description:
            'Updates made by your sales team flow back through the intelligence layer.',
          mock: <TwoWaySyncMock />,
        },
        {
          title: 'Notes and activity sync',
          description:
            'Calls logged, notes captured, actions tracked across systems.',
          mock: <ActivityMock />,
        },
      ]}
      outcomes={[
        'Zero manual data entry.',
        'One clean record per lead, always.',
        'Zoho-native, other CRMs supported.',
      ]}
      related={[
        { title: 'Lead Scoring', to: '/capabilities/lead-scoring' },
        { title: 'Sales Alerts', to: '/capabilities/sales-alerts' },
        { title: 'Ad Spend Tracking', to: '/capabilities/ad-spend-tracking' },
      ]}
    />
  );
}
