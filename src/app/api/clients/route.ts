import { NextRequest, NextResponse } from "next/server";
import { mockClients } from "@/lib/mock/data";

export async function GET(req: NextRequest) {
  const search = req.nextUrl.searchParams.get("search")?.toLowerCase();
  const clients = search
    ? mockClients.filter((c) =>
        `${c.firstName} ${c.lastName}`.toLowerCase().includes(search)
      )
    : mockClients;
  return NextResponse.json({ clients });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const client = {
    id: `c${Date.now()}`,
    trainerId: "t1",
    ...body,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json({ client }, { status: 201 });
}
