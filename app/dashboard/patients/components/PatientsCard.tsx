import React from 'react';
import { IconUsers } from '@tabler/icons-react';

type PatientsCardProps = {
  totalVisits: number | string;
  title: string;
};

const PatientsCard: React.FC<PatientsCardProps> = ({ totalVisits, title }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md py-6 px-4 w-full max-w-xs">
      <div className="flex items-center gap-3">
        <div className="bg-[#C6C8F7] p-3 rounded-full">
          <IconUsers size={24} className="text-white" />
        </div>
        <div className="flex flex-col">
          <h2 className="text-sm font-medium text-gray-600">{title}</h2>
          <p className="text-xl font-semibold text-gray-900">{totalVisits}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientsCard;
