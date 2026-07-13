// WORKING DRAFT — this privacy policy is a solid working draft written in
// plain professional English. It must be reviewed by a solicitor before
// being relied upon.

import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal } from '../components/ui';

const SECTIONS = [
  {
    heading: 'Who we are',
    paragraphs: [
      'Mikora Intelligence ("Mikora", "we", "us") provides an operational intelligence platform and website build services to businesses. This policy explains what personal data we collect through mikoraintelligence.com, how we use it, and the rights you have over it.',
      'You can contact us about anything in this policy at hello@mikoraintelligence.com.',
    ],
  },
  {
    heading: 'What data we collect',
    paragraphs: [
      'We collect the information you choose to give us through this website. The consultation form collects your name, company name, company website, email address, phone number, what you need help with, your monthly ad spend range, and anything you tell us about your current setup. The contact form collects your name, email address, and message. The ROI calculator collects your email address together with the figures you enter — monthly leads, average deal value, close rate, follow-up time, and ad spend — and the results calculated from them.',
      'We also collect limited technical information necessary to operate the website, such as server logs generated when pages are requested.',
    ],
  },
  {
    heading: 'How we use your data',
    paragraphs: [
      'We use the information you submit to respond to your enquiry, prepare for and provide consultations, deliver and improve our services, and understand which parts of our website are useful. We do not sell your personal data, and we do not share it with third parties for their own marketing.',
    ],
  },
  {
    heading: 'Lawful basis',
    paragraphs: [
      'Where you submit a form asking us to contact you, we process your data on the basis of your consent and the steps necessary to enter into a contract with you. We process limited technical data on the basis of our legitimate interest in operating a secure, functioning website. Where we have an ongoing client relationship, processing is necessary for the performance of that contract.',
    ],
  },
  {
    heading: 'Where your data is processed',
    paragraphs: [
      'Your data is processed and stored on infrastructure located in the European Union, and we operate in accordance with the UK GDPR and EU GDPR. Where any transfer outside the UK or EU is required, we ensure appropriate safeguards are in place.',
    ],
  },
  {
    heading: 'How long we keep it',
    paragraphs: [
      'We keep enquiry data for as long as needed to handle your enquiry and any relationship that follows from it, and review stored data periodically. If you ask us to delete your data, we will do so unless we are required to retain it for legal or accounting reasons.',
    ],
  },
  {
    heading: 'Third-party processors',
    paragraphs: [
      'We use a small number of service providers to run our business: infrastructure and hosting providers, email delivery providers, and CRM providers. Each acts as a processor on our behalf, under agreements consistent with data protection law, and only to the extent needed to provide their service to us.',
    ],
  },
  {
    heading: 'Cookies and analytics',
    paragraphs: [
      'Beyond the cookies strictly necessary for the website to function, we use Google Analytics 4 (GA4), loaded through Google Tag Manager (GTM), to understand how visitors find and use the site. GA4 sets analytics cookies and identifiers, processed by Google as our analytics provider, so we can measure traffic and improve the site.',
      'We also plan to use advertising cookies and tags from Google (Google Ads) and LinkedIn to measure the performance of our advertising and reach relevant audiences, and we may add Meta (Facebook and Instagram) for the same purpose in future. Where the law requires your consent for non-essential analytics and advertising cookies, we are introducing a consent tool that lets you accept or reject them; in the meantime you can control or block cookies through your browser settings.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'Under data protection law you have the right to access the personal data we hold about you, to have it corrected or erased, to restrict or object to its processing, and to receive it in a portable format. You may withdraw consent at any time where consent is the basis of processing.',
      'To exercise any of these rights, email hello@mikoraintelligence.com and we will respond within the timescales required by law. If you are unhappy with how we handle your data, you also have the right to complain to the Information Commissioner\u2019s Office (ICO) in the UK or your local supervisory authority.',
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <SEO
        title="Privacy Policy — Mikora Intelligence"
        description="How Mikora Intelligence collects, uses, and protects your personal data — including your GDPR rights and how to exercise them."
        canonical="https://mikoraintelligence.com/privacy"
      />
      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <Reveal>
            <h1 className="font-heading text-h1 font-bold text-white">
              Privacy Policy
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
