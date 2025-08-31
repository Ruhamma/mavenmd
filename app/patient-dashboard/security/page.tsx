"use client";
import Header from "@/components/Header";
import { IconBell, IconCalendar, IconDotsVertical, IconFileText, IconLayoutDashboard, IconLock, IconPhoto, IconSettings } from "@tabler/icons-react";
import React from "react";

const SecurityPage = () => {
    return (
        <>
        <Header />
            <div className="bg-gray-100 min-h-screen p-6">
                <div className="max-w-7xl mx-auto flex gap-6">
                    {/* Sidebar */}
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
                                <li className="flex items-center gap-3 bg-indigo-50 text-primary-800 font-medium p-3 rounded-lg">
                                    <IconLayoutDashboard size={20} /> Dashboard
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

                    {/* Main Content */}
                    <main className="flex-1 px-20 py-8 ">
                        <h1 className="text-primary-700 text-lg font-bold">Profile/Security</h1>
                        <h2 className="text-2xl font-semibold mt-2">Security Setting</h2>

                        {/* Content Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8 bg-white shadow-md">
                            {/* Password Section */}
                            <div className=" rounded-xl  p-6">
                                <h3 className="text-lg font-semibold mb-4">Password</h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    The Last Pass password generator creates random passwords based on parameters set by you.
                                </p>

                                <form className="space-y-4">
                                    <p> Current Password</p>
                                    <input
                                        type="password"
                                        placeholder="Current password"
                                        className="w-full border rounded-lg p-3 text-gray-700 bg-primary-50"
                                    />
                                    <p> New Password</p>
                                    <input
                                        type="password"
                                        placeholder="New password"
                                        className="w-full border rounded-lg p-3 text-gray-700 bg-primary-50"
                                    />
                                    <p> Confirm Password</p>

                                    <input
                                        type="password"
                                        placeholder="Confirm password"
                                        className="w-full border rounded-lg p-3 text-gray-700 bg-primary-50"
                                    />
                                </form>

                                {/* Password Rules */}
                                <div className="mt-6 bg-primary-50 p-4 rounded-lg text-sm text-gray-600">
                                    <h4 className="font-semibold mb-2">Rules for password</h4>
                                    <p className="my-6">To create a new password, you have to meet all of the following requirements.</p>
                                    <ul className="list-disc pl-5 space-y-3">
                                        <li>Minimum 8 characters</li>
                                        <li>At least one special character</li>
                                        <li>At least one number</li>
                                        <li>Can’t be the same as 3 previous</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Devices Section */}
                            <div className="bg-white rounded-xl shadow-md p-6">
                                <h3 className="text-lg font-semibold mb-4">Devices</h3>
                                <p className="text-sm text-gray-500 mb-6">
                                    The Last Pass password generator creates random passwords based on parameters set by you.
                                </p>

                                <button className=" bg-primary-700 text-white px-3 py-2 rounded-sm hover:bg-primary-800 mb-6">
                                    Sign out from all devices
                                </button>
                                <hr className="my-2 border-1"/>

                                {/* Device List */}
                                <div className="space-y-4">
                                    {[
                                        { name: "iPhone 11", location: "London, UK", time: "Oct 11 at 2:30 AM" },
                                        { name: "Galaxy 18", location: "Berlin, NY", time: "Sep 27 at 3:25 PM" },
                                        { name: "Vivo v21", location: "London, UK", time: "Oct 11 at 2:30 AM" },
                                        { name: "iPhone 12", location: "London, UK", time: "Oct 11 at 2:30 AM" },
                                        { name: "Samsung", location: "Kanok, IN", time: "Oct 03 at 2:25 AM" },
                                    ].map((device, index) => (
                                        <div key={index} className="flex justify-between items-center border-b pb-3">
                                            <div>
                                                <h4 className="font-medium">{device.name}</h4>
                                                <p className="text-xs text-gray-500">
                                                    {device.location} • {device.time}
                                                </p>
                                            </div>
                                            <button className="text-gray-400 hover:text-gray-600">                            <IconDotsVertical className="mx-auto" size={26} />
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-6">
                                    <button className="w-full border bg-primary-50 border-gray-300 py-3 rounded-lg hover:bg-gray-100">
                                        Need help?
                                    </button>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
};

export default SecurityPage;
