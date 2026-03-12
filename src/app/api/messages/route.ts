import { NextRequest, NextResponse } from "next/server";
import { mockMessages } from "@/lib/mock/data";

export async function GET(req: NextRequest) {
  const clientId = req.nextUrl.searchParams.get("clientId");
  const messages = clientId
    ? mockMessages.filter(
        (m) =>
          (m.senderId === clientId && m.receiverId === "t1") ||
          (m.senderId === "t1" && m.receiverId === clientId)
      )
    : mockMessages;
  return NextResponse.json({ messages });
}

export async function POST(req: NextRequest) {
  const body = await req.json() as {
    senderId: string;
    receiverId: string;
    senderName: string;
    content: string;
  };

  const message = {
    id: `msg${Date.now()}`,
    senderId: body.senderId,
    receiverId: body.receiverId,
    senderName: body.senderName,
    content: body.content,
    read: false,
    sentAt: new Date().toISOString(),
  };

  return NextResponse.json({ message }, { status: 201 });
}
