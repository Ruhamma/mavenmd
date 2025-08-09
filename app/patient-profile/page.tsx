import React from 'react';
import { IconMail, IconPhone, IconMapPin, IconCake, IconEdit, IconPlus } from '@tabler/icons-react';

export default function ProfilePage() {
  return (
    <div className="p-6 px-20 bg-gray-100 min-h-screen">
      {/* Profile Card */}
      <div className="flex gap-10">
        <div className="bg-white rounded-xl shadow-md p-4 w-1/4">
          <div className="bg-gradient-to-r from-[#08087D] to-[#6B5BFF] rounded-xl p-4 text-white text-center">
            <div className="w-20 h-20 rounded-full mx-auto border-4 border-white overflow-hidden">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" />
            </div>
            <h2 className="mt-2 font-bold text-lg">Savannah Nguyen</h2>
            <p className="text-sm">Patient since 2022</p>
            <p className="text-yellow-300 text-sm">⭐ 5.0</p>
          </div>

          <div className="mt-4 text-sm text-gray-900 space-y-2">
            <p className="flex items-center justify-center gap-4">
              <IconMapPin size={16} className="text-[#08087d]" /> Manhattan N.Y
            </p>
            <p className="flex items-center justify-center gap-4">
              <IconPhone size={16} className="text-[#08087d]" /> +1 (555) 123-4567
            </p>
            <p className="flex items-center justify-center gap-4">
              <IconMail size={16} className="text-[#08087d]" /> Savannah@gmail.com
            </p>
            <p className="flex items-center justify-center gap-4">
              <IconCake size={16} className="text-[#08087d]" /> Born March 1st 1985
            </p>
          </div>

          <div className="mt-16 bg-gray-50 shadow-sm p-4 rounded-xl text-center">
            <p className="text-sm font-semibold mb-4">Quick Stats</p>
            <div className="grid grid-cols-2 gap-6 text-[#08087d] mt-2">
              <div>
                <p className="font-bold text-2xl">24</p>Total Visits
              </div>
              <div>
                <p className="font-bold text-2xl">12</p>This Year
              </div>
              <div>
                <p className="font-bold text-2xl">5</p>Doctors
              </div>
              <div>
                <p className="font-bold text-2xl">3</p>Upcoming
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-2xl text-[#08087d]">Medical information</h2>
              <button className="text-[#08087D] text-sm flex items-center gap-2">
                <IconEdit size={14} /> Edit
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm">
              <div className="space-y-4">
                <h2 className=" ">Basic information</h2>
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
                <h2 className="f ">Allergies</h2>

                <div className="mt-1 space-x-2">
                  <span className="bg-red-100 text-red-700 text-xs px-4 py-2 rounded">
                    ⚠ Penicillin
                  </span>
                  <span className="bg-red-100 text-red-700 text-xs px-4 py-2 rounded">
                    ⚠ Shellfish
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Current Medications */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-2xl text-[#08087d]">Current Medications</h2>
              <button className="text-[#08087D] text-sm  flex items-center gap-2">
                <IconPlus size={14} /> Add
              </button>
            </div>
            <div className="space-y-2 text-sm">
              <div className="bg-[#08087d]/10 p-3 rounded-lg flex justify-between items-center">
                <p>
                  <strong>Pain Relief</strong> – 10 mg Twice daily
                </p>
                <span className="text-gray-500 text-xs">For blood pressure</span>
              </div>
              <div className="bg-[#08087d]/10 p-3 rounded-lg flex justify-between items-center">
                <p>
                  <strong>Antibiotics</strong> – 50 mg once a day
                </p>
                <span className="text-gray-500 text-xs">For blood pressure</span>
              </div>
              <div className="bg-[#08087d]/10 p-3 rounded-lg flex justify-between items-center">
                <p>
                  <strong>Chronic Conditions</strong> – Metformin
                </p>
                <span className="text-gray-500 text-xs">For Diabetes</span>
              </div>
              <div className="bg-[#08087d]/10 p-3 rounded-lg flex justify-between items-center">
                <p>
                  <strong>Pain Relief</strong> – 10 mg Twice daily
                </p>
                <span className="text-gray-500 text-xs">For blood pressure</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-lg">Upcoming Appointments</h2>
              <button className="text-[#08087D] text-sm  flex items-center gap-2">
                <IconPlus size={14} /> Book
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-50 p-3 shadow-sm rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/women/65.jpg"
                    alt="Dr Sarah"
                  />
                  <div>
                    <p className="font-semibold text-sm">Dr. Sarah Johnson</p>
                    <p className="text-xs text-gray-500">General Physician</p>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p className="text-[#08087D] font-semibold">Tomorrow</p>
                  <p className="text-gray-500 text-xs">10:30 AM</p>
                </div>
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-3 shadow-sm rounded-lg">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full"
                    src="https://randomuser.me/api/portraits/men/75.jpg"
                    alt="Dr Lee"
                  />
                  <div>
                    <p className="font-semibold text-sm">Dr. Michael Lee</p>
                    <p className="text-xs text-gray-500">Cardiologist</p>
                  </div>
                </div>
                <div className="text-right text-sm">
                  <p className="text-[#08087D] font-semibold">Tomorrow</p>
                  <p className="text-gray-500 text-xs">12:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
