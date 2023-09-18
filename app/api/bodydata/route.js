import { NextResponse } from "next/server";

const POST = async (request) => {
  const bodydata = await request.json();
  return NextResponse.json({ bodydata }, { status: 200 });
};

export { POST };
