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

type HeaderProps = {
  reverseColors?: boolean;
};

const Header = ({ reverseColors = false }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const mainBg = reverseColors ? 'bg-[#08087D]' : 'bg-white';
  const mainText = reverseColors ? 'text-white' : 'text-[#08087D]';
  const navBg = reverseColors ? 'bg-white' : 'bg-[#08087D]';
  const navText = reverseColors ? 'text-[#08087D]' : 'text-white';
  const activeBg = reverseColors ? 'bg-[#08087D]' : 'bg-white';
  const activeText = reverseColors ? 'text-white' : 'text-[#08087D]';

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <div className={`flex justify-between items-center p-4 px-12 ${mainBg} shadow-xs`}>
      <div className="flex items-center">
        <p className={`text-2xl ${mainText}`}>
          Maven<span className="font-bold">MD</span>
        </p>
      </div>

      <div className={`flex ${navBg} rounded-full px-6 py-2 space-x-2`}>
        {navItems.map(({ label, path }, index) => {
          const isActive = pathname === path;
          return (
            <button
              key={index}
              onClick={() => handleNavigation(path)}
              className={`w-[100px] text-sm font-medium px-3 py-2 rounded-3xl cursor-pointer transition-all duration-200
                ${
                  isActive
                    ? `${activeBg} ${activeText} font-semibold`
                    : `${navText} hover:${activeBg} hover:${activeText} hover:font-semibold`
                }
              `}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center space-x-2">
        {[IconUser, IconSettings, IconBell].map((Icon, i) => (
          <button
            key={i}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            <Icon className={mainText} size={24} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Header;
