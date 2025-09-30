import { cn } from "@/utils";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "gradient" | "icon";
  size?: "sm" | "md" | "lg" | "icon";
  fullWidth?: boolean;
  shimmer?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right" | "only";
}

export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  shimmer = false,
  icon,
  iconPosition = "left",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "group relative flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300",
        {
          // Sizes
          "px-4 py-2 text-sm": size === "sm",
          "px-5 py-3.5 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
          "h-12 w-12 p-0": size === "icon",

          // Variants
          "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white shadow-lg hover:scale-[1.02] hover:shadow-blue-500/40":
            variant === "gradient",
          "border-2 text-gray-700 hover:scale-105 dark:border-gray-700/60 dark:text-gray-300 dark:hover:text-white":
            variant === "secondary",
          "bg-white/60 text-gray-700 border border-gray-200/60 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-yellow-400":
            variant === "ghost",
          "rounded-full p-2 hover:bg-gray-200 dark:hover:bg-gray-700":
            variant === "icon",
          "bg-blue-600 text-white hover:bg-blue-700": variant === "primary",
        },
        fullWidth && "w-full",
        className
      )}
    >
      {icon && iconPosition === "left" && (
        <span className="transition-transform duration-300 group-hover:translate-x-0.5">
          {icon}
        </span>
      )}

      {iconPosition !== "only" && <span>{children}</span>}

      {icon && iconPosition === "right" && (
        <span className="transition-transform duration-300 group-hover:-translate-x-0.5">
          {icon}
        </span>
      )}

      {shimmer && (
        <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
      )}
    </button>
  );
}
