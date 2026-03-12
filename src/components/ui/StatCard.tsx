interface StatCardProps {
  label: string;
  value: string | number;
  sub?: string;
  accent?: boolean;
}

export function StatCard({ label, value, sub, accent = false }: StatCardProps) {
  return (
    <div
      className="p-5 flex flex-col gap-1"
      style={{
        backgroundColor: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <p
        className="text-xs uppercase tracking-[0.15em]"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          color: "rgba(255,255,255,0.45)",
        }}
      >
        {label}
      </p>
      <p
        className="leading-none"
        style={{
          fontFamily: "var(--font-anton)",
          fontSize: "clamp(2rem, 3vw, 2.75rem)",
          color: accent ? "#D62828" : "#ffffff",
        }}
      >
        {value}
      </p>
      {sub && (
        <p
          className="text-sm"
          style={{
            fontFamily: "var(--font-barlow)",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}
