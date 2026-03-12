import Link from "next/link";

const C = {
  bg: "#080808",
  bgAlt: "#0D0D0D",
  bgCard: "#111111",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.65)",
  textFaint: "rgba(255,255,255,0.45)",
  red: "#D62828",
  border: "rgba(255,255,255,0.08)",
};

const packages = [
  {
    name: "Bronze",
    price: "$80",
    color: "#bf7b3e",
    sessions: "2 sessions/week",
    tagline: "The foundation. Build consistency, learn the movements, start seeing change.",
    includes: [
      "2 x 60-minute personal training sessions per week",
      "Fully customised workout programme",
      "Technique coaching and form correction",
      "Progress tracking (weight, reps, performance)",
      "Email support between sessions",
      "Access to JFIT client portal",
    ],
    bestFor: "Beginners or those returning after a break",
  },
  {
    name: "Gold",
    price: "$150",
    color: "#c9a84c",
    popular: true,
    sessions: "3 sessions/week",
    tagline: "The sweet spot. Three sessions, nutrition guidance, and real momentum.",
    includes: [
      "3 x 60-minute personal training sessions per week",
      "Fully customised workout programme",
      "Technique coaching and form correction",
      "Macronutrient targets and nutrition guidance",
      "Weekly progress check-ins",
      "Priority messaging response",
      "Body composition tracking",
      "Access to JFIT client portal",
    ],
    bestFor: "Committed clients wanting serious results",
  },
  {
    name: "Platinum",
    price: "$200",
    color: "#c8c8c8",
    sessions: "Unlimited sessions",
    tagline: "The full package. No ceiling, no compromises, full support.",
    includes: [
      "Unlimited personal training sessions",
      "Fully customised workout programme",
      "Complete personalised nutrition plan",
      "Weekly meal plan adjustments",
      "Daily messaging access",
      "Monthly body composition reviews",
      "Progress photo tracking",
      "Supplement guidance",
      "Priority scheduling",
      "Access to JFIT client portal",
    ],
    bestFor: "High-performers who want maximum support and results",
  },
];

const comparisonFeatures = [
  { feature: "Sessions per week", bronze: "2", gold: "3", platinum: "Unlimited" },
  { feature: "Custom workout programme", bronze: "✓", gold: "✓", platinum: "✓" },
  { feature: "Progress tracking", bronze: "✓", gold: "✓", platinum: "✓" },
  { feature: "Nutrition guidance", bronze: "—", gold: "✓", platinum: "✓" },
  { feature: "Full meal plan", bronze: "—", gold: "—", platinum: "✓" },
  { feature: "Messaging support", bronze: "Email", gold: "Priority", platinum: "Daily" },
  { feature: "Body composition reviews", bronze: "—", gold: "Monthly", platinum: "Monthly" },
  { feature: "Supplement guidance", bronze: "—", gold: "—", platinum: "✓" },
  { feature: "Price per week", bronze: "$80", gold: "$150", platinum: "$200" },
];

