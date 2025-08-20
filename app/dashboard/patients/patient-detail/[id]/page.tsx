'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { IconSearch, IconPrinter, IconBrain, IconHeartFilled, IconPill } from '@tabler/icons-react';
import { useGetAppointmentsQuery, useGetAppointmentByIdQuery } from '@/services/appointments/api';

export default function PatientVisitPage() {
  const params = useParams();
  const id = Number(params.id);

  // Fetch all appointments and appointment details
  const { data: allData } = useGetAppointmentsQuery();
  const allAppointments = allData?.result?.appointments ?? [];

  const { data, isLoading, isError } = useGetAppointmentByIdQuery(id);
  const appointmentDetail = data?.result;

  // Merge data: use list for patient info, detail for session
  const appointmentWithPatient = allAppointments.find(a => a.id === id);
  const appointment = {
    ...appointmentWithPatient,
    ...appointmentDetail,
  };

  const patient = appointment?.Patient;
  const user = patient?.user;

  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError || !appointment) return <p className="p-6 text-red-500">Error loading appointment</p>;

  return (
    <div className="lg:p-6 space-y-6 bg-[#f5f6fb] min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between">
        <div className="text-sm text-gray-500 font-medium hidden sm:block">
          Patients &gt; <span className="text-black">{user?.fullName ?? 'N/A'}</span>
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
            className="px-4 py-1 bg-primary-800 text-white rounded-md hover:bg-primary-600"
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
            className="w-full px-10 py-2 rounded-full shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-800"
          />
          <IconSearch
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full md:w-2/3">
          {/* Patient Info Card */}
          <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row gap-4 w-full">
            <div className="flex flex-col items-center text-center md:w-1/3 pr-4 md:border-r md:border-gray-300">
              <Image
                src="/images/sarah.jpg" // Ideally use patient profile image if available
                alt={user?.fullName ?? 'Patient'}
                width={64}
                height={64}
                className="rounded-full mb-2"
              />
              <h2 className="font-semibold text-lg">{user?.fullName ?? 'N/A'}</h2>
              <p className="text-sm text-gray-500">{user?.email ?? 'N/A'}</p>
              <p className="mt-4 text-sm text-gray-500">Appointments</p>
              {/* <p className="text-2xl font-bold text-black">{appointment?.appointmentCount ?? '-'}</p> */}
              <p className="text-2xl font-bold text-black">5</p>
              <button
                type="button"
                className="mt-2 bg-primary-800 text-white px-3 py-2 text-sm rounded hover:bg-primary-600"
              >
                Send Message
              </button>
            </div>

            {/* Patient Details */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-20 text-sm w-full md:w-2/3 pl-4">
              <div className="flex flex-col gap-2">
                <span><strong>Gender</strong><br />{patient?.gender ?? 'N/A'}</span>
                <span><strong>Age</strong><br />{patient?.age ? `${patient.age} years` : 'N/A'}</span>
                <span><strong>Phone Number</strong><br />{user?.phoneNumber ?? 'N/A'}</span>
                <span><strong>Location</strong><br />{patient?.Address ?? 'N/A'}</span>
              </div>
              <div className="flex flex-col gap-2">
                <span><strong>Blood Type</strong><br />{patient?.BloodType ?? 'N/A'}</span>
                <span><strong>Insurance</strong><br />{patient?.insurances ?? 'N/A'}</span>
                <span><strong>Email</strong><br />{user?.email ?? 'N/A'}</span>
              </div>
            </div>
          </div>

          {/* Chief Complaint */}
          <div className="bg-white rounded-xl shadow p-4 text-sm w-full">
            <h2 className="font-semibold text-lg mb-3">Chief complaint & Summary</h2>
            <div className="bg-[#e6e6f7] rounded-lg p-4 mb-3">
              <strong>Primary Concern</strong>
              <br />
              {appointment?.complaints ?? 'N/A'}
            </div>
            <div>
              <strong>Additional Symptoms</strong>
              <div className="mt-2 flex gap-2 flex-wrap">
                {(appointment?.symptoms ?? []).map(symptom => (
                  <span
                    key={symptom}
                    className="bg-[#d6d6f6] text-primary-800 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 w-full md:w-1/3">
          {/* Visit Summary */}
          <div className="bg-white rounded-xl shadow p-4 relative text-sm">
            <div className="absolute top-4 right-4">
              <button className="text-primary-800 bg-[#e6e4f9] px-3 py-1 rounded text-xs hover:bg-[#dcd9f5]">
                {appointment?.type ?? 'N/A'}
              </button>
            </div>
            <h2 className="font-semibold text-xl mb-4 pt-6">Visit Summary</h2>
            <div className="space-y-3">
              <p><strong>Requested Time</strong><br />{appointment?.appointmentDate ? new Date(appointment.appointmentDate).toLocaleString() : 'N/A'}</p>
              {/* <p><strong>Estimated Duration</strong><br />{appointment?.duration ?? 'N/A'}<hr /></p> */}
              <p><strong>Estimated Duration</strong>45min</p>
              {/* <p><strong>Service Fee</strong><br />${appointment?.fee ?? 'N/A'}<hr /></p> */}
              <p><strong>Service Fee</strong>120$</p>
            </div>
          </div>

          {/* Medical History */}
          {/* <div className="bg-white rounded-xl shadow px-4 py-8 text-sm text-gray-800">
            <h2 className="font-semibold text-lg mb-3">Medical History</h2>
            <ul className="space-y-2">
              {(patient?.medicalHistory ?? []).map((history, i) => (
                <li key={i} className="flex items-center gap-2">
                  <IconInfoCircle size={16} className="text-primary-800" /> {history}
                </li>
              ))}
            </ul>
          </div> */}
           <div className="bg-white rounded-xl shadow px-4 py-8 text-sm text-gray-800">
            <h2 className="font-semibold text-lg mb-3">Medical History</h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <IconPill size={16} className="text-primary-800 " />
                Penicillin Allergy
              </li>
              <li className="flex items-center gap-2">
                <IconBrain size={16} className="text-primary-800 " />
                Migraine History
              </li>
              <li className="flex items-center gap-2">
                <IconHeartFilled size={16} className="text-primary-800 " />
                No cardiac issue
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
