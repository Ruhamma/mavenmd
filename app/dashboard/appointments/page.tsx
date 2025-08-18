'use client';

import { useState } from 'react';
import { IconCalendar, IconCash, IconSearch, IconUsers } from '@tabler/icons-react';
import AppointmentsCard from './components/AppointmentsCard';
import DashboardCard from '../components/DashboardCard';
import { useGetAppointmentsQuery } from '../../../services/appointments/api';

export default function DashboardPage() {
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  // Fetch appointments
  const { data, isLoading, error } = useGetAppointmentsQuery();

  const appointments = data?.result.appointments || [];
  const totalAppointments = data?.result.count || 0;

  // Pagination logic
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedAppointments = appointments.slice(startIndex, endIndex);
  const totalPages = Math.ceil(totalAppointments / itemsPerPage);

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
          totalVisits={10}
          title="Total Visits"
          percentageChange="+2.5%"
          changeDirection="up"
          changeText="8% vs yesterday"
          icon={<IconUsers size={24} className="text-white" />}
        />
        <DashboardCard
          totalVisits={10}
          title="Pending Appointments"
          percentageChange="-2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          icon={<IconCalendar size={24} className="text-white" />}
        />
        <DashboardCard
          totalVisits={10}
          title="Completed"
          percentageChange="-2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
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

      <div className="p-6 mt-2 bg-white rounded-xs">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
          <h1 className="text-lg sm:text-2xl font-semibold mb-2 sm:mb-6 text-center sm:text-left">
            Recent Appointments
          </h1>

          {/* Filters */}
          <div className="flex justify-center sm:justify-end gap-2 sm:gap-4 mb-2 sm:mb-6 items-center">
            <select className="border border-gray-400 rounded px-3 py-1 text-xs sm:text-base">
              <option>All status</option>
            </select>
            <select className="border border-gray-400 rounded px-3 py-1 text-xs sm:text-base">
              <option>Today</option>
            </select>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {isLoading && <p>Loading appointments...</p>}
          {error && <p>Error fetching appointments</p>}
          {!isLoading &&
            !error &&
            paginatedAppointments.map((appt) => (
              <AppointmentsCard
                key={appt.id}
                id={appt.id}
                name={`Patient ${appt.patientId}`} // Replace with actual patient name if available
                genderAge="N/A"
                symptoms={appt.sessionNotes?.symptoms || 'No symptoms recorded'}
                imageUrl="/images/placeholder.jpg"
                urgency={{
                  label: appt.type,
                  bgColor: appt.type === 'FOLLOWUP' ? '#4338CA' : '#B91C1C',
                }}
                requestedAgo={new Date(appt.createdAt).toLocaleTimeString()}
                distance="N/A"
                status={appt.status}
              />
            ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center text-xs sm:text-sm text-gray-700">
          <span className="hidden sm:inline">
            Showing {startIndex + 1}-{Math.min(endIndex, totalAppointments)} of {totalAppointments}{' '}
            appointments
          </span>
          <div className="flex gap-0.5 sm:gap-1 justify-center items-center mt-2 sm:mt-0">
            <button
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 border rounded text-blue-900 disabled:opacity-50 text-xs sm:text-sm"
              disabled={page === 1}
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            >
              &lt;
            </button>
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-2 py-0.5 sm:px-3 sm:py-1 border rounded text-xs sm:text-sm ${
                  page === i + 1 ? 'bg-blue-900 text-white' : ''
                }`}
                onClick={() => setPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="px-1.5 py-0.5 sm:px-2 sm:py-1 border rounded text-blue-900 text-xs sm:text-sm"
              disabled={page === totalPages}
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
