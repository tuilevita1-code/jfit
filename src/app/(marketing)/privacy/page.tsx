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

const sections = [
  {
    title: "1. Who We Are",
    body: `JFIT is operated by James Ismail, a sole trader based in Brisbane, Queensland, Australia. James Ismail is the data controller responsible for the personal information collected through this website and the JFIT client platform.\n\nContact: jamesismail020@gmail.com`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect the following types of personal information:\n\n— Contact information: name, email address, phone number\n— Health and fitness data: weight, body measurements, training logs, progress photos\n— Financial information: billing details processed securely via Stripe (we do not store card numbers)\n— Communication records: messages sent through the JFIT platform\n— Usage data: how you interact with our website and client portal`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use your personal information to:\n\n— Provide personal training and coaching services\n— Manage your programme, track progress, and deliver nutrition guidance\n— Process payments and issue invoices\n— Send service-related communications\n— Comply with legal obligations under Australian law\n\nWe do not sell, rent, or share your personal information with third parties for marketing purposes.`,
  },
  {
    title: "4. Legal Basis for Processing",
    body: `We process your personal information under the following grounds:\n\n— Performance of a contract: to deliver the coaching services you have engaged\n— Consent: for optional communications such as announcements\n— Legitimate interests: to improve our services and maintain platform security\n\nAll processing complies with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).`,
  },
  {
    title: "5. Data Storage and Security",
    body: `Your data is stored securely using Supabase (cloud database) with encryption at rest and in transit. Payment information is processed by Stripe, which holds PCI DSS Level 1 certification. We implement reasonable technical and organisational measures to protect your data from unauthorised access, loss, or disclosure.`,
  },
  {
    title: "6. Data Retention",
    body: `We retain your personal information for as long as you remain an active client and for a reasonable period thereafter for legal and administrative purposes. Health and training data may be retained for up to 7 years to comply with fitness industry record-keeping obligations.`,
  },
  {
    title: "7. Your Rights",
    body: `Under Australian privacy law, you have the right to:\n\n— Access the personal information we hold about you\n— Request correction of inaccurate or incomplete information\n— Request deletion of your information (subject to legal retention requirements)\n— Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)\n\nTo exercise any of these rights, contact James at jamesismail020@gmail.com.`,
  },
  {
    title: "8. Cookies",
    body: `Our website uses essential session cookies to manage authentication. We do not use tracking cookies or third-party advertising cookies. You may disable cookies in your browser settings, but this may affect the functionality of the client portal.`,
  },
  {
    title: "9. Third-Party Services",
    body: `We use the following third-party services:\n\n— Stripe: payment processing (stripe.com/privacy)\n— Supabase: data storage (supabase.com/privacy)\n— Calendly: session booking (calendly.com/privacy)\n— Resend: transactional email (resend.com/privacy)\n\nEach provider operates under their own privacy policy and is contractually required to protect your data.`,
  },
  {
    title: "10. Changes to This Policy",
    body: `We may update this privacy policy from time to time. When we do, we will notify active clients via the JFIT platform and update the date below. Continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "11. Contact",
    body: `For any privacy-related queries, requests, or complaints:\n\nJames Ismail\nEmail: jamesismail020@gmail.com\nPhone: +61 452 404 017\nLocation: Goodlife Health Clubs, Richlands, Brisbane QLD`,
  },
];

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: C.bg, color: C.text }}>
      <section className="pt-32 pb-20 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-3xl mx-auto">
          <p
            className="text-sm uppercase tracking-[0.2em] mb-3"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
          >
            Legal
          </p>
          <h1
            className="uppercase leading-none mb-4"
            style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 5vw, 3rem)" }}
          >
            Privacy Policy
          </h1>
          <p
            className="text-base"
            style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
          >
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-8">
        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
          >
            This Privacy Policy explains how JFIT (operated by James Ismail) collects,
            uses, stores, and protects your personal information. By using our website
            or client portal, you agree to the practices described in this policy.
          </p>

          {sections.map((s) => (
            <div
              key={s.title}
              className="p-6"
              style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
            >
              <h2
                className="text-base uppercase tracking-[0.1em] mb-4"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 700,
                  color: C.text,
                }}
              >
                {s.title}
              </h2>
              {s.body.split("\n").map((line, i) =>
                line.trim() === "" ? (
                  <div key={i} className="h-3" />
                ) : (
                  <p
                    key={i}
                    className="text-base leading-relaxed"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {line}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
