import http from "@/lib/http";
import {
  LoginBodyType,
  LoginResType,
  RefreshTokenResType,
  RegisterResResType,
} from "@/schemaValidations/auth.schema";
import { JwtPayload } from "jsonwebtoken";

const authApiRequest = {
  refreshTokenRequest: null as
    | Promise<{
        status: number;
        payload: RefreshTokenResType;
      }>
    | any,

  sLogout: (body: any) => http.delete("/auth/logout", body),

  login: (body: LoginBodyType) => http.post<LoginResType>("/auth/login", body),

  register: (body: RegisterResResType) => http.post<any>("/user", body),
  updateProfile: ({ body, id }: { body: RegisterResResType; id: string }) =>
    http.patch<any>(`/user`, body),
  getProfile: (id: string | JwtPayload) => http.get<any>(`/user/${id}`),

  auth: (body: {
    accessToken: string;
    access_expires_at: string | number;
    refreshToken: string;
    refresh_expires_at: string;
  }) =>
    http.post("/api/auth/login", body, {
      baseUrl: "",
    }),

  logout: () => http.post("/api/auth/logout", null, { baseUrl: "" }),

  //Tạm để any
  sRefreshToken: (accessToken: string) =>
    http.get<any>("auth/refresh", {
      headers: {
        "Refresh-Token": `Bearer ${accessToken}`,
      },
    }),

  async refreshToken() {
    if (this.refreshTokenRequest) {
      return this.refreshTokenRequest;
    }

    this.refreshTokenRequest = http.post("/api/auth/refresh-token", null, {
      baseUrl: "",
    });

    const result = await this.refreshTokenRequest;
    this.refreshTokenRequest = null;
    return result;
  },
};

export default authApiRequest;
