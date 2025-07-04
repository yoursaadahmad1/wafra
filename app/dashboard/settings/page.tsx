'use client';

import { DashboardLayout } from '@/components/dashboard/dashboard-layout';
import { SettingsManagement } from '@/components/dashboard/settings-management';
import { useGSAP } from '@/hooks/use-gsap';

export default function Settings() {
  useGSAP();
  
  return (
    <DashboardLayout>
      <SettingsManagement />
    </DashboardLayout>
  );
}