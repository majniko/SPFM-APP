import { apiClient } from '../api-client';

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResponse = {
  access_token: string;
};

export const postLogin = async (
  payload: LoginPayload,
): Promise<LoginResponse> => {
  const response = await apiClient.post<LoginResponse>('/auth/login', payload);
  return response.data;
};
