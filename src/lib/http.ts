import axios, { AxiosRequestConfig, AxiosError } from "axios";
import envConfig from "@/config";
import { normalizePath } from "@/lib/utils";

const ENTITY_ERROR_STATUS = 422;
const AUTHENTICATION_ERROR_STATUS = 401;

export class HttpError extends Error {
  status: number;
  payload: any;
  constructor(status: number, payload: any, message = "Lỗi HTTP") {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}

export class EntityError extends HttpError {
  constructor(payload: any) {
    super(ENTITY_ERROR_STATUS, payload, "Lỗi thực thể");
  }
}

const isClient = typeof window !== "undefined";

const axiosInstance = axios.create({
  baseURL: envConfig.NEXT_PUBLIC_API_ENDPOINT,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (isClient) {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      const { status, data } = error.response;
      if (status === ENTITY_ERROR_STATUS) {
        return Promise.reject(new EntityError(data));
      } else if (status === AUTHENTICATION_ERROR_STATUS) {
        console.log("Lỗi 401");
      }
      return Promise.reject(new HttpError(status, data));
    }
    return Promise.reject(error);
  }
);

const http = {
  get<Response>(url: string, config?: AxiosRequestConfig & { baseUrl?: string }) {
    return axiosInstance.get<Response>(normalizePath(url), {
      ...config,
      baseURL: config?.baseUrl ?? envConfig.NEXT_PUBLIC_API_ENDPOINT,
    });
  },
  post<Response>(url: string, body: any, config?: AxiosRequestConfig & { baseUrl?: string }) {
    return axiosInstance.post<Response>(normalizePath(url), body, {
      ...config,
      baseURL: config?.baseUrl ?? envConfig.NEXT_PUBLIC_API_ENDPOINT,
    });
  },
  put<Response>(url: string, body: any, config?: AxiosRequestConfig & { baseUrl?: string }) {
    return axiosInstance.put<Response>(normalizePath(url), body, {
      ...config,
      baseURL: config?.baseUrl ?? envConfig.NEXT_PUBLIC_API_ENDPOINT,
    });
  },
  delete<Response>(url: string, config?: AxiosRequestConfig & { baseUrl?: string }) {
    return axiosInstance.delete<Response>(normalizePath(url), {
      ...config,
      baseURL: config?.baseUrl ?? envConfig.NEXT_PUBLIC_API_ENDPOINT,
    });
  },
};

export default http;
