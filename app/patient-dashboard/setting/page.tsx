"use client";
import { IconCloudDownload } from "@tabler/icons-react";
import React from "react";

const Page = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-6xl mx-auto p-8">
                {/* Header */}
                <div className="flex justify-between items-center pb-4 mb-6">
                    <h1 className="text-xl font-bold text-primary-800">Profile/Setting</h1>

                </div>

                {/* Page Title */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">
                            Setting Details
                        </h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Update your photo and personal details here.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-1  border border-gray-300 text-gray-600 hover:bg-gray-100">
                            Cancel
                        </button>
                        <button className="px-6 py-1 bg-primary-800 text-white   shadow">
                            Save
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Form */}
                    <div className="lg:col-span-2 bg-white shadow-md rounded-xl p-6">
                        <h3 className="text-lg font-semibold mb-4">Personal information</h3>
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Full Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter first name"
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                />
                            </div>
                            {/* Last Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter last name"
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                />
                            </div>

                            {/* Email Address */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    placeholder="Enter email address"
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                />
                            </div>

                            {/* Username */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter user name"
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                />
                            </div>

                            {/* Phone No */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Phone No
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter phone no"
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                />
                            </div>

                            {/* City */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    City
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter your city"
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                />
                            </div>

                            {/* Country Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Country Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter country name"
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                />
                            </div>

                            {/* Zip Code */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Zip Code
                                </label>
                                <input
                                    type="text"
                                    placeholder="Enter zip code"
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                />
                            </div>

                            {/* Bio */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Bio <span className="text-gray-400">(Write a short intro)</span>
                                </label>
                                <select className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700">
                                    <option>Normal text</option>
                                    <option>Italic text</option>
                                </select>
                            </div>

                            {/* DOB */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Date of birth
                                </label>
                                <input
                                    type="date"
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                />
                            </div>

                            {/* Description */}
                            <div className="md:col-span-2">
                                <textarea
                                    rows={3}
                                    className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700"
                                    placeholder="Lorem ipsum..."
                                ></textarea>
                            </div>

                            {/* Timezone */}
                            <div className="md:col-span-2">
                                <label className="block text-sm font-medium text-gray-700">
                                    Timezone
                                </label>
                                <select className="mt-2 w-full border rounded-lg bg-primary-50 p-3 text-gray-700">
                                    <option>Pacific Standard Time</option>
                                    <option>Eastern Standard Time</option>
                                    <option>Central European Time</option>
                                </select>
                            </div>
                        </form>
                    </div>

                    {/* Right Column - Profile Photo & Google */}
                    <div className="bg-gray-50 shadow-md rounded-xl p-6">
                        {/* Profile Photo */}
                        <h3 className="text-lg text-gray-800  mb-4">Your Photo</h3>
                        <hr className=" border-gray-500 mb-4" />
                        <div className="flex">
                            <img
                                src="/images/avatar-1.jpg"
                                alt="Profile"
                                className="w-16 h-16 rounded-full object-cover mb-4"
                            />
                            <div>
                                <p className="text-sm text-gray-500 ">Edit your photo</p>
                                <p className="text-sm text-gray-500 ">Delete<span className="text-primary-700"> Update</span></p>
                            </div>
                        </div>
                        <div className="border-2 border-dashed border-primary-700 rounded-lg p-6 text-center text-gray-500 min-h-[160px] [border-spacing:12px] flex flex-col justify-center items-center gap-2">
                            <IconCloudDownload size={32} className="text-primary-700" />
                            <p>
                                <span className="text-primary-700">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs">
                                SVG, PNG, JPG or GIF (max. 800x400px)
                            </p>
                        </div>

                        {/* Google Connect */}
                        <div className="mt-6 border rounded-lg p-4 flex items-center justify-between">
                            <div>
                                <img
                                    src="/images/google-logo.png"
                                    alt="Google"
                                    className="w-6 h-6"
                                />
                            </div>

                            <button className="text-primary-700  bg-primary-100 px-4 py-1">Connected</button>
                        </div>

                        <p className="text-gray-600 text-sm max-w-3/4">
                            Use Google to sign in to your account.{" "}
                            <a href="#" className="text-primary-700 ">
                                Click here to learn more.
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
