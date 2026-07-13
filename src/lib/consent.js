// Google Consent Mode v2 helpers. The consent DEFAULTS (all denied) are set in
// index.html before GTM loads; this module handles first-visit choices and
// later preference changes, and persists them in a strictly-necessary cookie.
// It does NOT load GA4 or any ad tag — those live in the GTM container, gated
// on the consent state pushed here.
//
// RE-CONSENT PROCEDURE: when a new vendor or processing purpose is added (e.g.
// a Meta pixel, or any new advertising tag), bump VERSION below AND the literal
// `c.v === 1` check in index.html to match. A stored choice carrying an older
// version is then treated as "no choice", so every existing visitor is
// re-prompted on their next visit. Consent to a purpose that did not exist at
// the time of consent is not consent — this re-prompt is required behaviour.

const COOKIE_NAME = 'mikora_consent';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 180; // 180 days
const VERSION = 1; // keep in sync with the `c.v === 1` check in index.html

// gtag pushes the `arguments` object (not a plain array/object) — the exact
// shape Consent Mode reads from the dataLayer.
function gtag() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(arguments);
}

// Map two user-facing groups onto the four Consent Mode v2 signals.
export function toConsentState({ analytics, ads }) {
  return {
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: ads ? 'granted' : 'denied',
    ad_user_data: ads ? 'granted' : 'denied',
    ad_personalization: ads ? 'granted' : 'denied',
  };
}

export const GRANT_ALL = toConsentState({ analytics: true, ads: true });
export const DENY_ALL = toConsentState({ analytics: false, ads: false });

export function readConsent() {
  if (typeof document === 'undefined') return null;
  const m = document.cookie.match(/(?:^|; )mikora_consent=([^;]+)/);
  if (!m) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(m[1]));
    if (!parsed || !parsed.consent) return null;
    if (parsed.v !== VERSION) return null; // stale version → re-prompt
    return parsed;
  } catch {
    return null;
  }
}

// Persist the choice (strictly-necessary cookie) and push it to the dataLayer
// so consent-gated GTM tags update immediately.
export function saveConsent(consent) {
  const payload = { v: VERSION, consent, ts: new Date().toISOString() };
  const secure = window.location.protocol === 'https:' ? '; Secure' : '';
  document.cookie =
    `${COOKIE_NAME}=` +
    encodeURIComponent(JSON.stringify(payload)) +
    `; Max-Age=${COOKIE_MAX_AGE}; Path=/; SameSite=Lax${secure}`;
  gtag('consent', 'update', consent);
}

// Dispatch this to reopen the preferences panel (e.g. from a footer link):
//   window.dispatchEvent(new Event(OPEN_CONSENT_EVENT))
export const OPEN_CONSENT_EVENT = 'mikora:open-consent';
