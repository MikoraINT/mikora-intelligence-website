import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const QUICK_LINKS = [
  { label: 'Platform', to: '/platform' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
];

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found | Mikora Intelligence"
        description="This page does not exist but your leads do."
        noindex
      />
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-[72px] text-center">
        <h1 className="font-heading text-[6rem] font-extrabold leading-none text-gold md:text-[9rem]">
          404
        </h1>
        <p className="mt-6 text-body text-muted">
          This page does not exist but your leads do.
        </p>
        <Link
          to="/"
          className="mt-10 rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight"
        >
          Back to home
        </Link>
        <nav aria-label="Popular pages" className="mt-8">
          <ul className="flex items-center gap-6">
            {QUICK_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="text-small text-muted transition-colors hover:text-gold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    </>
  );
}
