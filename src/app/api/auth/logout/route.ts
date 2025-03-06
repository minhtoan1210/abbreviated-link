import authApiRequest from "@/apiRequests/auth";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  if (!accessToken || !refreshToken) {
    return Response.json(
      {
        message: "Không nhận được access token hoặc refresh token",
      },
      {
        status: 200,
      }
    );
  }
  try {
    console.log()
    const result = await authApiRequest.sLogout({
      accessToken,
      refreshToken
    })

    console.log("result", result)
    // return Response.json(result)
    
    return Response.json({
      message: "Logout thành công",
    });
  } catch (error) {
    console.log("error", error)
    return Response.json(
      {
        message: "Lỗi khi gọi API đến server backend",
      },
      {
        status: 200,
      }
    );
  }
}
