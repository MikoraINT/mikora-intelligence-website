import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

const SOLUTIONS = [
  { label: 'Aesthetic Device Companies', to: '/solutions/aesthetic-devices' },
  { label: 'Training Academies', to: '/solutions/training-academies' },
  { label: 'Marketing Agencies', to: '/solutions/agencies' },
];

const CAPABILITIES = [
  { label: 'Lead Scoring', to: '/capabilities/lead-scoring' },
  { label: 'WhatsApp Support', to: '/capabilities/whatsapp-support' },
  { label: 'CRM Sync', to: '/capabilities/crm-sync' },
  { label: 'Ad Spend Tracking', to: '/capabilities/ad-spend-tracking' },
  { label: 'ROI Calculator', to: '/capabilities/roi-calculator' },
  { label: 'Sales Alerts', to: '/capabilities/sales-alerts' },
  { label: 'Website Assistant', to: '/capabilities/website-assistant' },
  { label: 'Website Build', to: '/capabilities/website-build' },
];

export function Wordmark({ onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Mikora Intelligence home"
      className="flex items-center gap-2.5 font-heading text-xl font-bold uppercase tracking-[0.08em] text-gold"
    >
      <img
        src="/logo-mark.png"
        alt=""
        width="309"
        height="362"
        className="h-9 w-auto"
      />
      Mikora
    </Link>
  );
}

function Chevron({ open }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <path d="M6 8l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopDropdown({ label, items, basePath }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  const active = pathname.startsWith(basePath);

  return (
    <div
      ref={rootRef}
      className="relative"
      // Hover open/close is a mouse behaviour. On touch devices a tap fires
      // enter + click together, which would open then immediately toggle
      // closed — so touch relies on the click toggle alone.
      onPointerEnter={(e) => e.pointerType === 'mouse' && setOpen(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setOpen(false)}
      onBlur={(e) => {
        // Close when keyboard focus moves outside the trigger + menu
        if (!rootRef.current?.contains(e.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape' && open) {
          setOpen(false);
          triggerRef.current?.focus();
        }
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex items-center gap-1.5 text-small font-medium transition-colors ${
          active || open ? 'text-gold' : 'text-white/80 hover:text-gold'
        }`}
      >
        {label}
        <Chevron open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-0 top-full pt-3"
          >
            <div className="min-w-[240px] rounded-xl border border-border bg-surface p-2 shadow-2xl shadow-black/50">
              {items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2 text-small transition-colors ${
                      isActive
                        ? 'bg-white/5 text-gold'
                        : 'text-white/80 hover:bg-white/5 hover:text-gold'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileGroup({ label, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={`flex w-full items-center justify-between py-4 text-lg font-medium transition-colors ${
          open ? 'text-gold' : 'text-white/90'
        }`}
      >
        {label}
        <Chevron open={open} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mb-4 space-y-1 border-l border-border pl-4">
              {items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `block py-2 text-base transition-colors ${
                      isActive ? 'text-gold' : 'text-muted hover:text-gold'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the overlay on route change
  useEffect(() => setMobileOpen(false), [pathname]);

  // Lock body scroll while the overlay is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Escape closes the mobile overlay
  useEffect(() => {
    if (!mobileOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mobileOpen]);

  const topLink = ({ isActive }) =>
    `text-small font-medium transition-colors ${
      isActive ? 'text-gold' : 'text-white/80 hover:text-gold'
    }`;

  const mobileLink = ({ isActive }) =>
    `block border-b border-border/60 py-4 text-lg font-medium transition-colors ${
      isActive ? 'text-gold' : 'text-white/90'
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Wordmark />

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavLink to="/platform" className={topLink}>
            Platform
          </NavLink>
          <NavLink to="/how-it-works" className={topLink}>
            How It Works
          </NavLink>
          <DesktopDropdown label="Solutions" items={SOLUTIONS} basePath="/solutions" />
          <DesktopDropdown label="Capabilities" items={CAPABILITIES} basePath="/capabilities" />
          <NavLink to="/pricing" className={topLink}>
            Pricing
          </NavLink>
          <NavLink to="/blog" className={topLink}>
            Blog
          </NavLink>
        </div>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/contact"
            className="rounded-full border border-gold px-4 py-2 text-small font-medium text-gold transition-colors hover:bg-gold/10"
          >
            Contact
          </Link>
          <Link
            to="/request-consultation"
            className="rounded-full bg-gold px-4 py-2 text-small font-semibold text-background transition-colors hover:bg-goldLight"
          >
            Request Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          className="flex h-11 w-11 items-center justify-center text-white lg:hidden"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </nav>

      {/* Mobile overlay — slides in from the right */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-[60] flex flex-col bg-background lg:hidden"
          >
            <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-border/40 px-6">
              <Wordmark onClick={() => setMobileOpen(false)} />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="flex h-11 w-11 items-center justify-center text-white"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  aria-hidden="true"
                >
                  <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 pt-2">
              <NavLink to="/platform" className={mobileLink}>
                Platform
              </NavLink>
              <NavLink to="/how-it-works" className={mobileLink}>
                How It Works
              </NavLink>
              <MobileGroup label="Solutions" items={SOLUTIONS} />
              <MobileGroup label="Capabilities" items={CAPABILITIES} />
              <NavLink to="/pricing" className={mobileLink}>
                Pricing
              </NavLink>
              <NavLink to="/blog" className={mobileLink}>
                Blog
              </NavLink>
            </div>

            <div className="shrink-0 space-y-3 px-6 pb-10 pt-6">
              <Link
                to="/contact"
                className="block rounded-full border border-gold px-4 py-3 text-center text-small font-medium text-gold transition-colors hover:bg-gold/10"
              >
                Contact
              </Link>
              <Link
                to="/request-consultation"
                className="block rounded-full bg-gold px-4 py-3 text-center text-small font-semibold text-background transition-colors hover:bg-goldLight"
              >
                Request Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
