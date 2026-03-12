import { NextRequest, NextResponse } from "next/server";
import { mockPrograms } from "@/lib/mock/data";

export async function GET() {
  return NextResponse.json({ programs: mockPrograms });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const program = {
    id: `p${Date.now()}`,
    ...body,
    status: "active",
    workouts: body.workouts ?? [],
  };
  return NextResponse.json({ program }, { status: 201 });
}
