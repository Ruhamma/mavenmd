'use client';

import { usePathname, useRouter } from 'next/navigation';
import { IconBell, IconSettings, IconUser } from '@tabler/icons-react';
import React from 'react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Specialties', path: '/doctors' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Symptoms', path: '/symptoms' },
  { label: 'Help', path: '/symptoms' },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex justify-between items-center p-4 px-12 bg-primary-800 shadow-xs lg:pb-10">
      <div className="flex items-center">
        <p className="text-2xl text-white">
          Maven<span className="font-bold">MD</span>
        </p>
      </div>

      <div className="flex bg-white rounded-full px-6 py-2 space-x-2">
        {navItems.map(({ label, path }, index) => {
          const isActive = pathname === path;
          return (
            <button
              key={index}
              onClick={() => handleNavigation(path)}
              className={`w-[100px] text-sm font-medium px-3 py-2 rounded-3xl cursor-pointer transition-all duration-200
                ${
                  isActive
                    ? 'bg-primary-800 text-white font-semibold'
                    : 'text-primary-800 hover:bg-primary-800 hover:text-white hover:font-semibold'
                }
              `}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center space-x-2">
        <button className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
          <IconUser className="text-white" size={24} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
          <IconSettings className="text-white" size={24} />
        </button>
        <button className="p-2 rounded-full hover:bg-gray-700 transition-colors duration-200 cursor-pointer">
          <IconBell className="text-white" size={24} />
        </button>
      </div>
    </div>
  );
};

export default Header;
