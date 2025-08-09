import React from 'react';

type PatientsCardProps = {
  totalVisits: number | string;
  title: string;
  icon: React.ReactNode;  
};

const PatientsCard: React.FC<PatientsCardProps> = ({ totalVisits, title, icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md py-6 px-4 w-full max-w-xs">
      <div className="flex items-center gap-3">
        <div className="bg-[#C6C8F7] p-3 rounded-full">
          {/* Render the passed icon here */}
          {icon}
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
