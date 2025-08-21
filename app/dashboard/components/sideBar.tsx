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
  IconTools,
} from '@tabler/icons-react';
import React, { useState } from 'react';
import GridLayout, { Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const sidebarItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <IconLayoutDashboard size={20} /> },
  { label: 'Appointments', path: '/dashboard/appointments', icon: <IconCalendarEvent size={20} /> },
  { label: 'Alerts', path: '/dashboard/alerts', icon: <IconBell size={20} /> },
  {
    label: 'Collections & Payments',
    path: '/dashboard/payments',
    icon: <IconDatabase size={20} />,
  },
  { label: 'Patients', path: '/dashboard/patients', icon: <IconUser size={20} /> },
  { label: 'Customize', path: '/dashboard/customize', icon: <IconTools size={20} /> },
  { label: 'Settings', path: '/dashboard/settings', icon: <IconSettings size={20} /> },
];

const initialSidebarItems = sidebarItems.map(item => ({
  ...item,
  i: item.label.replace(/\s+/g, '-').toLowerCase(),
}));

const bottomItems = [
  { label: 'Help', path: '/help', icon: <IconHelp size={20} /> },
  { label: 'Log out', path: '/logout', icon: <IconLogout size={20} /> },
];

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [items, setItems] = useState(initialSidebarItems);

  const handleNavigation = (path: string) => {
    router.push(path);
  };

  // Layout config for React Grid Layout
  const layout: Layout[] = items.map((item, index) => ({
    i: item.i,
    x: 0,
    y: index,
    w: 1,
    h: 1,
    static: false,
  }));

  const handleLayoutChange = (newLayout: Layout[]) => {
    const reorderedItems = newLayout
      .sort((a, b) => a.y - b.y)
      .map(layoutItem => items.find(item => item.i === layoutItem.i)!);
    setItems(reorderedItems);
  };

  return (
    <aside className="h-full w-[70px] md:w-[270px] bg-white flex flex-col justify-between py-4 px-2 md:px-3 transition-all">
      <div>
        <GridLayout
          className="layout"
          layout={layout}
          cols={1}
          rowHeight={40}
          width={220} // approximate width of sidebar
          isDraggable={true}
          isResizable={false}
          onLayoutChange={handleLayoutChange}
          compactType="vertical"
          draggableHandle=".sidebar-drag-handle"
        >
          {items.map(({ i, label, path, icon }) => {
            const isActive = pathname === path;
            return (
              <div key={i} className="draggable-item">
                <button
                  onClick={() => handleNavigation(path)}
                  className={`w-full flex items-center justify-center md:justify-start gap-0 md:gap-3 px-2 md:px-3 py-1.5 rounded-lg text-sm font-medium transition-all
                    ${
                      isActive
                        ? 'bg-[#E7E7FF] text-primary-800 font-semibold'
                        : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <span className="sidebar-drag-handle flex items-center">{icon}</span>
                  <span className="hidden md:inline whitespace-nowrap">{label}</span>
                </button>
              </div>
            );
          })}
        </GridLayout>
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
