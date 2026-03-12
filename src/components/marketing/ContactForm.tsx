"use client";

import { useState } from "react";

const C = {
  bgCard: "#111111",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.65)",
  textFaint: "rgba(255,255,255,0.45)",
  red: "#D62828",
  green: "#22c55e",
  border: "rgba(255,255,255,0.08)",
};

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to Resend API route
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="p-8 flex flex-col items-center justify-center text-center gap-4"
        style={{
          backgroundColor: C.bgCard,
          border: `1px solid ${C.border}`,
          minHeight: 320,
        }}
      >
        <div
          className="w-12 h-12 flex items-center justify-center text-xl"
          style={{ backgroundColor: "rgba(34,197,94,0.12)", color: C.green }}
        >
          ✓
        </div>
        <p
          className="text-lg uppercase tracking-[0.1em]"
          style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, color: C.text }}
        >
          Message Sent
        </p>
        <p
          className="text-base max-w-xs"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          James will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = {
    backgroundColor: "rgba(255,255,255,0.04)",
    border: `1px solid ${C.border}`,
    color: C.text,
    fontFamily: "var(--font-barlow)",
    outline: "none",
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4"
      style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}`, padding: "2rem" }}
    >
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="name"
            className="text-xs uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className="w-full px-3 py-3 text-base"
            style={inputStyle}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="phone"
            className="text-xs uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+61 4XX XXX XXX"
            className="w-full px-3 py-3 text-base"
            style={inputStyle}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="email"
          className="text-xs uppercase tracking-[0.15em]"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full px-3 py-3 text-base"
          style={inputStyle}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-[0.15em]"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell James about your goals, experience, and any questions you have..."
          className="w-full px-3 py-3 text-base resize-none"
          style={inputStyle}
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 text-sm uppercase tracking-widest transition-opacity hover:opacity-80 cursor-pointer"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          fontWeight: 700,
          backgroundColor: C.red,
          color: C.text,
        }}
      >
        Send Message
      </button>
    </form>
  );
}
