import type { ReactNode } from "react";

type BadgeVariant = "red" | "gold" | "bronze" | "platinum" | "green" | "muted" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  /** Shorthand: sets variant from package tier */
  package?: "Bronze" | "Gold" | "Platinum";
  /** Shorthand: sets variant from invoice/session status */
  status?: "paid" | "sent" | "overdue" | "draft" | "pending" | "confirmed" | "cancelled";
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  red: {
    color: "#D62828",
    backgroundColor: "rgba(214,40,40,0.12)",
    border: "1px solid rgba(214,40,40,0.3)",
  },
  gold: {
    color: "#c9a84c",
    backgroundColor: "rgba(201,168,76,0.12)",
    border: "1px solid rgba(201,168,76,0.3)",
  },
  bronze: {
    color: "#bf7b3e",
    backgroundColor: "rgba(191,123,62,0.12)",
    border: "1px solid rgba(191,123,62,0.3)",
  },
  platinum: {
    color: "#c8c8c8",
    backgroundColor: "rgba(200,200,200,0.1)",
    border: "1px solid rgba(200,200,200,0.25)",
  },
  green: {
    color: "#22c55e",
    backgroundColor: "rgba(34,197,94,0.1)",
    border: "1px solid rgba(34,197,94,0.25)",
  },
  muted: {
    color: "rgba(255,255,255,0.45)",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  outline: {
    color: "rgba(255,255,255,0.65)",
    backgroundColor: "transparent",
    border: "1px solid rgba(255,255,255,0.2)",
  },
};

function resolveVariant(props: Omit<BadgeProps, "children">): BadgeVariant {
  if (props.variant) return props.variant;

  if (props.package) {
    const map: Record<string, BadgeVariant> = {
      Bronze: "bronze",
      Gold: "gold",
      Platinum: "platinum",
    };
    return map[props.package] ?? "muted";
  }

  if (props.status) {
    const map: Record<string, BadgeVariant> = {
      paid: "green",
      confirmed: "green",
      sent: "muted",
      pending: "muted",
      draft: "outline",
      overdue: "red",
      cancelled: "red",
    };
    return map[props.status] ?? "muted";
  }

  return "muted";
}

export function Badge({ children, ...props }: BadgeProps) {
  const variant = resolveVariant(props);
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 text-xs uppercase tracking-wider"
      style={{
        fontFamily: "var(--font-barlow-condensed)",
        fontWeight: 600,
        borderRadius: 0,
        letterSpacing: "0.08em",
        ...variantStyles[variant],
      }}
    >
      {children}
    </span>
  );
}
