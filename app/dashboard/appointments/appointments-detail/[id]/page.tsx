/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useParams } from 'next/navigation';
import {
  useGetAppointmentsQuery,
  useGetAppointmentByIdQuery,
  useUpdateSessionNotesMutation,
  useCompleteAppointmentMutation,
} from '@/services/appointments/api';
import { IconPhoneFilled, IconMailFilled, IconFileDescriptionFilled } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SessionPage() {
  const params = useParams();
  const id = Number(params.id);

  const { data: allData } = useGetAppointmentsQuery();
  const allAppointments = allData?.result?.appointments ?? [];

  const { data, isLoading, isError } = useGetAppointmentByIdQuery(id);
  const appointmentDetail = data?.result;

  const appointmentWithPatient = allAppointments.find(a => a.id === id);

  const appointment = {
    ...appointmentWithPatient,
    ...appointmentDetail,
  };

  const patient = appointment?.Patient;
  const user = patient?.user;

  const [symptoms, setSymptoms] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [treatmentPlan, setTreatmentPlan] = useState('');
  const [findings, setFindings] = useState('');
  const [updateSessionNotes, { isLoading: isUpdating }] = useUpdateSessionNotesMutation();
  const [completeAppointment, { isLoading: isCompleting }] = useCompleteAppointmentMutation();

  useEffect(() => {
    if (appointment) {
      setSymptoms(appointment.sessionNotes?.symptoms ?? appointment.symptoms?.join(', ') ?? '');
      setDiagnosis(appointment.sessionNotes?.diagnosis ?? '');
      setTreatmentPlan(appointment.sessionNotes?.treatmentPlan ?? '');
      setFindings(appointment.sessionNotes?.examinationFindings ?? '');
    }
  }, [appointment?.id]);
  const handleSaveNotes = async () => {
    try {
      const res = await updateSessionNotes({
        id,
        sessionNotes: {
          symptoms,
          diagnosis,
          treatmentPlan,
          examinationFindings: findings,
        },
      }).unwrap();
      alert(res.message || 'Session notes saved successfully');
    } catch (err: any) {
      console.error('Failed to save session notes:', err);
      alert(err?.data?.message || 'Failed to save session notes');
    }
  };
  const handleComplete = async () => {
    try {
      const res = await completeAppointment(id).unwrap();
      alert(res.message || 'Appointment marked as completed');
    } catch (err: any) {
      console.error('Failed to complete appointment:', err);
      alert(err?.data?.message || 'Failed to complete appointment');
    }
  };
  if (isLoading) return <p className="p-6">Loading...</p>;
  if (isError || !appointment) return <p className="p-6 text-red-500">Error loading appointment</p>;

  return (
    <div className="min-h-screen bg-gray-50 lg:p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Card 1: Patient Info */}
          <div className="bg-white p-6 rounded-xl shadow">
            {/* Mobile layout */}
            <div className="flex flex-col gap-2 sm:hidden">
              <div className="flex items-center gap-3">
                <Image
                  src="https://placehold.co/80x80"
                  width={64}
                  height={64}
                  className="rounded-full w-16 h-16"
                  alt="profile"
                />
                <span className="text-xs text-gray-600">📧 {user?.email ?? 'N/A'}</span>
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
                <h2 className="text-base font-semibold">{user?.fullName ?? 'N/A'}</h2>
                <p className="text-xs text-gray-600">
                  Age {patient?.age ?? '40'} · {patient?.gender ?? '  Female'}
                </p>
                <p className="text-xs text-gray-600">
                  Patient ID: {patient?.id ? `P-${patient.id}` : 'N/A'}
                </p>
                <span className="text-xs text-gray-600">📞 {user?.phoneNumber ?? 'N/A'}</span>
                <span className="text-xs text-gray-600">📍 {patient?.Address ?? 'N/A'}</span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <Image
                src="https://randomuser.me/api/portraits/women/44.jpg"
                width={80}
                height={80}
                className="rounded-full w-20 h-20"
                alt="profile"
              />
              <div className="flex flex-row gap-8 w-full justify-between px-10">
                <div>
                  <h2 className="text-xl font-semibold">{user?.fullName ?? 'N/A'}</h2>
                  <p className="text-sm text-gray-600">
                    Age {patient?.age ?? '40'} · {patient?.gender ?? 'Female'}
                  </p>
                  <p className="text-sm text-gray-600">
                    Patient ID: {patient?.id ? `P-${patient.id}` : 'N/A'}
                  </p>
                </div>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>📧 {user?.email ?? 'N/A'}</p>
                  <p>📞 {user?.phoneNumber ?? 'N/A'}</p>
                  <p>📍 {patient?.Address ?? 'N/A'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Appointment Info */}
          <div className="bg-white lg:p-6 p-4 rounded-xl shadow grid grid-cols-2 lg:gap-4 gap-2 text-xs sm:text-sm text-gray-700">
            <div>
              <p className="font-semibold">Date and time</p>
              <p>
                {appointment?.appointmentDate
                  ? new Date(appointment.appointmentDate).toLocaleString()
                  : 'N/A'}
              </p>
            </div>
            <div>
              <p className="font-semibold">Chief Complaint</p>
              {/* <p>{appointment?.complaints ?? 'N/A'}</p> */}
              <p> nausea, sore throat</p>
            </div>
            <div>
              <p className="font-semibold">Service Type</p>
              <p>{appointment?.type ?? 'N/A'}</p>
            </div>
            <div>
              <p className="font-semibold">Status</p>
              <p>{appointment?.status ?? 'N/A'}</p>
            </div>
            <div>
              <p className="font-semibold">Created At</p>
              <p>
                {appointment?.createdAt
                  ? new Date(appointment.createdAt).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>
            <div>
              <p className="font-semibold">Updated At</p>
              <p>
                {appointment?.updatedAt
                  ? new Date(appointment.updatedAt).toLocaleDateString()
                  : 'N/A'}
              </p>
            </div>
          </div>

          {/* Card 3: Session Notes */}
          <div className="bg-white p-6 rounded-xl shadow space-y-4">
            <div>
              <p className="font-semibold text-gray-500 mb-2">Symptoms</p>
              <textarea
                className="w-full border p-3 rounded-md text-sm"
                rows={2}
                value={symptoms}
                onChange={e => setSymptoms(e.target.value)}
              />
            </div>
            <div>
              <p className="font-semibold text-gray-500 mb-2">Diagnosis</p>
              <textarea
                className="w-full border p-3 rounded-md text-sm"
                rows={2}
                value={diagnosis}
                onChange={e => setDiagnosis(e.target.value)}
              />
            </div>
            <div>
              <p className="font-semibold text-gray-500 mb-2">Treatment Plan</p>
              <textarea
                className="w-full border p-3 rounded-md text-sm"
                rows={2}
                value={treatmentPlan}
                onChange={e => setTreatmentPlan(e.target.value)}
              />
            </div>
            <div>
              <p className="font-semibold text-gray-500 mb-2">Examination Findings</p>
              <textarea
                className="w-full border p-3 rounded-md text-sm"
                rows={2}
                value={findings}
                onChange={e => setFindings(e.target.value)}
              />
            </div>

            <button
              className={`mt-4 w-full bg-primary-800 hover:bg-primary-500 text-white py-2 rounded-md font-semibold text-sm ${isUpdating ? 'opacity-70 cursor-not-allowed' : ''}`}
              onClick={handleSaveNotes}
              disabled={isUpdating}
            >
              {isUpdating ? 'Saving...' : 'Save Notes'}
            </button>
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
                <span
                  className={`p-1 rounded-full ${symptoms ? 'bg-green-500' : 'bg-red-500'} text-white`}
                >
                  {symptoms ? '✔' : '✖'}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Diagnosis</span>
                <span
                  className={`p-1 rounded-full ${diagnosis ? 'bg-green-500' : 'bg-red-500'} text-white`}
                >
                  {diagnosis ? '✔' : '✖'}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Treatment Plans</span>
                <span
                  className={`p-1 rounded-full ${treatmentPlan ? 'bg-green-500' : 'bg-red-500'} text-white`}
                >
                  {treatmentPlan ? '✔' : '✖'}
                </span>
              </li>
              <li className="flex justify-between">
                <span>Payment</span>
                <span
                  className={`p-1 rounded-full ${appointment?.paymentMade ? 'bg-green-500' : 'bg-yellow-500'} text-white`}
                >
                  {appointment?.paymentMade ? '✔' : '⧗'}
                </span>
              </li>
            </ul>
            <div className="relative group">
              <button
                className={`mt-4 w-full py-2 rounded-md font-semibold text-sm text-white
                                    ${
                                      appointment?.status === 'COMPLETED' ||
                                      appointment?.status !== 'CONFIRMED'
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-green-600 hover:bg-green-700'
                                    }
                                    ${isCompleting ? 'opacity-70 cursor-not-allowed' : ''}`}
                onClick={handleComplete}
                disabled={
                  isCompleting ||
                  appointment?.status === 'COMPLETED' ||
                  appointment?.status !== 'CONFIRMED'
                }
              >
                {appointment?.status === 'COMPLETED'
                  ? 'Completed'
                  : appointment?.status !== 'CONFIRMED'
                    ? 'Mark as complete'
                    : isCompleting
                      ? 'Completing...'
                      : 'Mark as complete'}
              </button>
              {appointment?.status !== 'CONFIRMED' && appointment?.status !== 'COMPLETED' && (
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 z-10 hidden group-hover:block bg-gray-800 text-white text-xs rounded px-3 py-1 whitespace-nowrap shadow-lg">
                  You can only mark as complete if the appointment is confirmed
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
