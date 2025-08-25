import { StyleSheet } from 'react-native';
import { Colors } from '@colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
  },
  name: {
    fontSize: 16,
  },
  buttons: {
    flexDirection: 'row',
  },
});
