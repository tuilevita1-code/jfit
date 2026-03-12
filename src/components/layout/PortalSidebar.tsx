"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Dumbbell,
  TrendingUp,
  Salad,
  CheckSquare,
  MessageSquare,
  CalendarCheck,
  CreditCard,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { mockCurrentClient } from "@/lib/mock/data";

const C = {
  bg: "#0D0D0D",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.6)",
  red: "#D62828",
  border: "rgba(255,255,255,0.08)",
};

const navItems = [
  { href: "/portal", label: "Overview", icon: LayoutDashboard },
  { href: "/portal/workouts", label: "Workouts", icon: Dumbbell },
  { href: "/portal/progress", label: "Progress", icon: TrendingUp },
  { href: "/portal/nutrition", label: "Nutrition", icon: Salad },
  { href: "/portal/habits", label: "Habits", icon: CheckSquare },
  { href: "/portal/messages", label: "Messages", icon: MessageSquare },
  { href: "/portal/sessions", label: "Sessions", icon: CalendarCheck },
  { href: "/portal/billing", label: "Billing", icon: CreditCard },
  { href: "/portal/settings", label: "Settings", icon: Settings },
];

function SidebarContent({ onClose }: { onClose?: () => void }) {
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/portal" ? pathname === "/portal" : pathname.startsWith(href);

  const clientName = `${mockCurrentClient.firstName} ${mockCurrentClient.lastName}`;

  return (
    <div className="flex flex-col h-full" style={{ backgroundColor: C.bg }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 h-16 flex-shrink-0"
        style={{ borderBottom: `1px solid ${C.border}` }}
      >
        <span
          className="text-2xl tracking-wider leading-none"
          style={{ fontFamily: "var(--font-anton)", color: C.red }}
        >
          JFIT
        </span>
        {onClose && (
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 transition-opacity hover:opacity-70 md:hidden"
            style={{ color: C.text }}
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto py-2">
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = isActive(href);
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="flex items-center gap-3 px-5 py-3 text-sm transition-colors"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                fontWeight: active ? 700 : 500,
                color: active ? C.text : C.textMuted,
                borderLeft: active ? `3px solid ${C.red}` : "3px solid transparent",
                backgroundColor: active ? "rgba(214,40,40,0.12)" : "transparent",
              }}
            >
              <Icon size={17} style={{ flexShrink: 0 }} />
              <span className="uppercase tracking-[0.06em]">{label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Client info */}
      <div
        className="flex items-center gap-3 px-5 py-4 flex-shrink-0"
        style={{ borderTop: `1px solid ${C.border}` }}
      >
        <Avatar name={clientName} size="sm" />
        <div className="flex flex-col min-w-0">
          <span
            className="text-sm leading-tight truncate"
            style={{ fontFamily: "var(--font-barlow-condensed)", fontWeight: 700, color: C.text }}
          >
            {clientName}
          </span>
          <span
            className="text-xs truncate"
            style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
          >
            {mockCurrentClient.package} Plan
          </span>
        </div>
      </div>
    </div>
  );
}

export function PortalSidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile trigger */}
      <button
        className="md:hidden fixed top-4 left-4 z-40 flex items-center justify-center w-9 h-9 transition-opacity hover:opacity-70"
        style={{ color: "#ffffff", backgroundColor: "#0D0D0D", border: "1px solid rgba(255,255,255,0.08)" }}
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
      >
        <Menu size={18} />
      </button>

      {/* Desktop sidebar */}
      <aside
        className="hidden md:flex flex-col w-60 flex-shrink-0 h-screen sticky top-0"
        style={{ borderRight: `1px solid ${C.border}` }}
      >
        <SidebarContent />
      </aside>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0"
            style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative w-64 flex-shrink-0">
            <SidebarContent onClose={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
