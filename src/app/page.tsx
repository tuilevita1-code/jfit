"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactForm } from "@/components/marketing/ContactForm";
import {
  ChevronDown,
  ChevronUp,
  Dumbbell,
  Zap,
  TrendingDown,
  Activity,
  Target,
} from "lucide-react";

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

const services = [
  {
    icon: Dumbbell,
    name: "Strength Building",
    description:
      "Build a stronger foundation with structured, progressive programming. Every session is tracked and adjusted to ensure you're consistently moving more weight and getting stronger week by week.",
  },
  {
    icon: Zap,
    name: "Muscle Growth / Hypertrophy",
    description:
      "Maximise muscle development with evidence-based training protocols. Volume, intensity, and recovery are all dialled in to help you build the physique you're working towards.",
  },
  {
    icon: TrendingDown,
    name: "Weight Loss",
    description:
      "Sustainable fat loss through smart training and accountability. No crash programmes — just consistent, trackable progress that produces real results and keeps them.",
  },
  {
    icon: Activity,
    name: "Athletic Performance",
    description:
      "Train for speed, power, agility, and endurance. Whether you play sport or just want to move and feel better, performance training takes your fitness to the next level.",
  },
  {
    icon: Target,
    name: "Custom Training",
    description:
      "Not every goal fits a template. Custom programmes are built entirely around your specific needs, lifestyle, and targets — fully personalised from day one.",
  },
];

const plans = [
  {
    name: "Bronze",
    price: "$80",
    borderColor: "#bf7b3e",
    color: "#bf7b3e",
    popular: false,
    sessions: "1x 45min PT session per week",
    features: [
      "1x 45min PT session per week",
      "Weekly training program",
      "Monthly body scan",
      "Pre & post testing",
    ],
  },
  {
    name: "Gold",
    price: "$150",
    borderColor: "#c9a84c",
    color: "#c9a84c",
    popular: true,
    sessions: "2x 45min PT sessions per week",
    features: [
      "2x 45min PT sessions per week",
      "Weekly training program",
      "Monthly body scan",
      "Pre & post testing",
      "Weekly check-ins",
    ],
  },
  {
    name: "Platinum",
    price: "$210",
    borderColor: "#c8c8c8",
    color: "#c8c8c8",
    popular: false,
    sessions: "3x 45min PT sessions per week",
    features: [
      "3x 45min PT sessions per week",
      "Weekly training program",
      "Monthly body scan",
      "Pre & post testing",
      "Weekly check-ins",
      "Nutritional advice included",
    ],
  },
];

