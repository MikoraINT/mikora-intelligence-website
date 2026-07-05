import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const DOT_COUNT = 22;

export default function CTABanner({
  heading = 'Ready to see Mikora in action?',
  subtext = 'Join the companies using Mikora to score, route and close more leads automatically.',
  children,
}) {
  const reduceMotion = useReducedMotion();

  const dots = useMemo(
    () =>
      Array.from({ length: DOT_COUNT }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 4,
        drift: 20 + Math.random() * 40,
        duration: 10 + Math.random() * 14,
        delay: Math.random() * 8,
      })),
    []
  );

  return (
    <section className="relative overflow-hidden bg-background bg-gradient-to-b from-gold/10 to-transparent">
      {/* Ambient gold particles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {dots.map((d) => (
          <motion.span
            key={d.id}
            className="absolute rounded-full bg-gold"
            style={{
              left: `${d.left}%`,
              top: `${d.top}%`,
              width: d.size,
              height: d.size,
            }}
            initial={{ opacity: 0.08 }}
            animate={
              reduceMotion
                ? { opacity: 0.08 }
                : { y: [0, -d.drift, 0], opacity: [0.05, 0.14, 0.05] }
            }
            transition={{
              duration: d.duration,
              delay: d.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <h2 className="font-heading text-h2 font-bold text-white md:text-h1">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-body text-muted">{subtext}</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {children || (
            <>
              <Link
                to="/request-consultation"
                className="rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight"
              >
                Request a Consultation
              </Link>
              <Link
                to="/platform"
                className="rounded-full border border-white/40 px-7 py-3.5 text-small font-medium text-white transition-colors hover:bg-white/10"
              >
                Explore the Platform
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
