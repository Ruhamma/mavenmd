import React from 'react';
import SideBar from './components/sideBar';
import Header from './components/Header';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <div className="flex flex-1">
        <div className="w-[260px] bg-white border-r">
          <SideBar />
        </div>

        <main className="flex-1 overflow-y-auto p-10 bg-[#08087D]/5 rounded-tl-3xl">
          {children}
        </main>
      </div>
    </div>
  );
}
