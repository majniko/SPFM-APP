import { StyleSheet } from 'react-native';
import { Colors } from '@colors';

export const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
    color: Colors.darkGrey,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  pickerContainer: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.white,
    borderColor: Colors.grey,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    borderBottomColor: Colors.grey,
  },
  noCategoriesContainer: {
    padding: 10,
    marginVertical: 8,
    alignItems: 'center',
    backgroundColor: '#fffbe6',
    borderColor: '#ffe58f',
    borderWidth: 1,
    borderRadius: 5,
  },
  noCategoriesText: {
    textAlign: 'center',
    color: '#8a6d3b',
    marginBottom: 4,
  },
  link: {
    color: Colors.primary,
    textDecorationLine: 'underline',
  },
});
