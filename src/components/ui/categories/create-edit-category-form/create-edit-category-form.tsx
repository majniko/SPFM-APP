import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { Input } from '@ui/input';
import { Button } from '@ui/button';
import { Category } from '@api/finance/categories';

import { styles } from './create-edit-category-form.styles';

interface CreateEditCategoryFormProps {
  onSubmit: (name: string) => void;
  onClose: () => void;
  category?: Category | null;
}

export const CreateEditCategoryForm = ({
  onSubmit,
  onClose,
  category,
}: CreateEditCategoryFormProps) => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (category) {
      setName(category.name);
    }
  }, [category]);

  const handleSubmit = () => {
    if (name.trim()) {
      onSubmit(name.trim());
    }
  };

  return (
    <View>
      <Input placeholder="Category Name" value={name} onChangeText={setName} />
      <View style={styles.buttonContainer}>
        <Button title={category ? 'Update' : 'Create'} onPress={handleSubmit} />
      </View>
      <View style={styles.cancelButtonContainer}>
        <Button title="Cancel" onPress={onClose} variant="secondary" />
      </View>
    </View>
  );
};
