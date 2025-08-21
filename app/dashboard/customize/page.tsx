'use client';
import React, { useState, useEffect } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import DashboardCard from '../components/DashboardCard';
import {
  IconCalendar,
  IconCash,
  IconClock,
  IconMessage,
  IconPill,
  IconRepeat,
  IconStar,
  IconTestPipe,
  IconUsers,
  IconX,
  IconInfoCircle,
  IconChartBar,
  IconChartLine,
} from '@tabler/icons-react';
import ChartPreviewCard from '../components/ChartPreviewCard';

const availableCards = [
  {
    key: 'patients',
    title: 'Total Patients',
    icon: <IconUsers size={20} className="text-white" />,
    color: 'bg-blue-500',
    data: {
      totalVisits: 120,
      percentageChange: '+5%',
      changeDirection: 'up',
      changeText: 'vs yesterday',
    },
  },
  {
    key: 'appointments',
    title: 'Total Appointments',
    icon: <IconCalendar size={20} className="text-white" />,
    color: 'bg-purple-500',
    data: {
      totalVisits: 42,
      percentageChange: '-3%',
      changeDirection: 'down',
      changeText: 'vs yesterday',
    },
  },
  {
    key: 'earnings',
    title: 'Total Earnings',
    icon: <IconCash size={20} className="text-white" />,
    color: 'bg-green-500',
    data: {
      totalVisits: 5400,
      percentageChange: '+10%',
      changeDirection: 'up',
      changeText: 'vs yesterday',
    },
  },
  {
    key: 'messages',
    title: 'New Messages',
    icon: <IconMessage size={20} className="text-white" />,
    color: 'bg-amber-500',
    data: {
      totalVisits: 14,
      percentageChange: '+20%',
      changeDirection: 'up',
      changeText: 'vs yesterday',
    },
  },
  {
    key: 'reviews',
    title: 'Patient Reviews',
    icon: <IconStar size={20} className="text-white" />,
    color: 'bg-yellow-500',
    data: {
      totalVisits: 87,
      percentageChange: '+8%',
      changeDirection: 'up',
      changeText: 'this week',
    },
  },
  {
    key: 'availability',
    title: 'Open Slots',
    icon: <IconClock size={20} className="text-white" />,
    color: 'bg-indigo-500',
    data: {
      totalVisits: 12,
      percentageChange: '-2%',
      changeDirection: 'down',
      changeText: 'vs last week',
    },
  },
  {
    key: 'cancellations',
    title: 'Cancellations',
    icon: <IconX size={20} className="text-white" />,
    color: 'bg-red-500',
    data: {
      totalVisits: 5,
      percentageChange: '-1%',
      changeDirection: 'down',
      changeText: 'vs yesterday',
    },
  },
  {
    key: 'prescriptions',
    title: 'Prescriptions Issued',
    icon: <IconPill size={20} className="text-white" />,
    color: 'bg-teal-500',
    data: {
      totalVisits: 33,
      percentageChange: '+12%',
      changeDirection: 'up',
      changeText: 'this week',
    },
  },
  {
    key: 'tests',
    title: 'Lab Tests Ordered',
    icon: <IconTestPipe size={20} className="text-white" />,
    color: 'bg-cyan-500',
    data: {
      totalVisits: 18,
      percentageChange: '+3%',
      changeDirection: 'up',
      changeText: 'vs yesterday',
    },
  },
  {
    key: 'followups',
    title: 'Follow-Up Visits',
    icon: <IconRepeat size={20} className="text-white" />,
    color: 'bg-pink-500',
    data: {
      totalVisits: 9,
      percentageChange: '+4%',
      changeDirection: 'up',
      changeText: 'vs yesterday',
    },
  },
];
const availableCharts = [
  {
    key: 'appointments',
    title: 'Appointment Bookings',
    type: 'bar',
    icon: IconChartBar,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [4, 5, 13.5, 5.5, 2, 3.8],
  },
  {
    key: 'earnings',
    title: 'Earnings',
    type: 'line',
    icon: IconChartLine,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    data: [4, 5, 6, 8, 10, 12, 11],
  },
  {
    key: 'patients',
    title: 'Patients by Gender',
    type: 'donut',
    icon: IconChartBar,
    labels: ['Male', 'Female', 'Other'],
    data: [60, 35, 5],
  },
  {
    key: 'specialties',
    title: 'Doctor Specialties Spread',
    type: 'radar',
    icon: IconChartLine,
    labels: ['Cardio', 'Ortho', 'Neuro', 'Derm', 'Pediatrics'],
    data: [80, 55, 70, 40, 65],
  },
  {
    key: 'cancellations',
    title: 'Cancellations',
    type: 'bar',
    icon: IconChartBar,
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    data: [2, 3, 1, 4, 2, 3],
  },
];

