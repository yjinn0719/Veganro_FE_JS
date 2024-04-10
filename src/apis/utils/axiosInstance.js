import axios from 'axios';

// Axios를 사용하여 API와 통신할 수 있는 클라이언트를 생성.
const api = axios.create({
  baseURL: 'https://veganro-backend.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
  //credentials: true 옵션 -> Access-Control-Allow-Origin에 특정 도메인을 명시 필수(*를 사용할 수 없음)
  withCredentials: false,
});

export default api;
