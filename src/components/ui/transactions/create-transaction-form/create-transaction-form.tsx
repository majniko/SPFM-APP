import React from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { Colors } from '@colors';
import { Input } from '@ui/input';
import { Button } from '@ui/button';

import { CreateTransactionPayload } from '@api/finance/transactions';

import { useCreateTransactionForm } from './use-create-transaction-form';

import { styles } from './create-transaction-form.styles';
import { router } from 'expo-router';

export type CreateTransactionFormProps = {
  onClose: () => void;
  onSubmit: (payload: CreateTransactionPayload) => void;
};

export const CreateTransactionForm = ({
  onClose,
  onSubmit,
}: CreateTransactionFormProps) => {
  const {
    amount,
    categoryId,
    isExpense,
    title,
    categories,
    handleAmountChange,
    handleCategoryChange,
    handleCreate,
    handleIsExpenseChange,
    handleTitleChange,
  } = useCreateTransactionForm({ onSubmit });

  const hasNoCategories = categories.length === 0;

  const handleGoToCategories = () => {
    onClose();
    router.push('/(app)/categories');
  };

  return (
    <View>
      <Input
        placeholder="Title"
        value={title}
        onChangeText={handleTitleChange}
      />
      <Input
        placeholder="Amount"
        value={amount}
        onChangeText={handleAmountChange}
        keyboardType="numeric"
      />
      <Text style={styles.label}>Category</Text>

      {hasNoCategories ? (
        <View style={styles.noCategoriesContainer}>
          <Text style={styles.noCategoriesText}>
            You must have at least one category to create a transaction.
          </Text>
          <TouchableOpacity onPress={handleGoToCategories}>
            <Text style={styles.link}>Go to Categories</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Picker
          style={styles.pickerContainer}
          selectedValue={categoryId}
          onValueChange={handleCategoryChange}
          prompt="Select a category">
          {categories.map((cat) => (
            <Picker.Item key={cat.id} label={cat.name} value={cat.id} />
          ))}
        </Picker>
      )}
      <View style={styles.switchContainer}>
        <Text>Income</Text>
        <Switch
          value={isExpense}
          onValueChange={handleIsExpenseChange}
          trackColor={{ false: Colors.success, true: Colors.error }}
          thumbColor={Colors.white}
        />
        <Text>Expense</Text>
      </View>
      <Button title="Create Transaction" onPress={handleCreate} />
      <View style={{ marginTop: 8 }}>
        <Button title="Cancel" onPress={onClose} variant="secondary" />
      </View>
    </View>
  );
};
