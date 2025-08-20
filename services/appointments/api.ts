import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ReactNode } from 'react';
interface SessionNotes {
  symptoms: string;
  diagnosis: string;
  treatmentPlan: string;
  examinationFindings: string;
}

export interface Appointment {
  id: number;
  patientId: number;
  serviceProviderId: number;
  appointmentDate: string;
  status: string;
  type: string;
  symptoms: string[];
  complaints: string;
  sessionNotes: SessionNotes;
  paymentMade: boolean;
  createdAt: string;
  updatedAt: string;
  Patient: {
    id: number;
    userId: number;
    gender: string;
    age: number;
    Dob: string;
    insurances: string[];
    BloodType: string;
    Address: string;
    user: {
      id: number;
      fullName: string;
      email: string;
      phoneNumber: string;
      role: string;
    };
  };
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
  result: {
    appointments: Appointment[]; // <-- API still wraps it in an array
    count: number;
  };
  message: string;
  statusCode: number;
}


// ---- API ----
export const appointmentApi = createApi({
  reducerPath: 'appointmentApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API || 'https://mavenmd-backend.onrender.com/api/',
    credentials: 'include',
  }),
  tagTypes: ['Appointments'],
  endpoints: (builder) => ({
    getAppointments: builder.query<AppointmentsResponse, void>({
      query: () => '/appointments',
      providesTags: ['Appointments'],
    }),
    getAppointmentById: builder.query<AppointmentByIdResponse, number>({
      query: (id) => `/appointments/${id}`,
      providesTags: ['Appointments'],
    }),
  }),
});


export const { useGetAppointmentsQuery, useGetAppointmentByIdQuery } = appointmentApi;