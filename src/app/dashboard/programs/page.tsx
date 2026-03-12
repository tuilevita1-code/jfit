import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { mockPrograms } from "@/lib/mock/data";

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

export default function ProgramsPage() {
  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div className="flex items-start justify-between">
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
            Programmes
          </h1>
          <p
            className="mt-2 text-base"
            style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
          >
            Build and manage training programmes
          </p>
        </div>
        <Link
          href="/dashboard/programs/new"
          className="px-5 py-3 text-sm uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            backgroundColor: C.red,
            color: C.text,
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          New Programme
        </Link>
      </div>

      {/* Programme List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockPrograms.map((program) => (
          <div
            key={program.id}
            style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
          >
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              <p
                className="text-sm uppercase tracking-[0.1em]"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
              >
                {program.name}
              </p>
              <Badge status={program.status === "active" ? "confirmed" : program.status === "completed" ? "paid" : "pending"}>
                {program.status}
              </Badge>
            </div>
            <div className="p-5">
              <div className="flex flex-col gap-2 mb-4">
                <div className="flex items-center justify-between">
                  <p
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Duration
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {program.durationWeeks} weeks
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Days / Week
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {program.daysPerWeek} days
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Workouts
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {program.workouts.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {mockPrograms.length === 0 && (
        <div
          className="flex flex-col items-center justify-center py-16"
          style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
        >
          <p
            className="text-base mb-4"
            style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
          >
            No programmes yet.
          </p>
          <Link
            href="/dashboard/programs/new"
            className="px-5 py-3 text-sm uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              backgroundColor: C.red,
              color: C.text,
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Create First Programme
          </Link>
        </div>
      )}
    </div>
  );
}
