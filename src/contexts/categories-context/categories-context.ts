import { createContext } from 'react';
import { Category } from '@api/finance/categories';

export type CategoriesContextType = {
  categories: Category[];
  isLoading: boolean;
  refetchCategories: () => Promise<void>;
};

export const CategoriesContextDefaults: CategoriesContextType = {
  categories: [],
  isLoading: true,
  refetchCategories: () => Promise.resolve(),
};

export const CategoriesContext = createContext<CategoriesContextType>(
  CategoriesContextDefaults,
);
