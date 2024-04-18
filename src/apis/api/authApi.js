import api from '@/apis/utils/axiosInstance';

export const postAuth = async (code) => {
  try {
    const response = await api.post(`/auth/kakao/login`, { code });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const postEmailAuth = async (EmailAuthData) => {
  try {
    const response = await api.post(`/login`, EmailAuthData);
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
};
