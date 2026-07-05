import { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * Catches render errors and — the common production case — failed lazy
 * chunk loads (stale deploy, dropped connection). Suspense has nothing
 * catching rejections without this.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Surface in the console for debugging; no external reporting wired.
    console.error('Route error boundary caught:', error, info?.componentStack);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-[72px] text-center">
        <h1 className="font-heading text-h1 font-bold text-white">
          Something went wrong
        </h1>
        <p className="mt-4 max-w-md text-body text-muted">
          This page failed to load. A refresh usually fixes it — if not, the
          rest of the site is still working.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full bg-gold px-7 py-3.5 text-small font-semibold text-background transition-colors hover:bg-goldLight"
          >
            Reload page
          </button>
          <Link
            to="/"
            onClick={() => this.setState({ hasError: false })}
            className="rounded-full border border-white/40 px-7 py-3.5 text-small font-medium text-white transition-colors hover:bg-white/10"
          >
            Back to home
          </Link>
        </div>
      </section>
    );
  }
}
