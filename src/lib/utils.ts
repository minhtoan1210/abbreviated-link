import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { UseFormSetError } from 'react-hook-form'
import { EntityError } from '@/lib/http'
import { toast } from "@/hooks/use-toast"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const normalizePath = (path: string) => {
  return path.startsWith("/") ? path : `/${path}`;
};

export const handleErrorApi = ({
  error,
  setError,
  duration
}: {
  error: any
  setError?: UseFormSetError<any>
  duration?: number
}) => {
  if (error instanceof EntityError && setError) {
    error.payload.errors.forEach((item: any) => {
      setError(item.field, {
        type: 'server',
        message: item.message
      })
    })
  } else {
    toast({
      title: 'Lỗi',
      description: error?.payload?.message ?? 'Lỗi không xác định',
      variant: 'destructive',
      duration: duration ?? 5000
    })
  }
}

const isBrowser = typeof window !== 'undefined'

export const setAccessTokenToLocalStorage = (value: string) =>
  isBrowser && localStorage.setItem('accessToken', value)

export const setRefreshTokenToLocalStorage = (value: string) =>
  isBrowser && localStorage.setItem('refreshToken', value)

export const removeTokensFromLocalStorage = () => {
  isBrowser && localStorage.removeItem('accessToken')
  isBrowser && localStorage.removeItem('refreshToken')
}

export const getRefreshTokenFromLocalStorage = () =>
  isBrowser ? localStorage.getItem('refreshToken') : null

export const getAccessTokenFromLocalStorage = () =>
  isBrowser ? localStorage.getItem('accessToken') : null



export const setLocalStorage = (key: string, value: any) => {
  if (!key) return;
  isBrowser && localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string) => {
  if (!key) return null;
  return isBrowser ? JSON.parse(localStorage.getItem(key) || "null") : null;
};

export const removeLocalStorage = (key: string) => {
  if (!key) return;
  isBrowser && localStorage.removeItem(key);
};