"use client";

import { useState } from "react";
import { StatCard } from "@/components/ui/StatCard";
import { mockHabits, mockHabitLogs, mockCurrentClient } from "@/lib/mock/data";
import type { HabitLog } from "@/types";

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

// Last 7 days (newest first)
const DATES = Array.from({ length: 7 }, (_, i) => {
  const d = new Date("2026-03-13");
  d.setDate(d.getDate() - i);
  return d.toISOString().split("T")[0];
}).reverse();

export default function HabitsPage() {
  const client = mockCurrentClient;
  const [logs, setLogs] = useState<HabitLog[]>(mockHabitLogs);

  const today = "2026-03-13";

  function toggleToday(habitId: string) {
    const existing = logs.find(
      (l) => l.habitId === habitId && l.date === today && l.clientId === client.id
    );
    if (existing) {
      setLogs((prev) =>
        prev.map((l) =>
          l.id === existing.id ? { ...l, completed: !l.completed } : l
        )
      );
    } else {
      const newLog: HabitLog = {
        id: `hl-${Date.now()}`,
        habitId,
        clientId: client.id,
        date: today,
        completed: true,
      };
      setLogs((prev) => [...prev, newLog]);
    }
  }

  function getLog(habitId: string, date: string) {
    return logs.find(
      (l) => l.habitId === habitId && l.date === date && l.clientId === client.id
    );
  }

  const todayCompletions = mockHabits.filter((h) => {
    const log = getLog(h.id, today);
    return log?.completed;
  }).length;

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          Daily Habits
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          Habits
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Build consistency, one habit at a time
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard label="Day Streak" value={String(client.streak)} accent />
        <StatCard label="Today" value={`${todayCompletions}/${mockHabits.length}`} />
        <StatCard label="Habits" value={String(mockHabits.length)} />
      </div>

      {/* Today's Habits */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Today&apos;s Check-in
          </p>
        </div>
        <div className="p-5 flex flex-col gap-4">
          {mockHabits.map((habit) => {
            const log = getLog(habit.id, today);
            const done = log?.completed ?? false;
            return (
              <div key={habit.id} className="flex items-center justify-between gap-4">
                <p
                  className="text-base"
                  style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                >
                  {habit.name}
                </p>
                <button
                  onClick={() => toggleToday(habit.id)}
                  className="px-4 py-2 text-xs uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    backgroundColor: done ? "rgba(34,197,94,0.1)" : "transparent",
                    color: done ? C.green : C.textFaint,
                    border: `1px solid ${done ? "rgba(34,197,94,0.3)" : C.border}`,
                    cursor: "pointer",
                    fontWeight: 600,
                  }}
                >
                  {done ? "Done" : "Mark Done"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Weekly Grid */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            7-Day Overview
          </p>
        </div>
        <div className="p-5 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr>
                <th
                  className="pb-3 pr-4 text-left text-xs uppercase tracking-[0.1em]"
                  style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                >
                  Habit
                </th>
                {DATES.map((date) => (
                  <th
                    key={date}
                    className="pb-3 px-2 text-center text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    {date.slice(5).replace("-", "/")}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockHabits.map((habit) => (
                <tr key={habit.id} style={{ borderTop: `1px solid ${C.border}` }}>
                  <td className="py-3 pr-4">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {habit.name}
                    </p>
                  </td>
                  {DATES.map((date) => {
                    const log = getLog(habit.id, date);
                    return (
                      <td key={date} className="py-3 px-2 text-center">
                        <span
                          className="inline-block w-4 h-4"
                          style={{
                            backgroundColor: log?.completed
                              ? C.green
                              : log !== undefined
                              ? "rgba(255,255,255,0.08)"
                              : "rgba(255,255,255,0.04)",
                            borderRadius: "2px",
                          }}
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
