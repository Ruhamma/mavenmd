import { configureStore } from '@reduxjs/toolkit';
import { api } from '../services/api';
import { authApi } from '@/services/auth/api';
import { appointmentApi } from '@/services/appointments/api';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [authApi.reducerPath]: authApi.reducer,
        [appointmentApi.reducerPath]: appointmentApi.reducer,


  },
middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(api.middleware, authApi.middleware, appointmentApi.middleware),
});
