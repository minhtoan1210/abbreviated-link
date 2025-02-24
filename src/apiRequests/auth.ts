import http from "@/lib/http";
import { LoginBodyType, LoginResType } from "@/schemaValidations/auth.schema";

const authApiRequest = {
  login: (body: LoginBodyType) => http.post<LoginResType>('/auth/login', body),
  auth: (body: { accessToken: string; expiresAt: string | number; refreshToken: string }) =>
    http.post('/api/auth', body, {
      baseUrl: ''
    }),
};

export default authApiRequest;
