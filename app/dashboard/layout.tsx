import React from 'react';
import Header from './components/Header';
import SideBar from './components/sideBar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Top header - full width */}
      <Header />

      {/* Body section: sidebar + page content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - fixed position */}
        <div className="lg:w-[260px] h-full sticky top-0 border-r bg-white">
          <SideBar />
        </div>

        {/* Page content - scrollable */}
        <main className="flex-1 overflow-y-auto p-6 bg-primary-800/5 rounded-tl-3xl">
          {children}
        </main>
      </div>
    </div>
  );
}
