import api from '@/apis/utils/axiosInstance';

export const postAuth = async (code) => {
  try {
    const response = await api.post(`/auth/kakao/login`, { code });
    return response.data.data;
  } catch (error) {
    console.error('Error during login3:', error);
  }
};
