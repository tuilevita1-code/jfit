"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import {
  mockClients,
  mockProgram,
  mockMessages,
  mockInvoices,
  mockMeasurements,
} from "@/lib/mock/data";
import { formatCurrency, formatDate, formatRelativeTime } from "@/lib/utils/formatters";

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

const TABS = ["Programme", "Progress", "Messages", "Billing"] as const;
type Tab = (typeof TABS)[number];

export default function ClientDetailPage({
  params,
}: {
  params: { clientId: string };
}) {
  const [activeTab, setActiveTab] = useState<Tab>("Programme");
  const [messageInput, setMessageInput] = useState("");
  const [localMessages, setLocalMessages] = useState(
    mockMessages.filter(
      (m) =>
        (m.senderId === params.clientId && m.receiverId === "t1") ||
        (m.senderId === "t1" && m.receiverId === params.clientId)
    )
  );

  const client = mockClients.find((c) => c.id === params.clientId);

  if (!client) {
    return (
      <div className="p-6 md:p-8" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
        <p style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}>
          Client not found.
        </p>
        <Link
          href="/dashboard/clients"
          className="inline-block mt-4 text-sm uppercase tracking-widest px-4 py-2"
          style={{
            fontFamily: "var(--font-barlow-condensed)",
            border: `1px solid ${C.border}`,
            color: C.text,
            textDecoration: "none",
          }}
        >
          Back to Clients
        </Link>
      </div>
    );
  }

  const clientMeasurements = mockMeasurements.filter(
    (m) => m.clientId === client.id
  );
  const clientInvoices = mockInvoices.filter((i) => i.clientId === client.id);

  function sendMessage() {
    if (!messageInput.trim()) return;
    const newMsg = {
      id: `msg-new-${Date.now()}`,
      senderId: "t1",
      receiverId: client!.id,
      senderName: "James Ismail",
      content: messageInput.trim(),
      read: true,
      sentAt: new Date().toISOString(),
    };
    setLocalMessages((prev) => [...prev, newMsg]);
    setMessageInput("");
  }

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Back */}
      <Link
        href="/dashboard/clients"
        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest"
        style={{
          fontFamily: "var(--font-barlow-condensed)",
          color: C.textFaint,
          textDecoration: "none",
        }}
      >
        &larr; Back to Clients
      </Link>

      {/* Client Header */}
      <div className="flex items-center gap-4">
        <Avatar name={`${client.firstName} ${client.lastName}`} size="lg" />
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1
              className="uppercase leading-none"
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                color: C.text,
              }}
            >
              {client.firstName} {client.lastName}
            </h1>
            <Badge package={client.package}>{client.package}</Badge>
          </div>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
          >
            {client.email}
          </p>
          <div className="flex items-center gap-4 mt-1">
            <p
              className="text-xs"
              style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
            >
              {client.streak} day streak
            </p>
            <p
              className="text-xs"
              style={{
                fontFamily: "var(--font-barlow)",
                color: client.waiverSigned ? C.green : C.red,
              }}
            >
              Waiver: {client.waiverSigned ? "Signed" : "Not signed"}
            </p>
            <p
              className="text-xs"
              style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
            >
              Last active: {formatRelativeTime(client.lastActive)}
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-0" style={{ borderBottom: `1px solid ${C.border}` }}>
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-5 py-3 text-sm uppercase tracking-[0.1em]"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              color: activeTab === tab ? C.text : C.textFaint,
              backgroundColor: "transparent",
              border: "none",
              borderBottom: activeTab === tab ? `2px solid ${C.red}` : "2px solid transparent",
              cursor: "pointer",
              marginBottom: "-1px",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "Programme" && (
        <div className="space-y-4">
          <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              <p
                className="text-sm uppercase tracking-[0.15em]"
                style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
              >
                {mockProgram.name}
              </p>
              <div className="flex items-center gap-3">
                <p
                  className="text-xs"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                >
                  {mockProgram.durationWeeks} weeks · {mockProgram.daysPerWeek} days/week
                </p>
                <Badge status="confirmed">{mockProgram.status}</Badge>
              </div>
            </div>
            <div className="p-5 space-y-4">
              {mockProgram.workouts.map((workout) => (
                <div
                  key={workout.id}
                  className="p-4"
                  style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
                >
                  <p
                    className="text-sm uppercase tracking-[0.1em] mb-3"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
                  >
                    Day {workout.dayNumber} — {workout.name}
                  </p>
                  <div className="flex flex-col gap-2">
                    {workout.exercises.map((ex) => (
                      <div key={ex.id} className="flex items-center justify-between">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                        >
                          {ex.name}
                        </p>
                        <p
                          className="text-xs"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                        >
                          {ex.sets} × {ex.reps}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === "Progress" && (
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Body Measurements
            </p>
          </div>
          <div className="p-5 overflow-x-auto">
            {clientMeasurements.length === 0 ? (
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
              >
                No measurements recorded.
              </p>
            ) : (
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    {["Date", "Weight", "Body Fat", "Waist", "Arms", "Thighs", "Notes"].map(
                      (h) => (
                        <th
                          key={h}
                          className="pb-3 pr-6 text-left text-xs uppercase tracking-[0.15em]"
                          style={{
                            fontFamily: "var(--font-barlow-condensed)",
                            color: C.textFaint,
                          }}
                        >
                          {h}
                        </th>
                      )
                    )}
                  </tr>
                </thead>
                <tbody>
                  {clientMeasurements.map((m) => (
                    <tr key={m.id} style={{ borderBottom: `1px solid ${C.border}` }}>
                      <td className="py-3 pr-6">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                        >
                          {formatDate(m.date)}
                        </p>
                      </td>
                      <td className="py-3 pr-6">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                        >
                          {m.weight}kg
                        </p>
                      </td>
                      <td className="py-3 pr-6">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                        >
                          {m.bodyFatPercent ?? "—"}%
                        </p>
                      </td>
                      <td className="py-3 pr-6">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                        >
                          {m.waist ?? "—"}cm
                        </p>
                      </td>
                      <td className="py-3 pr-6">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                        >
                          {m.arms ?? "—"}cm
                        </p>
                      </td>
                      <td className="py-3 pr-6">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                        >
                          {m.thighs ?? "—"}cm
                        </p>
                      </td>
                      <td className="py-3">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                        >
                          {m.notes ?? "—"}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}

      {activeTab === "Messages" && (
        <div
          style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}
          className="flex flex-col"
        >
          <div
            className="px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Conversation with {client.firstName}
            </p>
          </div>
          <div className="p-5 flex flex-col gap-3 overflow-y-auto" style={{ maxHeight: "400px" }}>
            {localMessages.map((msg) => {
              const isTrainer = msg.senderId === "t1";
              return (
                <div
                  key={msg.id}
                  className={`flex ${isTrainer ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className="max-w-xs px-4 py-2"
                    style={{
                      backgroundColor: isTrainer ? C.red : C.bg,
                      border: `1px solid ${isTrainer ? C.red : C.border}`,
                    }}
                  >
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                    >
                      {msg.content}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{
                        fontFamily: "var(--font-barlow)",
                        color: isTrainer ? "rgba(255,255,255,0.6)" : C.textFaint,
                      }}
                    >
                      {formatRelativeTime(msg.sentAt)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="flex gap-2 p-4"
            style={{ borderTop: `1px solid ${C.border}` }}
          >
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 text-base outline-none"
              style={{
                fontFamily: "var(--font-barlow)",
                backgroundColor: "rgba(255,255,255,0.04)",
                border: `1px solid ${C.border}`,
                color: C.text,
              }}
            />
            <button
              onClick={sendMessage}
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
              Send
            </button>
          </div>
        </div>
      )}

      {activeTab === "Billing" && (
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Invoices
            </p>
          </div>
          <div className="p-5 overflow-x-auto">
            {clientInvoices.length === 0 ? (
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
              >
                No invoices for this client.
              </p>
            ) : (
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                    {["Invoice", "Amount", "Status", "Due Date"].map((h) => (
                      <th
                        key={h}
                        className="pb-3 pr-6 text-left text-xs uppercase tracking-[0.15em]"
                        style={{
                          fontFamily: "var(--font-barlow-condensed)",
                          color: C.textFaint,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {clientInvoices.map((inv) => (
                    <tr key={inv.id} style={{ borderBottom: `1px solid ${C.border}` }}>
                      <td className="py-3 pr-6">
                        <p
                          className="text-sm font-medium"
                          style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                        >
                          {inv.invoiceNumber}
                        </p>
                      </td>
                      <td className="py-3 pr-6">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                        >
                          {formatCurrency(inv.amount)}
                        </p>
                      </td>
                      <td className="py-3 pr-6">
                        <Badge status={inv.status}>{inv.status}</Badge>
                      </td>
                      <td className="py-3">
                        <p
                          className="text-sm"
                          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                        >
                          {formatDate(inv.dueDate)}
                        </p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
