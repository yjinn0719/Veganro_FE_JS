import axios from 'axios';

// Axios를 사용하여 API와 통신할 수 있는 클라이언트를 생성.
const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  //credentials: true 옵션 -> Access-Control-Allow-Origin에 특정 도메인을 명시 필수(*를 사용할 수 없음)
  withCredentials: false,
});

// Axios 요청 인터셉터 설정 (토큰 필요한 경우)
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('Authorization');
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default api;
