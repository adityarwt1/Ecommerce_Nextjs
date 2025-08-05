import { connectdb, disconnectdb } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { issuername } from "@/utils/commonvariable";
import { cookies } from "next/headers";
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "email or password required" },
        { status: 400 }
      );
    }
    await connectdb();
    const user = await User.findOne({ email });
    await disconnectdb();
    // returning the user get back when not found the userdata
    if (!user) {
      return NextResponse.json({ error: "User not found " }, { status: 404 });
    }

    const passwordtrue = await bcrypt.compare(password, user.password);
    if (!passwordtrue) {
      return NextResponse.json({ error: "Wrong password" }, { status: 400 });
    }

    // saving into the cookie
    const tokenpayload = {
      email: user.email,
      _id: user._id,
    };
    const token = jwt.sign(tokenpayload, process.env.JWT_SECRET as string, {
      issuer: issuername,
    });

    (await cookies()).set("ecommerce_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production" ? true : false,
      maxAge: 7 * 24 * 60 * 60,
    });
    return NextResponse.json(
      { message: "Signend in successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { error: "Internal server issue" },
      { status: 500 }
    );
  }
}
