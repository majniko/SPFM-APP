import { createContext } from 'react';

export type AuthContextType = {
  token: string | null;
  isLoading: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const AuthContextDefaults: AuthContextType = {
  token: null,
  isLoading: true,
  signIn: () => Promise.resolve(),
  signOut: () => Promise.resolve(),
};

export const AuthContext = createContext<AuthContextType>(AuthContextDefaults);
