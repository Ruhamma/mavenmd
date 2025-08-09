'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  IconCalendarEvent,
  IconBell,
  IconDatabase,
  IconUser,
  IconSettings,
  IconHelp,
  IconLogout,
  IconLayoutDashboard,
} from '@tabler/icons-react';
import React from 'react';

const sidebarItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <IconLayoutDashboard size={20} /> },
  { label: 'Appointments', path: '/dashboard/appointments', icon: <IconCalendarEvent size={20} /> },
  { label: 'Alerts', path: '/dashboard/alerts', icon: <IconBell size={20} /> },
  {
    label: 'Collections and Payments',
    path: '/dashboard/payments',
    icon: <IconDatabase size={20} />,
  },
  { label: 'Patients', path: '/dashboard/patients', icon: <IconUser size={20} /> },
  { label: 'Settings', path: '/dashboard/settings', icon: <IconSettings size={20} /> },
];

const bottomItems = [
  { label: 'Help', path: '/help', icon: <IconHelp size={20} /> },
  { label: 'Log out', path: '/logout', icon: <IconLogout size={20} /> },
];

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <aside className="h-full w-[70px] md:w-[260px] bg-white flex flex-col justify-between py-4 px-2 md:px-4 transition-all">
      <div>
        <nav className="space-y-3">
          {sidebarItems.map(({ label, path, icon }, index) => {
            const isActive = pathname === path;
            return (
              <button
                key={index}
                onClick={() => handleNavigation(path)}
                className={`w-full flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${
                    isActive
                      ? 'bg-[#E7E7FF] text-[#08087D] font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
              >
                {icon}
                <span className="hidden md:inline">{label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom nav items */}
      <div className="space-y-2">
        {bottomItems.map(({ label, path, icon }, index) => (
          <button
            key={index}
            onClick={() => handleNavigation(path)}
            className="w-full flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100"
          >
            {icon}
            <span className="hidden md:inline">{label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
