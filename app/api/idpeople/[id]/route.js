import { NextResponse } from "next/server";

const GET = async (request, rparams) => {
  const { id } = rparams.params;
  const people = await fetch(`https://api.github.com/users/${id}`);
  const data = await people.json();
  return NextResponse.json(data, { status: 200 });
};

export { GET };
