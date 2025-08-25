import { ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { Alert } from 'react-native';
import { Category, getCategories } from '@api/finance/categories';
import { CategoriesContext } from './categories-context';

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCategories = useCallback(async () => {
    try {
      const data = await getCategories();
      setCategories(data);
    } catch (error) {
      Alert.alert('Error', 'Could not load categories.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const contextValue = useMemo(
    () => ({
      categories,
      isLoading,
      refetchCategories: fetchCategories,
    }),
    [categories, isLoading, fetchCategories],
  );

  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
