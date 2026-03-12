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

export default function WorkoutsPage() {
  const program = mockProgram;

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          My Programme
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          Workouts
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Your training schedule for this programme
        </p>
      </div>

      {/* Programme Info */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            {program.name}
          </p>
        </div>
        <div className="p-5 flex gap-6">
          <div>
            <p
              className="text-xs uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
            >
              Duration
            </p>
            <p
              className="text-base mt-1"
              style={{ fontFamily: "var(--font-barlow)", color: C.text }}
            >
              {program.durationWeeks} weeks
            </p>
          </div>
          <div>
            <p
              className="text-xs uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
            >
              Days / Week
            </p>
            <p
              className="text-base mt-1"
              style={{ fontFamily: "var(--font-barlow)", color: C.text }}
            >
              {program.daysPerWeek} days
            </p>
          </div>
          <div>
            <p
              className="text-xs uppercase tracking-[0.1em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
            >
              Workouts
            </p>
            <p
              className="text-base mt-1"
              style={{ fontFamily: "var(--font-barlow)", color: C.text }}
            >
              {program.workouts.length}
            </p>
          </div>
        </div>
      </div>

      {/* Workout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {program.workouts.map((workout) => (
          <div
            key={workout.id}
            style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
          >
            <div
              className="px-5 py-4"
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              <p
                className="text-xs uppercase tracking-[0.1em] mb-1"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
              >
                Day {workout.dayNumber}
              </p>
              <p
                className="text-base font-medium"
                style={{ fontFamily: "var(--font-barlow)", color: C.text }}
              >
                {workout.name}
              </p>
            </div>
            <div className="p-5">
              <p
                className="text-xs uppercase tracking-[0.1em] mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
              >
                {workout.exercises.length} exercises
              </p>
              <div className="flex flex-col gap-1.5 mb-5">
                {workout.exercises.map((ex) => (
                  <p
                    key={ex.id}
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {ex.name}
                  </p>
                ))}
              </div>
              <Link
                href={`/portal/workouts/${workout.id}`}
                className="inline-block px-5 py-2.5 text-sm uppercase tracking-widest"
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
        ))}
      </div>
    </div>
  );
}
