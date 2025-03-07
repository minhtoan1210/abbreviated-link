import axios, { AxiosRequestConfig, AxiosError } from "axios";
import envConfig from "@/config";
import {
  getAccessTokenFromLocalStorage,
  normalizePath,
  removeTokensFromLocalStorage,
  setAccessTokenToLocalStorage,
  setRefreshTokenToLocalStorage,
} from "@/lib/utils";
import { redirect } from "next/navigation";

const ENTITY_ERROR_STATUS = 422;
const AUTHENTICATION_ERROR_STATUS = 401;

export class HttpError extends Error {
  status: number;
  payload: any;
  constructor(status: number, payload: any, message?: string) {
    super(message || payload?.message || "Lỗi HTTP");
    this.status = status;
    this.payload = payload;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
  toString() {
    return this.message; 
  }
}

export class EntityError extends HttpError {
  constructor(payload: any) {
    super(ENTITY_ERROR_STATUS, payload, payload?.message || "Lỗi thực thể");
    Object.setPrototypeOf(this, EntityError.prototype);
  }
}

const isClient = typeof window !== "undefined";
let clientLogoutRequest: null | Promise<any> = null;

const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (isClient) {
    const accessToken = getAccessTokenFromLocalStorage();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (isClient) {
      const normalizeUrl = normalizePath(response.config.url || "");
      console.log("normalizeUrl", normalizeUrl)
      if (normalizeUrl === "/api/auth/login") {
        const { accessToken, refreshToken } = response.data;
        setAccessTokenToLocalStorage(accessToken);
        setRefreshTokenToLocalStorage(refreshToken);
      }

      if (normalizeUrl === "/api/auth/logout") {
        removeTokensFromLocalStorage();
      }
    }
    return response;
  },
  async (error: AxiosError) => {
    if (error.response) {
      const { status, data, config } = error.response;
      if (status === ENTITY_ERROR_STATUS) {
        return Promise.reject(new EntityError(data));
      } else if (status === AUTHENTICATION_ERROR_STATUS) {
        if (isClient) {
          if (!clientLogoutRequest) {
            console.log("error", error)
            clientLogoutRequest = fetch("/api/auth/logout", {
              method: "POST",
              body: null,
            });

            try {
              await clientLogoutRequest;
            } catch (error) {
            } finally {
              removeTokensFromLocalStorage();
              clientLogoutRequest = null;
              
              // location.href = "/login";
            }
          }
        } else {
          const accessToken = (config?.headers as any)?.Authorization?.split(
            "Bearer "
          )[1];
          redirect(`/logout?accessToken=${accessToken}`);
        }
      }
      return Promise.reject(new HttpError(status, data));
    }
    return Promise.reject(error);
  }
);

const http = {
  get<Response>(
    url: string,
    config?: AxiosRequestConfig & { baseUrl?: string }
  ) {
    return axiosInstance.get<Response>(normalizePath(url), {
      ...config,
      baseURL:
        config?.baseUrl === undefined
          ? envConfig.NEXT_PUBLIC_API_ENDPOINT
          : config.baseUrl,
    });
  },
  post<Response>(
    url: string,
    body: any,
    config?: AxiosRequestConfig & { baseUrl?: string }
  ) {
    return axiosInstance.post<Response>(normalizePath(url), body, {
      ...config,
      baseURL:
        config?.baseUrl === undefined
          ? envConfig.NEXT_PUBLIC_API_ENDPOINT
          : config.baseUrl,
    });
  },
  put<Response>(
    url: string,
    body: any,
    config?: AxiosRequestConfig & { baseUrl?: string }
  ) {
    return axiosInstance.put<Response>(normalizePath(url), body, {
      ...config,
      baseURL:
        config?.baseUrl === undefined
          ? envConfig.NEXT_PUBLIC_API_ENDPOINT
          : config.baseUrl,
    });
  },
  patch<Response>(
    url: string,
    body: any,
    config?: AxiosRequestConfig & { baseUrl?: string }
  ) {
    return axiosInstance.patch<Response>(normalizePath(url), body, {
      ...config,
      baseURL:
        config?.baseUrl === undefined
          ? envConfig.NEXT_PUBLIC_API_ENDPOINT
          : config.baseUrl,
    });
  },
  delete<Response>(
    url: string,
    config?: AxiosRequestConfig & { baseUrl?: string }
  ) {
    return axiosInstance.delete<Response>(normalizePath(url), {
      ...config,
      baseURL:
        config?.baseUrl === undefined
          ? envConfig.NEXT_PUBLIC_API_ENDPOINT
          : config.baseUrl,
    });
  },
};

export default http;
