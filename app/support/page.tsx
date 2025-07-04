'use client';

import { SupportHero } from '@/components/support/support-hero';
import { SupportCategories } from '@/components/support/support-categories';
import { SupportFAQ } from '@/components/support/support-faq';
import { SupportContact } from '@/components/support/support-contact';
import { useGSAP } from '@/hooks/use-gsap';

export default function Support() {
  useGSAP();
  
  return (
    <div className="overflow-x-hidden">
      <SupportHero />
      <SupportCategories />
      <SupportFAQ />
      <SupportContact />
    </div>
  );
}