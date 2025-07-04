'use client';

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { MarketplaceManagement } from '@/components/dashboard/marketplace-management';
import { useGSAP } from '@/hooks/use-gsap';

export default function Marketplace() {
  useGSAP();
  
  return (
    <DashboardLayout>
      <MarketplaceManagement />
    </DashboardLayout>
  );
}