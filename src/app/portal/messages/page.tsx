"use client";

import { useState } from "react";
import { mockMessages } from "@/lib/mock/data";
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

export default function PortalMessagesPage() {
  const [messages, setMessages] = useState<Message[]>(
    mockMessages.filter(
      (m) =>
        (m.senderId === "c1" && m.receiverId === "t1") ||
        (m.senderId === "t1" && m.receiverId === "c1")
    )
  );
  const [input, setInput] = useState("");

  function sendMessage() {
    if (!input.trim()) return;
    const newMsg: Message = {
      id: `msg-${Date.now()}`,
      senderId: "c1",
      receiverId: "t1",
      senderName: "Sarah Mitchell",
      content: input.trim(),
      read: true,
      sentAt: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, newMsg]);
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
          Messages
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Your conversation with James
        </p>
      </div>

      {/* Chat */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="flex items-center gap-3 px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            James Ismail
          </p>
          <p
            className="text-xs"
            style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
          >
            Personal Trainer
          </p>
        </div>

        {/* Messages */}
        <div
          className="flex flex-col gap-3 p-5 overflow-y-auto"
          style={{ minHeight: "300px", maxHeight: "500px" }}
        >
          {messages.map((msg) => {
            const isMe = msg.senderId === "c1";
            return (
              <div
                key={msg.id}
                className={`flex ${isMe ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="max-w-sm px-4 py-3"
                  style={{
                    backgroundColor: isMe ? C.red : C.bg,
                    border: `1px solid ${isMe ? C.red : C.border}`,
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
                      color: isMe ? "rgba(255,255,255,0.6)" : C.textFaint,
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
            placeholder="Type a message to James..."
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
    </div>
  );
}
