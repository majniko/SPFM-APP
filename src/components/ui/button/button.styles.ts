import { StyleSheet } from 'react-native';
import { Colors } from '@colors';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButton: {
    backgroundColor: Colors.grey,
  },
  iconButton: {
    backgroundColor: 'transparent',
    padding: 5,
    borderRadius: 0,
  },
});
