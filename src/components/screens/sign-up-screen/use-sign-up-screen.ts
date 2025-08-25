import { useCallback, useState } from 'react';
import { Alert } from 'react-native';
import { router } from 'expo-router';
import { AxiosError } from 'axios';

import { createUser } from '@api/identity/users';

export const useSignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleUsernameChange = useCallback(
    (text: string) => {
      setUsername(text);
      if (error) setError(null);
    },
    [error],
  );

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

  const handleSignUp = useCallback(async () => {
    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    setError(null);
    setIsLoading(true);

    try {
      await createUser({ username, email, password });
      Alert.alert(
        'Account Created',
        'Your account has been created successfully.',
        [{ text: 'OK', onPress: () => router.replace('/sign-in') }],
      );
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
    } finally {
      setIsLoading(false);
    }
  }, [username, email, password]);

  return {
    username,
    email,
    password,
    error,
    isLoading,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSignUp,
  };
};
