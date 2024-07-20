import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'https://zala-back.onrender.com/api',
  withCredentials: true,
});
//https://zala-back.onrender.com
