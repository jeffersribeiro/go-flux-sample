import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getToken } from "../../helpers/userToken";

const api = axios.create({
  baseURL: "http://192.168.1.102:3000",
});

api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const token = await getToken();
    if (!token) return config;

    config.headers = { Authorization: `Bearer ${token}` };

    return config;
  },
  (error: AxiosError) => Promise.reject(error.response?.data)
);

api.interceptors.response.use(
  (response: AxiosResponse) => Promise.resolve(response.data),
  (error: AxiosError) => Promise.reject(error)
);

export default api;
