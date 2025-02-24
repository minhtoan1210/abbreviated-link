export async function POST(request: Request) {
  const body = await request.json();
  const refreshToken = body.refreshToken as string;
  const expiresAt = body.expiresAt as string;
  
  if (!refreshToken) {
    return Response.json(
      { message: "Không nhận được refresh Token" },
      {
        status: 400,
      }
    );
  }

  const expiresDate = new Date(expiresAt).toUTCString()

  return Response.json(body, {
    status: 200,
    headers: {
      'Set-Cookie': `sessionToken=${refreshToken}; Path=/; HttpOnly Expires=${expiresDate}; SameSite=Lax; Secure`
    }
  })
}
