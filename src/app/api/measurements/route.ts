import { NextRequest, NextResponse } from "next/server";
import { mockMeasurements } from "@/lib/mock/data";

export async function GET(req: NextRequest) {
  const clientId = req.nextUrl.searchParams.get("clientId");
  const measurements = clientId
    ? mockMeasurements.filter((m) => m.clientId === clientId)
    : mockMeasurements;
  return NextResponse.json({ measurements });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const measurement = {
    id: `m${Date.now()}`,
    ...body,
    date: body.date ?? new Date().toISOString().split("T")[0],
  };
  return NextResponse.json({ measurement }, { status: 201 });
}
