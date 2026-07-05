import SolutionTemplate from '../components/SolutionTemplate';
import {
  WhatsAppChatMock,
  EscalationMock,
  ConversationLogMock,
} from '../components/mockups';

export default function SolutionTrainingAcademies() {
  return (
    <SolutionTemplate
      seo={{
        title:
          'Support every practitioner. Around the clock — Mikora Intelligence',
        description:
          'Your practitioners have questions at 9pm on a Saturday mid-treatment. Mikora answers them instantly on WhatsApp — from your own training materials.',
        canonical:
          'https://mikoraintelligence.com/solutions/training-academies',
      }}
      hero={{
        eyebrow: 'For Training Academies and Franchise Networks',
        title: 'Support every practitioner. Around the clock.',
        subtitle:
          'Your practitioners have questions at 9pm on a Saturday mid-treatment. Mikora answers them instantly on WhatsApp — from your own training materials — and escalates to your team only when it matters.',
      }}
      problems={[
        'Practitioners need answers mid-treatment, not next business day.',
        'Your trainers spend hours answering the same questions repeatedly.',
        'Support quality depends on who happens to be available.',
      ]}
      solutions={[
        {
          title: 'Instant WhatsApp answers from your own knowledge base',
          description:
            'SOPs, training manuals, and treatment protocols become an always-on support layer.',
          mock: <WhatsAppChatMock />,
        },
        {
          title: 'Intelligent escalation',
          description:
            'Complex or sensitive queries route to your training team with full conversation context.',
          mock: <EscalationMock />,
        },
        {
          title: 'Every conversation logged',
          description:
            'See what practitioners ask, where knowledge gaps are, and how support performs.',
          mock: <ConversationLogMock />,
        },
      ]}
      outcomes={[
        'Support available 24 hours a day 7 days a week.',
        'Trainer time freed for high-value work.',
        'Every practitioner interaction captured and searchable.',
      ]}
      related={[
        { title: 'WhatsApp Support', to: '/capabilities/whatsapp-support' },
        { title: 'Website Assistant', to: '/capabilities/website-assistant' },
        { title: 'CRM Sync', to: '/capabilities/crm-sync' },
      ]}
    />
  );
}
