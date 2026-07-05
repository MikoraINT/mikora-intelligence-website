/* Shared form primitives for the conversion pages */

export const inputClasses =
  'w-full rounded-lg border bg-background px-4 py-3 text-body text-white placeholder:text-muted/85 transition-colors focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold/40';

export const selectClasses = `${inputClasses} appearance-none pr-10`;

export function Label({ htmlFor, required, children }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-small font-medium text-white"
    >
      {children}
      {required && (
        <span className="ml-1 text-gold" aria-hidden="true">
          *
        </span>
      )}
    </label>
  );
}

export function FieldError({ children }) {
  if (!children) return null;
  return (
    <p role="alert" className="mt-1.5 text-small text-hot">
      {children}
    </p>
  );
}

/**
 * Spam trap. Visually off-screen, skipped by keyboard and assistive tech,
 * but present in the parsed form for naive bots to fill. Submissions with
 * a value here are silently accepted without hitting the webhook.
 */
export function HoneypotField({ value, onChange }) {
  return (
    <div
      aria-hidden="true"
      className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden"
    >
      <label htmlFor="company_fax">Leave this field empty</label>
      <input
        id="company_fax"
        name="company_fax"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export function SelectArrow() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted"
      aria-hidden="true"
    >
      <path d="M6 8l4 4 4-4" />
    </svg>
  );
}

export function Spinner() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      className="h-4 w-4 animate-spin"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" className="opacity-25" />
      <path d="M21 12a9 9 0 0 0-9-9" strokeLinecap="round" />
    </svg>
  );
}
