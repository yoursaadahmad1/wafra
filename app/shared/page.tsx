'use client';

import { SharedHero } from '@/components/shared/shared-hero';
import { SharedPlans } from '@/components/shared/shared-plans';
import { SharedFeatures } from '@/components/shared/shared-features';
import { SharedTestimonials } from '@/components/shared/shared-testimonials';
import { useGSAP } from '@/hooks/use-gsap';

export default function SharedHosting() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <SharedHero />
      <SharedPlans />
      <SharedFeatures />
      <SharedTestimonials />
    </div>
  );
}