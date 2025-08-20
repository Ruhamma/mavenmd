import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

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
    gender: string | null;
    age: number | null;
    Dob: string | null;
    insurances: string[] | null;
    BloodType: string | null;
    Address: string | null;
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
    confirmAppointment: builder.mutation<
      { result: { id: number; status: string }; message: string; statusCode: number },
      number
    >({
      query: (id) => ({
        url: `/appointments/${id}/confirm`,
        method: 'PUT',
      }),
      invalidatesTags: ['Appointments'],
    }),
    cancelAppointment: builder.mutation<
      { result: { id: number; status: string }; message: string; statusCode: number },
      number
    >({
      query: (id) => ({
        url: `/appointments/${id}/cancel`,
        method: 'PUT',
      }),
      invalidatesTags: ['Appointments'],
    }),
    updateSessionNotes: builder.mutation<
      { result: { id: number; sessionNotes: SessionNotes }; message: string; statusCode: number },
      { id: number; sessionNotes: SessionNotes }
    >({
      query: ({ id, sessionNotes }) => ({
        url: `/appointments/${id}/session-notes`,
        method: 'PUT',
        body: { sessionNotes },
      }),
      invalidatesTags: ['Appointments'],
    }),
    completeAppointment: builder.mutation<
      { result: { id: number; status: string }; message: string; statusCode: number },
      number
    >({
      query: (id) => ({
        url: `/appointments/${id}/complete`,
        method: 'PUT',
      }),
      invalidatesTags: ['Appointments'],
    }),
  }),
});

export const {
  useGetAppointmentsQuery,
  useGetAppointmentByIdQuery,
  useConfirmAppointmentMutation,
  useCancelAppointmentMutation,
  useUpdateSessionNotesMutation,
  useCompleteAppointmentMutation,
  
} = appointmentApi;
