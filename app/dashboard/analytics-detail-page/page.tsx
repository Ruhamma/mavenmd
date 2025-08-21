'use client';
import {
  IconCalendarEvent,
  IconChartBar,
  IconChristmasTree,
  IconCircleDashedX,
  IconClock,
  IconClockFilled,
  IconClockHour4,
  IconCrown,
  IconLeaf,
  IconQuote,
  IconUserFilled,
} from '@tabler/icons-react';
import React from 'react';
import Image from 'next/image';
import DashboardCard from '../components/DashboardCard';
import { Bar } from 'react-chartjs-2';
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

const page = () => {
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
        barThickness: 50,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: '#6b7280' } },
      y: { display: false },
    },
  };

  const factors = [
    {
      icon: <IconClockHour4 size={20} className="text-red-600" />,
      title: 'High Response Time',
      description: 'Average response time increased to 4.2 hours.',
      change: '-12%',
    },
    {
      icon: <IconCalendarEvent size={20} className="text-red-600" />,
      title: 'Weekend Availability',
      description: 'Limited weekend slots reduced booking opportunities',
      change: '-8%',
    },
    {
      icon: <IconLeaf size={20} className="text-red-600" />,
      title: 'Seasonal Demand',
      description: 'Lower During Holiday Season',
      change: '-3%',
    },
  ];

  const feedback = [
    {
      text: 'The doctor was very attentive and took the time to thoroughly answer all my questions. The appointment was smooth and efficient.',
      name: 'Esther Howard',
      avatar: '/images/doc1.jpg',
      stars: 5,
    },
    {
      text: 'The doctor was very attentive and took the time to thoroughly answer all my questions. The appointment was smooth and efficient.',
      name: 'Esther Howard',
      avatar: '/images/doc1.jpg',
      stars: 5,
    },
    {
      text: 'I truly appreciated how compassionate and professional the entire staff was. They made me feel comfortable throughout my entire visit.',
      name: 'Frank Esteban',
      avatar: '/images/doc1.jpg',
      stars: 4,
    },
    {
      text: 'I truly appreciated how compassionate and professional the entire staff was. They made me feel comfortable throughout my entire visit.',
      name: 'Frank Esteban',
      avatar: '/images/doc2.jpg',
      stars: 4,
    },
  ];

  const recommendations = [
    {
      icon: <IconLeaf size={32} className="text-primary-800" />,
      title: 'Reduce Response Time',
      description: 'Set up automated responses and hire additional staff',
    },
    {
      icon: <IconChristmasTree size={32} className="text-primary-800" />,
      title: 'Extend Weekend Hours',
      description: 'Add weekend availability to capture more bookings',
    },
    {
      icon: <IconCrown size={32} className="text-primary-800" />,
      title: 'Improve Communication',
      description: 'Send proactive updates to patients about delays',
    },
  ];

  return (
    <div className="p-4 space-y-6">
      {/* Top Stat Cards */}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardCard
          totalVisits={18.4}
          title="Total Patients"
          percentageChange="+2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          icon={<IconCircleDashedX size={24} className="text-red-900" />}
          appointment
        />
        <DashboardCard
          totalVisits={4.2}
          title="Total Appointments"
          percentageChange="-2.5%"
          changeDirection="up"
          changeText="8% vs yesterday"
          icon={<IconClockFilled size={24} className="text-blue-900" />}
          appointment
        />
        <DashboardCard
          totalVisits={4.1}
          percentageChange="+2.5%"
          changeDirection="down"
          changeText="8% vs yesterday"
          title="Patient Satisfaction"
          icon={<IconUserFilled size={24} className="text-red-900" />}
          appointment
        />
        <DashboardCard
          totalVisits={10}
          title="Total Appointments"
          percentageChange="-2.5%"
          changeDirection="up"
          changeText="8% vs yesterday"
          icon={<IconClock size={24} className="text-blue-900" />}
          appointment
        />
      </div>

      {/* Appointment Bookings & Contributing Factors */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-4 shadow-sm flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <IconChartBar size={24} className="text-primary-800" />
            <h2 className="font-semibold text-gray-800 text-lg sm:text-xl">Appointment Bookings</h2>
          </div>
          <div className="flex flex-wrap gap-2 py-4 items-end">
            <div className="text-3xl sm:text-4xl font-bold">5.42K</div>
            <div className="text-green-500 text-sm font-medium flex items-center gap-1">
              ▲ 22.41%
            </div>
          </div>
          <div className="flex-1 min-h-[150px] sm:min-h-[200px]">
            <Bar data={barData} options={barOptions} />
          </div>
        </div>

        <div className="bg-white rounded-xl p-4 shadow border border-gray-200">
          <h3 className="text-gray-800 font-semibold">Contributing Factors</h3>
          <p className="text-gray-500 text-sm mb-4">For the drop in March</p>
          <div className="space-y-3">
            {factors.map((factor, index) => (
              <div
                key={index}
                className="bg-red-50 rounded-lg p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start space-x-3">
                  <div className="bg-white rounded-full p-2 shadow-sm">{factor.icon}</div>
                  <div>
                    <h4 className="text-sm font-medium text-red-700">{factor.title}</h4>
                    <p className="text-xs text-gray-600">{factor.description}</p>
                  </div>
                </div>
                <span className="text-red-700 font-semibold text-sm">{factor.change}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Patient Feedback */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Recent Patient feedback</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {feedback.map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <IconQuote size={20} className="text-gray-400 mb-2" />
              <p className="text-sm text-gray-700 mb-4">{item.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <div className="flex space-x-1">
                    {Array.from({ length: item.stars }).map((_, i) => (
                      <span key={i} className="text-yellow-500">
                        ★
                      </span>
                    ))}
                  </div>
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <h2 className="text-lg font-semibold mb-4">Recommendations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm text-center"
            >
              <div className="flex justify-center mb-3">{rec.icon}</div>
              <h3 className="font-semibold text-primary-800">{rec.title}</h3>
              <p className="text-gray-600 text-sm">{rec.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
