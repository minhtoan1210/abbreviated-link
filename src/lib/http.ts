import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import envConfig from "@/config";
import { normalizePath } from "@/lib/utils";

type CustomOptions = AxiosRequestConfig & {
  baseUrl?: string | undefined;
};

const ENTITY_ERROR_STATUS = 422;

type EntityErrorPayload = {
  message: string;
  errors: {
    field: string;
    message: string;
  }[];
};

export class HttpError extends Error {
  status: number;
  payload: {
    message: string;
    [key: string]: any;
  };

  constructor({
    status,
    payload,
    message = "HTTP error",
  }: {
    status: number;
    payload: any;
    message?: string;
  }) {
    super(message);
    this.status = status;
    this.payload = payload;
  }
}

export class EntityError extends HttpError {
  status: typeof ENTITY_ERROR_STATUS;
  payload: EntityErrorPayload;

  constructor({
    status,
    payload,
  }: {
    status: typeof ENTITY_ERROR_STATUS;
    payload: EntityErrorPayload;
  }) {
    super({ status, payload, message: "Lỗi thực thể" });
    this.status = status;
    this.payload = payload;
  }
}

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
  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response) {
      const { status, data } = error.response;
      if (status === ENTITY_ERROR_STATUS) {
        throw new EntityError({
          status: 422,
          payload: data,
        });
      }
      throw new HttpError({
        status,
        payload: data,
      });
    }
    throw error;
  }
);

const request = async <Response>(
  method: "GET" | "POST" | "PUT" | "DELETE",
  url: string,
  options?: CustomOptions
) => {
  const fullUrl = `/${normalizePath(url)}`;
  const config: AxiosRequestConfig = {
    ...options,
    method,
    url: fullUrl,
  };

  if (options?.baseUrl) {
    config.baseURL = options.baseUrl;
  }

  const response = await axiosInstance.request<Response>(config);
  return {
    status: response.status,
    payload: response.data,
  };
};

const http = {
  get<Response>(url: string, options?: Omit<CustomOptions, "data">) {
    return request<Response>("GET", url, options);
  },

  post<Response>(url: string, data: any, options?: Omit<CustomOptions, "data">) {
    return request<Response>("POST", url, { ...options, data });
  },

  put<Response>(url: string, data: any, options?: Omit<CustomOptions, "data">) {
    return request<Response>("PUT", url, { ...options, data });
  },

  delete<Response>(url: string, options?: Omit<CustomOptions, "data">) {
    return request<Response>("DELETE", url, options);
  },
  
};

export default http;
