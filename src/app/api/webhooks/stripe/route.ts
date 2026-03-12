import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.text();
  // TODO: verify Stripe webhook signature with STRIPE_WEBHOOK_SECRET
  let event: { type: string; data: unknown };
  try {
    event = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  switch (event.type) {
    case "invoice.paid":
      // TODO: update invoice status to paid in database
      break;
    case "payment_failed":
      // TODO: notify trainer, flag client
      break;
    case "customer.subscription.updated":
      // TODO: update client package tier
      break;
    case "customer.subscription.deleted":
      // TODO: deactivate client access
      break;
    default:
      // Unhandled event type — ignore
  }

  return NextResponse.json({ received: true });
}
