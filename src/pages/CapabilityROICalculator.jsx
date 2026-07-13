import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  AnimatePresence,
  animate,
  motion,
  useReducedMotion,
} from 'framer-motion';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal, Eyebrow, PageHero } from '../components/ui';
import { TargetIcon, BellIcon, ArrowIcon } from '../components/icons';
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
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const FOLLOW_UP_OPTIONS = [
  { label: 'Under 5 minutes', mult: 0.05 },
  { label: 'Within 1 hour', mult: 0.15 },
  { label: 'Within 24 hours', mult: 0.35 },
  { label: '2 to 3 days', mult: 0.55 },
  { label: 'Over 3 days', mult: 0.7 },
];

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
const gbp = (n) => `£${Math.round(n).toLocaleString('en-GB')}`;

/* ------------------------------------------------------------------ */
/* Animated number + impact ring                                       */
/* ------------------------------------------------------------------ */

function AnimatedNumber({ value, format = (v) => Math.round(v) }) {
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const current = useRef(value);

  useEffect(() => {
    if (reduce) {
      current.current = value;
      setDisplay(value);
      return undefined;
    }
    const controls = animate(current.current, value, {
      duration: 0.6,
      ease: 'easeOut',
      onUpdate: (v) => {
        current.current = v;
        setDisplay(v);
      },
    });
    return () => controls.stop();
  }, [value, reduce]);

  return <span>{format(display)}</span>;
}

