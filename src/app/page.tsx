import { NavbarDemo } from '@/components/Navbar';
import Hero from '@/components/Hero';
import DashboardAnalytics from '@/components/DashboardAnalytics';
import IntegrationsSection from '@/components/IntegrationsSection';
import ComprehensiveInsights from '@/components/ComprehensiveInsights';
import AIPoweredMarketing from '@/components/AIPoweredMarketing';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import ValueProposition from '@/components/ValueProposition';

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <ValueProposition />
      <DashboardAnalytics />
      <IntegrationsSection />
      <ComprehensiveInsights />
      <AIPoweredMarketing />
      <Pricing />
      <FAQ />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
