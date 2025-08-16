// app/session/page.tsx or pages/session.tsx depending on your routing
'use client';

import { IconPhoneFilled, IconMailFilled, IconFileDescriptionFilled } from '@tabler/icons-react';

export default function SessionPage() {
    return (
        <div className="min-h-screen bg-gray-50 lg:p-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Left Section (2/3 width) */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Card 1: Patient Info */}
                    <div className="bg-white p-6 rounded-xl shadow">
                        {/* Mobile layout: only visible on small screens */}
                        <div className="flex flex-col gap-2 sm:hidden">
                            <div className="flex items-center gap-3">
                                <img src="https://placehold.co/80x80" className="rounded-full w-16 h-16" alt="profile" />
                                <span className="text-xs text-gray-600">📧 sarah@gmail.com</span>
                            </div>
                            <div className="flex flex-row justify-center gap-3 mt-2">
                                <span className="bg-indigo-100 p-2 rounded-full"><IconPhoneFilled size={16} className="text-indigo-700" /></span>
                                <span className="bg-indigo-100 p-2 rounded-full"><IconMailFilled size={16} className="text-indigo-700" /></span>
                                <span className="bg-indigo-100 p-2 rounded-full"><IconFileDescriptionFilled size={16} className="text-indigo-700" /></span>
                            </div>
                            <div className="flex flex-col items-center gap-0.5 mt-2">
                                <h2 className="text-base font-semibold">Sarah Johnson</h2>
                                <p className="text-xs text-gray-600">Age 34 · Female</p>
                                <p className="text-xs text-gray-600">Patient ID: P-134-3035</p>
                                <span className="text-xs text-gray-600">📞 +1 555-555-5555</span>
                                <span className="text-xs text-gray-600">📍 123 Oak Street, NY</span>
                            </div>
                        </div>
                        {/* Desktop layout: only visible on sm and up */}
                        <div className="hidden sm:flex items-center gap-4">
                            <img src="https://placehold.co/80x80" className="rounded-full w-20 h-20" alt="profile" />
                            <div className="flex flex-row gap-8 w-full justify-between px-10">
                                <div>
                                    <h2 className="text-xl font-semibold">Sarah Johnson</h2>
                                    <p className="text-sm text-gray-600">Age 34 · Female</p>
                                    <p className="text-sm text-gray-600">Patient ID: P-134-3035</p>
                                </div>
                                <div className="space-y-1 text-sm text-gray-600">
                                    <p>📧 sarah@gmail.com</p>
                                    <p>📞 +1 555-555-5555</p>
                                    <p>📍 123 Oak Street, NY</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Card 2: Appointment Info */}
                    <div className="bg-white lg:p-6 p-4 rounded-xl shadow grid grid-cols-2 lg:gap-4 gap-2 text-xs sm:text-sm text-gray-700">
                        <div>
                            <p className="font-semibold">Date and time</p>
                            <p>January 15, 2024 at 2:30 PM</p>
                        </div>
                        <div>
                            <p className="font-semibold">Chief Complaint</p>
                            <p>Persistent headaches and fatigue</p>
                        </div>
                        <div>
                            <p className="font-semibold">Service Type</p>
                            <p>General consultation</p>
                        </div>
                        <div>
                            <p className="font-semibold">Priority</p>
                            <p>Medium</p>
                        </div>
                        <div>
                            <p className="font-semibold">Duration</p>
                            <p>45 minutes</p>
                        </div>
                        <div>
                            <p className="font-semibold">Fee</p>
                            <p>$150</p>
                        </div>
                    </div>


                    {/* Card 3: Session Notes */}
                    <div className="bg-white p-6 rounded-xl shadow space-y-4">
                        <div>
                            <p className="font-semibold text-gray-500 mb-2">Symptoms</p>
                            <textarea
                                className="w-full border p-3 rounded-md text-sm"
                                rows={2}
                                readOnly
                                value="Patient reports persistent headaches for the past 2 weeks, accompanied by fatigue and occasional dizziness. Symptoms worsen in the evening."
                            />
                        </div>

                        <div>
                            <p className="font-semibold text-gray-500 mb-2">Diagnosis</p>
                            <textarea
                                className="w-full border p-3 rounded-md text-sm"
                                rows={2}
                                readOnly
                                value="Vital signs: BP 130/85, HR 78, Temp 98.6°F. Neurological examination normal. No signs of acute distress."
                            />
                        </div>

                        <div>
                            <p className="font-semibold text-gray-500 mb-2">Treatment Plan</p>
                            <textarea
                                className="w-full border p-3 rounded-md text-sm"
                                rows={2}
                                readOnly
                                value="Tension headache, likely stress-related. Rule out hypertension."
                            />
                        </div>

                        <div>
                            <p className="font-semibold text-gray-500 mb-2">Examinational Findings</p>
                            <textarea
                                className="w-full border p-3 rounded-md text-sm"
                                rows={2}
                                readOnly
                                value="Prescribed ibuprofen 400mg TID for headaches. Recommend stress management techniques and follow-up in 1 week."
                            />
                        </div>
                    </div>
                </div>

                {/* Right Section (Sidebar) */}
                <div className="space-y-6">
                    {/* Card 4A: Quick Actions */}
                    <div className="bg-white p-6 rounded-xl shadow hidden lg:block space-y-3">
                        <h3 className="font-semibold text-lg text-gray-800">Quick Actions</h3>
                        <button className="flex items-center gap-2 w-full bg-indigo-100 hover:bg-indigo-200 p-2 rounded-md text-sm text-indigo-700 font-medium">
                            <IconPhoneFilled size={16} /> Call
                        </button>
                        <button className="flex items-center gap-2 w-full bg-indigo-100 hover:bg-indigo-200 p-2 rounded-md text-sm text-indigo-700 font-medium">
                            <IconMailFilled size={16} /> Message
                        </button>
                        <button className="flex items-center gap-2 w-full bg-indigo-100 hover:bg-indigo-200 p-2 rounded-md text-sm text-indigo-700 font-medium">
                            <IconFileDescriptionFilled size={16} /> Prescription
                        </button>
                    </div>

                    {/* Card 4B: Session Completion */}
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="font-semibold text-lg text-gray-800 mb-3">Session Completion</h3>
                        <ul className="text-sm text-gray-700 space-y-2">
                            <li className="flex justify-between">
                                <span>Session Notes</span>
                                <span className="bg-green-500 text-white p-1 rounded-full">✔</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Diagnosis</span>
                                <span className="bg-green-500 text-white p-1 rounded-full">✔</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Treatment plans</span>
                                <span className="bg-green-500 text-white p-1 rounded-full">✔</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Payment</span>
                                <span className="text-yellow-500 text-white p-1 rounded-full">⧗</span>
                            </li>
                        </ul>
                        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold text-sm">
                            Mark as complete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
