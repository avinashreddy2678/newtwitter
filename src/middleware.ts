import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //   const path = request.nextUrl.pathname;
  //   const isPublicpath =path==="/Signup" || path==="/Login"
  //   const token = request.cookies.get("token")?.value || "";
  //   if (isPublicpath && token) {
  //     return NextResponse.redirect(new URL("/", request.url));
  //   }
  //   if (!isPublicpath && !token) {
  //     return NextResponse.redirect(new URL("/Login", request.url));
  //  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/Signup", "/Login","/","/","/"],
};