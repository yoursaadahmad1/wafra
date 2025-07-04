'use client';

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { BillingManagement } from '@/components/dashboard/billing-management';
import { useGSAP } from '@/hooks/use-gsap';

export default function Billing() {
  useGSAP();
  
  return (
    <DashboardLayout>
      <BillingManagement />
    </DashboardLayout>
  );
}