import { NextRequest, NextResponse } from "next/server";
import { mockInvoices } from "@/lib/mock/data";

export async function GET(req: NextRequest) {
  const status = req.nextUrl.searchParams.get("status");
  const invoices = status
    ? mockInvoices.filter((i) => i.status === status)
    : mockInvoices;

  const summary = {
    total: mockInvoices.reduce((sum, i) => sum + i.amount, 0),
    paid: mockInvoices
      .filter((i) => i.status === "paid")
      .reduce((sum, i) => sum + i.amount, 0),
    pending: mockInvoices
      .filter((i) => i.status === "sent")
      .reduce((sum, i) => sum + i.amount, 0),
    overdue: mockInvoices
      .filter((i) => i.status === "overdue")
      .reduce((sum, i) => sum + i.amount, 0),
  };

  return NextResponse.json({ invoices, summary });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const invoice = {
    id: `inv${Date.now()}`,
    ...body,
    createdAt: new Date().toISOString(),
  };
  return NextResponse.json({ invoice }, { status: 201 });
}
