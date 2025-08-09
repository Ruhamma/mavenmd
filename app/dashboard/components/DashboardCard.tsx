import React from 'react';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

type DashboardCardProps = {
  totalVisits: number;
  title: string;
  percentageChange: string;
  changeDirection: 'up' | 'down';
  changeText: string;
  icon: React.ReactNode;
  appointment?: boolean;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  totalVisits,
  title,
  percentageChange,
  changeDirection,
  changeText,
  icon,
  appointment,
}) => {
  const isPositive = changeDirection === 'up';

  return (
    <div className="bg-white rounded-3xl shadow-sm p-4 sm:p-6 w-full relative">
      {/* Top Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Icon */}
          <div
            className={`${
              !isPositive && appointment
                ? 'bg-red-500/20 text-red-500'
                : isPositive
                  ? 'bg-[#08078D]/30 text-[#08078D]'
                  : 'bg-teal-400/30 text-teal-400'
            } p-3 sm:p-4 rounded-full flex items-center justify-center`}
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6">{icon}</div>
          </div>

          {/* Title + Number */}
          <div>
            <h2 className="text-xl sm:text-3xl font-semibold text-gray-900">{totalVisits}</h2>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">{title}</p>
          </div>
        </div>

        {/* Percentage Badge */}
        {isPositive && (
          <span
            className={`${
              isPositive && appointment
                ? 'bg-red-500/20 text-red-500'
                : isPositive
                  ? 'bg-[#08078D]/30 text-[#08078D]'
                  : 'bg-teal-400/10 text-teal-400'
            } font-semibold px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs absolute top-3 sm:top-4 right-3 sm:right-4`}
          >
            {percentageChange}
          </span>
        )}
      </div>

      {/* Bottom Change Indicator */}
      <div
        className={`${isPositive ? 'text-green-500' : 'text-red-500'} flex gap-1 sm:gap-2 items-center text-xs sm:text-sm mt-4`}
      >
        {isPositive ? <IconTrendingUp size={14} /> : <IconTrendingDown size={14} />}
        <span>{changeText}</span>
      </div>
    </div>
  );
};

export default DashboardCard;