import { StyleSheet } from 'react-native';
import { Colors } from '@colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
    color: Colors.darkGrey,
  },
  link: {
    marginTop: 16,
    textAlign: 'center',
    color: Colors.primary,
    fontSize: 16,
  },
  error: {
    marginTop: 8,
    marginBottom: 8,
    textAlign: 'center',
    color: Colors.error,
  },
});
