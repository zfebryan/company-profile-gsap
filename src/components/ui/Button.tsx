"use client";

import { forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    href, 
    external = false,
    children, 
    ...props 
  }, ref) => {
    const baseStyles = `
      relative inline-flex items-center justify-center font-semibold rounded-xl
      transition-all duration-300 ease-out
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900
      disabled:opacity-50 disabled:cursor-not-allowed
      overflow-hidden group
    `;

    const variants = {
      primary: `
        bg-gradient-to-r from-violet-600 to-indigo-600
        hover:from-violet-500 hover:to-indigo-500
        text-white shadow-lg shadow-violet-500/25
        hover:shadow-xl hover:shadow-violet-500/30
        focus:ring-violet-500
      `,
      secondary: `
        bg-white/10 backdrop-blur-sm border border-white/20
        text-white hover:bg-white/20
        focus:ring-white/50
      `,
      outline: `
        border-2 border-violet-500 text-violet-400
        hover:bg-violet-500/10 hover:border-violet-400
        focus:ring-violet-500
      `,
      ghost: `
        text-gray-300 hover:text-white hover:bg-white/10
        focus:ring-white/50
      `,
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-3 text-base gap-2",
      lg: "px-8 py-4 text-lg gap-2.5",
    };

    const Component = href ? motion.a : motion.button;
    const linkProps = href ? { 
      href, 
      target: external ? "_blank" : undefined,
      rel: external ? "noopener noreferrer" : undefined,
    } : {};

    return (
      <Component
        ref={ref as React.Ref<HTMLButtonElement & HTMLAnchorElement>}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...linkProps}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
      </Component>
    );
  }
);

Button.displayName = "Button";

export { Button };
