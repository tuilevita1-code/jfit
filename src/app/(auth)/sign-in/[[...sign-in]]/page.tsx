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

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    setLoading(true);

    if (email === "jamesismail020@gmail.com") {
      document.cookie = "jfit-auth=trainer; path=/; max-age=86400";
      window.location.href = "/dashboard";
    } else {
      document.cookie = "jfit-auth=client; path=/; max-age=86400";
      window.location.href = "/portal";
    }
  }

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
          Sign In
        </h1>
        <p
          className="mt-1 text-sm"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Access your JFIT account
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full px-4 py-3 text-base outline-none"
            style={{
              fontFamily: "var(--font-barlow)",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: `1px solid ${C.border}`,
              color: C.text,
            }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="password"
            className="text-xs uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full px-4 py-3 text-base outline-none"
            style={{
              fontFamily: "var(--font-barlow)",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: `1px solid ${C.border}`,
              color: C.text,
            }}
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
          {loading ? "Signing In..." : "Sign In"}
        </button>

        <p
          className="text-sm text-center mt-2"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Don&apos;t have an account?{" "}
          <Link
            href="/sign-up"
            style={{ color: C.red, textDecoration: "none" }}
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
