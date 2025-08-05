import { connectdb, disconnectdb } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

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

    const hashePassword = await bcrypt.hash(password as string, 5);
    await connectdb();

    const existingUer = await User.findOne({ email });
    if (existingUer) {
      return NextResponse.json(
        { error: "User already exist" },
        { status: 409 }
      );
    }
    const user = new User({
      firstname,
      lastname,
      email,
      phonenumber,
      password: hashePassword,
    });
    await user.save();
    await disconnectdb();
    if (user) {
      const payload = {
        email: user.email,
        _id: user._id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET as string, {
        issuer: "Aditya Rawat",
      });
      (await cookies()).set("ecommerce_token", token, {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production" ? true : false,
        maxAge: 7 * 24 * 60 * 60,
      });

      return NextResponse.json(
        { message: "Signup successfully" },
        { status: 201 }
      );
    } else {
      return NextResponse.json({ error: "Failed to sign in" }, { status: 500 });
    }
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { error: "Internal server issue" },
      { status: 5000 }
    );
  }
}
