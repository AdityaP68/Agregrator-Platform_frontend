// utils/refreshToken.js
import axios from 'axios';
import Cookies from 'js-cookie';

const refreshToken = async () => {
  const refreshToken = Cookies.get('refreshToken');

  if (!refreshToken) {
    return null;
  }

  try {
    const response = await axios.post('https://your-api-url/refresh', {
      refreshToken,
    });

    if (response.status === 200) {
      const newAccessToken = response.data.accessToken;
      Cookies.set('accessToken', newAccessToken, { expires: 1 }); // Expires in 1 day
      return newAccessToken;
    }
  } catch (error) {
    // Handle request error
  }

  return null;
};

export default refreshToken;
