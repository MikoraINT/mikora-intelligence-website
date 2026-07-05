// WORKING DRAFT — these terms of service are a solid working draft written
// in plain professional English. They must be reviewed by a solicitor
// before being relied upon.

import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal } from '../components/ui';

const SECTIONS = [
  {
    heading: 'The service',
    paragraphs: [
      'Mikora Intelligence ("Mikora", "we", "us") provides an operational intelligence platform — including lead scoring, CRM synchronisation, sales alerts, spend intelligence, website intelligence, and WhatsApp support intelligence — together with website design and build services. The specific services provided to you, and any service levels that apply, are set out in your order or agreement with us.',
    ],
  },
  {
    heading: 'Acceptable use',
    paragraphs: [
      'You agree to use the service lawfully and only for your own legitimate business purposes. You must not use the service to send unlawful communications, to process data you have no right to process, to attempt to gain unauthorised access to any system, or to interfere with the operation of the service. You are responsible for ensuring that the data you connect to the service — including lead and customer data — has been collected lawfully and that you have the right to process it.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'We own, or are licensed to use, all intellectual property in the Mikora platform, including its software, scoring logic, designs, and documentation. You retain all rights in your own data and materials, and you grant us the limited licence needed to process them in order to provide the service. For website build projects, on receipt of full payment you own the delivered website content and design created for you; we retain ownership of any pre-existing tools, components, and know-how used to build it.',
    ],
  },
  {
    heading: 'Payment terms',
    paragraphs: [
      'Mikora Intelligence plans are billed monthly in advance and carry a three month minimum commitment from the start date. After the minimum period, plans continue monthly until cancelled with notice before the next billing date. Plan upgrades take effect immediately, with the difference prorated to your next billing date.',
      'Website builds are one-off projects, invoiced as set out in your order, with no ongoing obligation unless you choose an optional monthly maintenance retainer. All prices are exclusive of VAT unless stated otherwise, and invoices are payable by the date shown on them. We may suspend the service where invoices remain unpaid after reasonable notice.',
    ],
  },
  {
    heading: 'Limitation of liability',
    paragraphs: [
      'Nothing in these terms limits liability that cannot be limited by law, including liability for death or personal injury caused by negligence, or for fraud. Subject to that, we are not liable for indirect or consequential loss, loss of profits, loss of revenue, or loss of data arising from your use of the service, and our total liability in respect of the service in any twelve month period is limited to the fees you paid to us for the service in that period. The service supports your sales operation; it does not guarantee any particular commercial outcome.',
    ],
  },
  {
    heading: 'Termination',
    paragraphs: [
      'Either party may terminate the service by notice as set out in your order, subject to the minimum commitment. We may suspend or terminate the service immediately if you materially breach these terms and do not remedy the breach within a reasonable period of being asked to, or if required by law. On termination we will, at your request, provide a copy of your data held in the service within a reasonable period, after which we will delete it in line with our privacy policy.',
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: [
      'These terms, and any dispute or claim arising out of them, are governed by the law of England and Wales, and the courts of England and Wales have exclusive jurisdiction.',
    ],
  },
];

export default function Terms() {
  return (
    <>
      <SEO
        title="Terms of Service — Mikora Intelligence"
        description="The terms that govern use of the Mikora Intelligence platform and website build services, including payment terms and acceptable use."
        canonical="https://mikoraintelligence.com/terms"
      />
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <Reveal>
            <h1 className="font-heading text-h1 font-bold text-white">
              Terms of Service
            </h1>
            <p className="mt-4 font-mono text-small text-muted">
              Last updated July 2026
            </p>
            <div className="mt-10 space-y-10 border-t border-border pt-10">
              {SECTIONS.map(({ heading, paragraphs }) => (
                <section key={heading}>
                  <h2 className="font-heading text-h3 font-bold text-white">
                    {heading}
                  </h2>
                  {paragraphs.map((text) => (
                    <p
                      key={text.slice(0, 40)}
                      className="mt-4 text-body leading-relaxed text-white/80"
                    >
                      {text}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
