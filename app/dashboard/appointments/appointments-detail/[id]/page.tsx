'use client';

import { useParams } from 'next/navigation';
import { IconPhoneFilled, IconMailFilled, IconFileDescriptionFilled } from '@tabler/icons-react';
import { useGetAppointmentByIdQuery } from '../../../../../services/appointments/api';

export default function SessionPage() {
  const params = useParams();
  const appointmentId = params.id ? Number(params.id) : null;

  // Skip the query if ID is invalid
  const { data: appointment, isLoading, error } = useGetAppointmentByIdQuery(appointmentId ?? 0, {
    skip: !appointmentId,
  });

  if (!appointmentId) return <p className="p-4">Invalid appointment ID</p>;
  if (isLoading) return <p className="p-4">Loading...</p>;
  if (error || !appointment) return <p className="p-4">Error loading appointment</p>;
const appointmentData = appointment.result;
  const patient = appointmentData.patient || {
    firstName: 'N/A',
    lastName: 'N/A',
    age: 'N/A',
    gender: 'N/A',
    email: 'N/A',
    phone: 'N/A',
    address: 'N/A',
  };

  const sessionNotes = appointmentData.sessionNotes || {
    symptoms: '',
    diagnosis: '',
    treatmentPlan: '',
    examinationFindings: '',
  };

  return (
    <div className="min-h-screen bg-gray-50 lg:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Patient Info */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex flex-col gap-2 sm:hidden">
              <div className="flex items-center gap-3">
                <img
                  src={patient.profilePicture || 'https://placehold.co/80x80'}
                  className="rounded-full w-16 h-16"
                  alt="profile"
                />
                <span className="text-xs text-gray-600">📧 {patient.email}</span>
              </div>
              <div className="flex flex-row justify-center gap-3 mt-2">
                <span className="bg-indigo-100 p-2 rounded-full">
                  <IconPhoneFilled size={16} className="text-indigo-700" />
                </span>
                <span className="bg-indigo-100 p-2 rounded-full">
                  <IconMailFilled size={16} className="text-indigo-700" />
                </span>
                <span className="bg-indigo-100 p-2 rounded-full">
                  <IconFileDescriptionFilled size={16} className="text-indigo-700" />
                </span>
              </div>
              <div className="flex flex-col items-center gap-0.5 mt-2">
                <h2 className="text-base font-semibold">{patient.firstName} {patient.lastName}</h2>
                <p className="text-xs text-gray-600">Age {patient.age} · {patient.gender}</p>
                <p className="text-xs text-gray-600">Patient ID: P-{patient.id}</p>
                <span className="text-xs text-gray-600">📞 {patient.phone}</span>
                <span className="text-xs text-gray-600">📍 {patient.address}</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <img
                src={patient.profilePicture || 'https://placehold.co/80x80'}
                className="rounded-full w-20 h-20"
                alt="profile"
              />
              <div className="flex flex-row gap-8 w-full justify-between px-10">
                <div>
                  <h2 className="text-xl font-semibold">{patient.firstName} {patient.lastName}</h2>
                  <p className="text-sm text-gray-600">Age {patient.age} · {patient.gender}</p>
                  <p className="text-sm text-gray-600">Patient ID: P-{patient.id}</p>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>📧 {patient.email}</p>
                  <p>📞 {patient.phone}</p>
                  <p>📍 {patient.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* AppointmentData Info */}
          <div className="bg-white lg:p-6 p-4 rounded-xl shadow grid grid-cols-2 lg:gap-4 gap-2 text-xs sm:text-sm text-gray-700">
            <div>
              <p className="font-semibold">Date and time</p>
              <p>{new Date(appointmentData.appointmentDate).toLocaleString()}</p>
            </div>
            <div>
              <p className="font-semibold">Chief Complaint</p>
              <p>{sessionNotes.symptoms || 'N/A'}</p>
            </div>
            <div>
              <p className="font-semibold">Service Type</p>
              <p>{appointmentData.type}</p>
            </div>
            <div>
              <p className="font-semibold">Priority</p>
              <p>{appointmentData.status}</p>
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

          {/* Session Notes */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            {['symptoms', 'diagnosis', 'treatmentPlan', 'examinationFindings'].map((field) => (
              <div key={field}>
                <p className="font-semibold text-gray-500 mb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</p>
                <textarea
                  className="w-full border p-3 rounded-md text-sm"
                  rows={2}
                  readOnly
                  value={sessionNotes[field as keyof typeof sessionNotes]}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
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

          {/* Session Completion */}
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
