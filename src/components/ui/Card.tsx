"use client";

import { forwardRef, ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "glass" | "gradient" | "bordered";
  hover?: boolean;
  glow?: boolean;
  children: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ 
    className, 
    variant = "default", 
    hover = true,
    glow = false,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = `
      relative rounded-2xl overflow-hidden
      transition-all duration-500 ease-out
    `;

    const variants = {
      default: `
        bg-gray-900/50 backdrop-blur-sm
        border border-gray-800
      `,
      glass: `
        bg-white/5 backdrop-blur-xl
        border border-white/10
      `,
      gradient: `
        bg-gradient-to-br from-violet-900/20 via-gray-900/50 to-indigo-900/20
        border border-violet-500/20
      `,
      bordered: `
        bg-gray-900/80
        border-2 border-gray-700
      `,
    };

    const hoverStyles = hover ? `
      hover:border-violet-500/50
      hover:shadow-xl hover:shadow-violet-500/10
      hover:-translate-y-1
    ` : "";

    const glowStyles = glow ? `
      before:absolute before:inset-0 before:-z-10
      before:bg-gradient-to-r before:from-violet-600 before:to-indigo-600
      before:blur-xl before:opacity-0 before:transition-opacity before:duration-500
      hover:before:opacity-30
    ` : "";

    return (
      <motion.div
        ref={ref}
        className={cn(baseStyles, variants[variant], hoverStyles, glowStyles, className)}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

interface CardHeaderProps {
  className?: string;
  children: ReactNode;
}

const CardHeader = ({ className, children }: CardHeaderProps) => (
  <div className={cn("p-6 pb-0", className)}>{children}</div>
);

interface CardContentProps {
  className?: string;
  children: ReactNode;
}

const CardContent = ({ className, children }: CardContentProps) => (
  <div className={cn("p-6", className)}>{children}</div>
);

interface CardFooterProps {
  className?: string;
  children: ReactNode;
}

const CardFooter = ({ className, children }: CardFooterProps) => (
  <div className={cn("p-6 pt-0", className)}>{children}</div>
);

export { Card, CardHeader, CardContent, CardFooter };
