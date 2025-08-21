'use client';

import { usePathname, useRouter } from 'next/navigation';
import { IconBell, IconMenu2, IconSettings, IconUser, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Specialties', path: '/doctors', disabled: true },
  { label: 'Doctors', path: '/search' },
  { label: 'Symptoms', path: '/symptoms', disabled: true },
  { label: 'Help', path: '/help', disabled: true },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (path: string, disabled?: boolean) => {
    if (disabled) return; // silently ignore clicks
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <header className="shadow-xs sticky top-0 z-50">
      <div className="flex justify-between items-center p-4 px-6 lg:px-12 bg-primary-800/90">
        <div className="flex items-center">
          <p className="text-2xl text-white">
            Maven<span className="font-bold">MD</span>
          </p>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex bg-white rounded-full px-6 py-2 space-x-2">
          {navItems.map(({ label, path, disabled }, index) => {
            const isActive = pathname === path;
            return (
              <button
                key={index}
                onClick={() => handleNavigation(path, disabled)}
                className={`w-[100px] text-sm font-medium px-3 py-2 rounded-3xl transition-all duration-200 ${isActive
                    ? 'bg-primary-800 text-white font-semibold'
                    : 'text-primary-800 hover:bg-primary-800 hover:text-white hover:font-semibold cursor-pointer'
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Desktop Right Icons */}
        <div className="hidden lg:flex items-center space-x-2">
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

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden p-2 cursor-pointer rounded-full hover:bg-primary-500 transition-colors duration-200"
          onClick={() => setMenuOpen(true)}
        >
          <IconMenu2 className="text-white" size={24} />
        </button>
      </div>

      {/* Mobile Right-Slide Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        {/* Menu Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <p className="text-xl text-primary-800 font-bold">
            Maven<span className="font-bold">MD</span>
          </p>
          <button onClick={() => setMenuOpen(false)}>
            <IconX className="text-primary-800" size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col p-4 space-y-2">
          {navItems.map(({ label, path, disabled }, index) => {
            const isActive = pathname === path;
            return (
              <button
                key={index}
                onClick={() => handleNavigation(path, disabled)}
                className={`w-full text-left text-base font-medium px-4 py-3 rounded-xl transition-all duration-200 ${isActive
                    ? 'bg-primary-800 text-white font-semibold'
                    : 'text-primary-800 hover:bg-primary-800 hover:text-white hover:font-semibold cursor-pointer'
                  }`}
              >
                {label}
              </button>
            );
          })}
        </div>

        {/* Icons inside menu */}
        <div className="mt-auto p-4 border-t border-gray-200 flex space-x-3">
          {[{ Icon: IconUser }, { Icon: IconSettings }, { Icon: IconBell }].map(({ Icon }, idx) => (
            <button
              key={idx}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <Icon className="text-primary-800" size={24} />
            </button>
          ))}
        </div>
      </div>

      {/* Background overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/70 bg-opacity-30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;
