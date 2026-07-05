/* Shared icon set — 24px grid, stroke-based, inherit currentColor */

function IconBase({ children, className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || 'h-5 w-5'}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const FormIcon = (p) => (
  <IconBase {...p}>
    <rect x="4" y="3.5" width="16" height="17" rx="2" />
    <path d="M8 8.5h8M8 12h8M8 15.5h4.5" />
  </IconBase>
);

export const TargetIcon = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3.5" />
  </IconBase>
);

export const RecordIcon = (p) => (
  <IconBase {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <circle cx="8.5" cy="10.5" r="2" />
    <path d="M13.5 9.5H18M13.5 13h4.5M5.5 15.8c.7-1.3 1.8-2 3-2s2.3.7 3 2" />
  </IconBase>
);

export const MailIcon = (p) => (
  <IconBase {...p}>
    <rect x="2.5" y="7" width="15.5" height="12" rx="2" />
    <path d="M4 9.5l6.25 4 6.25-4" />
    <circle cx="19.5" cy="5.5" r="2.5" fill="currentColor" stroke="none" />
  </IconBase>
);

export const CheckIcon = (p) => (
  <IconBase {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M8.5 12.4l2.4 2.4 4.6-4.9" />
  </IconBase>
);

export const TickIcon = (p) => (
  <IconBase {...p}>
    <path d="M4.5 12.5l4.5 4.5L19.5 6.5" />
  </IconBase>
);

export const WarnIcon = (p) => (
  <IconBase {...p}>
    <path d="M12 4.2L21 19.6H3L12 4.2z" />
    <path d="M12 10.2v4" />
    <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
  </IconBase>
);

export const BellIcon = (p) => (
  <IconBase {...p}>
    <path d="M6 16.5h12c-1.3-1.1-2-2.4-2-5.5a4 4 0 0 0-8 0c0 3.1-.7 4.4-2 5.5z" />
    <path d="M10.3 19.5a1.9 1.9 0 0 0 3.4 0" />
  </IconBase>
);

export const SyncIcon = (p) => (
  <IconBase {...p}>
    <path d="M19.5 12a7.5 7.5 0 0 1-13.6 4.4" />
    <path d="M4.5 12a7.5 7.5 0 0 1 13.6-4.4" />
    <path d="M5.5 20.5v-4.1h4.1M18.5 3.5v4.1h-4.1" />
  </IconBase>
);

export const ChartIcon = (p) => (
  <IconBase {...p}>
    <path d="M4 20h16" />
    <path d="M7 20v-5.5M12 20V9.5M17 20V6" />
  </IconBase>
);

export const BrowserIcon = (p) => (
  <IconBase {...p}>
    <rect x="3" y="4.5" width="18" height="15" rx="2" />
    <path d="M3 9h18" />
    <circle cx="6.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="8.7" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
  </IconBase>
);

export const ChatIcon = (p) => (
  <IconBase {...p}>
    <path d="M21 11.5a7.5 7.5 0 0 1-11 6.6L4 19.5l1.4-5.9A7.5 7.5 0 1 1 21 11.5z" />
  </IconBase>
);

export const ArrowIcon = (p) => (
  <IconBase {...p}>
    <path d="M4.5 12h15M13.5 6l6 6-6 6" />
  </IconBase>
);

export const MegaphoneIcon = (p) => (
  <IconBase {...p}>
    <path d="M4 10v4h2.5l6.5 4V6l-6.5 4H4z" />
    <path d="M16.5 9.5a3.6 3.6 0 0 1 0 5" />
  </IconBase>
);

export const CursorIcon = (p) => (
  <IconBase {...p}>
    <path d="M5.5 4.5l5.8 14 2-6.2 6.2-2-14-5.8z" />
  </IconBase>
);

export const SmsIcon = (p) => (
  <IconBase {...p}>
    <path d="M20.5 15a2 2 0 0 1-2 2H8l-4.5 3.5V5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v10z" />
    <circle cx="8.5" cy="10" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="10" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="15.5" cy="10" r="0.6" fill="currentColor" stroke="none" />
  </IconBase>
);

export const CloudIcon = (p) => (
  <IconBase {...p}>
    <path d="M7 18a4 4 0 1 1 .6-7.96A5 5 0 0 1 17.4 9.5 3.75 3.75 0 0 1 17 17.99L7 18z" />
  </IconBase>
);

export const CalculatorIcon = (p) => (
  <IconBase {...p}>
    <rect x="5.5" y="3" width="13" height="18" rx="2" />
    <path d="M9 7h6" />
    <circle cx="9" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="15" cy="11.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="9" cy="15" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="15" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="15" cy="15" r="0.6" fill="currentColor" stroke="none" />
  </IconBase>
);

export const CodeIcon = (p) => (
  <IconBase {...p}>
    <path d="M8.5 8l-4 4 4 4M15.5 8l4 4-4 4" />
  </IconBase>
);

export const BookIcon = (p) => (
  <IconBase {...p}>
    <path d="M12 6.5C10.5 5 8 4.5 4 4.5v14c4 0 6.5.5 8 2 1.5-1.5 4-2 8-2v-14c-4 0-6.5.5-8 2z" />
    <path d="M12 6.5v14" />
  </IconBase>
);
