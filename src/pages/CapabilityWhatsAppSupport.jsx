import SolutionTemplate from '../components/SolutionTemplate';
import {
  WhatsAppChatMock,
  EscalationMock,
  ConversationLogMock,
} from '../components/mockups';

export default function CapabilityWhatsAppSupport() {
  return (
    <SolutionTemplate
      seo={{
        title:
          'Your knowledge base. Their pocket. Instantly — Mikora Intelligence',
        description:
          'Practitioners and customers get accurate answers on WhatsApp in seconds — drawn from your own training materials, protocols, and documentation.',
        canonical:
          'https://mikoraintelligence.com/capabilities/whatsapp-support',
      }}
      hero={{
        eyebrow: 'WhatsApp Support Intelligence',
        title: 'Your knowledge base. Their pocket. Instantly.',
        subtitle:
          'Practitioners and customers get accurate answers on WhatsApp in seconds — drawn from your own training materials, protocols, and documentation — with intelligent escalation to your team when it matters.',
      }}
      problems={[
        'Support queries arrive at all hours and wait until morning.',
        'Your best trainers answer the same questions on repeat.',
        'Written manuals exist but nobody opens them mid-treatment.',
      ]}
      solutions={[
        {
          title: 'Answers from your own materials',
          description:
            'Your SOPs, manuals, and protocols power every response, so answers are always accurate to your standards.',
          mock: <WhatsAppChatMock sourceRef="Advanced Training Manual" />,
        },
        {
          title: 'Intelligent escalation',
          description:
            'Questions that need a human route to your team with the full conversation attached.',
          mock: <EscalationMock />,
        },
        {
          title: 'Complete conversation intelligence',
          description:
            'Every question logged, revealing knowledge gaps and training opportunities.',
          mock: <ConversationLogMock />,
        },
        {
          title: 'Verified, not just generated',
          description:
            'Every answer is backed by documents your named experts signed off — with corrections that outrank the knowledge base the moment they’re confirmed. Accountability no generic chatbot can offer.',
          mock: <WhatsAppChatMock sourceRef="Signed off · Head Trainer" />,
        },
      ]}
      outcomes={[
        'Answers in seconds, day or night.',
        'Trainer hours reclaimed every week.',
        'Support quality consistent for every practitioner.',
      ]}
      related={[
        { title: 'Training Academies', to: '/solutions/training-academies' },
        { title: 'Website Assistant', to: '/capabilities/website-assistant' },
        { title: 'CRM Sync', to: '/capabilities/crm-sync' },
      ]}
    />
  );
}
