'use client';

import React from 'react';
import Image from 'next/image';
import {
    IconSearch,
    IconPrinter,
    IconCalendarCheck,
    IconInfoCircle,
} from '@tabler/icons-react';

export default function PatientVisitPage() {
    return (
        <div className="p-6 space-y-6 bg-[#f5f6fb] min-h-screen">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500 font-medium">
                    Patients &gt; <span className="text-black">Sarah Johnson</span>
                </div>
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        className="flex items-center gap-2 px-3 py-1 border border-gray-400 rounded hover:bg-gray-100"
                    >
                        <IconPrinter size={16} /> Print
                    </button>
                    <button
                        type="button"
                        className="px-4 py-2 bg-[#2f1c6a] text-white rounded hover:bg-[#251652]"
                    >
                        Accept Visit
                    </button>
                </div>
            </div>

            {/* Search Bar */}
            <div>
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search Patients"
                        className="w-full px-10 py-2 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#2f1c6a]"
                    />
                    <IconSearch
                        size={16}
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 w-full">
                {/* Left Column: Top Section (Patient Info + Details), Bottom Section (Chief Complaint) */}
                <div className="flex flex-col gap-4 w-full md:w-2/3">
                    {/* Top: Combined Patient Info & Details Card */}
                    <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4 w-full">
                        {/* Left Side: Patient Info */}
                        <div className="flex flex-col items-center text-center md:w-1/3 pr-4 md:border-r md:border-gray-300">
                            <Image
                                src="/images/sarah.jpg"
                                alt="Sarah Johnson"
                                width={64}
                                height={64}
                                className="rounded-full mb-2"
                            />
                            <h2 className="font-semibold text-lg">Sarah Johnson</h2>
                            <p className="text-sm text-gray-500">SarahJohnson@gmail.com</p>
                            <p className="mt-4 text-sm text-gray-500">Appointments</p>
                            <p className="text-2xl font-bold text-black">5</p>
                            <button
                                type="button"
                                className="mt-2 bg-[#2f1c6a] text-white px-3 py-2 text-sm rounded hover:bg-[#251652]"
                            >
                                Send Message
                            </button>
                        </div>

                        {/* Right Side: Patient Details */}
                        <div className="flex flex-row justify-center gap-20 text-sm w-full md:w-2/3 pl-4">
                            <div className="flex flex-col justify-between">
                                <span>
                                    <strong>Gender</strong>
                                    <br />
                                    Female
                                </span>
                                <span>
                                    <strong>Age</strong>
                                    <br />
                                    34 years old
                                </span>
                                <span>
                                    <strong>Phone Number</strong>
                                    <br />
                                    +1 (256) 123 4567
                                </span>
                                <span>
                                    <strong>Location</strong>
                                    <br />
                                    1234 Oak Street, Apt 2B, San Francisco, CA 94102
                                </span>
                            </div>
                            <div className="flex flex-col justify-between">
                                <span>
                                    <strong>Blood Type</strong>
                                    <br />
                                    O+
                                </span>
                                <span>
                                    <strong>Insurance</strong>
                                    <br />
                                    Blue cross
                                </span>
                                <span>
                                    <strong>Email</strong>
                                    <br />
                                    sarahjohnson@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom: Chief Complaint Card */}
                    <div className="bg-white rounded-xl shadow p-4 text-sm w-full">
                        <h2 className="font-semibold text-lg mb-3">Chief complaint &amp; Summary</h2>
                        <div className="bg-[#e6e6f7] rounded-lg p-4 mb-3">
                            <strong>Primary Concern</strong>
                            <br />
                            Severe Headache With Nausea And Sensitivity To Light. Started 6 Hours Ago.
                        </div>
                        <div>
                            <strong>Additional Symptoms</strong>
                            <div className="mt-2 flex gap-2 flex-wrap">
                                {['Dizziness', 'Fatigue', 'Blurred Vision'].map((symptom) => (
                                    <span
                                        key={symptom}
                                        className="bg-[#d6d6f6] text-[#2f1c6a] text-xs font-semibold px-3 py-1 rounded-full"
                                    >
                                        {symptom}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Visit Summary & Medical History */}
                <div className="flex flex-col gap-4 w-full md:w-1/3">
                    {/* Visit Summary Card */}
                    <div className="bg-white rounded-xl shadow p-4 relative text-sm">
                        <div className="absolute top-4 right-4">
                            <button
                                type="button"
                                className="text-[#2f1c6a] bg-[#e6e4f9] px-3 py-1 rounded text-xs hover:bg-[#dcd9f5]"
                            >
                                Follow Up
                            </button>
                        </div>
                        <h2 className="font-semibold text-xl mb- pt-6">Visit Summary</h2>
                        <div className="space-y-2">
                            <p>
                                <strong>Requested Time</strong>
                                <br />
                                Today, 2:30PM
                            </p>
                            <p>
                                <strong>Estimated Duration</strong>
                                <br />
                                45 Minutes
                            </p>
                            <p>
                                <strong>Service Fee</strong>
                                <br />
                                $85.00
                            </p>
                        </div>
                    </div>

                    {/* Medical History Card */}
                    <div className="bg-white rounded-xl shadow px-4 py-8 text-sm text-gray-800">
                        <h2 className="font-semibold text-lg mb-3">Medical History</h2>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <IconInfoCircle size={16} className="text-[#2f1c6a]" />
                                Penicillin Allergy
                            </li>
                            <li className="flex items-center gap-2">
                                <IconCalendarCheck size={16} className="text-[#2f1c6a]" />
                                Migraine History
                            </li>
                            <li className="flex items-center gap-2">
                                <IconCalendarCheck size={16} className="text-[#2f1c6a]" />
                                No cardiac issue
                            </li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}
