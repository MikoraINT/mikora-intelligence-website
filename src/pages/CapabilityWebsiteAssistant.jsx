import SolutionTemplate from '../components/SolutionTemplate';
import {
  WebChatMock,
  LeadScoreMock,
  HandoffMock,
} from '../components/mockups';

export default function CapabilityWebsiteAssistant() {
  return (
    <SolutionTemplate
      seo={{
        title:
          'Your website should be your best salesperson — Mikora Intelligence',
        description:
          'The Mikora website assistant engages visitors in conversation, answers their questions, captures their details, and scores them as leads — automatically.',
        canonical:
          'https://mikoraintelligence.com/capabilities/website-assistant',
      }}
      hero={{
        eyebrow: 'Website Intelligence',
        title: 'Your website should be your best salesperson',
        subtitle:
          'The Mikora website assistant engages visitors in conversation, answers their questions, captures their details, and scores them as leads — automatically, on every page.',
      }}
      problems={[
        'Visitors browse, leave, and you never know they existed.',
        'Static contact forms convert a fraction of interested traffic.',
        'After-hours visitors get nothing but a phone number.',
      ]}
      solutions={[
        {
          title: 'Conversational lead capture',
          description:
            'The assistant engages naturally, answers product questions, and gathers contact details without form fatigue.',
          mock: <WebChatMock />,
        },
        {
          title: 'Instant scoring and routing',
          description:
            'Every conversation becomes a scored lead in your CRM with full context attached.',
          mock: <LeadScoreMock source="Website chat" />,
        },
        {
          title: 'Human handoff when needed',
          description:
            'Live chat escalation for conversations that need your team.',
          mock: <HandoffMock />,
        },
      ]}
      outcomes={[
        'Every engaged visitor becomes a scored lead.',
        'Answers available around the clock.',
        'Full conversation context for your sales team.',
      ]}
      related={[
        { title: 'Lead Scoring', to: '/capabilities/lead-scoring' },
        { title: 'Sales Alerts', to: '/capabilities/sales-alerts' },
        { title: 'Website Build', to: '/capabilities/website-build' },
      ]}
    />
  );
}
