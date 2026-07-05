import { Link, useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import JsonLd from '../components/JsonLd';
import CTABanner from '../components/CTABanner';
import { Reveal, Eyebrow } from '../components/ui';
import { ArrowIcon } from '../components/icons';
import { ArticleCard } from './Blog';
import NotFound from './NotFound';
import articles from '../data/articles';

/* ------------------------------------------------------------------ */
/* Body block renderer                                                 */
/* ------------------------------------------------------------------ */

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="mb-4 mt-12 font-heading text-h3 font-bold text-white md:text-h2">
          {block.text}
        </h2>
      );
    case 'quote':
      return (
        <blockquote className="my-10 border-l-2 border-gold pl-6 font-heading text-h3 font-semibold leading-relaxed text-white">
          {block.text}
        </blockquote>
      );
    case 'list':
      return (
        <ul className="my-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              <span className="text-body leading-relaxed text-white/80">
                {item}
              </span>
            </li>
          ))}
        </ul>
      );
    case 'ctaLink':
      return (
        <p className="my-8">
          <Link
            to={block.to}
            className="group inline-flex items-center gap-2 text-body font-medium text-gold transition-colors hover:text-goldLight"
          >
            {block.label}
            <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </p>
      );
    default:
      return (
        <p className="mt-6 text-body leading-relaxed text-white/80">
          {block.text}
        </p>
      );
  }
}

/* ------------------------------------------------------------------ */
/* Author card                                                         */
/* ------------------------------------------------------------------ */

function AuthorCard() {
  return (
    <div className="mt-16 flex items-center gap-5 rounded-xl border border-border bg-surface p-6">
      <span
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/10 font-heading text-lg font-bold text-gold"
        aria-hidden="true"
      >
        M
      </span>
      <div>
        <p className="text-body font-medium text-white">
          Mikora Intelligence Team
        </p>
        <p className="mt-0.5 text-small text-muted">
          The team behind the operational intelligence layer.
        </p>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function BlogPost() {
  const { slug } = useParams();
  const article = articles.find((a) => a.slug === slug);

  if (!article) return <NotFound />;

  const index = articles.findIndex((a) => a.slug === slug);
  const related = [
    articles[(index + 1) % articles.length],
    articles[(index + 2) % articles.length],
  ];

  return (
    <>
      <SEO
        title={`${article.title} — Mikora Intelligence`}
        description={article.excerpt}
        canonical={`https://mikoraintelligence.com/blog/${article.slug}`}
        type="article"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: article.title,
          description: article.excerpt,
          image: 'https://mikoraintelligence.com/og-default.png',
          datePublished: article.dateISO,
          dateModified: article.dateISO,
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://mikoraintelligence.com/blog/${article.slug}`,
          },
          author: {
            '@type': 'Organization',
            name: 'Mikora Intelligence',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Mikora Intelligence',
            logo: {
              '@type': 'ImageObject',
              url: 'https://mikoraintelligence.com/og-default.png',
            },
          },
        }}
      />

      <article className="bg-background">
        <div className="mx-auto max-w-[45rem] px-6 pb-24 pt-36 md:pb-32 md:pt-44">
          <Reveal>
            <Eyebrow>{article.category}</Eyebrow>
            <h1 className="break-words font-heading text-[2.25rem] font-bold leading-[1.15] tracking-[-0.02em] text-white md:text-h1">
              {article.title}
            </h1>
            <p className="mt-5 font-mono text-small text-muted">
              {article.date} · {article.readTime}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 border-t border-border pt-4">
            {article.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
            <AuthorCard />
          </Reveal>
        </div>
      </article>

      {/* Related articles */}
      <section className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-h2 font-bold text-white">
              Keep reading
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {related.map((a, i) => (
              <ArticleCard key={a.slug} article={a} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
