"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { mockAnnouncements } from "@/lib/mock/data";
import { formatDate } from "@/lib/utils/formatters";
import type { Announcement } from "@/types";

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

export default function AnnouncementsPage() {
  const [content, setContent] = useState("");
  const [pinned, setPinned] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>(mockAnnouncements);

  function post() {
    if (!content.trim()) return;
    const newAnnouncement: Announcement = {
      id: `an-${Date.now()}`,
      trainerId: "t1",
      content: content.trim(),
      pinned,
      createdAt: new Date().toISOString(),
    };
    setAnnouncements((prev) => [newAnnouncement, ...prev]);
    setContent("");
    setPinned(false);
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
          Announcements
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Broadcast messages to all your clients
        </p>
      </div>

      {/* Compose */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            New Announcement
          </p>
        </div>
        <div className="p-5 flex flex-col gap-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your announcement..."
            rows={4}
            className="w-full px-4 py-3 text-base outline-none resize-none"
            style={{
              fontFamily: "var(--font-barlow)",
              backgroundColor: "rgba(255,255,255,0.04)",
              border: `1px solid ${C.border}`,
              color: C.text,
            }}
          />
          <div className="flex items-center justify-between">
            <label
              className="flex items-center gap-2 cursor-pointer"
              style={{ fontFamily: "var(--font-barlow)", color: C.textMuted, fontSize: "0.875rem" }}
            >
              <input
                type="checkbox"
                checked={pinned}
                onChange={(e) => setPinned(e.target.checked)}
                style={{ accentColor: C.red }}
              />
              Pin this announcement
            </label>
            <button
              onClick={post}
              disabled={!content.trim()}
              className="px-5 py-3 text-sm uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-barlow-condensed)",
                backgroundColor: content.trim() ? C.red : "rgba(214,40,40,0.3)",
                color: C.text,
                border: "none",
                cursor: content.trim() ? "pointer" : "not-allowed",
                fontWeight: 600,
              }}
            >
              Post Announcement
            </button>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="flex flex-col gap-4">
        {announcements.map((ann) => (
          <div
            key={ann.id}
            style={{
              backgroundColor: C.bgCard,
              border: `1px solid ${ann.pinned ? "rgba(214,40,40,0.3)" : C.border}`,
            }}
          >
            <div
              className="flex items-center justify-between px-5 py-4"
              style={{ borderBottom: `1px solid ${C.border}` }}
            >
              <div className="flex items-center gap-2">
                <p
                  className="text-xs uppercase tracking-[0.15em]"
                  style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                >
                  {formatDate(ann.createdAt)}
                </p>
                {ann.pinned && <Badge variant="red">Pinned</Badge>}
              </div>
            </div>
            <div className="p-5">
              <p
                className="text-base"
                style={{ fontFamily: "var(--font-barlow)", color: C.textMuted, lineHeight: 1.6 }}
              >
                {ann.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
