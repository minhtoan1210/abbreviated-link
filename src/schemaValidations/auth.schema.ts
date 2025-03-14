import z from "zod";

export const RegisterRes = z.object({
  data: z.object({
    token: z.string(),
    expiresAt: z.string(),
    account: z.object({
      id: z.number(),
      name: z.string(),
      email: z.string(),
    }),
  }),
  message: z.string(),
});

export const LoginBody = z
  .object({
    email: z.string().email(),
    password: z.string().min(6).max(100),
  })
  .strict();

export const LoginRes = z
  .object({
    access_token: z.string(),
    refresh_token: z.string(),
    access_expires_at: z.string(),
    refresh_expires_at: z.string(),
  })
  .strict();

export const RefreshTokenRes = z.object({
  data: z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
  }),
  message: z.string(),
});

export type LoginBodyType = z.TypeOf<typeof LoginBody>;

export type LoginResType = z.TypeOf<typeof LoginRes>;

export type RefreshTokenResType = z.TypeOf<typeof RefreshTokenRes>;
