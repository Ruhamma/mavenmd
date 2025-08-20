import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API || 'https://mavenmd-backend.onrender.com/api/',
    credentials: 'include',
  }),
  tagTypes: ['Auth', 'profile'],
  endpoints: builder => ({
    login: builder.mutation({
      query: credentials => ({
        url: '/user/login/',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    registerUser: builder.mutation({
      query: userData => ({
        url: '/patients/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Auth'],
    }),
    registerProvider: builder.mutation({
      query: userData => ({
        url: '/service-provider/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/user/logout/',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
    getMe: builder.query({
      query: () => '/user/me/',
      providesTags: ['Auth', 'profile'],
      transformErrorResponse: () => null,
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: '/user/login/refresh/',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useLogoutMutation,
  useGetMeQuery,
  useRefreshTokenMutation,
  useRegisterProviderMutation,
  useRegisterUserMutation,
} = authApi;

export const useAuth = () => {
  const { data: user, isLoading } = useGetMeQuery({});

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
};
