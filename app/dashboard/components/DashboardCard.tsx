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
    <div className="bg-white rounded-3xl shadow-md p-6 w-full max-w-sm">
      {/* Top section: Icon + Number + Badge */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="bg-[#C6C8F7] p-4 rounded-full">
            <IconUsers size={32} className="text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-gray-900">{totalVisits}</h2>
            <p className="text-gray-500 text-sm mt-1">Today Visits</p>
          </div>
        </div>
        <span className="bg-[#D7CAF6] text-[#4D237A] text-sm font-semibold px-3 py-1 rounded-full">
          {percentageChange}
        </span>
      </div>

      {/* Bottom section: change text */}
      <div className="flex items-center text-sm font-medium text-green-600">
        {isPositive && <IconArrowUpRight size={16} />}
        <span className="ml-1">{changeText}</span>
      </div>
    </div>
  );
};

export default DashboardCard;
