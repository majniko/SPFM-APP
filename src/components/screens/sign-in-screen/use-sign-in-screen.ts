import { useCallback, useContext, useState } from 'react';
import { AxiosError } from 'axios';

import { postLogin } from '@api/identity/auth';
import { AuthContext } from '@contexts/auth-context';

export const useSignInScreen = () => {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEmailChange = useCallback(
    (text: string) => {
      setEmail(text);
      if (error) setError(null);
    },
    [error],
  );

  const handlePasswordChange = useCallback(
    (text: string) => {
      setPassword(text);
      if (error) setError(null);
    },
    [error],
  );

  const handleSignIn = useCallback(async () => {
    setError(null);
    try {
      const { access_token } = await postLogin({ username: email, password });
      await signIn(access_token);
    } catch (err) {
      let errorMessage = 'An unexpected error occurred.';
      if (err instanceof AxiosError && err.response?.data) {
        const nestedMessage = err.response.data.message?.message;
        if (typeof nestedMessage === 'string') {
          errorMessage = nestedMessage;
        } else if (typeof err.response.data.message === 'string') {
          errorMessage = err.response.data.message;
        }
      }
      setError(errorMessage);
    }
  }, [email, password, signIn]);

  return {
    email,
    password,
    error,
    handleEmailChange,
    handlePasswordChange,
    handleSignIn,
  };
};
