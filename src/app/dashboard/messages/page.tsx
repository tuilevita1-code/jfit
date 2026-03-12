"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/Avatar";
import { mockMessages, mockClients } from "@/lib/mock/data";
import { formatRelativeTime } from "@/lib/utils/formatters";
import type { Message } from "@/types";

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

export default function MessagesPage() {
  // Derive unique clients from messages
  const clientIds = Array.from(
    new Set(
      mockMessages
        .filter((m) => m.senderId !== "t1")
        .map((m) => m.senderId)
    )
  );

  const clients = clientIds.map((id) => mockClients.find((c) => c.id === id)).filter(Boolean) as typeof mockClients;

  const [selectedClientId, setSelectedClientId] = useState<string>(clients[0]?.id ?? "");
  const [allMessages, setAllMessages] = useState<Message[]>(mockMessages);
  const [input, setInput] = useState("");

  const conversation = allMessages.filter(
    (m) =>
      (m.senderId === selectedClientId && m.receiverId === "t1") ||
      (m.senderId === "t1" && m.receiverId === selectedClientId)
  );

  const selectedClient = clients.find((c) => c.id === selectedClientId);

  function getLastMessage(clientId: string) {
    const msgs = allMessages.filter(
      (m) =>
        (m.senderId === clientId && m.receiverId === "t1") ||
        (m.senderId === "t1" && m.receiverId === clientId)
    );
    return msgs[msgs.length - 1];
  }

  function sendMessage() {
    if (!input.trim() || !selectedClientId) return;
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: "t1",
      receiverId: selectedClientId,
      senderName: "James Ismail",
      content: input.trim(),
      read: true,
      sentAt: new Date().toISOString(),
    };
    setAllMessages((prev) => [...prev, newMsg]);
    setInput("");
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
          Messages
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Conversations with your clients
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0" style={{ border: `1px solid ${C.border}`, backgroundColor: C.bgCard }}>
        {/* Left Panel — Client List */}
        <div style={{ borderRight: `1px solid ${C.border}` }}>
          <div
            className="px-4 py-3"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-xs uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
            >
              Conversations
            </p>
          </div>
          {clients.map((client) => {
            const lastMsg = getLastMessage(client.id);
            const isSelected = selectedClientId === client.id;
            return (
              <button
                key={client.id}
                onClick={() => setSelectedClientId(client.id)}
                className="w-full flex items-start gap-3 px-4 py-3 text-left"
                style={{
                  backgroundColor: isSelected ? "rgba(255,255,255,0.04)" : "transparent",
                  borderBottom: `1px solid ${C.border}`,
                  cursor: "pointer",
                  border: "none",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: C.border,
                  borderLeft: isSelected ? `2px solid ${C.red}` : "2px solid transparent",
                }}
              >
                <Avatar name={`${client.firstName} ${client.lastName}`} size="sm" />
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-medium truncate"
                    style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                  >
                    {client.firstName} {client.lastName}
                  </p>
                  {lastMsg && (
                    <p
                      className="text-xs truncate"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                    >
                      {lastMsg.content}
                    </p>
                  )}
                </div>
                {lastMsg && (
                  <p
                    className="text-xs flex-shrink-0"
                    style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                  >
                    {formatRelativeTime(lastMsg.sentAt)}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Right Panel — Conversation */}
        <div className="md:col-span-2 flex flex-col" style={{ minHeight: "500px" }}>
          {selectedClient ? (
            <>
              {/* Header */}
              <div
                className="flex items-center gap-3 px-5 py-4"
                style={{ borderBottom: `1px solid ${C.border}` }}
              >
                <Avatar name={`${selectedClient.firstName} ${selectedClient.lastName}`} size="sm" />
                <p
                  className="text-sm font-medium"
                  style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                >
                  {selectedClient.firstName} {selectedClient.lastName}
                </p>
              </div>

              {/* Messages */}
              <div className="flex-1 p-5 flex flex-col gap-3 overflow-y-auto" style={{ maxHeight: "400px" }}>
                {conversation.map((msg) => {
                  const isTrainer = msg.senderId === "t1";
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${isTrainer ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className="max-w-sm px-4 py-2"
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

              {/* Input */}
              <div
                className="flex gap-2 p-4"
                style={{ borderTop: `1px solid ${C.border}` }}
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
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
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center">
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
              >
                Select a conversation
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
