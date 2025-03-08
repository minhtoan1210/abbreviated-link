import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/manage"];
const unAuthPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (pathname === "/login" && !accessToken && !refreshToken) {
    return NextResponse.next();
  }

  if (pathname === "/" && accessToken && refreshToken) {
    return NextResponse.redirect(new URL("/manage/dashboard", request.url));
  }

  if (
    privatePaths.some((path) => pathname.startsWith(path)) &&
    !accessToken &&
    !refreshToken
  ) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (
    unAuthPaths.some((path) => pathname.startsWith(path)) &&
    accessToken &&
    refreshToken
  ) {
    return NextResponse.redirect(new URL("/manage/dashboard", request.url));
  }

  if (
    privatePaths.some((path) => pathname.startsWith(path)) &&
    !accessToken &&
    refreshToken
  ) {
    const url = new URL("/logout", request.url);
    url.searchParams.set("refreshToken", refreshToken);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/manage/:path*", "/"],
};
