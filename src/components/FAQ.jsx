import { useId, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-4 w-4 shrink-0 text-gold transition-transform duration-300 ${
        open ? 'rotate-180' : ''
      }`}
      aria-hidden="true"
    >
      <path d="M6 8l4 4 4-4" />
    </svg>
  );
}

/**
 * Accordion. items: [{ question, answer }]. One item open at a time.
 */
export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  const reduce = useReducedMotion();
  const baseId = useId();

  return (
    <div className="mx-auto max-w-3xl border-t border-border">
      {items.map(({ question, answer }, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;
        return (
          <div key={question} className="border-b border-border">
            <button
              id={buttonId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? -1 : i)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="text-body font-medium text-white">
                {question}
              </span>
              <Chevron open={open} />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    duration: reduce ? 0 : 0.3,
                    ease: 'easeInOut',
                  }}
                >
                  <p className="pb-6 pr-10 text-body text-muted">{answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
