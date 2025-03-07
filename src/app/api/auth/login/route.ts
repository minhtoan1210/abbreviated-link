import { cookies } from "next/headers";
import jwt from 'jsonwebtoken'

export async function POST(request: Request) {
  const body = await request.json();
  const cookieStore = await cookies();

  const refreshToken = body.refreshToken as string;
  const accessToken = body.accessToken as string;

  const decodedAccessToken = jwt.decode(accessToken) as { exp: number }
  const decodedRefreshToken = jwt.decode(refreshToken) as { exp: number }

  if (!refreshToken || !accessToken) {
    return Response.json(
      { message: "Không nhận được Token" },
      {
        status: 400,
      }
    );
  }

  cookieStore.set("accessToken", body.accessToken, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    expires: decodedAccessToken.exp * 1000,
  });

  cookieStore.set("refreshToken", body.refreshToken, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    expires: decodedRefreshToken.exp * 1000,
  });

  return Response.json({
    accessToken,
    refreshToken
  });
}
