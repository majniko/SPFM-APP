import { apiClient } from '../api-client';

export interface CreateUserPayload {
  username: string;
  email: string;
  password: string;
}

export interface CreateUserResponse {
  message: string;
}

export const createUser = async (
  payload: CreateUserPayload,
): Promise<CreateUserResponse> => {
  const response = await apiClient.post<CreateUserResponse>(
    '/users/create',
    payload,
  );
  return response.data;
};
