import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  readConsent,
  saveConsent,
  toConsentState,
  GRANT_ALL,
  DENY_ALL,
  OPEN_CONSENT_EVENT,
} from '../lib/consent';

function PrefRow({ label, desc, checked, onChange, disabled }) {
  return (
    <label className={`flex items-start gap-3 ${disabled ? 'opacity-70' : 'cursor-pointer'}`}>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="mt-1 h-4 w-4 shrink-0 accent-gold"
      />
      <span>
        <span className="block text-small font-medium text-white">{label}</span>
        <span className="block text-small text-muted">{desc}</span>
      </span>
    </label>
  );
}

export default function ConsentBanner() {
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);
  const acceptRef = useRef(null);

  // First visit (no stored choice) shows the banner. A stored choice is already
  // re-applied in index.html before GTM loads, so returning users stay hidden.
  useEffect(() => {
    if (!readConsent()) setVisible(true);
  }, []);

  // Allow a footer "Cookie settings" link (or anything) to reopen preferences.
  useEffect(() => {
    const open = () => {
      const stored = readConsent();
      if (stored) {
        setAnalytics(stored.consent.analytics_storage === 'granted');
        setAds(stored.consent.ad_storage === 'granted');
      }
      setShowPrefs(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_CONSENT_EVENT, open);
    return () => window.removeEventListener(OPEN_CONSENT_EVENT, open);
  }, []);

  useEffect(() => {
    if (visible && !showPrefs) acceptRef.current?.focus();
  }, [visible, showPrefs]);

  const close = () => {
    setVisible(false);
    setShowPrefs(false);
  };
  const acceptAll = () => { saveConsent(GRANT_ALL); close(); };
  const rejectAll = () => { saveConsent(DENY_ALL); close(); };
  const savePrefs = () => { saveConsent(toConsentState({ analytics, ads })); close(); };

  // Accept and Reject share shape, padding, and weight — differentiated by
  // colour only — so neither reads as the nudged choice.
  const equalBtn = 'rounded-full px-6 py-2.5 text-small font-semibold transition-colors';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="dialog"
          aria-label="Cookie consent"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed inset-x-0 bottom-0 z-[100] px-4 pb-4 sm:px-6 sm:pb-6"
        >
          <div className="mx-auto max-w-3xl rounded-2xl border border-gold/50 bg-surface p-6 shadow-2xl shadow-black/40 md:p-7">
            <h2 className="font-heading text-h3 font-bold text-white">
              We value your privacy
            </h2>
            <p className="mt-2 text-small text-muted">
              We use strictly necessary cookies to run this site. With your
              consent we also use analytics cookies (Google Analytics 4, via
              Google Tag Manager) to understand how the site is used, and
              advertising cookies to measure our marketing campaigns. See our{' '}
              <Link to="/privacy" className="text-gold underline hover:text-goldLight">
                Privacy Policy
              </Link>
              .
            </p>

            {showPrefs && (
              <div className="mt-5 space-y-3 border-t border-border pt-5">
                <PrefRow
                  label="Strictly necessary"
                  desc="Required for the site to function. Always on."
                  checked
                  disabled
                />
                <PrefRow
                  label="Analytics"
                  desc="Google Analytics 4, so we can see how the site is used."
                  checked={analytics}
                  onChange={setAnalytics}
                />
                <PrefRow
                  label="Advertising"
                  desc="Used to measure the performance of our advertising. No advertising cookies are currently set; this preference applies if and when we run paid campaigns."
                  checked={ads}
                  onChange={setAds}
                />
              </div>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
              {!showPrefs ? (
                <button
                  type="button"
                  onClick={() => setShowPrefs(true)}
                  className="px-2 py-2.5 text-small font-medium text-muted transition-colors hover:text-gold sm:mr-auto"
                >
                  Manage preferences
                </button>
              ) : (
                <button
                  type="button"
                  onClick={savePrefs}
                  className="px-2 py-2.5 text-small font-medium text-muted transition-colors hover:text-gold sm:mr-auto"
                >
                  Save preferences
                </button>
              )}
              <button
                type="button"
                onClick={rejectAll}
                className={`${equalBtn} border border-gold/60 bg-background text-white hover:border-gold`}
              >
                Reject all
              </button>
              <button
                ref={acceptRef}
                type="button"
                onClick={acceptAll}
                className={`${equalBtn} bg-gold text-background hover:bg-goldLight`}
              >
                Accept all
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
