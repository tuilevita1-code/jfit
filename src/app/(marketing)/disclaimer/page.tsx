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
    title: "Fitness and Exercise Disclaimer",
    body: `The training programmes, exercise instructions, and fitness guidance provided by JFIT are for educational and informational purposes. While James Ismail is a qualified personal trainer, individual results will vary based on genetics, adherence, nutrition, sleep, and other lifestyle factors.\n\nExercise involves inherent physical risks including, but not limited to, muscle soreness, fatigue, joint stress, and in rare cases, serious injury. By participating in any JFIT programme, you acknowledge and accept these risks.`,
  },
  {
    title: "Medical Disclaimer",
    body: `JFIT is not a medical service. James Ismail is not a doctor, physiotherapist, or registered healthcare professional.\n\nNothing provided by JFIT — whether in person, through the client portal, in written programmes, or via messaging — constitutes medical advice, diagnosis, or treatment.\n\nBefore commencing any new exercise programme, you should consult a qualified medical professional — particularly if you have any pre-existing medical conditions, injuries, or health concerns. This includes but is not limited to:\n\n— Cardiovascular conditions\n— Musculoskeletal injuries or chronic pain\n— Metabolic conditions (diabetes, thyroid disorders)\n— Mental health conditions\n— Pregnancy or postpartum recovery\n\nIf you experience chest pain, shortness of breath, dizziness, or any unusual symptoms during exercise, stop immediately and seek medical attention.`,
  },
  {
    title: "Nutrition Disclaimer",
    body: `Nutrition guidance provided by JFIT is general in nature and is not a substitute for professional dietary advice from a registered dietitian or nutritionist.\n\nMacronutrient targets and meal suggestions are provided as a guide based on your fitness goals. Individual nutritional needs vary and may be influenced by medical conditions, medications, and other factors not assessed by JFIT.\n\nJFIT does not diagnose or treat eating disorders or disordered eating. If you have concerns about your relationship with food, please consult a qualified healthcare provider.`,
  },
  {
    title: "Results Disclaimer",
    body: `Testimonials, transformation photos, and client results shared by JFIT represent individual experiences. They are not guarantees of future results.\n\nResults depend on many factors outside JFIT's control, including your consistency, nutrition, sleep, stress levels, and underlying health. There is no guarantee that you will achieve any specific outcome from engaging JFIT's services.`,
  },
  {
    title: "Supplement Disclaimer",
    body: `Any supplement recommendations made by JFIT are general suggestions and do not constitute medical or pharmacological advice.\n\nAlways consult a healthcare professional before adding supplements to your routine, particularly if you take prescription medications or have a diagnosed medical condition. JFIT does not receive commissions or financial incentives for recommending any specific supplement products.`,
  },
  {
    title: "Limitation of Liability",
    body: `To the fullest extent permitted by Australian law, James Ismail and JFIT accept no liability for any injury, loss, or damage arising from participation in training programmes, use of the JFIT platform, or reliance on any information provided.\n\nBy engaging JFIT's services, you confirm that you have read this disclaimer, understand its contents, and agree to its terms.`,
  },
  {
    title: "Questions",
    body: `If you have any questions about this disclaimer or your suitability for training, contact James directly:\n\nEmail: jamesismail020@gmail.com\nPhone: +61 452 404 017`,
  },
];

export default function DisclaimerPage() {
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
            Disclaimer
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
            Please read this disclaimer carefully before engaging JFIT&apos;s personal
            training services. This disclaimer applies to all services, content, and
            communications provided by James Ismail trading as JFIT.
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
