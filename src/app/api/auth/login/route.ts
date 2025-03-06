import { cookies } from "next/headers";

export async function POST(request: Request) {
  const body = await request.json();
  const cookieStore = await cookies();

  const refreshToken = body.refreshToken as string;
  const accessToken = body.accessToken as string;

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
    expires: new Date(body.access_expires_at),
  });

  cookieStore.set("refreshToken", body.refreshToken, {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: true,
    expires: new Date(body.refresh_expires_at),
  });

  return Response.json({
    accessToken,
    refreshToken
  });
}
