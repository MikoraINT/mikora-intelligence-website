import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal, PageHero } from '../components/ui';
import { MailIcon, CheckIcon } from '../components/icons';
import {
  inputClasses,
  Label,
  FieldError,
  Spinner,
  HoneypotField,
} from '../components/forms';

const WEBHOOK_URL = import.meta.env.VITE_CONSULTATION_WEBHOOK_URL;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ------------------------------------------------------------------ */
/* Message form                                                        */
/* ------------------------------------------------------------------ */

function ContactForm() {
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [trap, setTrap] = useState('');
  const [status, setStatus] = useState('idle');

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
    if (!form.name.trim()) next.name = 'Enter your name.';
    if (!form.email.trim()) next.email = 'Enter your email address.';
    else if (!EMAIL_RE.test(form.email.trim()))
      next.email = 'Enter a valid email address.';
    if (!form.message.trim()) next.message = 'Enter a message.';
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
          source: 'contact_form',
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
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
              <Label htmlFor="name" required>
                Name
              </Label>
              <input
                id="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={set('name')}
                aria-invalid={!!errors.name}
                className={`${inputClasses} ${
                  errors.name ? 'border-hot' : 'border-border'
                }`}
              />
              <FieldError>{errors.name}</FieldError>
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
              <Label htmlFor="message" required>
                Message
              </Label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={set('message')}
                aria-invalid={!!errors.message}
                className={`${inputClasses} resize-y ${
                  errors.message ? 'border-hot' : 'border-border'
                }`}
              />
              <FieldError>{errors.message}</FieldError>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'submitting' && <Spinner />}
              {status === 'submitting' ? 'Sending…' : 'Send'}
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
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Contact() {
  return (
    <>
      <SEO
        title="Get in touch — Mikora Intelligence"
        description="Questions, partnerships, or press — we read everything."
        canonical="https://mikoraintelligence.com/contact"
      />
      <PageHero
        title="Get in touch"
        subtitle="Questions, partnerships, or press — we read everything."
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 md:pb-32 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="rounded-2xl border border-border bg-surface p-7 md:p-8">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                <MailIcon />
              </span>
              <h2 className="mt-5 font-heading text-h3 font-bold text-white">
                Email us
              </h2>
              <a
                href="mailto:hello@mikoraintelligence.com"
                className="mt-2 inline-block text-body font-medium text-gold transition-colors hover:text-goldLight"
              >
                hello@mikoraintelligence.com
              </a>
              <p className="mt-6 border-t border-border pt-5 text-small text-muted">
                For consultations, use our{' '}
                <Link
                  to="/request-consultation"
                  className="font-medium text-gold transition-colors hover:text-goldLight"
                >
                  consultation form
                </Link>{' '}
                for the fastest response.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
