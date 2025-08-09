import React from 'react'
import PatientsCard from './components/PatientsCard'
import PatientsRequests from './components/PatientsRequests'
import { IconFilter, IconSearch } from '@tabler/icons-react'
import AppointmentChart from './components/AppointmentChart'
const page = () => {
    return (
        <>
            <div className="p-2 grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                <PatientsCard totalVisits={'100'} title={' Total Patients'} />
                <PatientsCard totalVisits={'100'} title={' Total Patients'} />

                <PatientsCard totalVisits={'100'} title={' Total Patients'} />

                <PatientsCard totalVisits={'100'} title={' Total Patients'} />

            </div>
            <div className="px-2 mb-4 w-full pt-4 flex justify-between gap-4">
                <div className="relative w-full">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-full bg-white pl-10 pr-4 py-2  rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <IconSearch
                        size={20}
                        className="absolute left-3 top-1/3 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                </div>
                <div className="flex justify-end gap-4 mb-6">
                    <select className="border border-gray-400 rounded px-4 py-2">
                        <option>All status</option>
                    </select>

                    <button className="flex items-center gap-2 border  px-4 py-2 rounded-full shadow hover:opacity-90 transition">
                        <IconFilter size={18} />
                        Filters
                    </button>
                </div>
            </div>
            <div className='flex gap-10'>
                <div className="w-4/5">
                    <div className='flex gap-2 mb-6'>
                        <h1 className='text-2xl font-semibold'> Recent Appointments</h1>
                        <p className='bg-green-800 p-2 text-[10px] rounded-full text-white '> 12 Requests</p>
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
                    <div className='flex gap-2 mb-6 mt-8'>
                        <h1 className='text-2xl font-semibold'> Active Appointments</h1>
                        <p className='bg-green-800 p-2 text-[10px] rounded-full text-white '> 12 Requests</p>
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
                <AppointmentChart />

            </div>
        </>

    )
}

export default page
