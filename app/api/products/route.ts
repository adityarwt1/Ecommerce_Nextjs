import { connectdb, disconnectdb } from "@/lib/mongodb";
import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    await connectdb();
    const products = await Product.find().lean();
    await disconnectdb();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.log((error as Error).message);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
