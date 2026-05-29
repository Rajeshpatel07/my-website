import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}
export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/[0.08] text-white/70 text-sm font-medium hover:bg-white/[0.06] hover:border-white/[0.15] hover:text-white transition-all duration-300 whitespace-nowrap shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)]">
      {children}
    </span>
  );
}
