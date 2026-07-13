import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal, PageHero } from '../components/ui';
import { CheckIcon } from '../components/icons';
import {
  inputClasses,
  selectClasses,
  Label,
  FieldError,
  SelectArrow,
  Spinner,
  HoneypotField,
} from '../components/forms';

const WEBHOOK_URL = import.meta.env.VITE_CONSULTATION_WEBHOOK_URL;

const HELP_OPTIONS = [
  'Intelligent Lead Scoring',
  'WhatsApp Support Intelligence',
  'CRM Sync and Automation',
  'Website Build',
  'Full Mikora Platform',
  'Not Sure Yet',
];

const SPEND_OPTIONS = [
  'Under £1,000',
  '£1,000 to £5,000',
  '£5,000 to £15,000',
  '£15,000 plus',
  'Not currently running ads',
];

const INITIAL_FORM = {
  full_name: '',
  company_name: '',
  company_website: '',
  email: '',
  phone: '',
  help_with: '',
  monthly_ad_spend: '',
  current_setup: '',
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ------------------------------------------------------------------ */
/* Section 2 — Form                                                    */
/* ------------------------------------------------------------------ */

function ConsultationForm() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [trap, setTrap] = useState('');
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validate = () => {
    const next = {};
    if (!form.full_name.trim()) next.full_name = 'Enter your full name.';
    if (!form.company_name.trim())
      next.company_name = 'Enter your company name.';
    if (!form.email.trim()) next.email = 'Enter your email address.';
    else if (!EMAIL_RE.test(form.email.trim()))
      next.email = 'Enter a valid email address.';
    if (!form.help_with) next.help_with = 'Choose an option.';
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'submitting') return; // double-submit guard
    if (trap) {
      // Honeypot filled — a bot. Accept silently, never hit the webhook.
      setStatus('success');
      return;
    }
    const next = validate();
    setErrors(next);
    const firstInvalid = Object.keys(next)[0];
    if (firstInvalid) {
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    setStatus('submitting');
    try {
      if (!WEBHOOK_URL) throw new Error('Webhook URL not configured');
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          source: 'mikora_website',
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'generate_lead', form_name: 'consultation' });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="rounded-2xl border border-gold/40 bg-surface p-7 md:p-9">
      <AnimatePresence mode="wait" initial={false}>
        {status === 'success' ? (
          <motion.div
            key="success"
            role="status"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="py-10 text-center"
          >
            <CheckIcon className="mx-auto h-12 w-12 text-gold" />
            <h2 className="mt-5 font-heading text-h2 font-bold text-white">
              Thank you
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-body text-muted">
              Your request has been received and scored by Mikora. We will be
              in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            noValidate
            onSubmit={handleSubmit}
            initial={false}
            exit={reduce ? undefined : { opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="relative space-y-5"
          >
            <HoneypotField value={trap} onChange={(e) => setTrap(e.target.value)} />
            <div>
              <Label htmlFor="full_name" required>
                Full Name
              </Label>
              <input
                id="full_name"
                type="text"
                autoComplete="name"
                value={form.full_name}
                onChange={set('full_name')}
                aria-invalid={!!errors.full_name}
                className={`${inputClasses} ${
                  errors.full_name ? 'border-hot' : 'border-border'
                }`}
              />
              <FieldError>{errors.full_name}</FieldError>
            </div>

            <div>
              <Label htmlFor="company_name" required>
                Company Name
              </Label>
              <input
                id="company_name"
                type="text"
                autoComplete="organization"
                value={form.company_name}
                onChange={set('company_name')}
                aria-invalid={!!errors.company_name}
                className={`${inputClasses} ${
                  errors.company_name ? 'border-hot' : 'border-border'
                }`}
              />
              <FieldError>{errors.company_name}</FieldError>
            </div>

            <div>
              <Label htmlFor="company_website">Company Website</Label>
              <input
                id="company_website"
                type="url"
                autoComplete="url"
                placeholder="https://"
                value={form.company_website}
                onChange={set('company_website')}
                className={`${inputClasses} border-border`}
              />
            </div>

            <div>
              <Label htmlFor="email" required>
                Email
              </Label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={set('email')}
                aria-invalid={!!errors.email}
                className={`${inputClasses} ${
                  errors.email ? 'border-hot' : 'border-border'
                }`}
              />
              <FieldError>{errors.email}</FieldError>
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <input
                id="phone"
                type="tel"
                autoComplete="tel"
                value={form.phone}
                onChange={set('phone')}
                className={`${inputClasses} border-border`}
              />
            </div>

            <div>
              <Label htmlFor="help_with" required>
                What do you need help with
              </Label>
              <div className="relative">
                <select
                  id="help_with"
                  value={form.help_with}
                  onChange={set('help_with')}
                  aria-invalid={!!errors.help_with}
                  className={`${selectClasses} ${
                    errors.help_with ? 'border-hot' : 'border-border'
                  } ${form.help_with ? 'text-white' : 'text-muted/85'}`}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {HELP_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <SelectArrow />
              </div>
              <FieldError>{errors.help_with}</FieldError>
            </div>

            <div>
              <Label htmlFor="monthly_ad_spend">Monthly ad spend</Label>
              <div className="relative">
                <select
                  id="monthly_ad_spend"
                  value={form.monthly_ad_spend}
                  onChange={set('monthly_ad_spend')}
                  className={`${selectClasses} border-border ${
                    form.monthly_ad_spend ? 'text-white' : 'text-muted/85'
                  }`}
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  {SPEND_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                <SelectArrow />
              </div>
            </div>

            <div>
              <Label htmlFor="current_setup">
                Tell us about your current setup
              </Label>
              <textarea
                id="current_setup"
                rows={4}
                placeholder="What tools are you using today and what is not working"
                value={form.current_setup}
                onChange={set('current_setup')}
                className={`${inputClasses} border-border resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' && <Spinner />}
              {status === 'submitting'
                ? 'Submitting…'
                : 'Request My Consultation'}
            </button>

            {status === 'error' && (
              <p role="alert" className="text-center text-small text-hot">
                Something went wrong. Please email
                hello@mikoraintelligence.com directly.
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 — What to expect                                          */
/* ------------------------------------------------------------------ */

const EXPECT_ITEMS = [
  {
    lead: 'We review your current lead flow',
    rest: '— where leads come from, where they go, and where they get lost.',
  },
  {
    lead: 'We show you Mikora live',
    rest: '— real scoring, real alerts, real CRM sync, using examples relevant to your business.',
  },
  {
    lead: 'You get a clear recommendation',
    rest: '— whether Mikora fits, what it would cost, and what results to expect. No hard sell.',
  },
];

function WhatToExpect() {
  return (
    <div className="lg:pt-2">
      <h2 className="font-heading text-h2 font-bold text-white">
        What to expect
      </h2>
      <ol className="mt-8 space-y-7">
        {EXPECT_ITEMS.map(({ lead, rest }, i) => (
          <li key={lead} className="flex items-start gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/60 bg-background font-mono text-small text-gold">
              {i + 1}
            </span>
            <p className="pt-1.5 text-body">
              <span className="font-medium text-white">{lead}</span>{' '}
              <span className="text-muted">{rest}</span>
            </p>
          </li>
        ))}
      </ol>
      <p className="mt-10 border-l-2 border-gold pl-4 text-small text-muted">
        The form you just filled in is processed by Mikora itself. Your
        enquiry is scored, routed, and alerted in real time — you are
        experiencing the product right now.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function RequestConsultation() {
  return (
    <>
      <SEO
        title="Request a Consultation — Mikora Intelligence"
        description="Book a free 30 minute consultation. We map your lead operation and show you exactly what Mikora would look like for your business."
        canonical="https://mikoraintelligence.com/request-consultation"
      />
      <PageHero
        eyebrow="Consultation"
        title="Let's map your lead operation"
        subtitle="A free 30 minute consultation. We look at your current setup, show you exactly where leads are slipping through, and map what Mikora would look like for your business. No pressure, no obligation."
      />
      <section className="bg-background">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 md:pb-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <Reveal>
            <ConsultationForm />
          </Reveal>
          <Reveal delay={0.12}>
            <WhatToExpect />
          </Reveal>
        </div>
      </section>
      <CTABanner
        heading="Prefer to email?"
        subtext="Reach us directly at hello@mikoraintelligence.com"
      >
        <a
          href="mailto:hello@mikoraintelligence.com"
          className="rounded-full border border-white/40 px-7 py-3.5 text-small font-medium text-white transition-colors hover:bg-white/10"
        >
          Email Us
        </a>
      </CTABanner>
    </>
  );
}
