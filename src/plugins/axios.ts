import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

let config: AxiosRequestConfig = {
  // baseURL: process.env.baseURL || process.env.apiUrl || ""
  // timeout: 60 * 1000, // Timeout
  // withCredentials: true, // Check cross-site Access-Control
};

const _axios: AxiosInstance = axios.create(config);

_axios.interceptors.request.use(
  function (config: AxiosRequestConfig): AxiosRequestConfig {
    // Do something before request is sent

    const token = localStorage.getItem('accessToken')

    if (token != null)
      config.headers['Authorization'] = `Bearer ${token}`
    return config;
  },
  function (error: AxiosError): Promise<AxiosError> {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response: AxiosResponse): AxiosResponse {
    // Do something with response data
    return response;
  },
  function (error: AxiosError): Promise<AxiosError> {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default _axios
