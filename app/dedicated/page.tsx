'use client';

import { DedicatedHero } from '@/components/dedicated/dedicated-hero';
import { DedicatedPlans } from '@/components/dedicated/dedicated-plans';
import { DedicatedFeatures } from '@/components/dedicated/dedicated-features';
import { useGSAP } from '@/hooks/use-gsap';

export default function DedicatedHosting() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <DedicatedHero />
      <DedicatedPlans />
      <DedicatedFeatures />
    </div>
  );
}