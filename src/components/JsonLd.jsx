import { useEffect } from 'react';

/** Injects a JSON-LD script into <head> for the lifetime of the page. */
export default function JsonLd({ data }) {
  const json = JSON.stringify(data);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = json;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, [json]);

  return null;
}
