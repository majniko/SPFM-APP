import { useState, useCallback, useContext } from 'react';
import { Alert } from 'react-native';

import {
  createCategory,
  updateCategory,
  deleteCategory,
  Category,
} from '@api/finance/categories';
import { CategoriesContext } from '@contexts/categories-context';

export const useCategoriesScreen = () => {
  const { categories, isLoading, refetchCategories } =
    useContext(CategoriesContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<
    Category | undefined
  >(undefined);

  const handleOpenModal = (category?: Category) => {
    setSelectedCategory(category || undefined);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedCategory(undefined);
  };

  const handleCreateOrUpdate = useCallback(
    async (name: string) => {
      try {
        if (selectedCategory) {
          await updateCategory(selectedCategory.id, { name });
        } else {
          await createCategory({ name });
        }
        refetchCategories();
        handleCloseModal();
      } catch (error) {
        Alert.alert('Error', 'Could not save category.');
        console.error(error);
      }
    },
    [selectedCategory, refetchCategories],
  );

  const handleDelete = useCallback(
    async (categoryId: string) => {
      try {
        await deleteCategory(categoryId);
        refetchCategories();
      } catch (error) {
        Alert.alert('Error', 'Could not delete category.');
        console.error(error);
      }
    },
    [refetchCategories],
  );

  return {
    categories,
    isLoading,
    modalVisible,
    selectedCategory,
    handleOpenModal,
    handleCloseModal,
    handleCreateOrUpdate,
    handleDelete,
  };
};
