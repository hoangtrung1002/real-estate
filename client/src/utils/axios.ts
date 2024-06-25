import { UserState } from "@/store/useUserStore";
import axios from "axios";
import { StorageValue } from "zustand/middleware";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = window.localStorage.getItem("zillow");
    if (token) {
      const formatToken = JSON.parse(token) as StorageValue<UserState>;
      if (formatToken.state.token)
        config.headers.Authorization = `Bearer ${formatToken.state.token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error.response.data;
  }
);

export default axiosClient;
