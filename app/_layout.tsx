import React, { useContext, useEffect } from 'react';
import { Slot, useRouter, useSegments } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

import { AuthProvider, AuthContext } from '@contexts/auth-context';

const InitialLayout = () => {
  const { token, isLoading } = useContext(AuthContext);
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) {
      return;
    }

    const inAuthGroup = segments[0] === '(auth)';
    if (token && inAuthGroup) {
      router.replace('/(app)/transactions');
    } else if (!token && !inAuthGroup) {
      router.replace('/(auth)/sign-in');
    }
  }, [token, isLoading, segments, router]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthProvider>
      <InitialLayout />
    </AuthProvider>
  );
}
