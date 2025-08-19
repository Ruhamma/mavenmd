'use client';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Doughnut, Radar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
);

interface ChartPreviewCardProps {
  title: string;
  type: string;
  labels: string[];
  data: number[];
  icon?: React.ReactNode;
}

export default function ChartPreviewCard({
  title,
  type,
  labels,
  data,
  icon,
}: ChartPreviewCardProps) {
  const chartData = {
    labels,
    datasets: [
      {
        data,
        backgroundColor:
          type === 'donut' ? ['#2563eb', '#16a34a', '#f59e0b', '#ef4444', '#8b5cf6'] : '#2563eb',
        borderColor: type === 'line' ? '#ef4444' : undefined,
        fill: type === 'line' ? false : undefined,
        tension: type === 'line' ? 0.4 : undefined,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: type === 'donut' || type === 'radar' },
      tooltip: { enabled: true },
    },
    scales:
      type === 'bar' || type === 'line'
        ? {
            x: { grid: { display: false }, ticks: { color: '#6b7280', font: { size: 10 } } },
            y: { grid: { display: false }, ticks: { color: '#6b7280', font: { size: 10 } } },
          }
        : {},
  };

  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <Bar data={chartData} options={options} />;
      case 'line':
        return <Line data={chartData} options={options} />;
      case 'donut':
        return <Doughnut data={chartData} options={options} />;
      case 'radar':
        return <Radar data={chartData} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col relative">
      <div className="drag-handle cursor-move text-sm text-gray-600 mb-2 absolute top-2 sm:top-4 right-2 sm:right-4">
        ⇅ Drag
      </div>
      <div className="flex items-center gap-2 mb-2">
        {icon}
        <h2 className="font-semibold text-gray-800 text-lg sm:text-xl">{title}</h2>
      </div>
      <div className="flex gap-2 py-4 items-end">
        <div className="text-2xl sm:text-3xl font-bold">{Math.max(...data)}</div>
        <div className="text-green-500 text-xs sm:text-sm font-medium flex items-center gap-1">
          ▲ Demo %
        </div>
      </div>
      <div className="flex-1 min-h-[220px]">{renderChart()}</div>
    </div>
  );
}
