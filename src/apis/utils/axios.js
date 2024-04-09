import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://veganro-backend.vercel.app',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default instance;
