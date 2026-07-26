import SolutionTemplate from '../components/SolutionTemplate';
import {
  WebChatMock,
  LeadScoreMock,
  HandoffMock,
} from '../components/mockups';

export default function CapabilityWebsiteActivityScoring() {
  return (
    <SolutionTemplate
      seo={{
        title:
          "Website Activity Scoring — know who's serious before they say a word — Mikora Intelligence",
        description:
          'New from Mikora: visitor behaviour — pages viewed, time on site, return visits, campaign source — blended with chat engagement into one real-time intent score, routed straight to your team.',
        canonical:
          'https://mikoraintelligence.com/capabilities/website-activity-scoring',
      }}
      hero={{
        eyebrow: 'New — Website Activity Scoring',
        title: "Know who's serious before they say a word.",
        subtitle:
          'Mikora watches how visitors move through your site — pages viewed, time on site, return visits, source and campaign — and blends it with chat engagement to score intent in real time. Launching now as part of the Mikora website assistant.',
      }}
      problems={[
        'Most visitors never fill in a form — their interest stays invisible.',
        'Chat transcripts alone miss the buying signals hidden in browsing behaviour.',
        "Your team can't tell a serious buyer from a curious browser until it's too late.",
      ]}
      solutions={[
        {
          title: 'Behaviour becomes signal',
          description:
            'Pages viewed, time on site, return visits and campaign source are captured as scoring signals from the first visit — no form required.',
          mock: <WebChatMock />,
        },
        {
          title: 'One blended intent score',
          description:
            'Site activity and chat engagement combine into a single intent score that updates in real time as the visitor moves through your site.',
          mock: <LeadScoreMock source="Website activity" />,
        },
        {
          title: "Routed while they're still browsing",
          description:
            'High-intent visitors surface to your team immediately — in the CRM and as alerts — while the interest is still live.',
          mock: <HandoffMock />,
        },
      ]}
      outcomes={[
        'Serious buyers surface before they enquire.',
        'Every campaign click becomes measurable intent.',
        'Sales time goes where it counts.',
      ]}
      related={[
        { title: 'Website Assistant', to: '/capabilities/website-assistant' },
        { title: 'Lead Scoring', to: '/capabilities/lead-scoring' },
        { title: 'Sales Alerts', to: '/capabilities/sales-alerts' },
      ]}
    />
  );
}
