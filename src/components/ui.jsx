import { motion, useReducedMotion } from 'framer-motion';

/** Scroll-triggered entrance. Optional x offset for slide-in from a side. */
export function Reveal({ children, delay = 0, className, x = 0 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: x ? 0 : 24, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({ children }) {
  return (
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-gold">
      {children}
    </p>
  );
}

/** Centered inner-page hero: eyebrow, title, subtitle, optional CTA children. */
export function PageHero({ eyebrow, title, subtitle, children }) {
  const reduce = useReducedMotion();

  const fadeUp = (delay) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.6, ease: 'easeOut' },
  });

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 pb-16 pt-36 text-center md:pb-20 md:pt-44">
        {eyebrow && (
          <motion.div {...fadeUp(0)}>
            <Eyebrow>{eyebrow}</Eyebrow>
          </motion.div>
        )}
        <motion.h1
          {...fadeUp(0.05)}
          className="break-words font-heading text-[2.5rem] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-h1 lg:text-[3.5rem] lg:leading-[1.1]"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            {...fadeUp(0.16)}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div
            {...fadeUp(0.28)}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
