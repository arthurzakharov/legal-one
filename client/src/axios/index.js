import axios from 'axios';

/**
 * Another point for discussion. Personally I prefer to use instances 'cause they allow me to create
 * several one and configure them with interceptors independently. Point to discuss on a code review
 */
export const API = axios.create({
  baseURL: '/api',
  timeout: 1000,
  headers: {'Content-Type': 'application/json;charset=UTF-8'},
});

/**
 * This can be a place for handling various scenarios such as catch a classify different
 * error types. Or format data by normalizing it. Just a point to discuss on code review.
 */
API.interceptors.response.use(
  (config) => ({
    status: config.status,
    data: config.data.payload,
  }),
  (error) => Promise.reject(error)
);
