import { Redirect } from 'expo-router';

export default function Index() {
  // In the future, this screen will check for an authentication token.
  // For now, it will always redirect the user to the sign-in screen.
  // (auth context should then redirect user to the app)
  return <Redirect href="/sign-in" />;
}
