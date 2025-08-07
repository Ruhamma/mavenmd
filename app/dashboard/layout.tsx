import React from 'react';
import SideBar from './components/sideBar';
import Header from './components/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top header - full width */}
      <Header />

      {/* Body section: sidebar + page content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - fixed position */}
        <div className="w-[260px] h-full sticky top-0 border-r bg-white">
          <SideBar />
        </div>

        {/* Page content - scrollable */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}
