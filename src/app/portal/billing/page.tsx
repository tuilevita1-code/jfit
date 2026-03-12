import { Badge } from "@/components/ui/Badge";
import { mockInvoices, mockCurrentClient } from "@/lib/mock/data";
import { formatCurrency, formatDate } from "@/lib/utils/formatters";

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

export default function BillingPage() {
  const client = mockCurrentClient;
  const clientInvoices = mockInvoices.filter((i) => i.clientId === client.id);

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
          Billing
        </h1>
        <p
          className="mt-2 text-base"
          style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
        >
          Your membership and payment history
        </p>
      </div>

      {/* Current Package */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid rgba(201,168,76,0.3)` }}>
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: `1px solid rgba(201,168,76,0.15)` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Current Plan
          </p>
          <Badge package="Gold">Gold</Badge>
        </div>
        <div className="p-5">
          <div className="flex items-baseline gap-2 mb-4">
            <p
              style={{
                fontFamily: "var(--font-anton)",
                fontSize: "clamp(2rem, 4vw, 2.75rem)",
                color: "#c9a84c",
                lineHeight: 1,
              }}
            >
              $150
            </p>
            <p
              className="text-base"
              style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
            >
              / week
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {[
              "2 personal training sessions per week",
              "Custom programme included",
              "Progress tracking",
              "Direct messaging with James",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <span style={{ color: C.green, fontSize: "0.75rem" }}>&#10003;</span>
                <p
                  className="text-sm"
                  style={{ fontFamily: "var(--font-barlow)", color: C.textMuted }}
                >
                  {feature}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Invoices */}
      <div style={{ backgroundColor: C.bgCard, border: `1px solid ${C.border}` }}>
        <div
          className="px-5 py-4"
          style={{ borderBottom: `1px solid ${C.border}` }}
        >
          <p
            className="text-sm uppercase tracking-[0.15em]"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: C.text }}
          >
            Invoice History
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr style={{ borderBottom: `1px solid ${C.border}` }}>
                {["Invoice", "Amount", "Status", "Due Date"].map((h) => (
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
              {clientInvoices.map((invoice) => (
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
          {clientInvoices.length === 0 && (
            <div className="px-5 py-8 text-center">
              <p
                className="text-sm"
                style={{ fontFamily: "var(--font-barlow)", color: C.textFaint }}
              >
                No invoices yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
