'use client';

import { ServicesHero } from '@/components/services/services-hero';
import { ServicesList } from '@/components/services/services-list';
import { ServiceFeatures } from '@/components/services/service-features';
import { ServiceComparison } from '@/components/services/service-comparison';
import { useGSAP } from '@/hooks/use-gsap';

export default function Services() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <ServicesHero />
      <ServicesList />
      <ServiceFeatures />
      <ServiceComparison />
    </div>
  );
}