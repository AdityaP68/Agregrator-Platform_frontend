// utils/apiClient.js
import axios from 'axios';
import Cookies from 'js-cookie';
import refreshToken from './refreshToken';

const apiClient = axios.create({
  baseURL: 'https://your-api-url',
});

apiClient.interceptors.request.use(
  async (config) => {
    let accessToken = Cookies.get('accessToken');

    if (accessToken) {
      // Check token expiration logic here
      // If the token is expired, refresh the access token
      accessToken = await refreshToken();
    }

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
