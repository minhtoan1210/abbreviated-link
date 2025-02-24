import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const privatePaths = ["/manage", "/"];
const unAuthPaths = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionToken = request.cookies.get("sessionToken")?.value;

  console.log("SessionToken:", sessionToken);
  
  if (pathname === "/login" && !sessionToken) {
    return NextResponse.next();
  }

  if (privatePaths.some((path) => pathname.startsWith(path)) && !sessionToken) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (unAuthPaths.some((path) => pathname.startsWith(path)) && sessionToken) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/manage/:path*", "/"],
};
