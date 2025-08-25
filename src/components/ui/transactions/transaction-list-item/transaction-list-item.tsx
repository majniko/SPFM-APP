import { View, Text } from 'react-native';
import { Colors } from '@colors';
import { Transaction } from '@api/finance/transactions';

import { styles } from './transaction-list-item.styles';

interface TransactionListItemProps {
  transaction: Transaction;
  categoryName: string;
}

export const TransactionListItem = ({
  transaction,
  categoryName,
}: TransactionListItemProps) => {
  const amountColor = transaction.isExpense ? Colors.error : Colors.success;
  const sign = transaction.isExpense ? '-' : '+';
  const formattedAmount = `${sign}$${transaction.amount.toFixed(2)}`;

  return (
    <View style={styles.container}>
      <View style={styles.details}>
        <Text style={styles.title}>{transaction.title}</Text>
        <Text style={styles.category}>{categoryName}</Text>
      </View>
      <Text style={[styles.amount, { color: amountColor }]}>
        {formattedAmount}
      </Text>
    </View>
  );
};
