'use client';
import React from 'react';
import { IconMail, IconPhone, IconMapPin, IconCake, IconEdit, IconPlus } from '@tabler/icons-react';
import { useAuth } from '@/services/auth/api';
import { useGetUserDetailQuery } from '@/services/profile/api';

export default function ProfilePage() {
  const { user } = useAuth();
  const { data } = useGetUserDetailQuery({ id: user?.result?.user?.id || '' });
  return (
    <div className="p-4 sm:p-6 md:px-20 bg-gray-100 min-h-screen">
      {/* Profile Card + Details Container */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="bg-white rounded-xl shadow-md p-4 w-full lg:w-1/4 flex-shrink-0">
          <div className="bg-gradient-to-r from-primary-800 to-[#6B5BFF] rounded-xl p-4 text-white text-center">
            <div className="w-20 h-20 rounded-full mx-auto border-4 border-white overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="profile"
                className="object-cover w-full h-full"
              />
            </div>
            <h2 className="mt-2 font-bold text-lg sm:text-xl">Savannah Nguyen</h2>
            <p className="text-sm sm:text-base">Patient since 2022</p>
            <p className="text-yellow-300 text-sm sm:text-base">⭐ 5.0</p>
          </div>

          <div className="mt-4 text-gray-900 text-xs sm:text-sm space-y-2">
            <p className="flex items-center justify-center gap-3">
              <IconMapPin size={16} className="text-primary-800" /> Manhattan N.Y
            </p>
            <p className="flex items-center justify-center gap-3">
              <IconPhone size={16} className="text-primary-800" /> +1 (555) 123-4567
            </p>
            <p className="flex items-center justify-center gap-3">
              <IconMail size={16} className="text-primary-800" /> Savannah@gmail.com
            </p>
            <p className="flex items-center justify-center gap-3">
              <IconCake size={16} className="text-primary-800" /> Born March 1st 1985
            </p>
          </div>

          <div className="mt-16 bg-gray-50 shadow-sm p-4 rounded-xl text-center">
            <p className="text-sm sm:text-base font-semibold mb-4">Quick Stats</p>
            <div className="grid grid-cols-2 gap-6 text-primary-800 mt-2 text-xs sm:text-sm">
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
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6">
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

          {/* Current Medications */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-xl sm:text-2xl text-primary-800">
                Current Medications
              </h2>
              <button className="text-primary-800 text-sm sm:text-base flex items-center gap-2">
                <IconPlus size={14} /> Add
              </button>
            </div>
            <div className="space-y-2 text-sm sm:text-base">
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

          {/* Upcoming Appointments */}
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg sm:text-xl">Upcoming Appointments</h2>
              <button className="text-primary-800 text-sm sm:text-base flex items-center gap-2">
                <IconPlus size={14} /> Book
              </button>
            </div>
            <div className="space-y-3">
              {[
                {
                  name: 'Dr. Sarah Johnson',
                  role: 'General Physician',
                  img: 'https://randomuser.me/api/portraits/women/65.jpg',
                  day: 'Tomorrow',
                  time: '10:30 AM',
                },
                {
                  name: 'Dr. Michael Lee',
                  role: 'Cardiologist',
                  img: 'https://randomuser.me/api/portraits/men/75.jpg',
                  day: 'Tomorrow',
                  time: '12:00 AM',
                },
              ].map((appt, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 p-3 shadow-sm rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src={appt.img}
                      alt={appt.name}
                    />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">{appt.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">{appt.role}</p>
                    </div>
                  </div>
                  <div className="text-right text-xs sm:text-sm">
                    <p className="text-primary-800 font-semibold">{appt.day}</p>
                    <p className="text-gray-500">{appt.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
