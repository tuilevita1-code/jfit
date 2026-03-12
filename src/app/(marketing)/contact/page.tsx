import { ContactForm } from "@/components/marketing/ContactForm";

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

const contactDetails = [
  {
    label: "Email",
    value: "jamesismail020@gmail.com",
    href: "mailto:jamesismail020@gmail.com",
  },
  {
    label: "Phone",
    value: "+61 452 404 017",
    href: "tel:+61452404017",
  },
  {
    label: "Instagram",
    value: "@trainwitjames",
    href: "https://instagram.com/trainwitjames/",
    external: true,
  },
  {
    label: "Location",
    value: "Goodlife Health Clubs, Richlands, Brisbane QLD",
  },
];

export default function ContactPage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text }}>
      {/* ── Header ── */}
      <section className="pt-32 pb-20 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.2em] mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
          >
            Contact
          </p>
          <h1
            className="uppercase leading-none mb-4"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Get in Touch
          </h1>
          <p
            className="text-lg max-w-2xl"
            style={{ fontFamily: "var(--font-barlow)", color: C.textMuted, lineHeight: 1.7 }}
          >
            Have a question about training, packages, or anything else? Fill in the form
            and James will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── Form + Details ── */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-12">
          {/* Form — takes more space */}
          <div className="md:col-span-3">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-5"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Send a Message
            </p>
            <ContactForm />
          </div>

          {/* Contact details */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <div>
              <p
                className="text-sm uppercase tracking-[0.2em] mb-5"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
              >
                Contact Details
              </p>
              <div className="flex flex-col gap-5">
                {contactDetails.map((detail) => (
                  <div key={detail.label}>
                    <p
                      className="text-xs uppercase tracking-[0.15em] mb-1"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        color: C.textFaint,
                      }}
                    >
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.external ? "_blank" : undefined}
                        rel={detail.external ? "noopener noreferrer" : undefined}
                        className="text-base transition-colors hover:text-white"
                        style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p
                        className="text-base"
                        style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                      >
                        {detail.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Hours */}
            <div
              className="p-5"
              style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
            >
              <p
                className="text-xs uppercase tracking-[0.15em] mb-4"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
              >
                Response Time
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
              >
                James typically responds within 24 hours. For urgent enquiries, reach
                out via Instagram DM at @trainwitjames.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
