import { apiClient } from '../api-client';

export type Transaction = {
  id: string;
  title: string;
  amount: number;
  isExpense: boolean;
  categoryId: string;
  date: string;
};

export type CreateTransactionPayload = {
  title: string;
  amount: number;
  isExpense: boolean;
  categoryId: string;
  date: string;
};

export const getTransactions = async (): Promise<Transaction[]> => {
  try {
    const response = await apiClient.get<Transaction[]>('/transactions');
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to fetch transactions.',
    );
  }
};

export const createTransaction = async (
  payload: CreateTransactionPayload,
): Promise<Transaction> => {
  try {
    const response = await apiClient.post<Transaction>(
      '/transactions/create',
      payload,
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to create transaction.',
    );
  }
};