export default function CustomizeDashboardPage() {
  const [layout, setLayout] = useState<Layout[]>([]);
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [selectedCharts, setSelectedCharts] = useState<string[]>([]);

  const toggleChart = (key: string) => {
    let updated: string[];
    if (selectedCharts.includes(key)) {
      updated = selectedCharts.filter(c => c !== key);
    } else {
      updated = [...selectedCharts, key];
    }
    setSelectedCharts(updated);
    localStorage.setItem('selectedCharts', JSON.stringify(updated));
  };

  useEffect(() => {
    const savedLayout = localStorage.getItem('dashboardLayout');
    const savedCards = localStorage.getItem('selectedCards');
    const savedCharts = localStorage.getItem('selectedCharts');

    if (savedLayout && savedCards && savedCharts) {
      setLayout(JSON.parse(savedLayout));
      setSelectedCards(JSON.parse(savedCards));
      setSelectedCharts(JSON.parse(savedCharts));
    } else {
      // default = first 4 cards only
      const defaultLayout: Layout[] = availableCards.slice(0, 4).map((c, i) => ({
        i: `card-${c.key}`,
        x: i % 4,
        y: Math.floor(i / 4),
        w: 1,
        h: 1,
      }));
      setLayout(defaultLayout);
      setSelectedCards(availableCards.slice(0, 4).map(c => c.key));
      setSelectedCharts([]);
    }
  }, []);

  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
    localStorage.setItem('dashboardLayout', JSON.stringify(newLayout));
  };

  const toggleCard = (key: string) => {
    let updated: string[];
    if (selectedCards.includes(key)) {
      updated = selectedCards.filter(c => c !== key);
    } else {
      if (selectedCards.length >= 5) return;
      updated = [...selectedCards, key];
    }
    setSelectedCards(updated);
    localStorage.setItem('selectedCards', JSON.stringify(updated));
  };

  return (
    <div>
      <div className="space-y-8 p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Dashboard Customization</h1>
          <p className="text-gray-600 flex items-center gap-1">
            <IconInfoCircle size={18} />
            Select up to 4 cards to display on your dashboard. Drag to rearrange them.
          </p>

          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">
              {selectedCards.length} of 4 cards selected
            </span>
            {selectedCards.length >= 5 && (
              <span className="text-sm font-medium text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
                Maximum selection reached
              </span>
            )}
          </div>
        </div>
        <Accordion type="single" collapsible defaultValue="cards">
          <AccordionItem value="cards">
            <AccordionTrigger className="text-lg font-semibold text-gray-800">
              Select Dashboard Cards
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                {availableCards.map(card => {
                  const isSelected = selectedCards.includes(card.key);
                  const isDisabled = !isSelected && selectedCards.length >= 5;

                  return (
                    <div
                      key={card.key}
                      className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-blue-500 bg-blue-50 shadow-md'
                          : isDisabled
                            ? 'border-gray-200 bg-gray-100 opacity-70 cursor-not-allowed'
                            : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
                      }`}
                      onClick={() => !isDisabled && toggleCard(card.key)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center ${card.color}`}
                        >
                          {card.icon}
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
                          }`}
                        >
                          {isSelected && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-800 text-sm">{card.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {card.data.totalVisits} {card.title.split(' ').slice(1).join(' ')}
                      </p>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="charts">
            <AccordionTrigger className="text-lg font-semibold text-gray-800">
              Select Charts
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-4">
                {availableCharts.map(chart => {
                  const isSelected = selectedCharts.includes(chart.key);

                  return (
                    <div
                      key={chart.key}
                      className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'border-green-500 bg-green-50 shadow-md'
                          : 'border-gray-200 bg-white hover:border-green-300 hover:shadow-sm'
                      }`}
                      onClick={() => toggleChart(chart.key)}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-green-500">
                          <chart.icon size={20} className="text-white" />
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isSelected
                              ? 'bg-green-500 border-green-500'
                              : 'bg-white border-gray-300'
                          }`}
                        >
                          {isSelected && (
                            <svg
                              className="w-3 h-3 text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      <h3 className="font-medium text-gray-800 text-sm">{chart.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">
                        {chart.type.charAt(0).toUpperCase() + chart.type.slice(1)} Chart
                      </p>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Select Dashboard Cards</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {availableCards.map(card => {
              const isSelected = selectedCards.includes(card.key);
              const isDisabled = !isSelected && selectedCards.length >= 5;

              return (
                <div
                  key={card.key}
                  className={`relative rounded-lg border-2 p-4 cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : isDisabled
                        ? 'border-gray-200 bg-gray-100 opacity-70 cursor-not-allowed'
                        : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-sm'
                  }`}
                  onClick={() => !isDisabled && toggleCard(card.key)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${card.color}`}
                    >
                      {card.icon}
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-300'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="font-medium text-gray-800 text-sm">{card.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {card.data.totalVisits} {card.title.split(' ').slice(1).join(' ')}
                  </p>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
      {/* Dashboard Preview */}
      <div className="bg-white rounded-xl shadow-sm min-w-fit mx-auto py-10">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Dashboard Preview</h2>
        <p className="text-gray-600 text-sm mb-4 text-center">
          Drag cards to rearrange your dashboard layout
        </p>

        <div className="space-y-6">
          {/* Greeting */}
          <div className="bg-primary-800 text-white p-6 sm:p-8 md:p-10 rounded-xl shadow-md mx-4">
            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">Welcome Doctor Sarah!</p>
            <p className="text-base sm:text-lg md:text-xl mt-2 leading-snug">
              Take care and stay sharp. <br className="hidden sm:block" /> Your work matters!
            </p>
          </div>

          {/* Cards */}
          {selectedCards.length === 0 ? (
            <div className="text-center py-12 px-10 mx-auto w-fit bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
              <div className="text-gray-400 mb-2">No cards selected</div>
              <div className="text-sm text-gray-500">
                Select up to 4 cards above to customize your dashboard
              </div>
            </div>
          ) : (
            <GridLayout
              className="layout"
              layout={layout}
              cols={4}
              maxRows={1}
              rowHeight={160}
              width={1200}
              onLayoutChange={handleLayoutChange}
              draggableHandle=".drag-handle"
              margin={[12, 12]}
              containerPadding={[16, 16]}
              isDraggable
              isResizable
            >
              {selectedCards.map(key => {
                const card = availableCards.find(c => c.key === key);
                if (!card) return null;
                return (
                  <div
                    key={card.key}
                    className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                  >
                    <DashboardCard {...card.data} title={card.title} icon={card.icon} customize />
                  </div>
                );
              })}
            </GridLayout>
          )}

          {selectedCharts.length > 0 && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mx-4">
              {selectedCharts.map(key => {
                const chart = availableCharts.find(c => c.key === key);
                if (!chart) return null;
                const Icon = chart.icon;
                return (
                  <ChartPreviewCard
                    key={chart.key}
                    title={chart.title}
                    type={chart.type}
                    labels={chart.labels}
                    data={chart.data}
                    icon={<Icon size={20} className="text-primary-800" />}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
