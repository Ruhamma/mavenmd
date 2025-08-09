import React from 'react';
import { IconArrowUpRight, IconUsers } from '@tabler/icons-react';

type DashboardCardProps = {
  totalVisits: number;
  percentageChange: string;
  changeDirection: 'up' | 'down';
  changeText: string;
};

const DashboardCard: React.FC<DashboardCardProps> = ({
  totalVisits,
  percentageChange,
  changeDirection,
  changeText,
}) => {
  const isPositive = changeDirection === 'up';

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xs">
      {/* Top section: Icon + Number + Badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="bg-[#C6C8F7] p-3 rounded-full">
            <IconUsers size={24} className="text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">{totalVisits}</h2>
            <p className="text-gray-500 text-xs mt-0.5">Today Visits</p>
          </div>
        </div>
        <span className="bg-[#D7CAF6] text-[#4D237A] text-xs font-semibold px-2 py-0.5 rounded-full">
          {percentageChange}
        </span>
      </div>

      {/* Bottom section: change text */}
      <div className="flex items-center text-xs font-medium text-green-600 mt-6">
        {isPositive && <IconArrowUpRight size={14} />}
        <span className="ml-1">{changeText}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
