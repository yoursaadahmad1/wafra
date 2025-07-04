'use client';

import { ResellerHero } from '@/components/reseller/reseller-hero';
import { ResellerPlans } from '@/components/reseller/reseller-plans';
import { ResellerFeatures } from '@/components/reseller/reseller-features';
import { useGSAP } from '@/hooks/use-gsap';

export default function ResellerHosting() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <ResellerHero />
      <ResellerPlans />
      <ResellerFeatures />
    </div>
  );
}