export default function ServicesPage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text }}>
      {/* ── Header ── */}
      <section className="pt-32 pb-24 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.2em] mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
          >
            Services
          </p>
          <h1
            className="uppercase leading-none mb-6"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Training Packages
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ fontFamily: "var(--font-barlow)", color: C.textMuted, lineHeight: 1.7 }}
          >
            Every package is built around one goal — getting you results. Choose the
            level of support that matches your commitment and let James handle the rest.
          </p>
        </div>
      </section>

      {/* ── Package Detail Cards ── */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          {packages.map((pkg, i) => (
            <div
              key={pkg.name}
              className="grid md:grid-cols-2 gap-0"
              style={{ border: `1px solid ${pkg.popular ? C.red : C.border}` }}
            >
              {/* Left — identity */}
              <div
                className="p-8 flex flex-col justify-between gap-6"
                style={{
                  backgroundColor: C.bgCard,
                  borderRight: `1px solid ${pkg.popular ? C.red : C.border}`,
                }}
              >
                <div>
                  {pkg.popular && (
                    <p
                      className="text-xs uppercase tracking-widest mb-4"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontWeight: 700,
                        color: C.red,
                      }}
                    >
                      Most Popular
                    </p>
                  )}
                  <p
                    className="text-sm uppercase tracking-[0.2em] mb-1"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontWeight: 700,
                      color: pkg.color,
                    }}
                  >
                    {pkg.name}
                  </p>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span
                      className="leading-none"
                      style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(3rem, 5vw, 4rem)" }}
                    >
                      {pkg.price}
                    </span>
                    <span style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}>/week</span>
                  </div>
                  <p
                    className="text-base leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {pkg.tagline}
                  </p>
                  <p
                    className="text-sm uppercase tracking-[0.12em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    {pkg.sessions}
                  </p>
                </div>
                <div>
                  <p
                    className="text-xs uppercase tracking-[0.15em] mb-2"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Best for
                  </p>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {pkg.bestFor}
                  </p>
                </div>
              </div>

              {/* Right — includes */}
              <div className="p-8" style={{ backgroundColor: C.bgCard }}>
                <p
                  className="text-xs uppercase tracking-[0.2em] mb-5"
                  style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
                >
                  What&apos;s Included
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-base"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      <span style={{ color: pkg.color, flexShrink: 0 }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="inline-block px-6 py-3 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontWeight: 700,
                    backgroundColor: C.red,
                    color: C.text,
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Comparison Table ── */}
      <section className="py-24 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Compare
            </p>
            <h2
              className="uppercase leading-none"
              style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Package Comparison
            </h2>
          </div>

          <div style={{ border: `1px solid ${C.border}` }}>
            {/* Header row */}
            <div
              className="grid grid-cols-4 px-5 py-3"
              style={{ borderBottom: `1px solid ${C.border}`, backgroundColor: C.bgCard }}
            >
              <span
                className="text-xs uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
              >
                Feature
              </span>
              {[{ name: "Bronze", color: "#bf7b3e" }, { name: "Gold", color: "#c9a84c" }, { name: "Platinum", color: "#c8c8c8" }].map((p) => (
                <span
                  key={p.name}
                  className="text-xs uppercase tracking-[0.15em] text-center"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, color: p.color }}
                >
                  {p.name}
                </span>
              ))}
            </div>

            {comparisonFeatures.map((row, i) => (
              <div
                key={row.feature}
                className="grid grid-cols-4 px-5 py-3.5"
                style={{
                  borderBottom: i < comparisonFeatures.length - 1 ? `1px solid ${C.border}` : "none",
                  backgroundColor: i % 2 === 0 ? C.bgCard : "rgba(255,255,255,0.01)",
                }}
              >
                <span
                  className="text-sm"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {row.feature}
                </span>
                {[row.bronze, row.gold, row.platinum].map((val, j) => (
                  <span
                    key={j}
                    className="text-sm text-center"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontWeight: 600,
                      color: val === "—" ? C.textFaint : val === "✓" ? "#22c55e" : C.text,
                    }}
                  >
                    {val}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-8 text-center" style={{ backgroundColor: C.red }}>
        <h2
          className="uppercase leading-none mb-4"
          style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: C.text }}
        >
          Not Sure Which Package?
        </h2>
        <p
          className="text-base mb-8 max-w-lg mx-auto"
          style={{ fontFamily: "var(--font-barlow)", color: "rgba(255,255,255,0.8)", lineHeight: 1.7 }}
        >
          Book a free inquiry and James will recommend the right package based on your
          goals, schedule, and experience level.
        </p>
        <Link
          href="/book"
          className="inline-block px-10 py-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
          style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, backgroundColor: C.text, color: C.red }}
        >
          Book a Free Inquiry
        </Link>
      </section>
    </div>
  );
}
