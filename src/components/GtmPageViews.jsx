import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// Pushes a page_view to the GTM dataLayer on each client-side route change.
// React Router changes the URL without a full page load, so GA4 (loaded via
// GTM) would otherwise never see SPA navigations. The initial page_view is
// handled by the GA4 configuration tag on load, so we skip the first render
// to avoid double-counting.
export default function GtmPageViews() {
  const { pathname, search } = useLocation();
  const firstLoad = useRef(true);

  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'page_view',
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  return null;
}
