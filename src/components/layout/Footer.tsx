import Link from "next/link";
import { Instagram } from "lucide-react";

const C = {
  bg: "#0D0D0D",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.65)",
  textFaint: "rgba(255,255,255,0.45)",
  red: "#D62828",
  border: "rgba(255,255,255,0.08)",
};

const anchorLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: C.bg, borderTop: `1px solid ${C.border}` }}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left — logo + copyright */}
          <div className="flex flex-col gap-3">
            <span
              className="text-2xl tracking-wider leading-none"
              style={{ fontFamily: "var(--font-anton)", color: C.red }}
            >
              JFIT
            </span>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
            >
              © {new Date().getFullYear()} JFIT. All rights reserved.
            </p>
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
            >
              Goodlife Health Clubs, Richlands, Brisbane QLD
            </p>
          </div>

          {/* Middle — nav links */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-1"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Navigation
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {anchorLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {link.label}
                </a>
              ))}
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors hover:text-white"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — contact */}
          <div className="flex flex-col gap-2">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-1"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
            >
              Contact
            </p>
            <a
              href="mailto:jamesismail020@gmail.com"
              className="text-sm transition-colors hover:text-white"
              style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
            >
              jamesismail020@gmail.com
            </a>
            <a
              href="tel:+61452404017"
              className="text-sm transition-colors hover:text-white"
              style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
            >
              +61 452 404 017
            </a>
            <a
              href="https://www.instagram.com/trainwitjames"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors hover:text-white"
              style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
            >
              <Instagram size={15} />
              @trainwitjames
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
