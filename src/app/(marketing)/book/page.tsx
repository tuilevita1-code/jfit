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

export default function BookPage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text }}>
      {/* ── Header ── */}
      <section className="pt-32 pb-12 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="text-sm uppercase tracking-[0.2em] mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
          >
            Booking
          </p>
          <h1
            className="uppercase leading-none mb-4"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Book a Session
          </h1>
          <p
            className="text-lg"
            style={{ fontFamily: "var(--font-barlow)", color: C.textMuted, lineHeight: 1.7 }}
          >
            Select a time that works for you. Your first session is a free inquiry — no
            commitment required. James will assess your goals and map out your programme.
          </p>
        </div>
      </section>

      {/* ── What to Expect ── */}
      <section className="py-12 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-4 mb-16">
            {[
              {
                step: "01",
                title: "Pick a Time",
                body: "Choose from James's available slots below.",
              },
              {
                step: "02",
                title: "Show Up",
                body: "Head to Goodlife Health Clubs, Richlands at your chosen time.",
              },
              {
                step: "03",
                title: "Get Your Plan",
                body: "James assesses your goals and builds your custom programme.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="p-5"
                style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
              >
                <p
                  className="leading-none mb-3"
                  style={{ fontFamily: "var(--font-anton)", fontSize: "2rem", color: C.red }}
                >
                  {s.step}
                </p>
                <p
                  className="text-sm uppercase tracking-[0.1em] mb-2"
                  style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, color: C.text }}
                >
                  {s.title}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          {/* Calendly embed placeholder */}
          {/* TODO: replace with James Calendly URL */}
          <div
            className="w-full flex flex-col items-center justify-center gap-4 py-20"
            style={{
              backgroundColor: C.bgCard,
              border: `1px solid ${C.border}`,
              minHeight: 500,
            }}
          >
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
            >
              Calendly Booking Widget
            </p>
            <p
              className="text-sm max-w-xs text-center"
              style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
            >
              Add James&apos;s Calendly URL to embed the booking calendar here.
            </p>
            <p
              className="text-xs uppercase tracking-[0.1em] px-3 py-1.5"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                color: C.red,
                border: `1px solid rgba(214,40,40,0.3)`,
              }}
            >
              Placeholder — connect Calendly
            </p>
          </div>

          {/* Fallback contact */}
          <div className="mt-10 text-center">
            <p
              className="text-base mb-4"
              style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
            >
              Prefer to get in touch directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-3 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 700,
                  backgroundColor: C.red,
                  color: C.text,
                }}
              >
                Send a Message
              </Link>
              <a
                href="tel:+61452404017"
                className="px-6 py-3 text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 600,
                  color: C.textMuted,
                  border: `1px solid ${C.border}`,
                }}
              >
                Call James
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
