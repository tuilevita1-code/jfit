"use client";

import { useState } from "react";
import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { mockInvoices } from "@/lib/mock/data";
import { formatCurrency, formatDate } from "@/lib/utils/formatters";
import type { InvoiceStatus } from "@/types";

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

type FilterStatus = "all" | InvoiceStatus;
const FILTERS: { label: string; value: FilterStatus }[] = [
  { label: "All", value: "all" },
  { label: "Paid", value: "paid" },
  { label: "Sent", value: "sent" },
  { label: "Overdue", value: "overdue" },
  { label: "Draft", value: "draft" },
];

export default function InvoicesPage() {
  const [filter, setFilter] = useState<FilterStatus>("all");

  const totalRevenue = mockInvoices.reduce((sum, i) => sum + i.amount, 0);
  const paidTotal = mockInvoices.filter((i) => i.status === "paid").reduce((sum, i) => sum + i.amount, 0);
  const sentTotal = mockInvoices.filter((i) => i.status === "sent").reduce((sum, i) => sum + i.amount, 0);
  const overdueTotal = mockInvoices.filter((i) => i.status === "overdue").reduce((sum, i) => sum + i.amount, 0);

  const filtered =
    filter === "all" ? mockInvoices : mockInvoices.filter((i) => i.status === filter);

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
          Invoices
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Track and manage client billing
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Total Revenue" value={formatCurrency(totalRevenue)} />
        <StatCard label="Paid" value={formatCurrency(paidTotal)} />
        <StatCard label="Sent / Pending" value={formatCurrency(sentTotal)} />
        <StatCard label="Overdue" value={formatCurrency(overdueTotal)} accent />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-2 flex-wrap">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className="px-4 py-2 text-xs uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-barlow-condensed)",
              backgroundColor: filter === f.value ? C.red : "transparent",
              color: filter === f.value ? C.text : C.textMuted,
              border: `1px solid ${filter === f.value ? C.red : C.border}`,
              cursor: "pointer",
              fontWeight: 600,
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

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
            {filtered.length} {filtered.length === 1 ? "Invoice" : "Invoices"}
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                {["Invoice #", "Client", "Amount", "Status", "Due Date"].map((h) => (
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
              {filtered.map((invoice) => (
                <tr key={invoice.id} style={{ borderBottom: `1px solid ${C.border}` }}>
                  <td className="px-5 py-4">
                    <p
                      className="text-sm font-medium"
                      style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                    >
                      {invoice.invoiceNumber}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {invoice.clientName}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <p
                      className="text-sm font-medium"
                      style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                    >
                      {formatCurrency(invoice.amount)}
                    </p>
                  </td>
                  <td className="px-5 py-4">
                    <Badge status={invoice.status}>{invoice.status}</Badge>
                  </td>
                  <td className="px-5 py-4">
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {formatDate(invoice.dueDate)}
                    </p>
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
                No invoices match this filter.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
