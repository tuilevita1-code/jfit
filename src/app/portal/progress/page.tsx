import { StatCard } from "@/components/ui/StatCard";
import { mockMeasurements } from "@/lib/mock/data";
import { formatDate } from "@/lib/utils/formatters";

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

export default function ProgressPage() {
  const latest = mockMeasurements[0];

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          My Journey
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          Progress
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Track your body composition over time
        </p>
      </div>

      {/* Latest Stats */}
      {latest && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard label="Current Weight" value={`${latest.weight}kg`} />
          <StatCard label="Body Fat" value={`${latest.bodyFatPercent ?? "—"}%`} />
          <StatCard label="Waist" value={`${latest.waist ?? "—"}cm`} />
          <StatCard label="Arms" value={`${latest.arms ?? "—"}cm`} />
        </div>
      )}

      {/* Measurements Table */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Measurement History
          </p>
        </div>
        <div className="p-5 overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                {["Date", "Weight", "Body Fat", "Waist", "Arms", "Thighs", "Notes"].map((h) => (
                  <th
                    key={h}
                    className="pb-3 pr-6 text-left text-xs uppercase tracking-[0.15em]"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: C.textFaint,
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {mockMeasurements.map((m) => (
                <tr key={m.id} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <td className="py-3 pr-6">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                    >
                      {formatDate(m.date)}
                    </p>
                  </td>
                  <td className="py-3 pr-6">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {m.weight}kg
                    </p>
                  </td>
                  <td className="py-3 pr-6">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {m.bodyFatPercent ?? "—"}%
                    </p>
                  </td>
                  <td className="py-3 pr-6">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {m.waist ?? "—"}cm
                    </p>
                  </td>
                  <td className="py-3 pr-6">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {m.arms ?? "—"}cm
                    </p>
                  </td>
                  <td className="py-3 pr-6">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {m.thighs ?? "—"}cm
                    </p>
                  </td>
                  <td className="py-3">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                    >
                      {m.notes ?? "—"}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Progress Photos Placeholder */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Progress Photos
          </p>
        </div>
        <div className="p-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Front", "Back", "Side L", "Side R"].map((label) => (
              <div key={label} className="flex flex-col gap-2">
                <div
                  className="flex items-center justify-center"
                  style={{
                    aspectRatio: "3/4",
                    backgroundColor: "#161616",
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    {label}
                  </p>
                </div>
                <p
                  className="text-xs text-center"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                >
                  {label} View
                </p>
              </div>
            ))}
          </div>
          <p
            className="text-xs mt-4"
            style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
          >
            Progress photo uploads coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}
