"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import { mockSessions } from "@/lib/mock/data";
import { formatDate, formatRelativeTime } from "@/lib/utils/formatters";
import type { SessionRequest } from "@/types";

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

export default function SessionsPage() {
  const [sessions, setSessions] = useState<SessionRequest[]>(mockSessions);

  const pending = sessions.filter((s) => s.status === "pending");
  const upcoming = sessions.filter((s) => s.status === "confirmed");

  function confirm(id: string) {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "confirmed" as const } : s))
    );
  }

  function cancel(id: string) {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "cancelled" as const } : s))
    );
  }

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          Trainer Dashboard
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          Sessions
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Manage session requests and upcoming bookings
        </p>
      </div>

      {/* Pending Requests */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Pending Requests
          </p>
          {pending.length > 0 && (
            <Badge status="pending">{pending.length}</Badge>
          )}
        </div>
        <div className="p-5">
          {pending.length === 0 ? (
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
            >
              No pending session requests.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {pending.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between gap-4 p-4"
                  style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
                >
                  <div className="flex items-center gap-3">
                    <Avatar name={session.clientName} size="sm" />
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                      >
                        {session.clientName}
                      </p>
                      <p
                        className="text-xs"
                        style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                      >
                        Requested {formatRelativeTime(session.requestedAt)}
                        {session.notes && ` — ${session.notes}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => confirm(session.id)}
                      className="px-4 py-2 text-xs uppercase tracking-widest"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        backgroundColor: C.green,
                        color: "#000",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: 700,
                      }}
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => cancel(session.id)}
                      className="px-4 py-2 text-xs uppercase tracking-widest"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        border: `1px solid rgba(214,40,40,0.3)`,
                        color: C.red,
                        backgroundColor: "transparent",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Upcoming Sessions */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Upcoming Sessions
          </p>
        </div>
        <div className="p-5">
          {upcoming.length === 0 ? (
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
            >
              No upcoming sessions.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {upcoming.map((session) => (
                <div
                  key={session.id}
                  className="flex items-center justify-between gap-4 p-4"
                  style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
                >
                  <div className="flex items-center gap-3">
                    <Avatar name={session.clientName} size="sm" />
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                      >
                        {session.clientName}
                      </p>
                      {session.scheduledFor && (
                        <p
                          className="text-xs"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                        >
                          {formatDate(session.scheduledFor)}
                          {session.notes && ` — ${session.notes}`}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge status="confirmed">Confirmed</Badge>
                    <button
                      onClick={() => cancel(session.id)}
                      className="px-4 py-2 text-xs uppercase tracking-widest"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        border: `1px solid ${C.border}`,
                        color: C.textFaint,
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
