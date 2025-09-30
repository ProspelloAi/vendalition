import { NavbarDemo } from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardAnalytics from "@/components/DashboardAnalytics";
import IntegrationsSection from "@/components/IntegrationsSection";
import ComprehensiveInsights from "@/components/ComprehensiveInsights";
import AIPoweredMarketing from "@/components/AIPoweredMarketing";
import FlexiblePricing from "@/components/FlexiblePricing";
import FAQAccordion from "@/components/FAQAccordion";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTAHeroSection from "@/components/CTAHeroSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavbarDemo />
      <Hero />
      <DashboardAnalytics />
      <IntegrationsSection />
      <ComprehensiveInsights />
      <AIPoweredMarketing />
      <FlexiblePricing />
      <FAQAccordion />
      <TestimonialsSection />
      <CTAHeroSection />
      <Footer />
    </>
  );
}
