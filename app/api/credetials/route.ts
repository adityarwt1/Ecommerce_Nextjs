import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import { connectdb } from "@/lib/mongodb";
export async function POST(req: NextRequest) {
  try {
    const token = (await cookies()).get("ecommerce_token")?.value;

    /// if token not found returning the null value
    if (!token) {
      return NextResponse.json({ data: null }, { status: 404 });
    }

    const cookieData: any = jwt.verify(token, process.env.JWT_SECRET as string);
    await connectdb();
    const data = await User.findOne({ email: cookieData?.email }).select(
      "firstname"
    );
    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
