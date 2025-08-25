import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@colors';
import { CategoryListItem } from '@ui/categories/category-list-item';
import { CreateEditCategoryForm } from '@ui/categories/create-edit-category-form';
import { GenericModal } from '@ui/generic-modal';

import { useCategoriesScreen } from './use-categories-screen';

import { styles } from './categories-screen.styles';

export const CategoriesScreen = () => {
  const {
    categories,
    isLoading,
    modalVisible,
    selectedCategory,
    handleOpenModal,
    handleCloseModal,
    handleCreateOrUpdate,
    handleDelete,
  } = useCategoriesScreen();

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryListItem
            category={item}
            onEdit={() => handleOpenModal(item)}
            onDelete={() => handleDelete(item.id)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.centered}>
            <Text>No categories yet.</Text>
          </View>
        }
      />
      <TouchableOpacity style={styles.fab} onPress={() => handleOpenModal()}>
        <Ionicons name="add" size={32} color={Colors.white} />
      </TouchableOpacity>
      <GenericModal
        visible={modalVisible}
        onClose={handleCloseModal}
        title={selectedCategory ? 'Edit Category' : 'Create Category'}>
        <CreateEditCategoryForm
          onSubmit={handleCreateOrUpdate}
          onClose={handleCloseModal}
          category={selectedCategory}
        />
      </GenericModal>
    </View>
  );
};