function ImpactRing({ score }) {
  const reduce = useReducedMotion();
  const R = 52;
  const C = 2 * Math.PI * R;

  return (
    <div
      className="relative h-36 w-36"
      role="img"
      aria-label={`Mikora Impact Score ${score} out of 100`}
    >
      <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
        <circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          strokeWidth="8"
          className="stroke-border"
        />
        <motion.circle
          cx="60"
          cy="60"
          r={R}
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={C}
          className="stroke-gold"
          initial={false}
          animate={{ strokeDashoffset: C * (1 - score / 100) }}
          transition={{ duration: reduce ? 0 : 0.6, ease: 'easeOut' }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-heading text-3xl font-bold text-gold">
          <AnimatedNumber value={score} />
        </span>
        <span className="font-mono text-[10px] tracking-widest text-muted">
          / 100
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Slider + synced number input                                        */
/* ------------------------------------------------------------------ */

function SliderField({ id, label, min, max, step, value, onChange, prefix }) {
  const [draft, setDraft] = useState(String(value));

  useEffect(() => setDraft(String(value)), [value]);

  const commit = () => {
    const n = parseFloat(draft);
    const next = Number.isFinite(n) ? clamp(n, min, max) : value;
    // Reset the draft explicitly — if the committed value equals the current
    // value, the sync effect won't fire and stale text would stay visible.
    setDraft(String(next));
    onChange(next);
  };

  return (
    <div>
      <div className="flex items-end justify-between gap-4">
        <Label htmlFor={id}>{label}</Label>
        <div className="relative">
          {prefix && (
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-small text-muted">
              {prefix}
            </span>
          )}
          <input
            type="number"
            inputMode="numeric"
            min={min}
            max={max}
            step={step}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onBlur={commit}
            onKeyDown={(e) => e.key === 'Enter' && commit()}
            aria-label={label}
            className={`w-28 rounded-lg border border-border bg-background py-2 pr-3 text-right text-small text-white transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40 ${
              prefix ? 'pl-7' : 'pl-3'
            }`}
          />
        </div>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-1 w-full accent-gold"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Section 2 — Calculator                                              */
/* ------------------------------------------------------------------ */

function Calculator() {
  const reduce = useReducedMotion();
  const [leads, setLeads] = useState(200);
  const [dealValue, setDealValue] = useState(4000);
  const [closeRate, setCloseRate] = useState(8);
  const [followUp, setFollowUp] = useState('Within 24 hours');
  const [adSpend, setAdSpend] = useState(3000);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [trap, setTrap] = useState('');
  const [gateStatus, setGateStatus] = useState('idle'); // idle | submitting | success | error

  const mult =
    FOLLOW_UP_OPTIONS.find((o) => o.label === followUp)?.mult ?? 0.35;
  const cr = closeRate / 100;

  const monthlyLeak = leads * cr * dealValue * mult;
  const annualLeak = monthlyLeak * 12;
  const recovered = (leads * cr * 1.2 - leads * cr) * dealValue * 12;
  const impactScore = Math.round(
    20 +
      30 * Math.min(leads / 500, 1) +
      25 * (mult / 0.7) +
      25 * Math.min(adSpend / 15000, 1)
  );

  const handleGateSubmit = async (e) => {
    e.preventDefault();
    if (gateStatus === 'submitting') return; // double-submit guard
    if (trap) {
      // Honeypot filled — a bot. Reveal without hitting the webhook.
      setGateStatus('success');
      return;
    }
    if (!email.trim()) {
      setEmailError('Enter your email address.');
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setEmailError('Enter a valid email address.');
      return;
    }
    setEmailError('');
    setGateStatus('submitting');
    try {
      if (!WEBHOOK_URL) throw new Error('Webhook URL not configured');
      const res = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          source: 'roi_calculator',
          monthly_leads: leads,
          average_deal_value: dealValue,
          close_rate_percent: closeRate,
          follow_up_time: followUp,
          monthly_ad_spend: adSpend,
          monthly_revenue_leak: Math.round(monthlyLeak),
          annual_revenue_leak: Math.round(annualLeak),
          recovered_revenue_annual: Math.round(recovered),
          impact_score: impactScore,
          submitted_at: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'generate_lead', form_name: 'roi_calculator' });
      setGateStatus('success');
    } catch {
      setGateStatus('error');
    }
  };

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal>
          <div className="rounded-2xl border border-gold/40 bg-surface p-6 md:p-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Inputs */}
              <div className="space-y-8">
                <SliderField
                  id="monthly-leads"
                  label="Monthly leads across all sources"
                  min={10}
                  max={2000}
                  step={10}
                  value={leads}
                  onChange={setLeads}
                />
                <SliderField
                  id="deal-value"
                  label="Average deal value"
                  min={500}
                  max={50000}
                  step={250}
                  value={dealValue}
                  onChange={setDealValue}
                  prefix="£"
                />
                <SliderField
                  id="close-rate"
                  label="Current close rate"
                  min={1}
                  max={40}
                  step={1}
                  value={closeRate}
                  onChange={setCloseRate}
                  prefix="%"
                />
                <div>
                  <Label htmlFor="follow-up">
                    Average time to first follow-up
                  </Label>
                  <div className="relative">
                    <select
                      id="follow-up"
                      value={followUp}
                      onChange={(e) => setFollowUp(e.target.value)}
                      className={`${selectClasses} border-border text-white`}
                    >
                      {FOLLOW_UP_OPTIONS.map((o) => (
                        <option key={o.label} value={o.label}>
                          {o.label}
                        </option>
                      ))}
                    </select>
                    <SelectArrow />
                  </div>
                </div>
                <SliderField
                  id="ad-spend"
                  label="Monthly ad spend"
                  min={0}
                  max={50000}
                  step={250}
                  value={adSpend}
                  onChange={setAdSpend}
                  prefix="£"
                />
              </div>

              {/* Outputs */}
              <div className="flex flex-col gap-4">
                <div className="rounded-xl border border-hot/30 bg-background p-6">
                  <p className="text-small text-muted">
                    Estimated monthly revenue leak
                  </p>
                  <p
                    data-output="monthly-leak"
                    className="mt-2 font-heading text-4xl font-bold leading-none text-hot md:text-[2.75rem]"
                  >
                    <AnimatedNumber value={monthlyLeak} format={gbp} />
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-border bg-background p-5">
                    <p className="text-small text-muted">
                      Estimated annual revenue leak
                    </p>
                    <p
                      data-output="annual-leak"
                      className="mt-2 font-heading text-h3 font-bold text-white md:text-h2"
                    >
                      <AnimatedNumber value={annualLeak} format={gbp} />
                    </p>
                  </div>
                  <div className="rounded-xl border border-success/30 bg-background p-5">
                    <p className="text-small text-muted">
                      Potential recovered revenue per year
                    </p>
                    <p
                      data-output="recovered"
                      className="mt-2 font-heading text-h3 font-bold text-success md:text-h2"
                    >
                      <AnimatedNumber value={recovered} format={gbp} />
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-between gap-6 rounded-xl border border-gold/30 bg-background p-6">
                  <div>
                    <p className="font-heading text-h3 font-bold text-white">
                      Mikora Impact Score
                    </p>
                    <p className="mt-2 max-w-[26ch] text-small text-muted">
                      How much difference real-time scoring and routing would
                      make to your operation.
                    </p>
                  </div>
                  <ImpactRing score={impactScore} />
                </div>
              </div>
            </div>

            {/* Gated breakdown */}
            <div className="mt-10 border-t border-border pt-8">
              {gateStatus !== 'success' ? (
                <div className="mx-auto max-w-xl text-center">
                  <h3 className="font-heading text-h3 font-bold text-white">
                    See your full breakdown
                  </h3>
                  <p className="mt-2 text-small text-muted">
                    Enter your email and we will show the full breakdown of
                    your numbers instantly.
                  </p>
                  <form
                    noValidate
                    onSubmit={handleGateSubmit}
                    className="relative mt-6 flex flex-col gap-3 sm:flex-row"
                  >
                    <HoneypotField
                      value={trap}
                      onChange={(e) => setTrap(e.target.value)}
                    />
                    <div className="flex-1">
                      <input
                        type="email"
                        autoComplete="email"
                        placeholder="you@company.com"
                        aria-label="Email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          setEmailError('');
                        }}
                        aria-invalid={!!emailError}
                        className={`${inputClasses} ${
                          emailError ? 'border-hot' : 'border-border'
                        }`}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={gateStatus === 'submitting'}
                      className="flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {gateStatus === 'submitting' && <Spinner />}
                      {gateStatus === 'submitting'
                        ? 'Submitting…'
                        : 'Get My Full Breakdown'}
                    </button>
                  </form>
                  <div className="text-left">
                    <FieldError>{emailError}</FieldError>
                  </div>
                  {gateStatus === 'error' && (
                    <p role="alert" className="mt-3 text-small text-hot">
                      Something went wrong. Please email
                      hello@mikoraintelligence.com directly.
                    </p>
                  )}
                </div>
              ) : (
                <AnimatePresence>
                  <motion.div
                    key="breakdown"
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mx-auto max-w-2xl text-center"
                  >
                    <h3 className="font-heading text-h3 font-bold text-white">
                      Your full breakdown
                    </h3>
                    <p className="mt-4 text-body text-muted">
                      Based on {leads.toLocaleString('en-GB')} leads per month
                      at {[8, 11, 18].includes(closeRate) ? 'an' : 'a'}{' '}
                      {closeRate} percent
                      close rate, slow follow-up is costing you approximately{' '}
                      <span className="font-semibold text-white">
                        {gbp(monthlyLeak)}
                      </span>{' '}
                      per month. With Mikora scoring and routing every lead in
                      real time, businesses like yours typically recover 20
                      percent or more of lost pipeline.
                    </p>
                    <Link
                      to="/request-consultation"
                      className="mt-8 inline-block rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight"
                    >
                      Request a Consultation
                    </Link>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section 3 — How Mikora fixes the leak                               */
/* ------------------------------------------------------------------ */

const FIX_CARDS = [
  {
    title: 'Instant scoring',
    description:
      'Every lead scored in under 60 seconds so your team knows who to call first.',
    Icon: TargetIcon,
  },
  {
    title: 'Real-time alerts',
    description:
      'Hot leads trigger immediate notifications, cutting follow-up time from hours to minutes.',
    Icon: BellIcon,
  },
  {
    title: 'Automatic routing',
    description:
      'Every lead lands with the right person with full context already attached.',
    Icon: ArrowIcon,
  },
];

function FixTheLeak() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>The Fix</Eyebrow>
          <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
            How Mikora fixes the leak
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {FIX_CARDS.map(({ title, description, Icon }, i) => (
            <Reveal key={title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-7">
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
                  <Icon />
                </span>
                <h3 className="font-heading text-h3 font-bold text-white">
                  {title}
                </h3>
                <p className="mt-2.5 text-small text-muted">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function CapabilityROICalculator() {
  return (
    <>
      <SEO
        title="Pipeline ROI Calculator — What Slow Follow-Up Costs You"
        description="Calculate how much revenue your business loses to slow follow-up and unscored leads. Free interactive calculator with instant results."
        canonical="https://mikoraintelligence.com/capabilities/roi-calculator"
      />
      <PageHero
        eyebrow="ROI Calculator"
        title="How much is your pipeline leaking?"
        subtitle="Most businesses lose revenue every month to slow follow-up and unscored leads. Calculate what it is costing you — and what fixing it is worth."
      />
      <Calculator />
      <FixTheLeak />
      <CTABanner />
    </>
  );
}
