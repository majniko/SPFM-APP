import { StyleSheet } from 'react-native';
import { Colors } from '@colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGrey,
    backgroundColor: Colors.white,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  category: {
    fontSize: 14,
    color: Colors.grey,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
