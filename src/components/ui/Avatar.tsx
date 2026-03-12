interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { outer: "h-8 w-8", text: "text-xs" },
  md: { outer: "h-10 w-10", text: "text-sm" },
  lg: { outer: "h-14 w-14", text: "text-base" },
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({ name, size = "md" }: AvatarProps) {
  const { outer, text } = sizes[size];
  return (
    <div
      className={`${outer} ${text} flex items-center justify-center flex-shrink-0 select-none`}
      style={{
        backgroundColor: "rgba(214,40,40,0.2)",
        color: "#D62828",
        fontFamily: "var(--font-barlow-condensed)",
        fontWeight: 700,
        borderRadius: 0,
      }}
      aria-label={name}
    >
      {getInitials(name)}
    </div>
  );
}
