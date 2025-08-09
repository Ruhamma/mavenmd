'use client';

import {
  IconPhoneCall,
  IconMapPin,
  IconChartBar,
} from '@tabler/icons-react';
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function DashboardCards() {
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
          callback: function (value: any) {
            return `${value / 1000}K`;
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
      {/* Next Appointment Card */}
      <div className="bg-white shadow-lg rounded-xl p-4 flex flex-col gap-4">
        <div>
          <p className="text-lg font-semibold">Next</p>
          <p className="text-lg font-semibold">Appointment</p>
        </div>
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="James Johnson"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <p className="font-bold">James Johnson</p>
            <div className="flex items-center text-sm text-gray-600">
              <IconMapPin className="w-4 h-4 mr-1" />
              <span>Manhattan, NY</span>
            </div>
          </div>
        </div>
        <div className="flex">
          <button className="bg-indigo-700 hover:bg-indigo-800 transition-all text-white rounded-full px-4 py-2 flex items-center ml-auto">
            <IconPhoneCall className="w-4 h-4 mr-2" />
            Call
          </button>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="bg-white shadow-lg rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <IconChartBar className="text-indigo-700 w-5 h-5 -rotate-270" />
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
