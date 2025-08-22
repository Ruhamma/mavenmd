'use client';

import React, { useMemo, useState } from 'react';
import { IconCircleCheckFilled, IconFilter, IconSearch, IconUsers } from '@tabler/icons-react';
import PatientsCard from './components/PatientsCard';
import PatientsRequests from './components/PatientsRequests';
import AppointmentChart from './components/AppointmentChart';
import { useGetAppointmentsQuery } from '@/services/appointments/api';

const PendingAppointmentsPage = () => {
    const { data, isLoading, isError } = useGetAppointmentsQuery();
    const appointments = data?.result?.appointments || [];


    // Search state
    const [search, setSearch] = useState('');

    // Filter pending appointments by search (patient name)
    const pendingAppointments = useMemo(
        () =>
            appointments.filter(
                a =>
                    a.status === 'PENDING' &&
                    (a.Patient?.user?.fullName ?? 'Unknown')
                        .toLowerCase()
                        .includes(search.toLowerCase())
            ),
        [appointments, search]
    );

    // Pagination
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(pendingAppointments.length / itemsPerPage);

    const paginatedAppointments = pendingAppointments.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const goToPage = (page: number) => {
        if (page < 1 || page > totalPages) return;
        setCurrentPage(page);
    };

    return (
        <>
            {/* Top Cards */}
            <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">
                <PatientsCard
                    title="Total Patients"
                    totalVisits={appointments.length}
                    icon={<IconUsers size={24} className="text-white" />}
                />
                <PatientsCard
                    title="Pending Requests"
                    totalVisits={pendingAppointments.length}
                    icon={<IconCircleCheckFilled size={24} className="text-white" />}
                    iconBgColor="#FFD700"
                />
                <PatientsCard
                    title="Confirmed"
                    totalVisits={appointments.filter(a => a.status === 'CONFIRMED').length}
                    icon={<IconUsers size={24} className="text-white" />}
                />
                <PatientsCard
                    title="Completed"
                    totalVisits={appointments.filter(a => a.status === 'COMPLETED').length}
                    icon={<IconCircleCheckFilled size={24} className="text-white" />}
                    iconBgColor="#4CAF50"
                />
            </div>

            {/* Search & Filter Bar */}
            <div className="px-2 mb-4 w-full pt-4 flex flex-col sm:flex-row justify-between gap-4">
                <div className="relative w-full">
                    <input
                        type="search"
                        placeholder="Search by patient name..."
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        className="w-full bg-white pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <IconSearch
                        size={20}
                        className="absolute left-3 top-1/3 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                </div>
                <div className="flex justify-end gap-4 mb-6 w-full sm:w-auto">
                    <select className="border border-gray-400 rounded px-4 py-2 w-full sm:w-auto">
                        <option>Pending</option>
                    </select>
                    <button className="flex items-center gap-2 border px-4 py-2 rounded-full shadow hover:opacity-90 transition w-full sm:w-auto">
                        <IconFilter size={18} />
                        Filters
                    </button>
                </div>
            </div>

            {/* Pending Appointments List */}
            <div className="flex flex-col sm:flex-row gap-8 sm:gap-10">
                <div className="w-full sm:w-4/5">
                    <div className="flex gap-2 mb-6 items-center">
                        <h1 className="text-xl sm:text-2xl font-semibold">Pending Appointments</h1>
                        <p className="bg-green-800 p-2 text-[10px] sm:text-[10px] rounded-full text-white">
                            <span className="hidden sm:inline">{pendingAppointments.length} Requests</span>
                            <span className="sm:hidden">{pendingAppointments.length}</span>
                        </p>
                    </div>

                    {isLoading && <p>Loading pending appointments...</p>}
                    {isError && <p className="text-red-500">Failed to load appointments.</p>}
                    {!isLoading && pendingAppointments.length === 0 && (
                        <p className="text-gray-500">No pending appointments found.</p>
                    )}

                    <div className="flex flex-col gap-4">
                        {paginatedAppointments.map(app => (
                            <PatientsRequests
                                key={app.id}
                                id={app.id}
                                name={app.Patient?.user?.fullName ?? 'Unknown'}
                                genderAge={`${app.Patient?.gender ?? 'Female'}, ${app.Patient?.age ?? '40'} years`}
                                symptoms={
                                    Array.isArray(app.symptoms) && app.symptoms.length > 0
                                        ? app.symptoms.join(', ')
                                        : 'No symptoms'
                                }
                                imageUrl="/images/ana-doe.jpg"
                                urgency={{
                                    label: app.type,
                                    bgColor: app.type === 'ROUTINE' ? '#4338CA' : '#B91C1C',
                                }}
                                requestedAgo={new Date(app.createdAt).toLocaleDateString()}
                                distance="1.3 miles"
                                status={app.status}
                            />
                        ))}
                    </div>

                    {/* Pagination Row */}
                    <div className="mt-6 flex flex-col sm:flex-row sm:justify-between items-center text-xs sm:text-sm text-gray-700 gap-2 sm:gap-0">
                        {/* Left side: showing count */}
                        <span className="hidden sm:inline">
                            Showing {paginatedAppointments.length} of {pendingAppointments.length} appointments
                        </span>

                        {/* Right side: pagination buttons */}
                        <div className="flex justify-center sm:justify-end items-center gap-2">
                            <button
                                onClick={() => goToPage(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                            >
                                Prev
                            </button>
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => goToPage(i + 1)}
                                    className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-primary-800 text-white' : 'bg-gray-200 hover:bg-gray-300'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => goToPage(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>

                {/* Chart Section */}
                <div className="w-full sm:w-auto">
                    <AppointmentChart />
                </div>
            </div>
        </>
    );
};

export default PendingAppointmentsPage;
