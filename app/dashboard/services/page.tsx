'use client';

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { ServicesManagement } from '@/components/dashboard/services-management';
import { useGSAP } from '@/hooks/use-gsap';

export default function Services() {
  useGSAP();
  
  return (
    <DashboardLayout>
      <ServicesManagement />
    </DashboardLayout>
  );
}