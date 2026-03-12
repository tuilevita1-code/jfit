import { NextRequest, NextResponse } from "next/server";

const PUBLIC_PATHS = ["/", "/about", "/services", "/pricing", "/contact", "/book", "/sign-in", "/sign-up", "/privacy", "/terms", "/disclaimer"];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths and static files
  if (
    PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/")) ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const auth = request.cookies.get("jfit-auth")?.value;

  if (!auth) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  // Trainer trying to access portal → redirect to dashboard
  if (auth === "trainer" && pathname.startsWith("/portal")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // Client trying to access dashboard → redirect to portal
  if (auth === "client" && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/portal", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
