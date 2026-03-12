"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
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

export default function PortalSessionsPage() {
  const [sessions, setSessions] = useState<SessionRequest[]>(
    mockSessions.filter((s) => s.clientId === "c1")
  );
  const [requested, setRequested] = useState(false);

  const upcoming = sessions.filter((s) => s.status === "confirmed");
  const pending = sessions.filter((s) => s.status === "pending");

  function cancelSession(id: string) {
    setSessions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: "cancelled" as const } : s))
    );
  }

  function requestSession() {
    const newSession: SessionRequest = {
      id: `s-${Date.now()}`,
      clientId: "c1",
      clientName: "Sarah Mitchell",
      requestedAt: new Date().toISOString(),
      status: "pending",
      notes: "Flexible on timing — weekday mornings preferred",
    };
    setSessions((prev) => [...prev, newSession]);
    setRequested(true);
    setTimeout(() => setRequested(false), 3000);
  }

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          My Portal
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
          Your upcoming and requested sessions
        </p>
      </div>

      {requested && (
        <div
          className="px-4 py-3 text-sm"
          style={{
            fontFamily: "var(--font-barlow)",
            color: C.green,
            backgroundColor: "rgba(34,197,94,0.08)",
            border: `1px solid rgba(34,197,94,0.2)`,
          }}
        >
          Session request sent. James will confirm shortly.
        </div>
      )}

      {/* Request Button */}
      <div>
        <button
          onClick={requestSession}
          className="px-5 py-3 text-sm uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            backgroundColor: C.red,
            color: C.text,
            border: "none",
            cursor: "pointer",
            fontWeight: 600,
          }}
        >
          Request Session
        </button>
      </div>

      {/* Upcoming */}
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
              No upcoming sessions booked.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {upcoming.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between p-4"
                  style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge status="confirmed">Confirmed</Badge>
                    </div>
                    {s.scheduledFor && (
                      <p
                        className="text-base font-medium"
                        style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                      >
                        {formatDate(s.scheduledFor)}
                      </p>
                    )}
                    {s.notes && (
                      <p
                        className="text-sm mt-1"
                        style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                      >
                        {s.notes}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => cancelSession(s.id)}
                    className="text-xs uppercase tracking-widest px-3 py-2"
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
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pending */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Pending Requests
          </p>
        </div>
        <div className="p-5">
          {pending.length === 0 ? (
            <p
              className="text-sm"
              style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
            >
              No pending requests.
            </p>
          ) : (
            <div className="flex flex-col gap-3">
              {pending.map((s) => (
                <div
                  key={s.id}
                  className="flex items-center justify-between p-4"
                  style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Badge status="pending">Awaiting Confirmation</Badge>
                    </div>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      Requested {formatRelativeTime(s.requestedAt)}
                    </p>
                    {s.notes && (
                      <p
                        className="text-sm mt-0.5"
                        style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                      >
                        {s.notes}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <p
        className="text-xs"
        style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
      >
        Need to reschedule? Message James directly or request a new time via the button above.
      </p>
    </div>
  );
}