const faqs = [
  {
    q: "Where are you based?",
    a: "I train clients at Goodlife Health Clubs, Richlands, Brisbane QLD.",
  },
  {
    q: "Do I need experience?",
    a: "Not at all — I work with all fitness levels, from complete beginners to experienced athletes. We start where you are and build from there.",
  },
  {
    q: "How do I get started?",
    a: "Book a free inquiry through the website. We'll chat about your goals and current fitness level, then get you started on the right programme.",
  },
  {
    q: "What equipment do I need?",
    a: "Nothing — all equipment is available at the gym. Just show up ready to train.",
  },
  {
    q: "How long until I see results?",
    a: "It depends on the individual, their goals, consistency, and starting point. I track your progress and adjust your programme to keep you moving forward.",
  },
];

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

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: C.bg, color: C.text, minHeight: "100vh" }}>
      <Navbar />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen px-6 md:px-8 pt-24 pb-16"
        style={{ backgroundColor: C.bg }}
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start min-h-[calc(100vh-6rem)]">
          {/* Left: text */}
          <div className="flex flex-col justify-start pt-8 md:pt-16">
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
                fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
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
              className="max-w-lg text-lg mb-10"
              style={{ fontFamily: "var(--font-barlow)", color: C.textMuted, lineHeight: 1.7 }}
            >
              James Ismail is Brisbane&apos;s premier personal trainer — building stronger,
              leaner, more confident athletes from all walks of life.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href="#contact"
                className="px-8 py-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 700,
                  backgroundColor: C.red,
                  color: C.text,
                }}
              >
                Book an Inquiry
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 text-sm uppercase tracking-widest transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 600,
                  color: C.textMuted,
                  border: `1px solid ${C.border}`,
                }}
              >
                Start a Program
              </a>
            </div>
          </div>

          {/* Right: square photo placeholder */}
          <div className="flex items-start pt-8 md:pt-16">
            <div
              className="w-full flex items-center justify-center"
              style={{
                aspectRatio: "1/1",
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
          </div>
        </div>

        <div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          style={{ color: C.textFaint }}
        >
          <ChevronDown size={24} />
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────── */}
      <section id="about" className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Who We Are
            </p>
            <h2
              className="uppercase leading-none mb-6"
              style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Trainer
            </h2>
            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
            >
              James Ismail is a certified personal trainer based at Goodlife Health Clubs,
              Richlands. With a results-driven, data-focused approach, every programme is built
              around you — tracked, adjusted, and designed to move you forward.
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <section id="services" className="py-24 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Services
            </p>
            <h2
              className="uppercase leading-none"
              style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              What We Train
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.name}
                  className="p-6 rounded-lg flex flex-col gap-4"
                  style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
                >
                  <Icon size={24} style={{ color: C.red }} />
                  <p
                    className="text-base uppercase tracking-[0.1em]"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontWeight: 700,
                      color: C.text,
                    }}
                  >
                    {s.name}
                  </p>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {s.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────── */}
      <section id="pricing" className="py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Pricing
            </p>
            <h2
              className="uppercase leading-none"
              style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Choose Your Plan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className="flex flex-col relative"
                style={{
                  backgroundColor: C.bgCard,
                  border: `1px solid ${plan.borderColor}`,
                }}
              >
                {plan.popular && (
                  <div
                    className="absolute top-0 right-0 px-3 py-1 text-xs uppercase tracking-widest"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontWeight: 700,
                      backgroundColor: C.red,
                      color: C.text,
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="p-6" style={{ borderBottom: `1px solid ${C.border}` }}>
                  <p
                    className="text-sm uppercase tracking-[0.2em] mb-2 mt-6"
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
                      style={{
                        fontFamily: "var(--font-anton)",
                        fontSize: "clamp(2.5rem, 4vw, 3.25rem)",
                      }}
                    >
                      {plan.price}
                    </span>
                    <span style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}>
                      /week
                    </span>
                  </div>
                  <p
                    className="text-sm"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                  >
                    {plan.sessions}
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
                  <a
                    href="#contact"
                    className="text-center py-3.5 text-sm uppercase tracking-widest transition-opacity hover:opacity-80 block"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontWeight: 700,
                      backgroundColor: C.red,
                      color: C.text,
                    }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Trust notes */}
          <div className="mt-10">
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
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      fontWeight: 700,
                      color: C.red,
                    }}
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
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────── */}
      <section id="contact" className="py-24 px-6 md:px-8" style={{ backgroundColor: C.bgAlt }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Contact
            </p>
            <h2
              className="uppercase leading-none"
              style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Get in Touch
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-12 max-w-5xl">
            {/* Form */}
            <div className="md:col-span-3">
              <ContactForm />
            </div>

            {/* Details */}
            <div className="md:col-span-2 flex flex-col gap-8">
              <div className="flex flex-col gap-5">
                {contactDetails.map((detail) => (
                  <div key={detail.label}>
                    <p
                      className="text-xs uppercase tracking-[0.15em] mb-1"
                      style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
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
                  James typically responds within 24 hours. For urgent enquiries, reach out
                  via Instagram DM at @trainwitjames.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-14">
            <p
              className="text-sm uppercase tracking-[0.2em] mb-2"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              FAQ
            </p>
            <h2
              className="uppercase leading-none"
              style={{ fontFamily: "var(--font-anton)", fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Common Questions
            </h2>
          </div>

          <div style={{ border: `1px solid ${C.border}` }}>
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={i}
                  style={{
                    backgroundColor: C.bgCard,
                    borderBottom: i < faqs.length - 1 ? `1px solid ${C.border}` : "none",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                  >
                    <span
                      className="text-base"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        fontWeight: 700,
                        color: C.text,
                      }}
                    >
                      {faq.q}
                    </span>
                    {isOpen ? (
                      <ChevronUp size={18} style={{ color: C.red, flexShrink: 0 }} />
                    ) : (
                      <ChevronDown size={18} style={{ color: C.textFaint, flexShrink: 0 }} />
                    )}
                  </button>
                  {isOpen && (
                    <p
                      className="px-6 pb-6 text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
