import { useState, useEffect, useCallback, useContext } from 'react';
import { Alert } from 'react-native';

import {
  getTransactions,
  createTransaction,
  Transaction,
  CreateTransactionPayload,
} from '@api/finance/transactions';
import { CategoriesContext } from '@contexts/categories-context';

export const useTransactionsScreen = () => {
  const { categories, isLoading: areCategoriesLoading } =
    useContext(CategoriesContext);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setIsLoading(true);
      const transactionsData = await getTransactions();

      const sortedTransactions = transactionsData.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      );

      setTransactions(sortedTransactions);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch data.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleCreateTransaction = useCallback(
    async (payload: CreateTransactionPayload) => {
      try {
        await createTransaction(payload);
        setModalVisible(false);
        fetchData();
      } catch (error) {
        Alert.alert('Error', 'Failed to create transaction.');
        console.error(error);
      }
    },
    [fetchData],
  );

  return {
    transactions,
    categories,
    isLoading: isLoading || areCategoriesLoading,
    modalVisible,
    setModalVisible,
    handleCreateTransaction,
  };
};
