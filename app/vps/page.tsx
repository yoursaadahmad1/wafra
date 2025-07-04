'use client';

import { VPSHero } from '@/components/vps/vps-hero';
import { VPSPlans } from '@/components/vps/vps-plans';
import { VPSFeatures } from '@/components/vps/vps-features';
import { useGSAP } from '@/hooks/use-gsap';

export default function VPSHosting() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <VPSHero />
      <VPSPlans />
      <VPSFeatures />
    </div>
  );
}