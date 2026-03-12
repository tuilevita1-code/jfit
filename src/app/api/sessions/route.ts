import { NextRequest, NextResponse } from "next/server";
import { mockSessions } from "@/lib/mock/data";

export async function GET() {
  return NextResponse.json({ sessions: mockSessions });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const session = {
    id: `s${Date.now()}`,
    ...body,
    status: "pending",
    requestedAt: new Date().toISOString(),
  };
  return NextResponse.json({ session }, { status: 201 });
}

export async function PATCH(req: NextRequest) {
  const body = await req.json() as { id: string; status: "confirmed" | "cancelled" };
  const session = mockSessions.find((s) => s.id === body.id);

  if (!session) {
    return NextResponse.json({ error: "Session not found" }, { status: 404 });
  }

  const updated = { ...session, status: body.status };
  return NextResponse.json({ session: updated });
}
