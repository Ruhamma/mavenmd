'use client';
import React from 'react';
import DashboardCard from './components/DashboardCard';
import { IconCalendar, IconCash, IconUsers } from '@tabler/icons-react';
import AnalyticsCard from './components/AnalyticsCard';

const page = () => {
  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-[#08087D] text-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md mx-auto">
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">Welcome Doctor Sarah!</p>
        <p className="text-base sm:text-lg md:text-xl mt-2 leading-snug">
          Take care and stay sharp. <br className="hidden sm:block" /> Your work matters!
        </p>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          totalVisits={10}
          title="Total Patients"
          percentageChange="+2.5%"
          changeDirection="up"
          changeText="8% vs yesterday"
          icon={<IconUsers size={24} className="text-white" />}
        />
        <DashboardCard
          totalVisits={10}
          title="Total Appointments"
          percentageChange="-2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          icon={<IconCalendar size={24} className="text-white" />}
        />
        <DashboardCard
          totalVisits={10}
          percentageChange="+2.5%"
          changeDirection="up"
          changeText="8% vs yesterday"
          title="Total Earning"
          icon={<IconCash size={24} className="text-white" />}
        />
        <DashboardCard
          totalVisits={10}
          title="Total Appointments"
          percentageChange="-2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          icon={<IconCalendar size={24} className="text-white" />}
        />
      </div>

      <AnalyticsCard />
    </div>
  )
}

export default page
