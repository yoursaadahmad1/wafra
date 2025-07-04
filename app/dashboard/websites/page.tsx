'use client';

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { WebsitesManagement } from '@/components/dashboard/websites-management';
import { useGSAP } from '@/hooks/use-gsap';

export default function Websites() {
  useGSAP();
  
  return (
    <DashboardLayout>
      <WebsitesManagement />
    </DashboardLayout>
  );
}