import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import CTABanner from '../components/CTABanner';
import { Reveal, PageHero } from '../components/ui';
import articles from '../data/articles';

export function ArticleCard({ article, delay = 0 }) {
  const { slug, title, category, date, readTime, excerpt } = article;
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        to={`/blog/${slug}`}
        className="group flex h-full flex-col rounded-xl border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_16px_40px_-16px_rgba(200,169,106,0.25)]"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-gold">
          {category}
        </span>
        <h2 className="mt-4 font-heading text-h3 font-bold text-white transition-colors group-hover:text-goldLight">
          {title}
        </h2>
        <p className="mt-3 flex-1 text-small text-muted">{excerpt}</p>
        <p className="mt-6 font-mono text-xs text-muted">
          {date} · {readTime}
        </p>
      </Link>
    </Reveal>
  );
}

export default function Blog() {
  return (
    <>
      <SEO
        title="The Mikora Journal — Intelligence for operators"
        description="Practical thinking on lead operations, pipeline intelligence, and building businesses that never miss a lead."
        canonical="https://mikoraintelligence.com/blog"
      />
      <PageHero
        eyebrow="The Mikora Journal"
        title="Intelligence for operators"
        subtitle="Practical thinking on lead operations, pipeline intelligence, and building businesses that never miss a lead."
      />
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 pb-24 md:pb-32">
          <div className="grid gap-5 md:grid-cols-2">
            {articles.map((article, i) => (
              <ArticleCard
                key={article.slug}
                article={article}
                delay={(i % 2) * 0.08}
              />
            ))}
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
