/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { IconPhoneCall, IconMapPin, IconChartBar } from '@tabler/icons-react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useGetAppointmentsQuery } from '@/services/appointments/api'; // ✅ Add your query hook
import { format } from 'date-fns';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardCards() {
  //  Fetch all appointments, we should change this later
  const { data, isLoading } = useGetAppointmentsQuery();

  //  Extract and sort next appointment
  const nextAppointment = data?.result?.appointments
    ?.filter((a: any) => a.status === 'PENDING' && new Date(a.appointmentDate) > new Date())
    ?.sort(
      (a: any, b: any) =>
        new Date(a.appointmentDate).getTime() - new Date(b.appointmentDate).getTime(),
    )[0];

  const barData = {
    labels: ['Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan'],
    datasets: [
      {
        label: 'Hours',
        data: [22000, 40000, 18000, 38000, 11000, 26000],
        backgroundColor: '#3B21F5',
        borderRadius: 4,
        barThickness: 12,
      },
      {
        label: 'Goal',
        data: [26000, 46000, 27000, 46000, 19000, 34000],
        backgroundColor: '#DAD9FF',
        borderRadius: 4,
        barThickness: 12,
      },
    ],
  };

  const barOptions = {
    indexAxis: 'y' as const,
    responsive: true,
    plugins: {
      legend: { display: false },
      title: { display: false },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          callback: function (value: string | number) {
            if (typeof value === 'number') {
              return `${value / 1000}K`;
            }
            return value;
          },
        },
      },
      y: {
        grid: {
          color: '#E5E5E5',
        },
      },
    },
  };

  return (
    <div className="flex flex-col gap-6 p-4 max-w-md mx-auto">
      {/* ✅ Next Appointment Card */}
      <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4">
        <div>
          <p className="text-lg font-semibold">Next Appointment</p>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : nextAppointment ? (
          <>
            <div className="flex items-center gap-3">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt={nextAppointment.Patient?.user?.fullName}
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-bold">{nextAppointment.Patient?.user?.fullName}</p>
                <div className="text-sm text-gray-600">
                  <p>{format(new Date(nextAppointment.appointmentDate), 'PPP p')}</p>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <IconMapPin className="w-4 h-4 mr-1" />
                  <span>{nextAppointment.Patient?.Address || 'No address provided'}</span>
                </div>
              </div>
            </div>
            <div className="flex">
              <button className="bg-primary-700 hover:bg-primary-800 transition-all text-white rounded-full px-4 py-2 flex items-center ml-auto">
                <IconPhoneCall className="w-4 h-4 mr-2" />
                Call
              </button>
            </div>
          </>
        ) : (
          <p>No upcoming appointments</p>
        )}
      </div>

      {/* ✅ Bar Chart Card */}
      <div className="bg-white shadow-lg rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <IconChartBar className="text-primary-700 w-5 h-5 -rotate-270" />
          <p className="text-lg font-semibold">Bar chart</p>
        </div>

        <div className="flex items-end mb-3">
          <span className="text-3xl font-bold mr-2">22.6</span>
          <span className="text-sm text-gray-600 mb-[2px]">Hours spent</span>
        </div>

        <Bar options={barOptions} data={barData} />
      </div>
    </div>
  );
}
