'use client';

import { IconBell, IconSettings, IconUser } from '@tabler/icons-react';

const Dashboard = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white ">
      <div className="text-xl font-medium text-[#08087D]">
        Maven<span className="font-bold">MD</span>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <IconUser size={22} className="text-[#08087D]" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <IconBell size={22} className="text-[#08087D]" />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
          <IconSettings size={22} className="text-[#08087D]" />
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
