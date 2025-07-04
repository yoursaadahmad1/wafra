'use client';

import { DomainHero } from '@/components/domain/domain-hero';
import { DomainSearch } from '@/components/domain/domain-search';
import { DomainPricing } from '@/components/domain/domain-pricing';
import { DomainFeatures } from '@/components/domain/domain-features';
import { useGSAP } from '@/hooks/use-gsap';

export default function DomainPage() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <DomainHero />
      <DomainSearch />
      <DomainPricing />
      <DomainFeatures />
    </div>
  );
}