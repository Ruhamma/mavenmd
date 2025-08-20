'use client';

import { useState } from 'react';
import { IconCalendar, IconCash, IconSearch, IconUsers } from '@tabler/icons-react';
import AppointmentsCard from './components/AppointmentsCard';
import DashboardCard from '../components/DashboardCard';
import { useGetAppointmentsQuery } from '@/services/appointments/api';

export default function DashboardPage() {
  const { data, isLoading, isError } = useGetAppointmentsQuery();
  const appointments = data?.result?.appointments || [];
  const totalAppointments = data?.result?.count || 0;

  // dashboard metrics
  const pendingCount = appointments.filter(a => a.status === 'PENDING').length;
  const completedCount = appointments.filter(a => a.status === 'COMPLETED').length;

  // state for status filter
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredAppointments =
    statusFilter === 'All'
      ? appointments
      : appointments.filter(a => a.status === statusFilter);

  return (
    <>
      {/* Top texts */}
      <div className="p-2 flex flex-col gap-1">
        <h1 className="text-3xl font-bold text-gray-900 pb-2">Appointment</h1>
        <p className="text-gray-600">Manage house call appointments and booking</p>
      </div>

      {/* Search bar */}
      <div className="px-2 mb-4 w-full pt-4">
        <div className="relative">
          <input
            type="search"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <IconSearch
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
          />
        </div>
      </div>

      {/* Dashboard Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          totalVisits={appointments.length}
          title="Total Visits"
          percentageChange="+2.5%"
          changeDirection="up"
          changeText="8% vs yesterday"
          icon={<IconUsers size={24} className="text-white" />}
        />
        <DashboardCard
          totalVisits={pendingCount}
          title="Pending Appointments"
          percentageChange="-2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          icon={<IconCalendar size={24} className="text-white" />}
        />
        <DashboardCard
          totalVisits={completedCount}
          title="Completed"
          percentageChange="-2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          icon={<IconCash size={24} className="text-white" />}
        />
        <DashboardCard
          totalVisits={totalAppointments}
          title="Total Appointments"
          percentageChange="-2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          icon={<IconCalendar size={24} className="text-white" />}
        />
      </div>

      <div className="p-6 mt-2 bg-white rounded-xs">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h1 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-6 text-center sm:text-left">
            Recent Appointments
          </h1>

          {/* Filters */}
          <div className="flex justify-center sm:justify-end gap-2 sm:gap-4 mb-2 sm:mb-6 items-center">
            <select
              className="border border-gray-400 rounded px-3 py-1 text-xs sm:text-base"
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
            >
              <option value="All">All status</option>
              <option value="PENDING">Pending</option>
              <option value="CONFIRMED">Confirmed</option>
              <option value="COMPLETED">Completed</option>
            </select>

            <select className="border border-gray-400 rounded px-3 py-1 text-xs sm:text-base">
              <option>Today</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        {isLoading && <p>Loading appointments...</p>}
        {isError && <p className="text-red-500">Failed to load appointments</p>}
        {!isLoading && filteredAppointments.length === 0 && (
          <p className="text-gray-500">No appointments found.</p>
        )}

        <div className="space-y-4">
          {filteredAppointments.map(app => (
            <AppointmentsCard
              key={app.id}
              name={app.Patient?.user?.fullName ?? 'Unknown'}
              genderAge={`${app.Patient?.gender ?? 'N/A'}, ${app.Patient?.age ?? 'N/A'} years`}
              symptoms={Array.isArray(app.symptoms) ? app.symptoms.join(', ') : 'No symptoms'}
              imageUrl="/images/default-avatar.png"
              urgency={{
                label: app.type,
                bgColor: app.type === 'ROUTINE' ? '#4338CA' : '#B91C1C',
              }}
              requestedAgo={new Date(app.createdAt).toLocaleDateString()}
              distance="N/A"
              status={app.status}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center text-xs sm:text-sm text-gray-700">
          <span className="hidden sm:inline">
            Showing {filteredAppointments.length} of {totalAppointments} appointments
          </span>
        </div>
      </div>
    </>
  );
}
