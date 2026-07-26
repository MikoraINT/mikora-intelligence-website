import { PassThrough } from 'node:stream';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import { beginSsrMetaCapture } from './components/SEO.jsx';

/**
 * Build-time renderer used by scripts/prerender.mjs. Renders one route to an
 * HTML string plus the meta the route's <SEO> component resolved.
 * renderToPipeableStream (not renderToString) so React.lazy routes are
 * awaited via onAllReady instead of throwing.
 */
export function render(url) {
  const meta = beginSsrMetaCapture();

  return new Promise((resolve, reject) => {
    const stream = renderToPipeableStream(
      <StaticRouter
        location={url}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          const sink = new PassThrough();
          let html = '';
          sink.on('data', (chunk) => {
            html += chunk;
          });
          sink.on('end', () => resolve({ html, meta: { ...meta.current } }));
          stream.pipe(sink);
        },
        onError(error) {
          reject(error);
        },
      }
    );
  });
}
