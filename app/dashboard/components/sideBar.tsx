'use client';

import React, { useEffect, useState } from 'react';
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
import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const defaultSidebarItems = [
  { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: <IconLayoutDashboard size={20} /> },
  { id: 'appointments', label: 'Appointments', path: '/dashboard/appointments', icon: <IconCalendarEvent size={20} /> },
  { id: 'alerts', label: 'Alerts', path: '/dashboard/alerts', icon: <IconBell size={20} /> },
  { id: 'payments', label: 'Collections and Payments', path: '/dashboard/payments', icon: <IconDatabase size={20} /> },
  { id: 'patients', label: 'Patients', path: '/dashboard/patients', icon: <IconUser size={20} /> },
  { id: 'settings', label: 'Settings', path: '/dashboard/settings', icon: <IconSettings size={20} /> },
];

const bottomItems = [
  { id: 'help', label: 'Help', path: '/help', icon: <IconHelp size={20} /> },
  { id: 'logout', label: 'Log out', path: '/logout', icon: <IconLogout size={20} /> },
];

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [sidebarItems, setSidebarItems] = useState(defaultSidebarItems);

  const defaultLayout: Layout[] = defaultSidebarItems.map((item, index) => ({
    i: item.id,
    x: 0,
    y: index,
    w: 1,
    h: 1,
    static: false,
  }));

  const [layout, setLayout] = useState<Layout[]>(defaultLayout);

  // Save to local storage here
  useEffect(() => {
    const savedLayout = localStorage.getItem('sidebarLayout');
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
  }, []);

  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
    localStorage.setItem('sidebarLayout', JSON.stringify(newLayout));

    const ordered = [...newLayout]
      .sort((a, b) => a.y - b.y)
      .map((l) => sidebarItems.find((item) => item.id === l.i)!);
    setSidebarItems(ordered);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  return (
    <aside className="h-full w-[70px] md:w-[260px] bg-white flex flex-col justify-between py-4 px-2 md:px-4 transition-all overflow-y-auto">
      {/* Reorderable nav */}
      <GridLayout
        className="layout"
        layout={layout}
        cols={1}
        rowHeight={50}
        width={220}
        margin={[0, 10]}
        isResizable={false}
        onLayoutChange={handleLayoutChange}
        draggableHandle=".sidebar-drag-handle"
      >
        {sidebarItems.map(({ id, label, path, icon }) => {
          const isActive = pathname === path;
          return (
            <div key={id} className="flex items-center w-full h-full">
              <button
                onClick={() => handleNavigation(path)}
                className={`w-full flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-4 py-2 rounded-lg text-sm font-medium transition-all
                  ${isActive
                    ? 'bg-[#E7E7FF] text-primary-800 font-semibold'
                    : 'text-gray-700 hover:bg-gray-100'
                  }
                `}
                style={{ minWidth: 0 }}
              >
                <span className="sidebar-drag-handle flex items-center cursor-move">
                  {icon}
                </span>
                <span className="hidden md:inline truncate">{label}</span>
              </button>
            </div>
          );
        })}
      </GridLayout>

      {/* Bottom nav items (fixed, not draggable) */}
      <div className="space-y-2 mt-4">
        {bottomItems.map(({ id, label, path, icon }) => (
          <button
            key={id}
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
