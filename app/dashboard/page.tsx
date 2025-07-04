'use client';

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { DashboardOverview } from '@/components/dashboard/dashboard-overview';
import { useGSAP } from '@/hooks/use-gsap';

export default function Dashboard() {
  useGSAP();
  
  return (
    <DashboardLayout>
      <DashboardOverview />
    </DashboardLayout>
  );
}