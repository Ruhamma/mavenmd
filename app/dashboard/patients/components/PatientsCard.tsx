import React from 'react';

type PatientsCardProps = {
  totalVisits: number | string;
  title: string;
  icon: React.ReactNode;  
};

const PatientsCard: React.FC<PatientsCardProps> = ({ totalVisits, title, icon }) => {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm p-3 sm:p-6 w-full max-w-xs">
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Icon */}
        <div className="bg-[#C6C8F7] p-2 sm:p-3 rounded-full flex items-center justify-center">
          <div className="w-4 h-4 sm:w-6 sm:h-6">{icon}</div>
        </div>

        {/* Title + Number */}
        <div className="flex flex-col">
          <h2 className="text-xs sm:text-sm font-medium text-gray-600">{title}</h2>
          <p className="text-lg sm:text-xl font-semibold text-gray-900">{totalVisits}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientsCard;
