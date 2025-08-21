import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API || 'https://mavenmd-backend.onrender.com/api/',
    credentials: 'include',
  }),
  tagTypes: ['Auth', 'profile', 'appointment'],
  endpoints: builder => ({
    getUserDetail: builder.query({
      query: ({ id }) => `/patients/${id}`,
      providesTags: ['Auth', 'profile'],
    }),
    getServiceProvide: builder.query({
      query: () => `/service-provider`,
      providesTags: ['Auth', 'profile'],
    }),
    getServiceProviderDetail: builder.query({
      query: id => `/service-provider/profile-preview/${id}`,
      providesTags: ['Auth', 'profile'],
    }),
    bookAppointment: builder.mutation({
      query: ({ ...data }) => ({
        url: `/appointments/book`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['appointment'],
    }),
  }),
});

export const {
  useGetUserDetailQuery,
  useGetServiceProvideQuery,
  useGetServiceProviderDetailQuery,
  useBookAppointmentMutation,
} = profileApi;
