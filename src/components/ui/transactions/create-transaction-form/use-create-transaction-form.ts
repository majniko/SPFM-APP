import { useContext, useState, useCallback } from 'react';
import { Alert } from 'react-native';

import { CreateTransactionPayload } from '@api/finance/transactions';
import { CategoriesContext } from '@contexts/categories-context';

export type UseCreateTransactionFormProps = {
  onSubmit: (payload: CreateTransactionPayload) => void;
};

export const useCreateTransactionForm = ({
  onSubmit,
}: UseCreateTransactionFormProps) => {
  const { categories } = useContext(CategoriesContext);
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [categoryId, setCategoryId] = useState<string | undefined>(
    categories[0]?.id,
  );
  const [isExpense, setIsExpense] = useState(true);

  const handleTitleChange = useCallback((text: string) => {
    setTitle(text);
  }, []);

  const handleAmountChange = useCallback((text: string) => {
    if (/^\d*\.?\d*$/.test(text) || text === '') {
      setAmount(text);
    }
  }, []);

  const handleCategoryChange = useCallback((value: string | undefined) => {
    setCategoryId(value);
  }, []);

  const handleIsExpenseChange = useCallback((value: boolean) => {
    setIsExpense(value);
  }, []);

  const handleCreate = () => {
    if (!title || !amount || !categoryId) {
      Alert.alert('Validation Error', 'Please fill all fields.');
      return;
    }
    onSubmit({
      title,
      amount: parseFloat(amount),
      categoryId,
      isExpense,
      date: new Date().toISOString(),
    });
    setTitle('');
    setAmount('');
  };

  return {
    title,
    amount,
    categoryId,
    isExpense,
    categories,
    handleTitleChange,
    handleAmountChange,
    handleCategoryChange,
    handleIsExpenseChange,
    handleCreate,
  };
};
