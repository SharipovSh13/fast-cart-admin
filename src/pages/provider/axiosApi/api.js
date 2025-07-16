import axios from "axios";
import { getToken } from "../tokenAPI/api";
export const axiosApiURL = axios.create({
  baseURL: import.meta.env.VITE_APP_API,
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

axiosApiURL.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
