import api from '@/apis/utils/axiosInstance';

export const postAuth = async (code) => {
  try {
    const response = await api.post(`/auth/kakao/login`, {
      code: code,
    });
    return response.data.data;
  } catch (error) {
    console.error('Error during login:', error);
    alert('로그인 중 문제가 발생했습니다. 관리자에게 문의하세요.');
  }
};
