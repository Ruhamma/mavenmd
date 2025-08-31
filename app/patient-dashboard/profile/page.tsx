import { IconDotsVertical, IconBell, IconPhoto, IconLayoutDashboard, IconSettings, IconLock, IconFileText, IconCalendar, IconEdit, IconPlus } from '@tabler/icons-react'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
const appointments = [
    {
        id: 1,
        providerName: 'Dr. Sarah Johnson',
        date: '25/2/2023',
        type: 'Home Visit',
        visitType: 'Quick Checkup',
        avatar: '/images/doctor1.jpg',
    },
    {
        id: 2,
        providerName: 'Dr. Michael Lee',
        date: '25/2/2023',
        type: 'Tele Health',
        visitType: 'Annual Checkup',
        avatar: '/images/doctor2.jpg',
    },
];
const page = () => {
    return (
       <>
       <Header/>
        <div className="bg-gray-100 min-h-screen px-6 pt-18">
            <div className="max-w-7xl mx-auto flex gap-6">
                <aside className="w-72 bg-white rounded-xl shadow-md p-8 ml-10 flex flex-col items-center">
                    {/* Profile Info */}
                    <div className="text-center mb-6">
                        <div className="flex items-center justify-between mb-10 w-full">
                            <p>Your Profile</p>
                            <IconDotsVertical size={26} />
                        </div>
                        <div className="flex justify-center mb-4">
                            <img
                                src="/images/profile.jpg"
                                alt="Profile"
                                className="w-20 h-20 rounded-full object-cover"
                            />
                        </div>

                        <h2 className="font-semibold text-lg">Good Morning Sarah</h2>
                        <p className="text-sm text-gray-500">Patient since 2022</p>
                        <p className="text-xs text-gray-400 mt-1">
                            Continue Your Journey And Achieve Your Target
                        </p>
                        <div className="flex justify-center gap-1 text-yellow-500 mt-2">
                            ★★★★★ <span className="text-gray-500 text-xs">(50)</span>
                        </div>
                    </div>

                    {/* Icons */}
                    <div className="flex justify-center gap-4 mb-6">
                        <button className="p-2 border rounded-full hover:bg-gray-100">
                            <IconBell className="mx-auto" size={26} />
                        </button>
                        <button className="p-2 border rounded-full hover:bg-gray-100">
                            <IconPhoto className="mx-auto" size={26} />
                        </button>
                        <button className="p-2 border rounded-full hover:bg-gray-100">
                            <IconPhoto className="mx-auto" size={26} />
                        </button>
                    </div>

                    {/* Navigation */}
                    <nav className="w-full">
                        <p className="text-gray-500 text-sm font-semibold mb-4 text-center">OVERVIEW</p>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-3 font-medium">
                                <span className="w-2 h-12 bg-primary-800 rounded-r-2xl"></span>
                                <div className="flex items-center gap-3 bg-indigo-50 text-primary-800 p-3 rounded-lg w-full">
                                    <IconLayoutDashboard size={20} /> Dashboard
                                </div>
                            </li>

                            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-3 rounded-lg">
                                <IconSettings size={20} /> Settings
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-3 rounded-lg">
                                <IconLock size={20} /> Security
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-3 rounded-lg">
                                <IconFileText size={20} /> Medical Information
                            </li>
                            <li className="flex items-center gap-3 text-gray-600 hover:bg-gray-100 p-3 rounded-lg">
                                <IconCalendar size={20} /> Appointments
                            </li>
                        </ul>
                    </nav>

                </aside>
                <main className="flex-1 space-y-6">
                    <div className="flex w-full gap-6 items-stretch">
                        {/* Quick Stats - narrower */}
                        <div className="flex-[2] bg-white shadow-sm p-4 rounded-xl flex flex-col">
                            <p className="text-sm sm:text-base font-semibold m-8">Quick Stats</p>
                            <div className="grid grid-cols-2 gap-2 text-primary-800 mt-2 text-xs text-center sm:text-sm flex-grow">
                                <div>
                                    <p className="font-bold text-xl sm:text-2xl">24</p>Total Visits
                                </div>
                                <div>
                                    <p className="font-bold text-xl sm:text-2xl">12</p>This Year
                                </div>
                                <div>
                                    <p className="font-bold text-xl sm:text-2xl">5</p>Doctors
                                </div>
                                <div>
                                    <p className="font-bold text-xl sm:text-2xl">3</p>Upcoming
                                </div>
                            </div>
                        </div>

                        {/* Current Medications - wider */}
                        <div className="flex-[3] bg-white p-4 sm:p-6 rounded-xl shadow-md flex flex-col">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="font-semibold text-xl sm:text-2xl text-primary-800">
                                    Current Medications
                                </h2>
                                <button className="text-primary-800 text-sm sm:text-base flex items-center gap-2">
                                    <IconPlus size={14} /> Add
                                </button>
                            </div>
                            <div className="space-y-2 text-sm sm:text-base flex-grow">
                                {[
                                    { name: 'Pain Relief', dosage: '10 mg Twice daily', note: 'For blood pressure' },
                                    { name: 'Antibiotics', dosage: '50 mg once a day', note: 'For blood pressure' },
                                    { name: 'Chronic Conditions', dosage: 'Metformin', note: 'For Diabetes' },
                                    { name: 'Pain Relief', dosage: '10 mg Twice daily', note: 'For blood pressure' },
                                ].map((med, i) => (
                                    <div
                                        key={i}
                                        className="bg-primary-800/10 p-3 rounded-lg flex justify-between items-center"
                                    >
                                        <p>
                                            <strong>{med.name}</strong> – {med.dosage}
                                        </p>
                                        <span className="text-gray-500 text-xs sm:text-sm">{med.note}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="font-semibold text-xl sm:text-2xl text-primary-800">
                                Medical information
                            </h2>
                            <button className="text-primary-800 text-sm sm:text-base flex items-center gap-2">
                                <IconEdit size={14} /> Edit
                            </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base">
                            <div className="space-y-4">
                                <h3 className="font-semibold">Basic information</h3>
                                <p>
                                    <strong>Blood Type:</strong> O+
                                </p>
                                <p>
                                    <strong>Height:</strong> 5&apos;6&quot;
                                </p>
                                <p>
                                    <strong>Weight:</strong> 135 lbs
                                </p>
                                <p>
                                    <strong>Emergency Contact:</strong> John Johnson
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="font-semibold">Allergies</h3>
                                <div className="mt-1 space-x-2 flex flex-wrap gap-2">
                                    <span className="bg-red-100 text-red-700 text-xs sm:text-sm px-4 py-2 rounded inline-block">
                                        ⚠ Penicillin
                                    </span>
                                    <span className="bg-red-100 text-red-700 text-xs sm:text-sm px-4 py-2 rounded inline-block">
                                        ⚠ Shellfish
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section className=" p-4 rounded-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Upcoming Appointments</h2>
                            <Link href="#" className="text-[#3366CC] text-sm hover:underline">
                                See All
                            </Link>
                        </div>

                        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <div className="grid grid-cols-4 px-6 py-3 text-sm text-gray-500 font-medium ">
                                <div>Provider Name</div>
                                <div>Type</div>
                                <div>Visit Type</div>
                                <div className="text-right">Actions</div>
                            </div>

                            {appointments.map((appt) => (
                                <div
                                    key={appt.id}
                                    className="grid grid-cols-4 items-center px-6 py-4 text-sm "
                                >
                                    {/* Provider Name + Date */}
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={appt.avatar}
                                            alt={appt.providerName}
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover"
                                        />
                                        <div>
                                            <p className="font-medium text-gray-800">{appt.providerName}</p>
                                            <p className="text-xs text-gray-500">{appt.date}</p>
                                        </div>
                                    </div>

                                    {/* Type */}
                                    <div>
                                        <span className="bg-[#08087d1e] text-primary-800 px-3 py-1 rounded-full text-xs uppercase tracking-wide">
                                            {appt.type}
                                        </span>
                                    </div>

                                    {/* Visit Type */}
                                    <div className="text-gray-700 font-medium">{appt.visitType}</div>

                                    {/* Actions */}
                                    <div className="text-right">
                                        <button className="bg-[#3366cc2d] text-[#3366CC] text-xs font-semibold px-4 py-1 rounded-full hover:bg-indigo-200 transition">
                                            Show Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </main>
            </div>
        </div>
       </>

    )
}

export default page
