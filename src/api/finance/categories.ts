import { apiClient } from '@api/api-client';

export interface Category {
  id: string;
  name: string;
}

export interface CreateCategoryPayload {
  name: string;
}

export interface UpdateCategoryPayload {
  name: string;
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await apiClient.get<Category[]>('/categories');
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to fetch categories.',
    );
  }
};

export const createCategory = async (
  payload: CreateCategoryPayload,
): Promise<Category> => {
  try {
    const response = await apiClient.post<Category>('/categories', payload);
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to create category.',
    );
  }
};

export const updateCategory = async (
  categoryId: string,
  payload: UpdateCategoryPayload,
): Promise<Category> => {
  try {
    const response = await apiClient.patch<Category>(
      `/categories/${categoryId}`,
      payload,
    );
    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to update category.',
    );
  }
};

export const deleteCategory = async (categoryId: string): Promise<void> => {
  try {
    await apiClient.delete(`/categories/${categoryId}`);
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'Failed to delete category.',
    );
  }
};
