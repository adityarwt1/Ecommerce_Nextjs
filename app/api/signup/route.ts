import { connectdb } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { firstname, lastname, email, password, phonenumber } =
      await req.json();
    if (!firstname || !lastname || !email || !password || !phonenumber) {
      return NextResponse.json(
        { error: "field are required" },
        { status: 400 }
      );
    }

    await connectdb()
    const user = new 
  } catch (error) {}
}
