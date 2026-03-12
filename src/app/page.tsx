"use client";

import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ChevronDown } from "lucide-react";

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
    period: "/week",
    sessions: "2 sessions/week",
    color: "#bf7b3e",
    popular: false,
    features: [
      "2 personal training sessions",
      "Custom workout programme",
      "Progress tracking",
      "Email support",
    ],
  },
  {
    name: "Gold",
    price: "$150",
    period: "/week",
    sessions: "3 sessions/week",
    color: "#c9a84c",
    popular: true,
    features: [
      "3 personal training sessions",
      "Custom workout programme",
      "Nutrition guidance",
      "Progress tracking",
      "Priority messaging",
    ],
  },
  {
    name: "Platinum",
    price: "$200",
    period: "/week",
    sessions: "Unlimited sessions",
    color: "#c8c8c8",
    popular: false,
    features: [
      "Unlimited personal training",
      "Full personalised nutrition plan",
      "Body composition tracking",
      "Priority support",
      "Monthly programme reviews",
      "Supplement guidance",
    ],
  },
];

const faqs = [
  {
    q: "Do I need experience to start?",
    a: "Not at all. James works with clients at every level — from complete beginners to experienced athletes. Your programme is built around where you are right now.",
  },
  {
    q: "Where do sessions take place?",
    a: "All sessions are at Goodlife Health Clubs, Richlands, Brisbane QLD. The facility has everything needed for a world-class workout.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients notice meaningful changes in strength and energy within the first 4 weeks. Visible body composition changes typically follow by weeks 8–12 with consistent effort.",
  },
  {
    q: "What's included in the nutrition guidance?",
    a: "Gold clients receive macronutrient targets and meal timing guidance. Platinum clients get a full personalised meal plan, weekly check-ins, and ongoing adjustments.",
  },
  {
    q: "Is there a lock-in contract?",
    a: "No lock-in. All packages are week-to-week. James believes results speak for themselves — you stay because it works.",
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text, minHeight: "100vh" }}>
      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center"
        style={{ backgroundColor: C.bg }}
      >
        <p
          className="text-sm uppercase tracking-[0.3em] mb-6"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          Personal Training · Brisbane
        </p>

        <h1
          className="uppercase leading-none mb-6"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            color: C.text,
          }}
        >
          You Are Your
          <br />
          Greatest
          <br />
          <span style={{ color: C.red }}>Potential.</span>
        </h1>

        <p
          className="max-w-xl text-lg mb-10"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted, lineHeight: 1.7 }}
        >
          James Ismail is Brisbane&apos;s premier personal trainer — building stronger,
          leaner, more confident athletes from all walks of life.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/book"
            className="px-8 py-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 700,
              backgroundColor: C.red,
              color: C.text,
            }}
          >
            Book an Inquiry
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 600,
              color: C.textMuted,
              border: `1px solid ${C.border}`,
            }}
          >
            Start a Program
          </Link>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ color: C.textFaint }}
        >
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ── About Preview ────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div
            className="w-full flex items-center justify-center"
            style={{
              aspectRatio: "3/4",
              backgroundColor: "#161616",
              border: `1px solid ${C.border}`,
            }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
            >
              Photo of James
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
              >
                About James
              </p>
              <h2
                className="uppercase leading-none mb-5"
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Built Different.
                <br />
                Trained Right.
              </h2>
              <p
                className="text-base leading-relaxed mb-4"
                style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
              >
                James Ismail is a certified personal trainer based at Goodlife Health Clubs,
                Richlands. With years of hands-on experience transforming clients through
                intelligent programming, James combines science-backed training with
                real-world results.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
              >
                Whether your goal is fat loss, muscle gain, or building a healthier life —
                James builds the programme, holds you accountable, and delivers results.
              </p>
            </div>
            <Link
              href="/about"
              className="self-start px-6 py-3 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: 700,
                backgroundColor: C.red,
                color: C.text,
              }}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── Packages Preview ─────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Packages
            </p>
            <h2
              className="uppercase leading-none"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Choose Your Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="flex flex-col p-6 relative"
                style={{
                  backgroundColor: C.bgCard,
                  border: pkg.popular ? `1px solid ${C.red}` : `1px solid ${C.border}`,
                }}
              >
                {pkg.popular && (
                  <div
                    className="absolute -top-px left-0 right-0 h-0.5"
                    style={{ backgroundColor: C.red }}
                  />
                )}
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
                  className="text-sm uppercase tracking-[0.15em] mb-1"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontWeight: 700,
                    color: pkg.color,
                  }}
                >
                  {pkg.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className="leading-none"
                    style={{
                      fontFamily: "var(--font-anton)",
                      fontSize: "clamp(2.5rem, 4vw, 3rem)",
                    }}
                  >
                    {pkg.price}
                  </span>
                  <span style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}>
                    {pkg.period}
                  </span>
                </div>
                <p
                  className="text-sm mb-6"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {pkg.sessions}
                </p>
                <ul className="flex flex-col gap-2 flex-1 mb-8">
                  {pkg.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      <span style={{ color: pkg.color, flexShrink: 0 }}>—</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/book"
                  className="text-center py-3 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
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
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pricing"
              className="text-sm uppercase tracking-[0.15em] transition-opacity hover:opacity-70"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textMuted }}
            >
              View full pricing details →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Transformations ──────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Results
            </p>
            <h2
              className="uppercase leading-none mb-4"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Client Transformations
            </h2>
            <p
              className="text-base max-w-xl mx-auto"
              style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
            >
              Real people. Real results. Every transformation is the product of
              consistent effort and smart programming.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Client A", duration: "12 Weeks" },
              { label: "Client B", duration: "8 Weeks" },
              { label: "Client C", duration: "16 Weeks" },
            ].map((t, i) => (
              <div key={i}>
                <div
                  className="w-full flex flex-col items-center justify-center gap-2"
                  style={{
                    aspectRatio: "3/4",
                    backgroundColor: "#161616",
                    border: `1px solid ${C.border}`,
                  }}
                >
                  <p
                    className="text-xs uppercase tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    Before / After
                  </p>
                  <p
                    className="text-xs uppercase tracking-[0.1em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    {t.label} · {t.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              FAQ
            </p>
            <h2
              className="uppercase leading-none"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Common Questions
            </h2>
          </div>

          <div style={{ border: `1px solid ${C.border}` }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="p-6"
                style={{
                  backgroundColor: C.bgCard,
                  borderBottom: i < faqs.length - 1 ? `1px solid ${C.border}` : "none",
                }}
              >
                <p
                  className="text-base mb-2"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontWeight: 700,
                    color: C.text,
                  }}
                >
                  {faq.q}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section
        className="py-24 px-6 md:px-8 text-center"
        style={{ backgroundColor: C.red }}
      >
        <h2
          className="uppercase leading-none mb-4"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: C.text,
          }}
        >
          Ready to Start?
        </h2>
        <p
          className="text-base mb-8 max-w-lg mx-auto"
          style={{
            fontFamily: "var(--font-barlow)",
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
          }}
        >
          Book your free inquiry session. No commitment required — just show up and
          let James build your roadmap.
        </p>
        <Link
          href="/book"
          className="inline-block px-10 py-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            fontWeight: 700,
            backgroundColor: C.text,
            color: C.red,
          }}
        >
          Book Now
        </Link>
      </section>

      <Footer />
    </div>
  );
}
