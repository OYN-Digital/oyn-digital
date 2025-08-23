import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const sectionPaths = new Set([
  "/services",
  "/portfolio",
  "/pricing",
  "/contact",
]);

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Kalau path adalah salah satu section, serve homepage tapi biarkan URL tetap /services, dst.
  if (sectionPaths.has(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = "/"; // render halaman root
    return NextResponse.rewrite(url); // alamat di browser tetap /services
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/services", "/portfolio", "/pricing", "/contact"],
};
