import { Link } from 'react-router-dom';
import { Wordmark } from './Navbar';

const COLUMNS = [
  {
    title: 'Product',
    links: [
      { label: 'Platform', to: '/platform' },
      { label: 'How It Works', to: '/how-it-works' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'ROI Calculator', to: '/capabilities/roi-calculator' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'Aesthetic Devices', to: '/solutions/aesthetic-devices' },
      { label: 'Training Academies', to: '/solutions/training-academies' },
      { label: 'Agencies', to: '/solutions/agencies' },
    ],
  },
  {
    title: 'Capabilities',
    links: [
      { label: 'Lead Scoring', to: '/capabilities/lead-scoring' },
      { label: 'WhatsApp Support', to: '/capabilities/whatsapp-support' },
      { label: 'CRM Sync', to: '/capabilities/crm-sync' },
      { label: 'Ad Spend Tracking', to: '/capabilities/ad-spend-tracking' },
      { label: 'ROI Calculator', to: '/capabilities/roi-calculator' },
      { label: 'Sales Alerts', to: '/capabilities/sales-alerts' },
      { label: 'Website Assistant', to: '/capabilities/website-assistant' },
      { label: 'Website Build', to: '/capabilities/website-build' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/about' },
      { label: 'Case Study', to: '/case-study/plasmapen' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
    ],
  },
];

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-gold bg-surface">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16">
        <div className="flex items-center justify-between">
          <Wordmark />
          {/* TODO: confirm the LinkedIn company page slug */}
          <a
            href="https://www.linkedin.com/company/mikora-intelligence"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mikora Intelligence on LinkedIn"
            className="text-muted transition-colors hover:text-gold"
          >
            <LinkedInIcon />
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.15em] text-white/90">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={`${col.title}-${link.to}`}>
                    <Link
                      to={link.to}
                      className="text-small text-muted transition-colors hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-small text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Mikora Intelligence. All rights reserved.</p>
          <p>Built on Mikora</p>
        </div>
      </div>
    </footer>
  );
}
