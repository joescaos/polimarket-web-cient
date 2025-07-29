import apiClient from './apiClient';
import { Auth }from './endpoints';

export const login = async (credentials) => {
    try {
      const response = await apiClient.post(Auth.LOGIN, credentials);
      return {
        success: true,
        data: {
          token: response.data.token,
          user: response.data.user,
          id: response.data.id,
        },
      };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.message || 'Error de autenticación',
      };
    }
  };

  export const logout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
  };

