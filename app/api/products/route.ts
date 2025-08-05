import { connectdb } from "@/lib/mongodb";
import Product from "@/models/products";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    
    await connectdb(); // ✅ important

    const products = await Product.find({}).lean();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 }
    );
  }
}
