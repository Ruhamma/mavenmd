'use client'
import { IconSearch } from '@tabler/icons-react';
// import React, { useState } from 'react';
import AppointmentsCard from './components/AppointmentsCard';
import DashboardCard from './components/AnalyticsCard';

// const appointmentsData = [
//   {
//     name: 'Olivia Thompson',
//     genderAge: 'Female, 45 years',
//     symptoms: 'Dizziness, nausea',
//     imageUrl: '/images/olivia.jpg',
//     urgency: { label: 'URGENT', bgColor: '#B91C1C' },
//     requestedAgo: '4 min ago',
//     distance: '2.4 miles away',
//     status: 'Confirmed',
//   },
//   {
//     name: 'David Kim',
//     genderAge: 'Male, 27 years',
//     symptoms: 'Sudden rash, itching',
//     imageUrl: '/images/david.jpg',
//     urgency: { label: 'FOLLOW UP', bgColor: '#4338CA' },
//     requestedAgo: '9 min ago',
//     distance: '1.6 miles away',
//     status: 'Confirmed',
//   },
//   {
//     name: 'Sarah Johnson',
//     genderAge: 'Female, 34 years',
//     symptoms: 'High fever, chest pain',
//     imageUrl: '/images/sarah.jpg',
//     urgency: { label: 'URGENT', bgColor: '#B91C1C' },
//     requestedAgo: '12 min ago',
//     distance: '3.1 miles away',
//     status: 'Confirmed',
//   },
//   {
//     name: 'Jessica Martinez',
//     genderAge: 'Female, 38 years',
//     symptoms: 'Shortness of breath, chest tightness',
//     imageUrl: '/images/jessica.jpg',
//     urgency: { label: 'URGENT', bgColor: '#059669' },
//     requestedAgo: '15 min ago',
//     distance: '2.3 miles away',
//     status: 'Confirmed',
//   },
//   {
//     name: 'James Anderson',
//     genderAge: 'Male, 50 years',
//     symptoms: 'Back pain',
//     imageUrl: '/images/james.jpg',
//     urgency: { label: 'NORMAL', bgColor: '#2563eb' },
//     requestedAgo: '20 min ago',
//     distance: '4.0 miles away',
//     status: 'Confirmed',
//   },
// ];
export default function DashboardPage() {
    return (

        <>
            {/* Top texts */}
            <div className="p-2 flex flex-col gap-1">
                <h1 className="text-3xl font-bold text-gray-900 pb-2">Appointment</h1>
                <p className="text-gray-600">Manage house call appointments and booking</p>
            </div>

            {/* Search bar */}
            <div className="px-2 mb-4 w-full pt-4">
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 rounded-lg shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <IconSearch
                        size={20}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                </div>
            </div>
            <div className="p-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <DashboardCard
                    totalVisits={10}
                    percentageChange="+2.5%"
                    changeDirection="up"
                    changeText="8% vs yesterday"
                />
                <DashboardCard
                    totalVisits={10}
                    percentageChange="+2.5%"
                    changeDirection="up"
                    changeText="8% vs yesterday"
                />
                <DashboardCard
                    totalVisits={10}
                    percentageChange="+2.5%"
                    changeDirection="up"
                    changeText="8% vs yesterday"
                />
                <DashboardCard
                    totalVisits={10}
                    percentageChange="+2.5%"
                    changeDirection="up"
                    changeText="8% vs yesterday"
                />
            </div>

            <div className="p-6 m-2 bg-white rounded-xs">
                <div className='flex justify-between'>
                    <h1 className="text-2xl font-semibold mb-6">Recent Appointments</h1>

                    {/* Filters */}
                    <div className="flex justify-end gap-4 mb-6">
                        <select className="border border-gray-400 rounded px-4 py-1">
                            <option>All status</option>
                        </select>
                        <select className="border border-gray-400 rounded px-4 py-1">
                            <option>Today</option>
                        </select>
                    </div>
                </div>

                {/* Cards */}
                <div className="space-y-4">
                    <AppointmentsCard
                        name="Olivia Thompson"
                        genderAge="Female, 45 years"
                        symptoms="Dizziness, nausea"
                        imageUrl="/images/olivia.jpg"
                        urgency={{
                            label: "URGENT",
                            bgColor: "#B91C1C", // red-700
                        }}
                        requestedAgo="4 min ago"
                        distance="2.4 miles away"
                        status="Confirmed"
                    />

                    <AppointmentsCard
                        name="David Kim"
                        genderAge="Male, 27 years"
                        symptoms="Sudden rash, itching"
                        imageUrl="/images/david.jpg"
                        urgency={{
                            label: "FOLLOW UP",
                            bgColor: "#4338CA", // indigo-700
                        }}
                        requestedAgo="9 min ago"
                        distance="1.6 miles away"
                        status="Confirmed"
                    />

                    <AppointmentsCard
                        name="Sarah Johnson"
                        genderAge="Female, 34 years"
                        symptoms="High fever, chest pain"
                        imageUrl="/images/sarah.jpg"
                        urgency={{
                            label: "URGENT",
                            bgColor: "#B91C1C", // red-700
                        }}
                        requestedAgo="12 min ago"
                        distance="3.1 miles away"
                        status="Confirmed"
                    />

                    <AppointmentsCard
                        name="Jessica Martinez"
                        genderAge="Female, 38 years"
                        symptoms="Shortness of breath, chest tightness"
                        imageUrl="/images/jessica.jpg"
                        urgency={{
                            label: "URGENT",
                            bgColor: "#059669", // green-600
                        }}
                        requestedAgo="15 min ago"
                        distance="2.3 miles away"
                        status="Confirmed"
                    />
                </div>

                {/* Pagination */}
                <div className="mt-6 flex justify-between items-center text-sm text-gray-700">
                    <span>Showing 1-4 of 24 appointments</span>
                    <div className="flex gap-1">
                        <button className="px-2 py-1 border rounded text-blue-900 disabled:opacity-50">
                            &lt;
                        </button>
                        <button className="px-3 py-1 border rounded bg-blue-900 text-white">1</button>
                        <button className="px-3 py-1 border rounded">2</button>
                        <button className="px-3 py-1 border rounded">...</button>
                        <button className="px-3 py-1 border rounded">9</button>
                        <button className="px-3 py-1 border rounded">10</button>
                        <button className="px-2 py-1 border rounded text-blue-900">&gt;</button>
                    </div>
                </div>
            </div>

        </>
    );
}
