import { Text, View } from 'react-native';
import { Link } from 'expo-router';

import { Button } from '@ui/button';
import { Input } from '@ui/input';

import { useSignInScreen } from './use-sign-in-screen';

import { styles } from './sign-in-screen.styles';

export const SignInScreen = () => {
  const {
    email,
    password,
    error,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    handleSignIn,
  } = useSignInScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        autoCapitalize="none"
        keyboardType="email-address"
        disabled={isLoading}
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
        disabled={isLoading}
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Button title="Sign In" onPress={handleSignIn} disabled={isLoading} />

      <Link href="/sign-up" style={styles.link}>
        Don&apos;t have an account? Sign Up
      </Link>
    </View>
  );
};
