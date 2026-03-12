"use client";

import { useState } from "react";
import Link from "next/link";

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

interface ExerciseRow {
  name: string;
  sets: string;
  reps: string;
}

interface DayBlock {
  exercises: ExerciseRow[];
}

export default function NewProgrammePage() {
  const [programmeName, setProgrammeName] = useState("");
  const [durationWeeks, setDurationWeeks] = useState("12");
  const [daysPerWeek, setDaysPerWeek] = useState("3");
  const [days, setDays] = useState<DayBlock[]>([{ exercises: [{ name: "", sets: "3", reps: "8-10" }] }]);
  const [saved, setSaved] = useState(false);

  const inputStyle = {
    fontFamily: "var(--font-barlow)",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: `1px solid ${C.border}`,
    color: C.text,
  };

  function addDay() {
    setDays((prev) => [...prev, { exercises: [{ name: "", sets: "3", reps: "8-10" }] }]);
  }

  function addExercise(dayIdx: number) {
    setDays((prev) => {
      const updated = [...prev];
      updated[dayIdx] = {
        ...updated[dayIdx],
        exercises: [...updated[dayIdx].exercises, { name: "", sets: "3", reps: "8-10" }],
      };
      return updated;
    });
  }

  function removeExercise(dayIdx: number, exIdx: number) {
    setDays((prev) => {
      const updated = [...prev];
      updated[dayIdx] = {
        ...updated[dayIdx],
        exercises: updated[dayIdx].exercises.filter((_, i) => i !== exIdx),
      };
      return updated;
    });
  }

  function removeDay(dayIdx: number) {
    setDays((prev) => prev.filter((_, i) => i !== dayIdx));
  }

  function updateExercise(dayIdx: number, exIdx: number, field: keyof ExerciseRow, value: string) {
    setDays((prev) => {
      const updated = [...prev];
      const exercises = [...updated[dayIdx].exercises];
      exercises[exIdx] = { ...exercises[exIdx], [field]: value };
      updated[dayIdx] = { ...updated[dayIdx], exercises };
      return updated;
    });
  }

  function handleSave() {
    if (!programmeName.trim()) return;
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Back */}
      <Link
        href="/dashboard/programs"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          color: C.textFaint,
          textDecoration: "none",
        }}
      >
        &larr; Back to Programmes
      </Link>

      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          Programme Builder
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          New Programme
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Build a structured training programme
        </p>
      </div>

      {saved && (
        <div
          className="px-4 py-3 text-sm"
          style={{
            fontFamily: "var(--font-barlow)",
            color: C.green,
            backgroundColor: "rgba(34,197,94,0.08)",
            border: `1px solid rgba(34,197,94,0.2)`,
          }}
        >
          Programme saved successfully.
        </div>
      )}

      {/* Programme Details */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Programme Details
          </p>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 flex flex-col gap-1.5">
            <label
              className="text-xs uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
            >
              Programme Name
            </label>
            <input
              type="text"
              value={programmeName}
              onChange={(e) => setProgrammeName(e.target.value)}
              placeholder="e.g. 12-Week Strength Builder"
              className="px-4 py-3 text-base outline-none"
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
            >
              Duration (Weeks)
            </label>
            <input
              type="number"
              value={durationWeeks}
              onChange={(e) => setDurationWeeks(e.target.value)}
              min="1"
              max="52"
              className="px-4 py-3 text-base outline-none"
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              className="text-xs uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
            >
              Days Per Week
            </label>
            <input
              type="number"
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(e.target.value)}
              min="1"
              max="7"
              className="px-4 py-3 text-base outline-none"
              style={inputStyle}
            />
          </div>
        </div>
      </div>

      {/* Days */}
      <div className="space-y-4">
        {days.map((day, dayIdx) => (
          <div
            key={dayIdx}
            style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
          >
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              <p
                className="text-sm uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
              >
                Day {dayIdx + 1}
              </p>
              {days.length > 1 && (
                <button
                  onClick={() => removeDay(dayIdx)}
                  className="text-xs uppercase tracking-widest px-3 py-1.5"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    border: `1px solid rgba(214,40,40,0.3)`,
                    color: C.red,
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  Remove Day
                </button>
              )}
            </div>
            <div className="p-5 space-y-3">
              {/* Exercise Header */}
              <div className="grid grid-cols-12 gap-3">
                <div className="col-span-6">
                  <p
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Exercise
                  </p>
                </div>
                <div className="col-span-2">
                  <p
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Sets
                  </p>
                </div>
                <div className="col-span-2">
                  <p
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Reps
                  </p>
                </div>
                <div className="col-span-2" />
              </div>

              {day.exercises.map((ex, exIdx) => (
                <div key={exIdx} className="grid grid-cols-12 gap-3 items-center">
                  <div className="col-span-6">
                    <input
                      type="text"
                      value={ex.name}
                      onChange={(e) => updateExercise(dayIdx, exIdx, "name", e.target.value)}
                      placeholder="Exercise name"
                      className="w-full px-3 py-2.5 text-sm outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="number"
                      value={ex.sets}
                      onChange={(e) => updateExercise(dayIdx, exIdx, "sets", e.target.value)}
                      min="1"
                      className="w-full px-3 py-2.5 text-sm outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-span-2">
                    <input
                      type="text"
                      value={ex.reps}
                      onChange={(e) => updateExercise(dayIdx, exIdx, "reps", e.target.value)}
                      placeholder="8-10"
                      className="w-full px-3 py-2.5 text-sm outline-none"
                      style={inputStyle}
                    />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    {day.exercises.length > 1 && (
                      <button
                        onClick={() => removeExercise(dayIdx, exIdx)}
                        className="text-xs px-2 py-1.5"
                        style={{
                          fontFamily: "var(--font-barlow-condensed)",
                          border: `1px solid ${C.border}`,
                          color: C.textFaint,
                          backgroundColor: "transparent",
                          cursor: "pointer",
                        }}
                      >
                        ×
                      </button>
                    )}
                  </div>
                </div>
              ))}

              <button
                onClick={() => addExercise(dayIdx)}
                className="text-xs uppercase tracking-widest px-4 py-2 mt-2"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  border: `1px solid ${C.border}`,
                  color: C.textMuted,
                  backgroundColor: "transparent",
                  cursor: "pointer",
                }}
              >
                + Add Exercise
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">
        <button
          onClick={addDay}
          className="px-5 py-3 text-sm uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            border: `1px solid ${C.border}`,
            color: C.text,
            backgroundColor: "transparent",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          + Add Day
        </button>
        <button
          onClick={handleSave}
          disabled={!programmeName.trim()}
          className="px-5 py-3 text-sm uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            backgroundColor: programmeName.trim() ? C.red : "rgba(214,40,40,0.3)",
            color: C.text,
            border: "none",
            cursor: programmeName.trim() ? "pointer" : "not-allowed",
            fontWeight: 600,
          }}
        >
          Save Programme
        </button>
      </div>
    </div>
  );
}
