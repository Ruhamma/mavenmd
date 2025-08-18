import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ReactNode } from 'react';

// ---- Types ----
interface SessionNotes {
    symptoms: string;
    diagnosis: string;
    treatmentPlan: string;
    examinationFindings: string;
}

export interface Appointment {
    patient: {
        id: ReactNode;
        profilePicture: string; firstName: string; lastName: string; age: string; gender: string; email: string; phone: string; address: string;
    };
    id: number;
    serviceProviderId: number;
    patientId: number;
    appointmentDate: string;
    status: string;
    type: string;
    sessionNotes: SessionNotes | null;
    paymentMade: boolean;
    createdAt: string;
    updatedAt: string;
}

interface AppointmentsResponse {
    result: {
        appointments: Appointment[];
        count: number;
    };
    message: string;
    statusCode: number;
}

interface AppointmentByIdResponse {
    status: ReactNode;
    type: ReactNode;
    appointmentDate: string | number | Date;
    sessionNotes: { symptoms: string; diagnosis: string; treatmentPlan: string; examinationFindings: string; };
    patient: {
        id: ReactNode;
        profilePicture: string; firstName: string; lastName: string; age: string; gender: string; email: string; phone: string; address: string;
    };
    result: Appointment;
    message: string;
    statusCode: number;
}

// ---- API ----
export const appointmentApi = createApi({
    reducerPath: 'appointmentApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API || 'https://mavenmd-backend.onrender.com/api/',
        credentials: 'include',
        prepareHeaders: (headers) => {
            // Get token from localStorage
            const token = typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null;
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ['Appointments'],
    endpoints: builder => ({
        getAppointments: builder.query<AppointmentsResponse, void>({
            query: () => '/appointments/',
            providesTags: ['Appointments'],
        }),
        getAppointmentById: builder.query<AppointmentByIdResponse, number>({
            query: (id) => `/appointments/${id}`, // fetch appointment by id
            providesTags: ['Appointments'],
        }),
    }),
});

export const { useGetAppointmentsQuery, useGetAppointmentByIdQuery } = appointmentApi;
