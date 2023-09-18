import { NextResponse } from "next/server";

const middleware = async (request) => {
  //   if (
  //     request.nextUrl.pathname !== "/formdata" ||
  //     request.nextUrl.pathname !== "/"
  //   )
  return NextResponse.redirect(new URL("/formdata", request.url));
};

export const config = {
  matcher: ["/services:path*", "/aboutus:path*"],
};
export { middleware };
