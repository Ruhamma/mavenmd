import React from 'react'
import PatientsCard from './components/PatientsCard'
import PatientsRequests from './components/PatientsRequests'
import { IconFilter, IconSearch, IconUsers } from '@tabler/icons-react'
import AppointmentChart from './components/AppointmentChart'
const page = () => {
    return (
        <>
            <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-4">


                <PatientsCard
                    title="Patients"
                    totalVisits={1200}
                    icon={<IconUsers size={24} className="text-white" />}
                />
                <PatientsCard
                    title="Patients"
                    totalVisits={1200}
                    icon={<IconUsers size={24} className="text-white" />}
                />
                <PatientsCard
                    title="Patients"
                    totalVisits={1200}
                    icon={<IconUsers size={24} className="text-white" />}
                />
                <PatientsCard
                    title="Patients"
                    totalVisits={1200}
                    icon={<IconUsers size={24} className="text-white" />}
                />

            </div>
            <div className="px-2 mb-4 w-full pt-4 flex flex-col sm:flex-row justify-between gap-4">
                <div className="relative w-full">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-full bg-white pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <IconSearch
                        size={20}
                        className="absolute left-3 top-1/3 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                </div>

                <div className="flex justify-end gap-4 mb-6 w-full sm:w-auto">
                    <select className="border border-gray-400 rounded px-4 py-2 w-full sm:w-auto">
                        <option>All status</option>
                    </select>

                    <button className="flex items-center gap-2 border px-4 py-2 rounded-full shadow hover:opacity-90 transition w-full sm:w-auto">
                        <IconFilter size={18} />
                        Filters
                    </button>
                </div>
            </div>

            <div className='flex flex-col sm:flex-row gap-8 sm:gap-10'>
                <div className="w-full sm:w-4/5">
                    <div className="flex gap-2 mb-6 items-center">
                        <h1 className="text-xl sm:text-2xl font-semibold">Recent Appointments</h1>
                        <p className="bg-green-800 p-2 text-[10px] sm:text-[10px] rounded-full text-white">
                            <span className="sm:hidden">12</span>
                            <span className="hidden sm:inline">12 Requests</span>
                        </p>
                    </div>

                    <div className=' flex flex-col gap-4'>
                        <PatientsRequests name="David Kim"
                            genderAge="Male, 27 years"
                            symptoms="Sudden rash, itching"
                            imageUrl="/images/david.jpg"
                            urgency={{
                                label: "FOLLOW UP",
                                bgColor: "#4338CA", // indigo-700
                            }}
                            requestedAgo="9 min ago"
                            distance="1.6 miles away"
                            status="Confirmed" />
                        <PatientsRequests name="David Kim"
                            genderAge="Male, 27 years"
                            symptoms="Sudden rash, itching"
                            imageUrl="/images/david.jpg"
                            urgency={{
                                label: "FOLLOW UP",
                                bgColor: "#4338CA", // indigo-700
                            }}
                            requestedAgo="9 min ago"
                            distance="1.6 miles away"
                            status="Confirmed" />
                        <PatientsRequests name="David Kim"
                            genderAge="Male, 27 years"
                            symptoms="Sudden rash, itching"
                            imageUrl="/images/david.jpg"
                            urgency={{
                                label: "FOLLOW UP",
                                bgColor: "#4338CA", // indigo-700
                            }}
                            requestedAgo="9 min ago"
                            distance="1.6 miles away"
                            status="Confirmed" />
                        <PatientsRequests name="David Kim"
                            genderAge="Male, 27 years"
                            symptoms="Sudden rash, itching"
                            imageUrl="/images/david.jpg"
                            urgency={{
                                label: "FOLLOW UP",
                                bgColor: "#4338CA", // indigo-700
                            }}
                            requestedAgo="9 min ago"
                            distance="1.6 miles away"
                            status="Confirmed" />
                    </div>
                    <div className="flex gap-2 mb-6 mt-8 items-center">
                        <h1 className="text-xl sm:text-2xl font-semibold">Active Appointments</h1>
                        <p className="bg-green-800 p-2 text-[10px] sm:text-[10px] rounded-full text-white">
                            <span className="sm:hidden">12</span>
                            <span className="hidden sm:inline">12 Requests</span>
                        </p>
                    </div>

                    <div>
                        <PatientsRequests name="David Kim"
                            genderAge="Male, 27 years"
                            symptoms="Sudden rash, itching"
                            imageUrl="/images/david.jpg"
                            urgency={{
                                label: "FOLLOW UP",
                                bgColor: "#4338CA", // indigo-700
                            }}
                            requestedAgo="9 min ago"
                            distance="1.6 miles away"
                            status="Confirmed" />
                    </div>
                </div>
                <div className=" w-full sm:w-auto">
                    <AppointmentChart />
                </div>

            </div>
        </>

    )
}

export default page
