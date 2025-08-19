import React from 'react';
import { IconTrendingDown, IconTrendingUp } from '@tabler/icons-react';

type DashboardCardProps = {
  totalVisits: number;
  title: string;
  percentageChange: string;
  changeDirection: string;
  changeText: string;
  icon: React.ReactNode;
  appointment?: boolean;
  customize?: boolean;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  totalVisits,
  title,
  percentageChange,
  changeDirection,
  changeText,
  icon,
  appointment,
  customize,
}) => {
  const isPositive = changeDirection === 'up';

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-3 sm:p-6 w-full relative">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <div className="flex items-center gap-2 sm:gap-4">
          <div
            className={`${
              !isPositive && appointment
                ? 'bg-red-500/20 text-red-500'
                : isPositive
                  ? 'bg-[#08078D]/30 text-[#08078D]'
                  : 'bg-teal-400/30 text-teal-400'
            } p-2 sm:p-4 rounded-full flex items-center justify-center`}
          >
            <div className="w-4 h-4 sm:w-6 sm:h-6">{icon}</div>
          </div>

          <div>
            <h2 className="text-lg sm:text-3xl font-semibold text-gray-900">{totalVisits}</h2>
            <p className="text-gray-500 text-[10px] sm:text-sm mt-0.5 sm:mt-1">{title}</p>
          </div>
        </div>
        {customize ? (
          <div className="drag-handle cursor-move text-sm text-gray-600 mb-2 absolute top-2 sm:top-4 right-2 sm:right-4">
            ⇅ Drag
          </div>
        ) : (
          isPositive && (
            <span
              className={`${
                isPositive && appointment
                  ? 'bg-red-500/20 text-red-500'
                  : isPositive
                    ? 'bg-[#08078D]/30 text-[#08078D]'
                    : 'bg-teal-400/10 text-teal-400'
              } font-medium px-1.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[9px] sm:text-xs absolute top-2 sm:top-4 right-2 sm:right-4`}
            >
              {percentageChange}
            </span>
          )
        )}
      </div>

      <div
        className={`${
          isPositive ? 'text-green-500' : 'text-red-500'
        } flex gap-1 sm:gap-2 items-center text-[10px] sm:text-sm mt-3 sm:mt-4`}
      >
        {isPositive ? <IconTrendingUp size={12} /> : <IconTrendingDown size={12} />}
        <span>{changeText}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
