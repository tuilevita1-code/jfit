import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json() as {
    clientId: string;
    exerciseId: string;
    exerciseName: string;
    weight: number;
    repsCompleted: number;
    rpe: number;
  };

  const entry = {
    id: `wl${Date.now()}`,
    clientId: body.clientId,
    exerciseId: body.exerciseId,
    exerciseName: body.exerciseName,
    weight: body.weight,
    repsCompleted: body.repsCompleted,
    rpe: body.rpe,
    loggedAt: new Date().toISOString(),
  };

  return NextResponse.json({ entry }, { status: 201 });
}
