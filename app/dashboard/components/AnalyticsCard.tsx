import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import { IconChartBar, IconChartLine } from '@tabler/icons-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

export default function AnalyticsCard() {
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        data: [4, 5, 13.5, 5.5, 2, 3.8],
        backgroundColor: (context: import('chart.js').ScriptableContext<'bar'>) => {
          const index = context.dataIndex;
          const chart = context.chart;
          const ctx = chart.ctx;
          const chartArea = chart.chartArea;

          if (!chartArea) return '#e5e7eb';

          if (index === 2) {
            const gradient = ctx.createLinearGradient(50, chartArea.top, 10, chartArea.bottom);
            gradient.addColorStop(0, '#08087D');
            gradient.addColorStop(1, '#ffffff');
            return gradient;
          }

          return '#e5e7eb';
        },
        borderRadius: 20,
        barPercentage: 0.5,
        barThickness: 50, // smaller for mobile
        minBarLength: 20,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#6b7280', font: { size: 10 } } },
      y: { display: false },
    },
  };

  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [4, 5, 6, 8, 10, 12, 11, 10, 9, 9.5, 10, 10.5],
        borderColor: 'red',
        backgroundColor: 'red',
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false }, tooltip: { enabled: true } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#6b7280', font: { size: 10 } } },
      y: { display: false },
    },
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <IconChartBar size={20} className="text-primary-800" />
          <h2 className="font-semibold text-gray-800 text-lg sm:text-xl">Appointment Bookings</h2>
        </div>
        <div className="flex gap-2 py-4 items-end">
          <div className="text-2xl sm:text-4xl font-bold">5.42K</div>
          <div className="text-green-500 text-xs sm:text-sm font-medium flex items-center gap-1">
            ▲ 22.41%
          </div>
        </div>
        <div className="flex-1 min-h-[200px]">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <IconChartLine size={20} className="text-primary-800" />
          <h2 className="font-semibold text-gray-800 text-lg sm:text-xl">Earning</h2>
        </div>
        <div className="flex gap-2 py-4 items-end">
          <div className="text-2xl sm:text-4xl font-bold">$ 12k</div>
          <div className="text-green-500 text-xs sm:text-sm font-medium flex items-center gap-1">
            ▲ 22.41%
          </div>
        </div>
        <div className="flex-1 min-h-[200px]">
          <Line data={lineData} options={lineOptions} />
        </div>
      </div>
    </div>
  );
}
