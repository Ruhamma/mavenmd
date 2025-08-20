import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface User {
  fullName: string;
  id: number;
  email: string;
  username: string;
  role: {
    id: number;
    name: string;
    permissions: string;
  };
  created_at?: string;
  updated_at?: string;
  profile_picture?: string;
  first_name?: string;
  last_name?: string;
  is_active?: string;
  phone_number?: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  username: string;
  password: string;
  confirm_password: string;
  role: string;
}

interface AuthResponse {
  user: User;
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API || 'https://mavenmd-backend.onrender.com/api/',
    credentials: 'include',
  }),
  tagTypes: ['Auth', 'profile'],
  endpoints: builder => ({
    login: builder.mutation<AuthResponse, LoginRequest>({
      query: credentials => ({
        url: '/user/login/',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['Auth'],
    }),
    registerUser: builder.mutation<AuthResponse, RegisterRequest>({
      query: userData => ({
        url: '/patient/register-patient',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Auth'],
    }),
    registerProvider: builder.mutation<AuthResponse, RegisterRequest>({
      query: userData => ({
        url: '/service-provider/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Auth'],
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: '/user/logout/',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
    getMe: builder.query<User | null, void>({
      query: () => '/user/me/',
      providesTags: ['Auth', 'profile'],
      transformErrorResponse: () => null,
    }),
    refreshToken: builder.mutation<void, void>({
      query: () => ({
        url: '/user/login/refresh/',
        method: 'POST',
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useGetMeQuery, useRefreshTokenMutation } =
  authApi;

export const useAuth = () => {
  const { data: user, isLoading } = useGetMeQuery();

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
  };
};
