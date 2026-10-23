/* Every published price on the site lives here and nowhere else.
   Change a number once and the pricing page, the services page and the
   case study CTAs all follow.

   Architecture: three ways to buy, in ascending commitment. A fixed-price
   project needs no retainer and no minimum term; the pilot is the main
   offer; the retainer has a floor and no ceiling. */

/** Section A — fixed-price projects. The front door. */
export const PROJECTS = [
  {
    name: 'Knowledge Bottleneck Audit',
    price: '£750',
    blurb:
      'A day inside your operation: where the repeat questions come from, what they cost you in engineer hours, and which of them a system could answer.',
  },
  {
    name: 'Website assistant, installed',
    price: '£1,200',
    blurb:
      'Your manuals behind a chat widget on your own site, answering visitors from your material rather than a generic model.',
  },
  {
    name: 'Course or device manual',
    price: '£950',
    blurb:
      'Forty to fifty-five pages, built to your brand, delivered as a finished PDF and editable source so your trainers can revise it without coming back to us.',
  },
  {
    name: 'Brochure or price book set',
    price: '£1,200',
    blurb:
      'Product brochures, distributor editions and price books that regenerate themselves when prices move, instead of being retyped.',
  },
  {
    name: 'CRM audit and stage rebuild',
    price: '£1,800',
    blurb:
      'What your pipeline is actually recording, followed by a clean stage model and every historical record migrated behind a safety net.',
  },
  {
    name: 'Catalogue migration',
    price: '£1,500',
    blurb:
      'Up to 200 products moved between platforms with currency conversion and images intact. Priced per 200.',
  },
  {
    name: 'Captioned video or shorts pack',
    price: '£650',
    blurb:
      'Training footage cut, captioned and brand-corrected, ready for your portal, your channel or your socials.',
  },
];

/** Website builds — projects too, but they have their own tiers. */
export const SITE_TIERS = [
  {
    name: 'Starter Site',
    price: '£1,500',
    features: [
      'Up to 5 pages',
      'Mobile responsive',
      'SEO optimised',
      'GitHub and Cloudflare deployment',
      '30 days post-launch support',
    ],
  },
  {
    name: 'Growth Site',
    price: '£3,500',
    features: [
      'Up to 15 pages',
      'Everything in Starter',
      'Blog structure',
      'Lead capture form wired to your CRM',
      'Framer Motion animations',
    ],
  },
  {
    name: 'Full Platform Site',
    price: '£6,500',
    features: [
      '20+ pages',
      'Everything in Growth',
      'ROI calculators and interactive tools',
      'Intelligence-powered chat',
      'Custom design system',
    ],
  },
];

/** Section B — the flagship offer. */
export const PILOT = {
  build: '£1,200',
  monthly: '£300',
  term: '90 days',
  features: [
    'Your manuals, SOPs and training ingested and made searchable',
    'Answers on your website and on WhatsApp, from the same knowledge',
    'Every answer traceable to the document it came from',
    'Anything risky escalated to a named human, with the conversation attached',
    'Every question you were asked — including the ones nobody could answer',
  ],
};

/** Section C — ongoing work. A floor, deliberately no ceiling. */
export const RETAINER = {
  from: '£2,200',
  features: [
    'A named week of my time each month',
    'Scoped in days, not deliverables',
    'Knowledge, revenue operations and production in one place',
    'Priority on anything already running',
  ],
};

/** How many project slots open each month. Protects delivery capacity. */
export const PROJECT_SLOTS = 'Two project slots a month.';
