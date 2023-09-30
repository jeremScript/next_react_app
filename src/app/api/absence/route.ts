import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  return NextResponse.json({ hello: "all absence here !" }, { status: 200 });
}
