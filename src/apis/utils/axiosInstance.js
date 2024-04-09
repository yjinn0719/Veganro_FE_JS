import axios from 'axios';

// Axios를 사용하여 API와 통신할 수 있는 클라이언트를 생성.
export const api = axios.create({
  baseURL: process.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem('Authorization')}`,
  },
  withCredentials: true,
});
