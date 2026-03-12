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

const plans = [
  {
    name: "Bronze",
    price: "$80",
    color: "#bf7b3e",
    popular: false,
    tagline: "Start strong.",
    features: [
      "2 sessions per week",
      "Custom workout programme",
      "Technique coaching",
      "Progress tracking",
      "Email support",
      "JFIT client portal access",
    ],
  },
  {
    name: "Gold",
    price: "$150",
    color: "#c9a84c",
    popular: true,
    tagline: "The most popular choice.",
    features: [
      "3 sessions per week",
      "Custom workout programme",
      "Technique coaching",
      "Nutrition guidance & macros",
      "Weekly check-ins",
      "Priority messaging",
      "Body composition tracking",
      "JFIT client portal access",
    ],
  },
  {
    name: "Platinum",
    price: "$200",
    color: "#c8c8c8",
    popular: false,
    tagline: "No limits. Full support.",
    features: [
      "Unlimited sessions",
      "Custom workout programme",
      "Full personalised meal plan",
      "Weekly nutrition adjustments",
      "Daily messaging access",
      "Monthly body composition reviews",
      "Progress photo tracking",
      "Supplement guidance",
      "Priority scheduling",
      "JFIT client portal access",
    ],
  },
];

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text }}>
      {/* ── Header ── */}
      <section className="pt-32 pb-20 px-6 md:px-8 text-center" style={{ backgroundColor: C.bgAlt }}>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-3"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          Pricing
        </p>
        <h1
          className="uppercase leading-none mb-4"
          style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
        >
          Simple, Transparent Pricing
        </h1>
        <p
          className="text-lg max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted, lineHeight: 1.7 }}
        >
          Week-to-week. No lock-in. No hidden fees. Just world-class coaching
          at a price that makes sense.
        </p>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col relative"
              style={{
                backgroundColor: C.bgCard,
                border: plan.popular ? `1px solid ${C.red}` : `1px solid ${C.border}`,
              }}
            >
              {plan.popular && (
                <div
                  className="absolute -top-px left-0 right-0 h-0.5"
                  style={{ backgroundColor: C.red }}
                />
              )}

              <div className="p-6" style={{ borderBottom: `1px solid ${C.border}` }}>
                {plan.popular && (
                  <p
                    className="text-xs uppercase tracking-widest mb-3"
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
                  className="text-sm uppercase tracking-[0.2em] mb-2"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontWeight: 700,
                    color: plan.color,
                  }}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="leading-none"
                    style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2.5rem, 4vw, 3.25rem)" }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}>/week</span>
                </div>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {plan.tagline}
                </p>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <ul className="flex flex-col gap-2.5 flex-1 mb-8">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      <span style={{ color: plan.color, flexShrink: 0 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="text-center py-3.5 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
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

        {/* Trust notes */}
        <div className="max-w-6xl mx-auto mt-10">
          <div
            className="flex flex-col sm:flex-row gap-6 p-6 justify-center items-center text-center"
            style={{ border: `1px solid ${C.border}` }}
          >
            {[
              { label: "No Lock-In Contract", body: "Stay week-to-week. Cancel anytime with 7 days notice." },
              { label: "No Hidden Fees", body: "The price you see is the price you pay. Always." },
              { label: "Results Guaranteed", body: "James backs his work. If you show up, you will change." },
            ].map((note) => (
              <div key={note.label} className="flex-1">
                <p
                  className="text-sm uppercase tracking-[0.12em] mb-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, color: C.red }}
                >
                  {note.label}
                </p>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {note.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ strip ── */}
      <section className="py-16 px-6 md:px-8 text-center" style={{ backgroundColor: C.bgAlt }}>
        <p
          className="text-base mb-4"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Questions about which package is right for you?
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/book"
            className="px-8 py-3 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 700,
              backgroundColor: C.red,
              color: C.text,
            }}
          >
            Book a Free Chat
          </Link>
          <Link
            href="/services"
            className="px-8 py-3 text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 600,
              color: C.textMuted,
              border: `1px solid ${C.border}`,
            }}
          >
            Compare Packages
          </Link>
        </div>
      </section>
    </div>
  );
}
