/* Styled product-UI mockup cards for solution blocks. No photos — all
   built from the design system. */

import { RecordIcon, ChatIcon, TickIcon } from './icons';

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */

function MockShell({ label, meta, children }) {
  return (
    <div className="rounded-2xl border border-gold/20 bg-surface p-5 shadow-[0_24px_60px_-24px_rgba(0,0,0,0.6)] sm:p-6">
      <div className="mb-5 flex items-center justify-between border-b border-border pb-3.5">
        <span className="font-mono text-xs tracking-[0.2em] text-muted">
          {label}
        </span>
        {meta && (
          <span className="font-mono text-xs text-gold">{meta}</span>
        )}
      </div>
      {children}
    </div>
  );
}

const TONES = {
  hot: 'border border-hot/40 bg-background text-hot',
  warm: 'border border-warm/40 bg-background text-warm',
  cold: 'border border-cold/40 bg-background text-cold',
  gold: 'border border-gold/40 bg-background text-gold',
  success: 'border border-success/40 bg-background text-success',
};

function Chip({ tone = 'gold', children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide ${TONES[tone]}`}
    >
      {children}
    </span>
  );
}

function KV({ k, v }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-3.5 py-2.5">
      <span className="text-small text-muted">{k}</span>
      <span className="text-small font-medium text-white">{v}</span>
    </div>
  );
}

function Bar({ label, value, tone = 'gold' }) {
  const fill = { gold: 'bg-gold', hot: 'bg-hot', success: 'bg-success' }[tone];
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between font-mono text-xs text-muted">
        <span className="tracking-[0.15em]">{label}</span>
        <span className="text-white">{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-background">
        <div
          className={`h-full rounded-full ${fill}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Lead scoring                                                        */
/* ------------------------------------------------------------------ */

export function LeadScoreMock({ source = 'Meta Lead Ad' }) {
  return (
    <MockShell label="LEAD SCORED" meta="just now">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-body font-medium text-white">Sarah Mitchell</p>
          <p className="mt-0.5 text-small text-muted">{source}</p>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="font-heading text-3xl font-bold text-gold">87</span>
          <Chip tone="hot">HOT</Chip>
        </div>
      </div>
      <div className="mt-5 space-y-2.5">
        <KV k="Device interest" v="PlasmaPen" />
        <KV k="Timeline" v="Immediately" />
      </div>
    </MockShell>
  );
}

export function FitMock() {
  return (
    <MockShell label="FIT SCORE" meta="who they are">
      <div className="space-y-2.5">
        <KV k="Owns a clinic" v="+25" />
        <KV k="Established business" v="+20" />
        <KV k="Profile complete" v="+15" />
        <KV k="UK based" v="+10" />
      </div>
      <div className="mt-5">
        <Bar label="FIT" value={70} />
      </div>
    </MockShell>
  );
}

export function IntentMock() {
  return (
    <MockShell label="INTENT SCORE" meta="what they want">
      <div className="space-y-2.5">
        <KV k="Buying immediately" v="+40" />
        <KV k="Finance ready" v="+25" />
        <KV k="Device interest: PlasmaPen" v="+15" />
        <KV k="Engaged with pricing" v="+10" />
      </div>
      <div className="mt-5">
        <Bar label="INTENT" value={90} />
      </div>
    </MockShell>
  );
}

export function ScoreBreakdownMock() {
  return (
    <MockShell label="BLENDED SCORE" meta={<Chip tone="hot">HOT</Chip>}>
      <div className="space-y-4">
        <Bar label="FIT" value={70} />
        <Bar label="INTENT" value={90} />
        <Bar label="BLENDED" value={81} tone="hot" />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Chip>Owns clinic</Chip>
        <Chip>Buying this month</Chip>
        <Chip>Finance ready</Chip>
      </div>
      <p className="mt-5 border-t border-border pt-4 text-small text-muted">
        Recommended action:{' '}
        <span className="font-medium text-gold">call today</span>
      </p>
    </MockShell>
  );
}

/* ------------------------------------------------------------------ */
/* Alerts                                                              */
/* ------------------------------------------------------------------ */

export function AlertMock() {
  return (
    <MockShell label="SALES ALERT" meta="just now">
      <p className="text-body font-medium text-white">
        Hot lead: Sarah Mitchell — scored 87
      </p>
      <div className="mt-2 flex items-center gap-2">
        <Chip tone="hot">HOT</Chip>
        <Chip>87</Chip>
      </div>
      <div className="mt-5 space-y-2.5">
        <KV k="Source" v="Meta Lead Ad" />
        <KV k="Device interest" v="PlasmaPen" />
        <KV k="Timeline" v="Immediately" />
      </div>
      <p className="mt-5 border-t border-border pt-4 text-small text-muted">
        Recommended action:{' '}
        <span className="font-medium text-gold">call within 15 minutes</span>
      </p>
    </MockShell>
  );
}

export function AlertFieldsMock() {
  const fields = [
    'Name and contact details',
    'Score and temperature',
    'Source and campaign',
    'Device interest',
    'Purchase timeline',
    'Recommended action',
  ];
  return (
    <MockShell label="ALERT CONTENTS" meta="one email">
      <ul className="space-y-2.5">
        {fields.map((f) => (
          <li key={f} className="flex items-center gap-3">
            <TickIcon className="h-4 w-4 shrink-0 text-gold" />
            <span className="text-small text-white/90">{f}</span>
          </li>
        ))}
      </ul>
    </MockShell>
  );
}

function Toggle() {
  return (
    <span
      className="relative inline-flex h-4 w-8 shrink-0 items-center rounded-full bg-gold"
      aria-hidden="true"
    >
      <span className="absolute right-0.5 h-3 w-3 rounded-full bg-background" />
    </span>
  );
}

export function AlertRulesMock() {
  const rules = [
    'Score 80+ → instant email',
    'Website chat → alert sales lead',
    'Warm leads → daily digest at 8am',
  ];
  return (
    <MockShell label="ALERT RULES" meta="yours to set">
      <ul className="space-y-2.5">
        {rules.map((r) => (
          <li
            key={r}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-3.5 py-3"
          >
            <span className="text-small text-white/90">{r}</span>
            <Toggle />
          </li>
        ))}
      </ul>
    </MockShell>
  );
}

/* ------------------------------------------------------------------ */
/* Pipeline / CRM sync                                                 */
/* ------------------------------------------------------------------ */

export function PipelineMock({ sources = ['Meta Ads', 'Website', 'Live Chat'] }) {
  return (
    <MockShell label="ONE PIPELINE" meta="deduplicated">
      <div className="flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
        <div className="flex flex-1 flex-row justify-between gap-2 sm:flex-col">
          {sources.map((s) => (
            <span
              key={s}
              className="rounded-lg border border-border bg-background px-3 py-2 text-center font-mono text-xs text-muted sm:text-left"
            >
              {s}
            </span>
          ))}
        </div>
        <span
          className="hidden font-mono text-gold sm:block"
          aria-hidden="true"
        >
          →
        </span>
        <div className="flex-1 rounded-xl border border-gold/40 bg-background p-4">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-gold/30 bg-gold/10 text-gold">
              <RecordIcon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-small font-medium text-white">
                Sarah Mitchell
              </p>
              <p className="font-mono text-xs text-muted">
                s.mitchell@clinic.co.uk
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <Chip tone="hot">HOT</Chip>
            <Chip>87</Chip>
            <span className="ml-auto font-mono text-[11px] text-muted">
              1 record
            </span>
          </div>
        </div>
      </div>
    </MockShell>
  );
}

export function TwoWaySyncMock() {
  const events = [
    ['Status: New → Contacted', '14:02'],
    ['Note added by sales', '14:15'],
    ['Follow-up task created', '14:16'],
  ];
  return (
    <MockShell label="TWO-WAY SYNC" meta="live">
      <div className="flex items-center justify-center gap-4">
        <span className="rounded-lg border border-border bg-background px-4 py-2.5 font-mono text-xs text-white">
          Zoho CRM
        </span>
        <span className="font-mono text-gold" aria-hidden="true">
          ⇄
        </span>
        <span className="rounded-lg border border-gold/40 bg-gold/10 px-4 py-2.5 font-mono text-xs text-gold">
          Mikora
        </span>
      </div>
      <ul className="mt-5 space-y-2.5">
        {events.map(([e, t]) => (
          <li
            key={e}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-3.5 py-2.5"
          >
            <span className="flex items-center gap-2.5 text-small text-white/90">
              <TickIcon className="h-3.5 w-3.5 shrink-0 text-success" />
              {e}
            </span>
            <span className="font-mono text-[11px] text-muted">{t}</span>
          </li>
        ))}
      </ul>
    </MockShell>
  );
}

export function ActivityMock() {
  const rows = [
    ['Call logged — 12 minutes', '14:02'],
    ['Note captured — pricing discussed', '14:15'],
    ['Status changed to Contacted', '14:16'],
    ['Follow-up set for Friday', '14:18'],
  ];
  return (
    <MockShell label="ACTIVITY SYNC" meta="across systems">
      <ul className="space-y-2.5">
        {rows.map(([e, t]) => (
          <li
            key={e}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-3.5 py-2.5"
          >
            <span className="flex items-center gap-2.5 text-small text-white/90">
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              {e}
            </span>
            <span className="font-mono text-[11px] text-muted">{t}</span>
          </li>
        ))}
      </ul>
    </MockShell>
  );
}

/* ------------------------------------------------------------------ */
/* WhatsApp support                                                    */
/* ------------------------------------------------------------------ */

export function WhatsAppChatMock({ sourceRef }) {
  return (
    <MockShell label="WHATSAPP SUPPORT" meta="21:04 Saturday">
      <div className="space-y-3">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm border border-border bg-background px-4 py-3">
          <p className="text-small text-white/90">
            What setting should I use for upper eyelid on the Fusion 8?
          </p>
        </div>
        <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-gold/30 bg-gold/10 px-4 py-3">
          <p className="text-small text-white/90">
            Start on Level 2 for the upper eyelid. Keep spots 1mm apart, stay
            clear of the lash line, and complete no more than two passes in a
            single session.
          </p>
          {sourceRef && (
            <div className="mt-2.5">
              <Chip>Source: {sourceRef}</Chip>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-right font-mono text-[11px] text-muted">
        Answered in 4 seconds — from your training manual
      </p>
    </MockShell>
  );
}

export function EscalationMock() {
  return (
    <MockShell label="ESCALATION" meta="21:07">
      <div className="rounded-lg border border-border bg-background px-4 py-3">
        <p className="text-small text-white/90">
          Client showing prolonged redness after treatment — advice?
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Chip tone="warm">Sensitive</Chip>
        <Chip>Routed to trainer</Chip>
      </div>
      <p className="mt-4 border-t border-border pt-4 text-small text-muted">
        Your training team notified —{' '}
        <span className="text-white/90">
          full conversation context attached
        </span>
      </p>
    </MockShell>
  );
}

export function ConversationLogMock() {
  const rows = [
    ['Fusion 8 — upper eyelid settings', '21:04'],
    ['Aftercare — plasma crusting day 3', '19:48'],
    ['Consent form — patch test query', '18:15'],
  ];
  return (
    <MockShell label="CONVERSATION LOG" meta="this week">
      <ul className="space-y-2.5">
        {rows.map(([q, t]) => (
          <li
            key={q}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-3.5 py-2.5"
          >
            <span className="flex items-center gap-2.5 text-small text-white/90">
              <ChatIcon className="h-3.5 w-3.5 shrink-0 text-gold" />
              {q}
            </span>
            <span className="font-mono text-[11px] text-muted">{t}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-right font-mono text-[11px] text-muted">
        142 conversations — 9 escalated
      </p>
    </MockShell>
  );
}

/* ------------------------------------------------------------------ */
/* Agency reporting                                                    */
/* ------------------------------------------------------------------ */

export function CampaignQualityMock() {
  const rows = [
    ['UK Search — Devices', 45, 35, 20],
    ['Meta — Lead Gen', 30, 40, 30],
    ['PMax — Retargeting', 15, 35, 50],
  ];
  return (
    <MockShell label="LEAD QUALITY BY CAMPAIGN" meta="scored">
      <div className="space-y-4">
        {rows.map(([name, hot, warm, cold]) => (
          <div key={name}>
            <p className="mb-1.5 text-small text-white/90">{name}</p>
            <div className="flex h-2 overflow-hidden rounded-full bg-background">
              <div className="bg-hot" style={{ width: `${hot}%` }} />
              <div className="bg-warm" style={{ width: `${warm}%` }} />
              <div className="bg-cold" style={{ width: `${cold}%` }} />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <Chip tone="hot">Hot</Chip>
        <Chip tone="warm">Warm</Chip>
        <Chip tone="cold">Cold</Chip>
      </div>
    </MockShell>
  );
}

export function SpendDashboardMock() {
  const rows = [
    ['UK Search — Devices', '£2,400', '61', '18', '£133'],
    ['Meta — Lead Gen', '£1,850', '74', '12', '£154'],
    ['PMax — Retargeting', '£980', '22', '3', '£327'],
  ];
  return (
    <MockShell label="SPEND INTELLIGENCE" meta="this month">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-border font-mono text-[11px] tracking-[0.12em] text-muted">
              <th className="pb-2.5 pr-3 font-normal">CAMPAIGN</th>
              <th className="pb-2.5 pr-3 font-normal">SPEND</th>
              <th className="pb-2.5 pr-3 font-normal">LEADS</th>
              <th className="pb-2.5 pr-3 font-normal">HOT</th>
              <th className="pb-2.5 font-normal">£ / HOT</th>
            </tr>
          </thead>
          <tbody className="text-small">
            {rows.map(([c, s, l, h, cph]) => (
              <tr key={c} className="border-b border-border/60 last:border-0">
                <td className="py-2.5 pr-3 text-white/90">{c}</td>
                <td className="py-2.5 pr-3 text-muted">{s}</td>
                <td className="py-2.5 pr-3 text-muted">{l}</td>
                <td className="py-2.5 pr-3 font-medium text-hot">{h}</td>
                <td className="py-2.5 font-medium text-gold">{cph}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </MockShell>
  );
}

export function WhiteLabelMock() {
  return (
    <MockShell label="CLIENT REPORT" meta="white-label">
      <p className="font-heading text-h3 font-bold uppercase tracking-[0.08em] text-white">
        Your Agency
        <span
          className="ml-1.5 inline-block h-1.5 w-1.5 rounded-full bg-gold"
          aria-hidden="true"
        />
      </p>
      <p className="mt-1 text-small text-muted">
        Lead Intelligence Report — June 2026
      </p>
      <div className="mt-4 flex items-center gap-2">
        <Chip>Your logo</Chip>
        <Chip>Your brand</Chip>
      </div>
      <p className="mt-5 border-t border-border pt-4 font-mono text-[11px] tracking-[0.15em] text-muted">
        MIKORA RUNS UNDERNEATH
      </p>
    </MockShell>
  );
}

/* ------------------------------------------------------------------ */
/* Website build                                                       */
/* ------------------------------------------------------------------ */

export function BrowserMock() {
  return (
    <MockShell label="YOUR NEW SITE" meta="live in days">
      <div className="overflow-hidden rounded-xl border border-border bg-background">
        <div className="flex items-center gap-2 border-b border-border px-3.5 py-2.5">
          <span className="flex gap-1.5" aria-hidden="true">
            <span className="h-2 w-2 rounded-full bg-hot/60" />
            <span className="h-2 w-2 rounded-full bg-warm/60" />
            <span className="h-2 w-2 rounded-full bg-success/60" />
          </span>
          <span className="ml-2 flex-1 rounded-md bg-surface px-3 py-1 font-mono text-[11px] text-muted">
            yourbrand.com
          </span>
        </div>
        <div className="px-6 py-8">
          <p className="font-mono text-[10px] tracking-[0.25em] text-gold">
            THE NEW STANDARD
          </p>
          <p className="mt-2 font-heading text-xl font-bold leading-snug text-white">
            Beautiful. Fast.
            <br />
            Built to convert.
          </p>
          <span className="mt-4 inline-block rounded-full bg-gold px-4 py-1.5 text-[11px] font-semibold text-background">
            Book a Consultation
          </span>
        </div>
      </div>
    </MockShell>
  );
}

export function SEOMock() {
  return (
    <MockShell label="SEARCH PERFORMANCE" meta="day one">
      <div className="rounded-lg border border-border bg-background px-4 py-3.5">
        <p className="text-small font-medium text-gold">
          Your Brand — Professional Aesthetic Devices
        </p>
        <p className="mt-0.5 font-mono text-[11px] text-success">
          yourbrand.com
        </p>
        <p className="mt-1.5 text-small text-muted">
          Clinically proven devices with nationwide training and support.
          Book a consultation today.
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <Chip>Performance 98</Chip>
        <Chip>SEO 100</Chip>
        <Chip>Best practices 100</Chip>
      </div>
    </MockShell>
  );
}


/* ------------------------------------------------------------------ */
/* Spend intelligence                                                  */
/* ------------------------------------------------------------------ */

export function SpendSyncMock() {
  const rows = [
    ['Meta Ads — £1,850 synced', '06:00'],
    ['Google Ads — £2,400 synced', '06:00'],
    ['Impressions and clicks captured', '06:01'],
  ];
  return (
    <MockShell label="SPEND SYNC" meta="daily">
      <ul className="space-y-2.5">
        {rows.map(([e, t]) => (
          <li
            key={e}
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background px-3.5 py-2.5"
          >
            <span className="flex items-center gap-2.5 text-small text-white/90">
              <TickIcon className="h-3.5 w-3.5 shrink-0 text-success" />
              {e}
            </span>
            <span className="font-mono text-[11px] text-muted">{t}</span>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-right font-mono text-[11px] text-muted">
        Campaign level — every account, one view
      </p>
    </MockShell>
  );
}

/* ------------------------------------------------------------------ */
/* Website assistant                                                   */
/* ------------------------------------------------------------------ */

export function WebChatMock() {
  return (
    <MockShell label="WEBSITE ASSISTANT" meta="on every page">
      <div className="space-y-3">
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm border border-border bg-background px-4 py-3">
          <p className="text-small text-white/90">
            How much is the PlasmaPen device with training?
          </p>
        </div>
        <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-gold/30 bg-gold/10 px-4 py-3">
          <p className="text-small text-white/90">
            That depends on the device and training package you choose — I can
            send you the full breakdown. What is the best email for you?
          </p>
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm border border-border bg-background px-4 py-3">
          <p className="font-mono text-small text-white/90">
            sarah@clinic.co.uk
          </p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 border-t border-border pt-4">
        <Chip>Lead captured</Chip>
        <Chip tone="hot">HOT</Chip>
        <span className="ml-auto font-mono text-[11px] text-muted">
          Synced to CRM
        </span>
      </div>
    </MockShell>
  );
}

export function HandoffMock() {
  return (
    <MockShell label="LIVE HANDOFF" meta="when it matters">
      <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm border border-border bg-background px-4 py-3">
        <p className="text-small text-white/90">
          Can I talk to someone about finance options?
        </p>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Chip>Live chat requested</Chip>
      </div>
      <p className="mt-4 border-t border-border pt-4 text-small text-muted">
        Your sales team joined the conversation —{' '}
        <span className="font-medium text-gold">32 seconds</span>
      </p>
    </MockShell>
  );
}
