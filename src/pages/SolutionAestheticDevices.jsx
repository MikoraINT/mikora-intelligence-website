import SolutionTemplate from '../components/SolutionTemplate';
import {
  LeadScoreMock,
  AlertMock,
  PipelineMock,
} from '../components/mockups';

export default function SolutionAestheticDevices() {
  return (
    <SolutionTemplate
      seo={{
        title: 'From lead ad to CRM in seconds — Mikora Intelligence',
        description:
          'Your devices sell on speed of follow-up. Mikora makes sure every enquiry is scored, routed, and in front of your sales team before your competitor.',
        canonical: 'https://mikoraintelligence.com/solutions/aesthetic-devices',
      }}
      hero={{
        eyebrow: 'For Aesthetic Device Companies',
        title: 'From lead ad to CRM in seconds',
        subtitle:
          'Your devices sell on speed of follow-up. Mikora makes sure every enquiry — from Meta, your website, or live chat — is scored, routed, and in front of your sales team before your competitor even opens their inbox.',
      }}
      problems={[
        'Device enquiries go cold within hours not days.',
        'Your sales team wastes time on tyre-kickers while serious buyers wait.',
        'Leads from different sources live in different places with no single view.',
      ]}
      solutions={[
        {
          title: 'Every enquiry scored on purchase intent',
          description:
            'Timeline, clinic ownership, finance readiness, and device interest combine into one temperature.',
          mock: <LeadScoreMock />,
        },
        {
          title: 'Real-time alerts for hot enquiries',
          description:
            'The moment a ready-to-buy practitioner submits a form, your team knows.',
          mock: <AlertMock />,
        },
        {
          title: 'One pipeline across Meta, website, and chat',
          description:
            'Every source flows into the same scored, deduplicated CRM view.',
          mock: <PipelineMock />,
        },
      ]}
      outcomes={[
        'Enquiries scored in under 60 seconds.',
        'Every hot lead alerted in real time.',
        'One unified pipeline across every source.',
      ]}
      related={[
        { title: 'Lead Scoring', to: '/capabilities/lead-scoring' },
        { title: 'Sales Alerts', to: '/capabilities/sales-alerts' },
        { title: 'CRM Sync', to: '/capabilities/crm-sync' },
      ]}
    />
  );
}
