import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const api = setupCache(instance, { location: 'client' });

export default api;
