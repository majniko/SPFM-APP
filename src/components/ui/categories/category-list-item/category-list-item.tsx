import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@colors';
import { Button } from '@ui/button';
import { Category } from '@api/finance/categories';

import { styles } from './category-list-item.styles';

interface CategoryListItemProps {
  category: Category;
  onEdit: () => void;
  onDelete: () => void;
}

export const CategoryListItem = ({
  category,
  onEdit,
  onDelete,
}: CategoryListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{category.name}</Text>
      <View style={styles.buttons}>
        <Button title="Edit" onPress={onEdit} variant="icon">
          <Ionicons name="pencil" size={20} color={Colors.primary} />
        </Button>
        <Button title="Delete" onPress={onDelete} variant="icon">
          <Ionicons name="trash-bin" size={20} color={Colors.error} />
        </Button>
      </View>
    </View>
  );
};
