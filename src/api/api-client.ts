import axios from 'axios';
import { getToken } from '@services/auth-storage';

// For now, I hardcoded the URL. In the future, this can be loaded
// from an environment variable for easy switching between dev and prod.
const API_URL = 'https://spfm-be.onrender.com';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = await getToken();

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
