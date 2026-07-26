/**
 * Renders a JSON-LD script inline. Inline (rather than effect-injected)
 * so structured data is present in prerendered HTML for crawlers that
 * don't execute JavaScript; search engines read JSON-LD anywhere in the
 * document, not just <head>.
 */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      // <-escape so no "</script>" sequence can break out of the tag
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  );
}
