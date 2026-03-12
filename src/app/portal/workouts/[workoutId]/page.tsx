"use client";

import { useState } from "react";
import Link from "next/link";
import { mockProgram } from "@/lib/mock/data";

const C = {
  bg: "#080808",
  bgAlt: "#0D0D0D",
  bgCard: "#111111",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.65)",
  textFaint: "rgba(255,255,255,0.45)",
  red: "#D62828",
  green: "#22c55e",
  amber: "#f59e0b",
  border: "rgba(255,255,255,0.08)",
};

interface ExerciseLog {
  weight: string;
  repsCompleted: string;
  rpe: string;
}

export default function WorkoutLogPage({
  params,
}: {
  params: { workoutId: string };
}) {
  const workout = mockProgram.workouts.find((w) => w.id === params.workoutId);

  const [logs, setLogs] = useState<Record<string, ExerciseLog>>(
    workout
      ? Object.fromEntries(
          workout.exercises.map((e) => [e.id, { weight: "", repsCompleted: "", rpe: "" }])
        )
      : {}
  );
  const [finished, setFinished] = useState(false);

  if (!workout) {
    return (
      <div className="p-6 md:p-8" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
        <p style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}>
          Workout not found.
        </p>
        <Link
          href="/portal/workouts"
          className="inline-block mt-4 text-sm uppercase tracking-widest px-4 py-2"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            border: `1px solid ${C.border}`,
            color: C.text,
            textDecoration: "none",
          }}
        >
          Back to Workouts
        </Link>
      </div>
    );
  }

  function updateLog(exerciseId: string, field: keyof ExerciseLog, value: string) {
    setLogs((prev) => ({
      ...prev,
      [exerciseId]: { ...prev[exerciseId], [field]: value },
    }));
  }

  const inputStyle = {
    fontFamily: "var(--font-barlow)",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: `1px solid ${C.border}`,
    color: C.text,
  };

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Back */}
      <Link
        href="/portal/workouts"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          color: C.textFaint,
          textDecoration: "none",
        }}
      >
        &larr; Back to Workouts
      </Link>

      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          Day {workout.dayNumber}
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          {workout.name}
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Log your sets, reps, and effort for each exercise
        </p>
      </div>

      {finished && (
        <div
          className="px-4 py-3 text-sm"
          style={{
            fontFamily: "var(--font-barlow)",
            color: C.green,
            backgroundColor: "rgba(34,197,94,0.08)",
            border: `1px solid rgba(34,197,94,0.2)`,
          }}
        >
          Workout logged. Great work!
        </div>
      )}

      {/* Exercises */}
      <div className="flex flex-col gap-4">
        {workout.exercises.map((exercise) => {
          const log = logs[exercise.id];
          return (
            <div
              key={exercise.id}
              style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
            >
              <div
                className="flex items-center justify-between px-5 py-4"
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <p
                  className="text-base font-medium"
                  style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                >
                  {exercise.name}
                </p>
                <p
                  className="text-xs uppercase tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                >
                  Target: {exercise.sets} × {exercise.reps}
                </p>
              </div>
              <div className="p-5 grid grid-cols-3 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    value={log?.weight ?? ""}
                    onChange={(e) => updateLog(exercise.id, "weight", e.target.value)}
                    placeholder="0"
                    step="0.5"
                    min="0"
                    className="px-3 py-3 text-base outline-none"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Reps Done
                  </label>
                  <input
                    type="number"
                    value={log?.repsCompleted ?? ""}
                    onChange={(e) => updateLog(exercise.id, "repsCompleted", e.target.value)}
                    placeholder="0"
                    min="0"
                    className="px-3 py-3 text-base outline-none"
                    style={inputStyle}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    RPE (1–10)
                  </label>
                  <select
                    value={log?.rpe ?? ""}
                    onChange={(e) => updateLog(exercise.id, "rpe", e.target.value)}
                    className="px-3 py-3 text-base outline-none"
                    style={{ ...inputStyle, appearance: "none" }}
                  >
                    <option value="" style={{ backgroundColor: C.bgCard }}>
                      —
                    </option>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                      <option key={n} value={n} style={{ backgroundColor: C.bgCard }}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Finish */}
      <button
        onClick={() => setFinished(true)}
        className="w-full py-4 text-base uppercase tracking-widest"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          backgroundColor: C.red,
          color: C.text,
          border: "none",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Finish Workout
      </button>
    </div>
  );
}
