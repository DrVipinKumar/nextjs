import { NextResponse } from "next/server";

const POST = async (request) => {
  const formData = await request.formData();
  const username = formData.get("username");
  const pass = formData.get("pass");
  return NextResponse.json({ username, pass }, { status: 200 });
};

export { POST };
