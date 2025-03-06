import authApiRequest from "@/apiRequests/auth";
import { cookies } from "next/headers";

interface DecodedToken {
  exp: number;
}

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get("refreshToken")?.value;

  console.log("refreshToken", refreshToken);

  if (!refreshToken) {
    return Response.json(
      {
        message: "Không tìm thấy refreshToken",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const res = await authApiRequest.sRefreshToken(refreshToken);

    cookieStore.set("accessToken", res.data.access_token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      expires:  new Date(res.data.access_expires_at),
    });

    cookieStore.set("refreshToken", res.data.refresh_token, {
      path: "/",
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      expires:  new Date(res.data.refresh_expires_at),
    });

    return Response.json(res.data);
  } catch (error: any) {
    console.log("error", error);
    return Response.json(
      {
        message: error.message ?? "Có lỗi xảy ra",
      },
      {
        status: 401,
      }
    );
  }
}
