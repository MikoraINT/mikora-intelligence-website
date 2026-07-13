import { Suspense, lazy, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import GtmPageViews from './components/GtmPageViews';

// All page components are lazy-loaded so each route ships as its own chunk.
const Home = lazy(() => import('./pages/Home'));
const Platform = lazy(() => import('./pages/Platform'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const Pricing = lazy(() => import('./pages/Pricing'));
const RequestConsultation = lazy(() => import('./pages/RequestConsultation'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const CaseStudyPlasmaPen = lazy(() => import('./pages/CaseStudyPlasmaPen'));
const SolutionAestheticDevices = lazy(() => import('./pages/SolutionAestheticDevices'));
const SolutionTrainingAcademies = lazy(() => import('./pages/SolutionTrainingAcademies'));
const SolutionAgencies = lazy(() => import('./pages/SolutionAgencies'));
const CapabilityLeadScoring = lazy(() => import('./pages/CapabilityLeadScoring'));
const CapabilityWhatsAppSupport = lazy(() => import('./pages/CapabilityWhatsAppSupport'));
const CapabilityCRMSync = lazy(() => import('./pages/CapabilityCRMSync'));
const CapabilityAdSpendTracking = lazy(() => import('./pages/CapabilityAdSpendTracking'));
const CapabilityROICalculator = lazy(() => import('./pages/CapabilityROICalculator'));
const CapabilitySalesAlerts = lazy(() => import('./pages/CapabilitySalesAlerts'));
const CapabilityWebsiteAssistant = lazy(() => import('./pages/CapabilityWebsiteAssistant'));
const CapabilityWebsiteBuild = lazy(() => import('./pages/CapabilityWebsiteBuild'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const NotFound = lazy(() => import('./pages/NotFound'));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Instant, so CSS smooth-scrolling doesn't animate long jumps between pages
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <span className="h-2 w-2 animate-ping rounded-full bg-gold" aria-hidden="true" />
      <span className="sr-only">Loading</span>
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col bg-background font-body text-white">
        <a
          href="#main"
          className="sr-only z-[70] rounded-full bg-gold px-5 py-2.5 text-small font-semibold text-background focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <ScrollToTop />
        <GtmPageViews />
        <Navbar />
        <main id="main" className="flex-1 overflow-x-clip">
          <ErrorBoundary>
            <Suspense fallback={<RouteFallback />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/platform" element={<Platform />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/request-consultation" element={<RequestConsultation />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/case-study/plasmapen" element={<CaseStudyPlasmaPen />} />
                <Route path="/solutions/aesthetic-devices" element={<SolutionAestheticDevices />} />
                <Route path="/solutions/training-academies" element={<SolutionTrainingAcademies />} />
                <Route path="/solutions/agencies" element={<SolutionAgencies />} />
                <Route path="/capabilities/lead-scoring" element={<CapabilityLeadScoring />} />
                <Route path="/capabilities/whatsapp-support" element={<CapabilityWhatsAppSupport />} />
                <Route path="/capabilities/crm-sync" element={<CapabilityCRMSync />} />
                <Route path="/capabilities/ad-spend-tracking" element={<CapabilityAdSpendTracking />} />
                <Route path="/capabilities/roi-calculator" element={<CapabilityROICalculator />} />
                <Route path="/capabilities/sales-alerts" element={<CapabilitySalesAlerts />} />
                <Route path="/capabilities/website-assistant" element={<CapabilityWebsiteAssistant />} />
                <Route path="/capabilities/website-build" element={<CapabilityWebsiteBuild />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
