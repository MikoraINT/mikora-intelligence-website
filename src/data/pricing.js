/* Every published price on the site lives here and nowhere else.
   Change a number once and the pricing page follows.

   Shape: three monthly plans built around the WhatsApp assistant, which
   is the subscription everything else hangs off. Website builds stay a
   standalone one-off. Document and content production is NOT sold from
   the site — it is work we quote for clients already on a plan, so it
   appears as a capability with no price attached. */

/** Monthly plans. Repriced 25% down from £800 / £1,800 / £3,500. */
export const PLANS = [
  {
    name: 'Starter',
    price: '£600',
    blurb: 'For teams putting their first knowledge base behind one number.',
    features: [
      'WhatsApp assistant on your own manuals and protocols',
      'Expert sign-off on every knowledge source',
      'Human escalation with the conversation attached',
      'Monthly question log',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '£1,350',
    popular: true,
    blurb: 'For businesses that want the enquiry side running on it too.',
    features: [
      'Everything in Starter',
      'Website assistant on the same knowledge base',
      'Lead scoring on fit and intent',
      'CRM sync and real-time sales alerts',
      'Website activity scoring',
      'Priority support',
      'Monthly performance review',
    ],
  },
  {
    name: 'Enterprise',
    price: '£2,600',
    blurb: 'For established operations running the full Mikora stack.',
    features: [
      'Everything in Growth',
      'Unlimited lead sources',
      'Custom integrations',
      'Bespoke scoring rules',
      'Spend intelligence',
      'Dedicated account management',
      'SLA guarantee',
    ],
  },
];

/** Website builds — the one thing we do sell standalone.
    Repriced 25% down from £1,500 / £3,500 / £6,500, rounded to the
    nearest hundred. Stack is deliberately never named in this copy. */
export const SITE_TIERS = [
  {
    name: 'Starter Site',
    price: '£1,100',
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
    price: '£2,600',
    features: [
      'Up to 15 pages',
      'Everything in Starter',
      'Blog structure',
      'Lead capture form wired to your CRM',
      'Considered motion and transitions',
    ],
  },
  {
    name: 'Full Platform Site',
    price: '£4,800',
    features: [
      '20+ pages',
      'Everything in Growth',
      'ROI calculators and interactive tools',
      'Intelligence-powered chat',
      'Custom design system',
    ],
  },
];

export const MAINTENANCE = '£375';

/** Production work. Available to clients on a plan, quoted per piece.
    Deliberately unpriced — this is not a menu to shop from. */
export const PRODUCTION = [
  {
    name: 'Training and course manuals',
    blurb:
      'Forty to fifty-five pages, built to your brand, delivered as a finished PDF and editable source so your trainers can revise them in-house.',
  },
  {
    name: 'Brochures and price books',
    blurb:
      'Product brochures, distributor editions and price books that regenerate themselves when prices move, instead of being retyped.',
  },
  {
    name: 'Clinical and reference documents',
    blurb:
      'Wall charts, frequency tables, aftercare guides, consultation and inspection forms — the paper your practitioners actually use.',
  },
  {
    name: 'Catalogue and platform migration',
    blurb:
      'Products moved between platforms with currency conversion and images intact, and the price book rebuilt behind them.',
  },
  {
    name: 'Video, captions and channel work',
    blurb:
      'Training footage cut, captioned and brand-corrected, ready for your portal, your channel or your socials.',
  },
  {
    name: 'Newsletters and campaigns',
    blurb:
      'Monthly newsletters produced as a designed deck and an HTML email, built to send from your own platform.',
  },
];
