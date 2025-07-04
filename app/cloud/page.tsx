'use client';

import { CloudHero } from '@/components/cloud/cloud-hero';
import { CloudFeatures } from '@/components/cloud/cloud-features';
import { CloudPlans } from '@/components/cloud/cloud-plans';
import { CloudArchitecture } from '@/components/cloud/cloud-architecture';
import { useGSAP } from '@/hooks/use-gsap';

export default function CloudHosting() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <CloudHero />
      <CloudFeatures />
      <CloudPlans />
      <CloudArchitecture />
    </div>
  );
}