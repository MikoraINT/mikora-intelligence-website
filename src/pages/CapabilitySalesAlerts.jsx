import SolutionTemplate from '../components/SolutionTemplate';
import {
  AlertMock,
  AlertFieldsMock,
  AlertRulesMock,
} from '../components/mockups';

export default function CapabilitySalesAlerts() {
  return (
    <SolutionTemplate
      seo={{
        title: 'Hot leads never wait — Mikora Intelligence',
        description:
          'The moment a high-intent lead arrives, your team knows — with the full profile, score, and recommended action in their inbox.',
        canonical: 'https://mikoraintelligence.com/capabilities/sales-alerts',
      }}
      hero={{
        eyebrow: 'Real-Time Sales Alerts',
        title: 'Hot leads never wait.',
        subtitle:
          'The moment a high-intent lead arrives, your team knows — with the full profile, score, and recommended action in their inbox.',
      }}
      problems={[
        'Leads submitted at 6pm get called at 11am tomorrow.',
        'Your team checks the CRM when they remember to.',
        'Speed to lead determines close rate and you are losing the race.',
      ]}
      solutions={[
        {
          title: 'Instant hot lead notifications',
          description:
            'Email alerts fire the moment a lead scores hot, with the full profile attached.',
          mock: <AlertMock />,
        },
        {
          title: 'Everything your team needs in one alert',
          description:
            'Name, contact, score, source, device interest, timeline, and recommended action.',
          mock: <AlertFieldsMock />,
        },
        {
          title: 'Alert rules you control',
          description: 'Set thresholds by score, source, or lead type.',
          mock: <AlertRulesMock />,
        },
      ]}
      outcomes={[
        'Follow-up time cut from hours to minutes.',
        'No hot lead ever missed.',
        'Full context before the first call.',
      ]}
      related={[
        { title: 'Lead Scoring', to: '/capabilities/lead-scoring' },
        { title: 'CRM Sync', to: '/capabilities/crm-sync' },
        { title: 'WhatsApp Support', to: '/capabilities/whatsapp-support' },
      ]}
    />
  );
}
