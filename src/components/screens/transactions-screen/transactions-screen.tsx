import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '@colors';

import { GenericModal } from '@ui/generic-modal';
import { TransactionListItem } from '@ui/transactions/transaction-list-item';
import { CreateTransactionForm } from '@ui/transactions/create-transaction-form';

import { useTransactionsScreen } from './use-transactions-screen';
import { styles } from './transactions-screen.styles';

export const TransactionsScreen = () => {
  const {
    transactions,
    categories,
    isLoading,
    modalVisible,
    setModalVisible,
    handleCreateTransaction,
  } = useTransactionsScreen();

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
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const category = categories.find((c) => c.id === item.categoryId);
          return (
            <TransactionListItem
              transaction={item}
              categoryName={category?.name || 'N/A'}
            />
          );
        }}
        ListEmptyComponent={
          <View style={styles.centered}>
            <Text>No transactions yet.</Text>
          </View>
        }
      />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={32} color={Colors.white} />
      </TouchableOpacity>

      <GenericModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="New Transaction">
        <CreateTransactionForm
          onSubmit={handleCreateTransaction}
          onClose={() => setModalVisible(false)}
        />
      </GenericModal>
    </View>
  );
};
