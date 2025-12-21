import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}
export default function Badge({ children }: BadgeProps) {
  return (
    <span className="border-[0.05rem] border-dashed border-gray-500 rounded-lg mx-1 bg-gray-900 inline-flex leading-none">
      <span className="flex items-center gap-2 py-[0.4rem] px-2">
        {children}
      </span>
    </span>
  );
}
