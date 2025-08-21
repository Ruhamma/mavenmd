'use client';

import React from 'react';
import DashboardCard from './components/DashboardCard';
import { IconCalendar, IconCash, IconUsers } from '@tabler/icons-react';
import AnalyticsCard from './components/AnalyticsCard';
import { useGetAppointmentsAnalyticsQuery } from '@/services/appointments/api';
import { useAuth } from '@/services/auth/api';

export default function DashboardPage() {
  // Fetch analytics data
  const { data } = useGetAppointmentsAnalyticsQuery();
  const analytics = data?.result;

  const { user } = useAuth();
  const doctorName = user?.result?.user?.fullName || 'Doctor';

  return (
    <div className="space-y-6">
      <div className="bg-primary-800 text-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md mx-auto">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">Welcome {doctorName}!</p>
        <p className="text-base sm:text-lg md:text-xl mt-2 leading-snug">
          Take care and stay sharp. <br className="hidden sm:block" /> Your work matters!
        </p>
      </div>

      <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          totalVisits={analytics?.totalPatients ?? 0}
          title="Total Patients"
          percentageChange="+2.5%"
          changeDirection="up"
          changeText="8% vs yesterday"
          icon={<IconUsers size={16} className="text-white sm:size-[24px]" />}
        />
        <DashboardCard
          totalVisits={analytics?.totalAppointments ?? 0}
          title="Total Appointments"
          percentageChange="-2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          icon={<IconCalendar size={16} className="text-white sm:size-[24px]" />}
        />
        <DashboardCard
          totalVisits={analytics?.totalCompletedAppointments ?? 0}
          percentageChange="+2.5%"
          changeDirection="up"
          changeText="8% vs yesterday"
          title="Completed Appointments"
          icon={<IconCash size={16} className="text-white sm:size-[24px]" />}
        />
        <DashboardCard
          totalVisits={analytics?.totalPendingAppointments ?? 0}
          title="Pending Appointments"
          percentageChange="-2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          icon={<IconCalendar size={16} className="text-white sm:size-[24px]" />}
        />
      </div>

      <AnalyticsCard />
    </div>
  );
}
