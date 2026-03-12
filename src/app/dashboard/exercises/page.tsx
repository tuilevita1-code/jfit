"use client";

import { useState } from "react";
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

export default function ExercisesPage() {
  const [search, setSearch] = useState("");

  const allExercises = mockProgram.workouts.flatMap((w) =>
    w.exercises.map((e) => ({ ...e, workout: w.name }))
  );

  const filtered = allExercises.filter((e) =>
    e.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          Trainer Dashboard
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          Exercise Library
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          All exercises across your programmes
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search exercises..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm px-4 py-3 text-base outline-none"
        style={{
          fontFamily: "var(--font-barlow)",
          backgroundColor: "rgba(255,255,255,0.04)",
          border: `1px solid ${C.border}`,
          color: C.text,
        }}
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((exercise) => (
          <div
            key={exercise.id}
            style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
          >
            <div
              className="px-4 py-3"
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              <p
                className="text-sm font-medium"
                style={{ fontFamily: "var(--font-barlow)", color: C.text }}
              >
                {exercise.name}
              </p>
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <p
                className="text-xs uppercase tracking-[0.1em]"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
              >
                {exercise.sets} sets × {exercise.reps}
              </p>
            </div>
            <div className="px-4 pb-3">
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
              >
                {exercise.workout}
              </p>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div
          className="flex items-center justify-center py-12"
          style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
          >
            No exercises match your search.
          </p>
        </div>
      )}
    </div>
  );
}
