"use client";

import { useState } from "react";
import Link from "next/link";

const C = {
  bg: "#080808",
  bgAlt: "#0D0D0D",
  bgCard: "#111111",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.65)",
  textFaint: "rgba(255,255,255,0.45)",
  red: "#D62828",
  green: "#22c55e",
  amber: "#f59e0b",
  border: "rgba(255,255,255,0.08)",
};

export default function SignUpPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (form.password.length < 8) {
      setError("Password must be at least 8 characters.");
      return;
    }

    setLoading(true);
    document.cookie = "jfit-auth=client; path=/; max-age=86400";
    window.location.href = "/portal";
  }

  const inputClass = "w-full px-4 py-3 text-base outline-none";
  const inputStyle = {
    fontFamily: "var(--font-barlow)",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: `1px solid ${C.border}`,
    color: C.text,
  };
  const labelStyle = {
    fontFamily: "var(--font-barlow-condensed)",
    color: C.textFaint,
  };

  return (
    <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
      <div
        className="px-5 py-4"
        style={{ borderBottom: `1px solid ${C.border}` }}
      >
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: C.text,
          }}
        >
          Create Account
        </h1>
        <p
          className="mt-1 text-sm"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Join JFIT and start training
        </p>
      </div>

      <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
        {error && (
          <p
            className="text-sm px-3 py-2"
            style={{
              fontFamily: "var(--font-barlow)",
              color: C.red,
              backgroundColor: "rgba(214,40,40,0.08)",
              border: `1px solid rgba(214,40,40,0.2)`,
            }}
          >
            {error}
          </p>
        )}

        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="firstName"
              className="text-xs uppercase tracking-[0.15em]"
              style={labelStyle}
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              value={form.firstName}
              onChange={handleChange}
              placeholder="First"
              className={inputClass}
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="lastName"
              className="text-xs uppercase tracking-[0.15em]"
              style={labelStyle}
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Last"
              className={inputClass}
              style={inputStyle}
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="email"
            className="text-xs uppercase tracking-[0.15em]"
            style={labelStyle}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-xs uppercase tracking-[0.15em]"
            style={labelStyle}
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Min. 8 characters"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="confirmPassword"
            className="text-xs uppercase tracking-[0.15em]"
            style={labelStyle}
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Repeat password"
            className={inputClass}
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 text-sm uppercase tracking-widest mt-2"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            backgroundColor: loading ? "rgba(214,40,40,0.5)" : C.red,
            color: C.text,
            fontWeight: 600,
            cursor: loading ? "not-allowed" : "pointer",
            border: "none",
          }}
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <p
          className="text-sm text-center mt-2"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Already have an account?{" "}
          <Link
            href="/sign-in"
            style={{ color: C.red, textDecoration: "none" }}
          >
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
}
