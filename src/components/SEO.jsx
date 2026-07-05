import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://mikoraintelligence.com'; // no www
const DEFAULT_OG_IMAGE = '/og-default.png';

function upsertMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function upsertCanonical(href) {
  let tag = document.head.querySelector('link[rel="canonical"]');
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', 'canonical');
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

function removeCanonical() {
  const tag = document.head.querySelector('link[rel="canonical"]');
  if (tag) tag.remove();
}

/**
 * Per-route head management.
 * Props: title, description, canonical (absolute URL), ogImage (path or
 * absolute URL), type (og:type), noindex (true on pages that should not
 * be indexed, e.g. the 404).
 */
export default function SEO({
  title,
  description,
  canonical,
  ogImage,
  type = 'website',
  noindex = false,
}) {
  const { pathname } = useLocation();

  useEffect(() => {
    const url = canonical || `${SITE_URL}${pathname}`;
    const image = ogImage
      ? ogImage.startsWith('http')
        ? ogImage
        : `${SITE_URL}${ogImage}`
      : `${SITE_URL}${DEFAULT_OG_IMAGE}`;

    document.title = title;
    upsertMeta('name', 'description', description);

    // Set robots explicitly on every route so a 404 visit can't leave a
    // stale noindex behind after client-side navigation (and vice versa).
    upsertMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    if (noindex) {
      removeCanonical();
    } else {
      upsertCanonical(url);
    }

    upsertMeta('property', 'og:site_name', 'Mikora Intelligence');
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:image', image);
    upsertMeta('property', 'og:url', url);
    upsertMeta('property', 'og:type', type);

    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', image);
  }, [title, description, canonical, ogImage, type, noindex, pathname]);

  return null;
}
