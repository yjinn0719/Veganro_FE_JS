import axios from 'axios';

// Axios를 사용하여 API와 통신할 수 있는 클라이언트를 생성.
export const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Axios 요청 인터셉터 설정 (토큰 필요한 경우)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Authorization');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
