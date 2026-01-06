import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  className?: string;
  children: ReactNode;
  variant?: "default" | "primary" | "secondary" | "success" | "warning";
}

const Badge = ({ className, children, variant = "default" }: BadgeProps) => {
  const variants = {
    default: "bg-gray-800 text-gray-300 border-gray-700",
    primary: "bg-violet-500/10 text-violet-400 border-violet-500/30",
    secondary: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium border",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export { Badge };
