'use client';

import { TwoColumnHero } from '@/components/two-column/two-column-hero';
import { TwoColumnContent } from '@/components/two-column/two-column-content';
import { useGSAP } from '@/hooks/use-gsap';

export default function TwoColumn() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <TwoColumnHero />
      <TwoColumnContent />
    </div>
  );
}