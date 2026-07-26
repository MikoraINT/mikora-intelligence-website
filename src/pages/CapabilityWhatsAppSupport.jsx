import SolutionTemplate from '../components/SolutionTemplate';
import {
  WhatsAppChatMock,
  WhatsAppIndustriesMock,
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
          'Your team and your customers get accurate answers on WhatsApp in seconds — drawn from your own training materials, SOPs, protocols and internal know-how.',
        canonical:
          'https://mikoraintelligence.com/capabilities/whatsapp-support',
      }}
      hero={{
        eyebrow: 'WhatsApp Support Intelligence',
        title: 'Your knowledge base. Their pocket. Instantly.',
        subtitle:
          'Your team and your customers get accurate answers on WhatsApp in seconds — drawn from your own training materials, SOPs, protocols and internal know-how — with intelligent escalation to your experts when it matters.',
      }}
      problems={[
        'Support queries arrive at all hours and wait until morning.',
        'Your best people answer the same questions on repeat.',
        'Written manuals exist but nobody opens them mid-job.',
      ]}
      solutions={[
        {
          title: 'Answers from your own materials',
          description:
            'Your SOPs, manuals, and protocols power every response, so answers are always accurate to your standards.',
          mock: <WhatsAppIndustriesMock />,
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
          mock: (
            <WhatsAppChatMock
              sourceRef="Signed off · Head Trainer"
              question="Can I use the M8 setting on sensitive areas?"
              answer="No — updated guidance: use M5, two passes maximum. This correction was confirmed by your Head Trainer and now outranks the original manual."
              footnote="Corrections outrank the knowledge base the moment they're confirmed"
            />
          ),
        },
      ]}
      outcomes={[
        'Answers in seconds, day or night.',
        'Trainer hours reclaimed every week.',
        'Support quality consistent for everyone you support.',
      ]}
      related={[
        { title: 'Training Academies', to: '/solutions/training-academies' },
        { title: 'Website Assistant', to: '/capabilities/website-assistant' },
        { title: 'CRM Sync', to: '/capabilities/crm-sync' },
      ]}
    />
  );
}
