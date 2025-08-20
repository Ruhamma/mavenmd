'use client';

import { useParams } from 'next/navigation';
import { useGetAppointmentsQuery, useGetAppointmentByIdQuery } from '@/services/appointments/api';
import { IconPhoneFilled, IconMailFilled, IconFileDescriptionFilled } from '@tabler/icons-react';
import { useState, useEffect } from 'react';

export default function SessionPage() {
    const params = useParams();
    const id = Number(params.id);

    // Fetch list of appointments (contains patient + user info)
    const { data: allData } = useGetAppointmentsQuery();
    const allAppointments = allData?.result?.appointments ?? [];

    // Fetch appointment detail (has sessionNotes, status, etc.)
    const { data, isLoading, isError } = useGetAppointmentByIdQuery(id);
    const appointmentDetail = data?.result;

    // Find matching appointment from all appointments for patient info
    const appointmentWithPatient = allAppointments.find(a => a.id === id);

    // Merge: detail is source of truth for session/metadata, patient info comes from list
    const appointment = {
        ...appointmentWithPatient,
        ...appointmentDetail,
    };

    const patient = appointment?.Patient;
    const user = patient?.user;

    // Local state for editable session notes
    const [symptoms, setSymptoms] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [treatmentPlan, setTreatmentPlan] = useState('');
    const [findings, setFindings] = useState('');

    // Prefill only when appointment id changes (prevents overwriting user edits)
    useEffect(() => {
        if (appointment) {
            setSymptoms(
                appointment.sessionNotes?.symptoms ??
                appointment.symptoms?.join(', ') ??
                ''
            );
            setDiagnosis(appointment.sessionNotes?.diagnosis ?? '');
            setTreatmentPlan(appointment.sessionNotes?.treatmentPlan ?? '');
            setFindings(appointment.sessionNotes?.examinationFindings ?? '');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [appointment?.id]);

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
                                <img src="https://placehold.co/80x80" className="rounded-full w-16 h-16" alt="profile" />
                                <span className="text-xs text-gray-600">📧 {user?.email ?? 'N/A'}</span>
                            </div>
                            <div className="flex flex-row justify-center gap-3 mt-2">
                                <span className="bg-indigo-100 p-2 rounded-full"><IconPhoneFilled size={16} className="text-indigo-700" /></span>
                                <span className="bg-indigo-100 p-2 rounded-full"><IconMailFilled size={16} className="text-indigo-700" /></span>
                                <span className="bg-indigo-100 p-2 rounded-full"><IconFileDescriptionFilled size={16} className="text-indigo-700" /></span>
                            </div>
                            <div className="flex flex-col items-center gap-0.5 mt-2">
                                <h2 className="text-base font-semibold">{user?.fullName ?? 'N/A'}</h2>
                                <p className="text-xs text-gray-600">Age {patient?.age ?? 'N/A'} · {patient?.gender ?? 'N/A'}</p>
                                <p className="text-xs text-gray-600">Patient ID: {patient?.id ? `P-${patient.id}` : 'N/A'}</p>
                                <span className="text-xs text-gray-600">📞 {user?.phoneNumber ?? 'N/A'}</span>
                                <span className="text-xs text-gray-600">📍 {patient?.Address ?? 'N/A'}</span>
                            </div>
                        </div>
                        {/* Desktop layout */}
                        <div className="hidden sm:flex items-center gap-4">
                            <img src="https://placehold.co/80x80" className="rounded-full w-20 h-20" alt="profile" />
                            <div className="flex flex-row gap-8 w-full justify-between px-10">
                                <div>
                                    <h2 className="text-xl font-semibold">{user?.fullName ?? 'N/A'}</h2>
                                    <p className="text-sm text-gray-600">Age {patient?.age ?? 'N/A'} · {patient?.gender ?? 'N/A'}</p>
                                    <p className="text-sm text-gray-600">Patient ID: {patient?.id ? `P-${patient.id}` : 'N/A'}</p>
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
                            <p>{appointment?.appointmentDate ? new Date(appointment.appointmentDate).toLocaleString() : 'N/A'}</p>
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
                            <p>{appointment?.createdAt ? new Date(appointment.createdAt).toLocaleDateString() : 'N/A'}</p>
                        </div>
                        <div>
                            <p className="font-semibold">Updated At</p>
                            <p>{appointment?.updatedAt ? new Date(appointment.updatedAt).toLocaleDateString() : 'N/A'}</p>
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
                                onChange={(e) => setSymptoms(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-500 mb-2">Diagnosis</p>
                            <textarea
                                className="w-full border p-3 rounded-md text-sm"
                                rows={2}
                                value={diagnosis}
                                onChange={(e) => setDiagnosis(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-500 mb-2">Treatment Plan</p>
                            <textarea
                                className="w-full border p-3 rounded-md text-sm"
                                rows={2}
                                value={treatmentPlan}
                                onChange={(e) => setTreatmentPlan(e.target.value)}
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-gray-500 mb-2">Examination Findings</p>
                            <textarea
                                className="w-full border p-3 rounded-md text-sm"
                                rows={2}
                                value={findings}
                                onChange={(e) => setFindings(e.target.value)}
                            />
                        </div>

                        {/* Save button placeholder */}
                        <button
                            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md font-semibold text-sm"
                            onClick={() => {
                                console.log('Save clicked:', { symptoms, diagnosis, treatmentPlan, findings });
                                // TODO: Call RTK mutation here
                            }}
                        >
                            Save Notes
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

                        <button className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold text-sm">
                            Mark as complete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
