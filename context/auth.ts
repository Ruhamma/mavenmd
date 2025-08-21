'use client';
import { useEffect } from 'react';
import { useRefreshTokenMutation } from '../services/auth/api';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [refreshToken] = useRefreshTokenMutation();

  useEffect(() => {
    const refreshTokenInterval = setInterval(
      () => {
        refreshToken({});
      },
      14 * 60 * 1000,
    );

    return () => clearInterval(refreshTokenInterval);
  }, [refreshToken]);

  return { children };
};
