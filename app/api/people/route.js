import { NextResponse } from "next/server";

const GET = async () => {
  const people = await fetch("https://api.github.com/users");
  const data = await people.json();
  return NextResponse.json(data, { status: 200 });
};

export { GET };
