import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}
export default function Badge({ children }: BadgeProps) {
  return (
    <div className="border border-dashed border-gray-500 rounded-lg mx-2 bg-gray-900">
      <div className="flex items-center gap-2 py-1 px-2">{children}</div>
    </div>
  );
}
