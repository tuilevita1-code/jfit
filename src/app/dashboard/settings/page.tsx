"use client";

import { useState } from "react";
import { mockTrainer } from "@/lib/mock/data";

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

export default function DashboardSettingsPage() {
  const [profile, setProfile] = useState({
    firstName: mockTrainer.firstName,
    lastName: mockTrainer.lastName,
    email: mockTrainer.email,
    phone: mockTrainer.phone,
    instagram: mockTrainer.instagram,
    location: mockTrainer.location,
  });

  const [notifications, setNotifications] = useState({
    newSession: true,
    invoicePaid: true,
    clientMessage: false,
  });

  const [saved, setSaved] = useState(false);

  function handleProfileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setProfile((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleNotifChange(key: keyof typeof notifications) {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  }

  function saveProfile() {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const inputStyle = {
    fontFamily: "var(--font-barlow)",
    backgroundColor: "rgba(255,255,255,0.04)",
    border: `1px solid ${C.border}`,
    color: C.text,
  };

  const labelStyle = {
    fontFamily: "var(--font-barlow-condensed)",
    color: C.textFaint,
  };

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
          Settings
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Manage your profile and preferences
        </p>
      </div>

      {saved && (
        <div
          className="px-4 py-3 text-sm"
          style={{
            fontFamily: "var(--font-barlow)",
            color: C.green,
            backgroundColor: "rgba(34,197,94,0.08)",
            border: `1px solid rgba(34,197,94,0.2)`,
          }}
        >
          Profile saved successfully.
        </div>
      )}

      {/* Profile */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Profile
          </p>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-[0.15em]" style={labelStyle}>
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              value={profile.firstName}
              onChange={handleProfileChange}
              className="px-4 py-3 text-base outline-none"
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-[0.15em]" style={labelStyle}>
              Last Name
            </label>
            <input
              name="lastName"
              type="text"
              value={profile.lastName}
              onChange={handleProfileChange}
              className="px-4 py-3 text-base outline-none"
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-[0.15em]" style={labelStyle}>
              Email
            </label>
            <input
              name="email"
              type="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="px-4 py-3 text-base outline-none"
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-[0.15em]" style={labelStyle}>
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              value={profile.phone}
              onChange={handleProfileChange}
              className="px-4 py-3 text-base outline-none"
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-[0.15em]" style={labelStyle}>
              Instagram
            </label>
            <input
              name="instagram"
              type="text"
              value={profile.instagram}
              onChange={handleProfileChange}
              className="px-4 py-3 text-base outline-none"
              style={inputStyle}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs uppercase tracking-[0.15em]" style={labelStyle}>
              Location
            </label>
            <input
              name="location"
              type="text"
              value={profile.location}
              onChange={handleProfileChange}
              className="px-4 py-3 text-base outline-none"
              style={inputStyle}
            />
          </div>
        </div>
        <div className="px-5 pb-5">
          <button
            onClick={saveProfile}
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
            Save Profile
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Notifications
          </p>
        </div>
        <div className="p-5 flex flex-col gap-4">
          {[
            { key: "newSession" as const, label: "New Session Request", desc: "Get notified when a client requests a session" },
            { key: "invoicePaid" as const, label: "Invoice Paid", desc: "Get notified when an invoice is paid" },
            { key: "clientMessage" as const, label: "Client Message", desc: "Get notified for every new message from clients" },
          ].map(({ key, label, desc }) => (
            <label
              key={key}
              className="flex items-center justify-between cursor-pointer"
            >
              <div>
                <p
                  className="text-sm font-medium"
                  style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                >
                  {label}
                </p>
                <p
                  className="text-xs mt-0.5"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                >
                  {desc}
                </p>
              </div>
              <input
                type="checkbox"
                checked={notifications[key]}
                onChange={() => handleNotifChange(key)}
                style={{ accentColor: C.red, width: "1.125rem", height: "1.125rem" }}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
