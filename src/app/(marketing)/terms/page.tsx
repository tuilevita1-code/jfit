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
    title: "1. Acceptance of Terms",
    body: `By engaging JFIT's personal training services — whether in person, online, or through the JFIT client portal — you agree to be bound by these Terms of Service. If you do not agree, do not use the services.\n\nThese terms are governed by the laws of Queensland, Australia.`,
  },
  {
    title: "2. Services",
    body: `JFIT provides personal training, fitness programming, nutrition guidance, and related coaching services delivered by James Ismail at Goodlife Health Clubs, Richlands, Brisbane QLD.\n\nThe specific services provided depend on the package selected (Bronze, Gold, or Platinum) as described at jfit.com.au/services.`,
  },
  {
    title: "3. Engagement and Packages",
    body: `All packages are offered on a week-to-week basis unless otherwise agreed in writing. There is no minimum term or lock-in contract.\n\nPackages may be cancelled with 7 days written notice to James Ismail at jamesismail020@gmail.com. Cancellations received with less than 7 days notice may be subject to a final billing cycle.`,
  },
  {
    title: "4. Payment Terms",
    body: `Invoices are issued weekly or as agreed. Payment is due by the date specified on the invoice.\n\nLate payments (beyond 14 days of the due date) may result in suspension of services. Persistent non-payment may result in termination of the coaching relationship.\n\nAll payments are processed securely via Stripe. JFIT does not store credit card details.`,
  },
  {
    title: "5. Session Attendance and Cancellation",
    body: `Clients are required to provide a minimum of 24 hours notice to cancel or reschedule a session. Sessions cancelled with less than 24 hours notice may be forfeited.\n\nJames reserves the right to cancel or reschedule sessions due to illness, emergency, or circumstances beyond his control. Every effort will be made to offer alternative times.`,
  },
  {
    title: "6. Health and Medical Responsibility",
    body: `By engaging JFIT's services, you confirm that you are physically capable of participating in exercise as prescribed. You acknowledge that exercise involves inherent risks including injury.\n\nYou agree to disclose any known medical conditions, injuries, or physical limitations to James before commencing training. Failure to disclose relevant health information releases JFIT from liability for any resulting injury.\n\nJFIT is not a medical service. Nothing provided by JFIT constitutes medical advice. Always consult a qualified medical professional for health concerns.`,
  },
  {
    title: "7. Waiver",
    body: `A signed liability waiver is required before commencing in-person training sessions. The waiver acknowledges the inherent risks of physical exercise and releases James Ismail and JFIT from liability for injury arising from normal exercise participation.\n\nClients who have not completed a waiver will not be permitted to commence sessions.`,
  },
  {
    title: "8. Intellectual Property",
    body: `All workout programmes, nutrition plans, and coaching materials provided by JFIT are the intellectual property of James Ismail. They are provided for your personal use only and may not be shared, reproduced, or distributed without written permission.`,
  },
  {
    title: "9. Client Portal and Communications",
    body: `Access to the JFIT client portal is provided as part of your package. Portal access may be suspended or revoked if payment is overdue or the coaching relationship is terminated.\n\nAll communications through the portal are professional in nature. Abusive, threatening, or inappropriate communications will result in immediate termination of services without refund.`,
  },
  {
    title: "10. Limitation of Liability",
    body: `To the maximum extent permitted by Australian law, JFIT's liability for any claim arising from these services is limited to the fees paid for the month in which the claim arose.\n\nJFIT is not liable for indirect, consequential, or special loss or damage of any kind.`,
  },
  {
    title: "11. Modifications",
    body: `JFIT reserves the right to update these Terms of Service. Clients will be notified of material changes via the platform or email. Continued use of services after notification constitutes acceptance of the updated terms.`,
  },
  {
    title: "12. Governing Law",
    body: `These terms are governed by the laws of Queensland, Australia. Any disputes will be resolved in the courts of Queensland unless otherwise agreed in writing.`,
  },
];

export default function TermsPage() {
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
            Terms of Service
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
            These Terms of Service govern your use of JFIT personal training services
            operated by James Ismail (ABN pending), Brisbane QLD, Australia. Please read
            them carefully before engaging any services.
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
