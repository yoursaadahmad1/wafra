'use client';

import { PricingHero } from '@/components/pricing/pricing-hero';
import { PricingPlans } from '@/components/pricing/pricing-plans';
import { PricingFAQ } from '@/components/pricing/pricing-faq';
import { useGSAP } from '@/hooks/use-gsap';

export default function Pricing() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <PricingHero />
      <PricingPlans />
      <PricingFAQ />
    </div>
  );
}