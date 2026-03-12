import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12" style={{ backgroundColor: "#080808" }}>
      <div className="w-full max-w-[400px] flex flex-col gap-8">
        <Link href="/" className="text-2xl tracking-wider leading-none self-center" style={{ fontFamily: "var(--font-anton)", color: "#D62828" }}>
          JFIT
        </Link>
        {children}
      </div>
    </div>
  );
}
