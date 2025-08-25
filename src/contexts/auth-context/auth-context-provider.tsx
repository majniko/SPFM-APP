import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import * as AuthStorage from '@services/auth-storage';
import { AuthContext } from './auth-context';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTokenFromStorage = async () => {
      try {
        const storedToken = await AuthStorage.getToken();
        if (storedToken) {
          setToken(storedToken);
        }
      } catch (e) {
        console.error('Failed to load token from storage', e);
      } finally {
        setIsLoading(false);
      }
    };

    loadTokenFromStorage();
  }, []);

  const signIn = useCallback(async (newToken: string) => {
    setToken(newToken);
    await AuthStorage.saveToken(newToken);
  }, []);

  const signOut = useCallback(async () => {
    setToken(null);
    await AuthStorage.removeToken();
  }, []);

  const contextValue = useMemo(
    () => ({
      token,
      isLoading,
      signIn,
      signOut,
    }),
    [token, isLoading, signIn, signOut],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
