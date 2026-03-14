"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const C = {
  bg: "#080808",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.65)",
  red: "#D62828",
  border: "rgba(255,255,255,0.08)",
};

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? C.bg : "transparent",
          borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl tracking-wider leading-none"
            style={{ fontFamily: "var(--font-anton)", color: C.red }}
          >
            JFIT
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.12em] transition-colors hover:text-white"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 500,
                  color: C.textMuted,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              className="px-5 py-2.5 text-sm uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: 700,
                backgroundColor: C.red,
                color: C.text,
              }}
            >
              Book
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-70"
            style={{ color: C.text }}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col"
          style={{ backgroundColor: C.bg }}
        >
          <div
            className="flex items-center justify-between px-6 h-16"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <span
              className="text-2xl tracking-wider leading-none"
              style={{ fontFamily: "var(--font-anton)", color: C.red }}
            >
              JFIT
            </span>
            <button
              className="flex items-center justify-center w-10 h-10 transition-opacity hover:opacity-70"
              style={{ color: C.text }}
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={22} />
            </button>
          </div>

          <nav className="flex flex-col p-6 gap-1 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-4 text-xl uppercase tracking-[0.12em] transition-opacity hover:opacity-70"
                style={{
                  fontFamily: "var(--font-barlow-condensed)",
                  fontWeight: 600,
                  color: C.text,
                  borderBottom: `1px solid ${C.border}`,
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-6 px-5 py-3.5 text-base uppercase tracking-widest text-center transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: 700,
                backgroundColor: C.red,
                color: C.text,
              }}
            >
              Book a Session
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
