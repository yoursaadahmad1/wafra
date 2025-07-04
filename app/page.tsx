'use client';

import { HeroSection } from '@/components/hero-section';
import { StatsSection } from '@/components/stats-section';
import { DomainRegistrationSection } from '@/components/domain-registration-section';
import { ServicesSection } from '@/components/services-section';
import { PricingSection } from '@/components/pricing-section';
import { HostingComparisonSection } from '@/components/hosting-comparison-section';
import { FeaturesSection } from '@/components/features-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { CTASection } from '@/components/cta-section';
import { useGSAP } from '@/hooks/use-gsap';

export default function Home() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <HeroSection />
      <StatsSection />
      <DomainRegistrationSection />
      <ServicesSection />
      <PricingSection />
      <HostingComparisonSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}