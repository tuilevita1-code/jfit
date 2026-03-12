import Link from "next/link";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import {
  mockCurrentClient,
  mockProgram,
  mockMessages,
  mockSessions,
  mockHabits,
  mockHabitLogs,
} from "@/lib/mock/data";
import { formatDate, formatRelativeTime } from "@/lib/utils/formatters";

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

export default function PortalDashboardPage() {
  const client = mockCurrentClient;

  // Messages involving c1
  const myMessages = mockMessages.filter(
    (m) =>
      (m.senderId === client.id && m.receiverId === "t1") ||
      (m.senderId === "t1" && m.receiverId === client.id)
  );
  const recentMessages = myMessages.slice(-2);

  // Upcoming session
  const upcomingSession = mockSessions.find(
    (s) => s.clientId === client.id && s.status === "confirmed"
  );

  // Today's date string
  const today = new Date().toISOString().split("T")[0];

  // Today's habit completion
  const todayLogs = mockHabitLogs.filter((l) => l.date === today || l.date === "2026-03-13");

  // Today's workout
  const todayWorkout = mockProgram.workouts[0];

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          Welcome back
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          {client.firstName} {client.lastName}
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Here&apos;s your training overview
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-3 gap-4">
        <StatCard label="Day Streak" value={String(client.streak)} accent />
        <StatCard label="Sessions This Week" value="2" />
        <StatCard label="Programme Progress" value="40%" />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Today's Workout */}
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Today&apos;s Workout
            </p>
            <Badge variant="red">Day {todayWorkout.dayNumber}</Badge>
          </div>
          <div className="p-5">
            <p
              className="text-base font-medium mb-3"
              style={{ fontFamily: "var(--font-barlow)", color: C.text }}
            >
              {todayWorkout.name}
            </p>
            <div className="flex flex-col gap-2 mb-4">
              {todayWorkout.exercises.map((ex) => (
                <div key={ex.id} className="flex items-center justify-between">
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {ex.name}
                  </p>
                  <p
                    className="text-xs"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                  >
                    {ex.sets} × {ex.reps}
                  </p>
                </div>
              ))}
            </div>
            <Link
              href={`/portal/workouts/${todayWorkout.id}`}
              className="inline-block px-5 py-3 text-sm uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                backgroundColor: C.red,
                color: C.text,
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              Start Workout
            </Link>
          </div>
        </div>

        {/* Habits */}
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Today&apos;s Habits
            </p>
            <Link
              href="/portal/habits"
              className="text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                color: C.textFaint,
                textDecoration: "none",
              }}
            >
              View All
            </Link>
          </div>
          <div className="p-5 flex flex-col gap-3">
            {mockHabits.map((habit) => {
              const log = todayLogs.find((l) => l.habitId === habit.id);
              return (
                <div key={habit.id} className="flex items-center justify-between">
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {habit.name}
                  </p>
                  <span
                    className="text-xs px-2 py-0.5"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: log?.completed ? C.green : C.textFaint,
                      backgroundColor: log?.completed
                        ? "rgba(34,197,94,0.1)"
                        : "rgba(255,255,255,0.05)",
                      border: `1px solid ${log?.completed ? "rgba(34,197,94,0.25)" : C.border}`,
                    }}
                  >
                    {log?.completed ? "Done" : "Pending"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Session */}
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Upcoming Session
            </p>
          </div>
          <div className="p-5">
            {upcomingSession ? (
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge status="confirmed">Confirmed</Badge>
                </div>
                {upcomingSession.scheduledFor && (
                  <p
                    className="text-base font-medium"
                    style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                  >
                    {formatDate(upcomingSession.scheduledFor)}
                  </p>
                )}
                {upcomingSession.notes && (
                  <p
                    className="text-sm mt-1"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {upcomingSession.notes}
                  </p>
                )}
                <p
                  className="text-xs mt-2"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                >
                  Goodlife Health Clubs, Richlands
                </p>
              </div>
            ) : (
              <div>
                <p
                  className="text-sm mb-3"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                >
                  No upcoming sessions booked.
                </p>
                <Link
                  href="/portal/sessions"
                  className="text-sm uppercase tracking-widest px-4 py-2"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    border: `1px solid ${C.border}`,
                    color: C.text,
                    textDecoration: "none",
                  }}
                >
                  Book Session
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Recent Messages */}
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="flex items-center justify-between px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Messages
            </p>
            <Link
              href="/portal/messages"
              className="text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                color: C.textFaint,
                textDecoration: "none",
              }}
            >
              View All
            </Link>
          </div>
          <div className="p-5 flex flex-col gap-3">
            {recentMessages.length === 0 ? (
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
              >
                No messages yet.
              </p>
            ) : (
              recentMessages.map((msg) => (
                <div
                  key={msg.id}
                  className="p-3"
                  style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
                >
                  <div className="flex items-center justify-between mb-1">
                    <p
                      className="text-sm font-medium"
                      style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                    >
                      {msg.senderName}
                    </p>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                    >
                      {formatRelativeTime(msg.sentAt)}
                    </p>
                  </div>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {msg.content.length > 80
                      ? msg.content.slice(0, 80) + "..."
                      : msg.content}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
