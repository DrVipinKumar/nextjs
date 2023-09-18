import { NextResponse } from "next/server";

const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const people = await fetch(`https://api.github.com/users/${id}`);
  const data = await people.json();
  return NextResponse.json(data, { status: 200 });
};

export { GET };
