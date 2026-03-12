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

const values = [
  {
    label: "Evidence-Based",
    body: "Every programme is built on exercise science — not trends. James stays current with research so your training is always optimal.",
  },
  {
    label: "Results-Driven",
    body: "Goals are set, measured, and tracked. If something isn't working, the programme adapts. Nothing is left to chance.",
  },
  {
    label: "Accountability",
    body: "James checks in regularly, tracks your attendance, and won't let you coast. The relationship is built on trust and honesty.",
  },
  {
    label: "Long-Term Thinking",
    body: "Quick fixes don't last. James builds sustainable habits — in training, nutrition, and mindset — that stick for life.",
  },
];

const credentials = [
  "Certificate III & IV in Fitness",
  "First Aid & CPR Certified",
  "Strength & Conditioning Specialist",
  "Nutrition Fundamentals Certified",
  "Years of hands-on client transformation",
];

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text }}>
      {/* ── Hero ── */}
      <section
        className="pt-32 pb-24 px-6 md:px-8"
        style={{ backgroundColor: C.bgAlt }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.2em] mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
          >
            About James
          </p>
          <h1
            className="uppercase leading-none mb-6"
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "clamp(2rem, 5vw, 3rem)",
            }}
          >
            The Trainer Behind JFIT
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{
              fontFamily: "var(--font-barlow)",
              color: C.textMuted,
              lineHeight: 1.7,
            }}
          >
            James Ismail is a Brisbane-based personal trainer with a passion for turning
            ordinary people into the strongest versions of themselves. Based at Goodlife
            Health Clubs, Richlands — James brings intensity, intelligence, and
            accountability to every session.
          </p>
        </div>
      </section>

      {/* ── Story + Photo ── */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div
            className="w-full flex items-center justify-center sticky top-24"
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

          <div className="flex flex-col gap-8">
            <div>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
              >
                The Story
              </p>
              <h2
                className="uppercase leading-none mb-5"
                style={{
                  fontFamily: "var(--font-anton)",
                  fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                }}
              >
                From Passion to Profession
              </h2>
              <div
                className="flex flex-col gap-4 text-base leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
              >
                <p>
                  James&apos; journey into fitness started the way most do — personal
                  struggle. After years of inconsistent training and failed programmes,
                  James committed to understanding the science behind real results. That
                  obsession became a career.
                </p>
                <p>
                  Today, James coaches clients of every background: office workers,
                  parents, athletes, and retirees. The common thread? Every single one
                  of them shows up differently on the other side.
                </p>
                <p>
                  Based at Goodlife Health Clubs in Richlands, James trains clients
                  in-person with full access to premium equipment. The gym environment
                  is built for serious work — and so is James.
                </p>
              </div>
            </div>

            <div>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
              >
                Credentials
              </p>
              <ul className="flex flex-col gap-2">
                {credentials.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 text-base"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    <span style={{ color: C.red, flexShrink: 0 }}>—</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-2"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
              >
                Find James
              </p>
              <p
                className="text-base mb-1"
                style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
              >
                Goodlife Health Clubs, Richlands, Brisbane QLD
              </p>
              <a
                href="https://instagram.com/trainwitjames/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base transition-colors hover:text-white"
                style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
              >
                @trainwitjames on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-24 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Philosophy
            </p>
            <h2
              className="uppercase leading-none mb-4"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              How James Trains
            </h2>
            <p
              className="text-base max-w-2xl"
              style={{
                fontFamily: "var(--font-barlow)",
                color: C.textMuted,
                lineHeight: 1.7,
              }}
            >
              There are no shortcuts. There are no magic programmes. There is only
              consistent, intelligent effort — applied over time. These are the principles
              James brings to every client relationship.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.label}
                className="p-6"
                style={{
                  backgroundColor: C.bgCard,
                  border: `1px solid ${C.border}`,
                }}
              >
                <p
                  className="text-sm uppercase tracking-[0.15em] mb-3"
                  style={{
                    fontFamily: "var(--font-barlow-condensed)",
                    fontWeight: 700,
                    color: C.red,
                  }}
                >
                  {v.label}
                </p>
                <p
                  className="text-base leading-relaxed"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6 md:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2
            className="uppercase leading-none mb-4"
            style={{
              fontFamily: "var(--font-anton)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Work With James
          </h2>
          <p
            className="text-base mb-8"
            style={{
              fontFamily: "var(--font-barlow)",
              color: C.textMuted,
              lineHeight: 1.7,
            }}
          >
            Ready to commit to something real? Book a free inquiry and James will
            put together a plan built specifically for you.
          </p>
          <Link
            href="/book"
            className="inline-block px-8 py-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              fontWeight: 700,
              backgroundColor: C.red,
              color: C.text,
            }}
          >
            Book an Inquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
