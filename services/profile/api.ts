import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const profileApi = createApi({
  reducerPath: 'profileApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API || 'https://mavenmd-backend.onrender.com/api/',
    credentials: 'include',
  }),
  tagTypes: ['Auth', 'profile'],
  endpoints: builder => ({
    getUserDetail: builder.query({
      query: ({ id }) => `/patients/${id}`,
      providesTags: ['Auth', 'profile'],
    }),
    getServiceProvide: builder.query({
      query: () => `/service-provider`,
      providesTags: ['Auth', 'profile'],
    }),
  }),
});

export const { useGetUserDetailQuery } = profileApi;
