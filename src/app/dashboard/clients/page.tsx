"use client";

import { useState } from "react";
import Link from "next/link";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { mockClients } from "@/lib/mock/data";
import { formatRelativeTime } from "@/lib/utils/formatters";

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

export default function ClientsPage() {
  const [search, setSearch] = useState("");

  const filtered = mockClients.filter((c) =>
    `${c.firstName} ${c.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

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
          Clients
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Manage and view all your clients
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search clients..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm px-4 py-3 text-base outline-none"
        style={{
          fontFamily: "var(--font-barlow)",
          backgroundColor: "rgba(255,255,255,0.04)",
          border: `1px solid ${C.border}`,
          color: C.text,
        }}
      />

      {/* Table */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            {filtered.length} {filtered.length === 1 ? "Client" : "Clients"}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                {["Client", "Email", "Package", "Streak", "Waiver", "Last Active", ""].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 text-left text-xs uppercase tracking-[0.15em]"
                    style={{ fontFamily: "var(--font-barlow-condensed)", color: C.textFaint }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((client) => (
                <tr
                  key={client.id}
                  style={{ borderBottom: `1px solid ${C.border}` }}
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <Avatar name={`${client.firstName} ${client.lastName}`} size="sm" />
                      <p
                        className="text-sm font-medium"
                        style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                      >
                        {client.firstName} {client.lastName}
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {client.email}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <Badge package={client.package}>{client.package}</Badge>
                  </td>
                  <td className="px-5 py-4">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                    >
                      {client.streak} days
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <p
                      className="text-sm"
                      style={{
                        fontFamily: "var(--font-barlow)",
                        color: client.waiverSigned ? C.green : C.red,
                      }}
                    >
                      {client.waiverSigned ? "Signed" : "Unsigned"}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {formatRelativeTime(client.lastActive)}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <Link
                      href={`/dashboard/clients/${client.id}`}
                      className="text-xs uppercase tracking-widest px-3 py-2"
                      style={{
                        fontFamily: "var(--font-barlow-condensed)",
                        border: `1px solid ${C.border}`,
                        color: C.text,
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filtered.length === 0 && (
            <div className="px-5 py-8 text-center">
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
              >
                No clients match your search.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
