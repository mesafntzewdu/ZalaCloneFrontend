import axios from 'axios';

export const baseURL = axios.create({
  baseURL: 'http://localhost:5000/api',
  withCredentials: true,
});
//https://zala-back.onrender.com
