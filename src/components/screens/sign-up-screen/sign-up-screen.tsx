import { Text, View } from 'react-native';
import { Link } from 'expo-router';

import { Button } from '@ui/button';
import { Input } from '@ui/input';
import { useSignUpScreen } from './use-sign-up-screen';

import { styles } from './sign-up-screen.styles';

export const SignUpScreen = () => {
  const {
    username,
    email,
    password,
    error,
    handleUsernameChange,
    handleEmailChange,
    handlePasswordChange,
    handleSignUp,
  } = useSignUpScreen();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Input
        placeholder="Username"
        value={username}
        onChangeText={handleUsernameChange}
        autoCapitalize="none"
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <Button title="Sign Up" onPress={handleSignUp} />

      <Link href="/sign-in" style={styles.link}>
        Already have an account? Sign In
      </Link>
    </View>
  );
};
