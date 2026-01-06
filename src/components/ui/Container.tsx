import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  className?: string;
  children: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const Container = ({ className, children, size = "lg" }: ContainerProps) => {
  const sizes = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-7xl",
    xl: "max-w-[1400px]",
    full: "max-w-full",
  };

  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", sizes[size], className)}>
      {children}
    </div>
  );
};

export { Container };
