import { StatCard } from "@/components/ui/StatCard";
import { Badge } from "@/components/ui/Badge";
import { Avatar } from "@/components/ui/Avatar";
import {
  mockClients,
  mockInvoices,
  mockMessages,
  mockSessions,
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

export default function DashboardPage() {
  const totalRevenue = mockInvoices
    .filter((i) => i.status === "paid")
    .reduce((sum, i) => sum + i.amount, 0);

  const pendingInvoices = mockInvoices.filter(
    (i) => i.status === "sent" || i.status === "overdue"
  ).length;

  const pendingSessions = mockSessions.filter((s) => s.status === "pending");
  const recentInvoices = mockInvoices.slice(0, 5);
  const unreadMessages = mockMessages.filter((m) => !m.read);
  const recentClients = mockClients.slice(0, 5);

  return (
    <div className="p-6 md:p-8 space-y-6" style={{ backgroundColor: C.bg, minHeight: "100vh" }}>
      {/* Page Header */}
      <div>
        <p
          className="text-sm uppercase tracking-[0.2em] mb-1"
          style={{ fontFamily: "var(--font-barlow-condensed)", color: C.red }}
        >
          Overview
        </p>
        <h1
          className="uppercase leading-none"
          style={{
            fontFamily: "var(--font-anton)",
            fontSize: "clamp(2rem, 5vw, 3rem)",
            color: C.text,
          }}
        >
          Dashboard
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Your training business at a glance
        </p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard label="Active Clients" value="6" />
        <StatCard label="Monthly Revenue" value={formatCurrency(totalRevenue)} />
        <StatCard label="Sessions This Week" value="8" />
        <StatCard label="Pending Invoices" value={String(pendingInvoices)} accent />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Client Activity */}
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="flex items-center gap-2.5 px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Client Activity
            </p>
          </div>
          <div className="p-5">
            <div className="flex flex-col gap-3">
              {recentClients.map((client) => (
                <div key={client.id} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={`${client.firstName} ${client.lastName}`} size="sm" />
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                      >
                        {client.firstName} {client.lastName}
                      </p>
                      <p
                        className="text-xs"
                        style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                      >
                        {formatRelativeTime(client.lastActive)}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge package={client.package}>{client.package}</Badge>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                    >
                      {client.streak}d
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pending Sessions */}
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="flex items-center gap-2.5 px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Pending Sessions
            </p>
            <Badge status="pending">{pendingSessions.length}</Badge>
          </div>
          <div className="p-5">
            {pendingSessions.length === 0 ? (
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
              >
                No pending session requests.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {pendingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="p-3"
                    style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p
                        className="text-sm font-medium"
                        style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                      >
                        {session.clientName}
                      </p>
                      <Badge status="pending">Pending</Badge>
                    </div>
                    {session.notes && (
                      <p
                        className="text-xs"
                        style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                      >
                        {session.notes}
                      </p>
                    )}
                    <p
                      className="text-xs mt-1"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                    >
                      Requested {formatRelativeTime(session.requestedAt)}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recent Invoices */}
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="flex items-center gap-2.5 px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Recent Invoices
            </p>
          </div>
          <div className="p-5">
            <div className="flex flex-col gap-3">
              {recentInvoices.map((invoice) => (
                <div key={invoice.id} className="flex items-center justify-between">
                  <div>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                    >
                      {invoice.invoiceNumber}
                    </p>
                    <p
                      className="text-xs"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                    >
                      {invoice.clientName} — Due {formatDate(invoice.dueDate)}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p
                      className="text-sm font-medium"
                      style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                    >
                      {formatCurrency(invoice.amount)}
                    </p>
                    <Badge status={invoice.status}>{invoice.status}</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Unread Messages */}
        <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
          <div
            className="flex items-center gap-2.5 px-5 py-4"
            style={{ borderBottom: `1px solid ${C.border}` }}
          >
            <p
              className="text-sm uppercase tracking-[0.15em]"
              style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
            >
              Unread Messages
            </p>
            <Badge variant="red">{unreadMessages.length}</Badge>
          </div>
          <div className="p-5">
            {unreadMessages.length === 0 ? (
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
              >
                All messages read.
              </p>
            ) : (
              <div className="flex flex-col gap-3">
                {unreadMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className="p-3"
                    style={{ backgroundColor: C.bg, border: `1px solid ${C.border}` }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <p
                        className="text-sm font-medium"
                        style={{ fontFamily: "var(--font-barlow)", color: C.text }}
                      >
                        {msg.senderName}
                      </p>
                      <p
                        className="text-xs"
                        style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
                      >
                        {formatRelativeTime(msg.sentAt)}
                      </p>
                    </div>
                    <p
                      className="text-sm"
                      style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                    >
                      {msg.content.length > 80
                        ? msg.content.slice(0, 80) + "..."
                        : msg.content}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
