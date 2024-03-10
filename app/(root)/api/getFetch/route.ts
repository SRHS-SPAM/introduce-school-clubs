import { NextResponse } from "next/server";

interface res {}

interface ClubType {
  name: string;
  category: string;
  simpledescription: string;
  description: string;
  projectname: string[];
  projectdescription: string[];
  person: string;
  sns: string[];
  baneriamge: string;
  logoimage: string;
  photoimage: string;
  uuid: string;
}

export async function POST(request: Request) {
  const res = (await request.json()) as any;

  try {
    const data: ClubType = await fetch(
      `http://52.79.236.16:9000/feed/${res.link}`
    ).then((response) => response.json());

    return new Response(JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
  return new Response("failed read body", { status: 500 });
}
