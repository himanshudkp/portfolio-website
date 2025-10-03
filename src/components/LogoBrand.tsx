"use client";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils";
import Link from "next/link";
import { Code2 } from "lucide-react";

interface LogoBrandProps {
  name: string;
  size?: "sm" | "md" | "lg";
  footer: boolean;
}

export function LogoBrand({ name, size = "md", footer }: LogoBrandProps) {
  const { isDark } = useTheme();
  const sizes = {
    sm: "h-9 w-9 text-sm",
    md: "h-12 w-12 text-base",
    lg: "h-16 w-16 text-xl",
  };

  const content = (
    <div className="flex items-center gap-3">
      {/* Modern Logo Badge */}
      <div className="relative group">
        <div
          className={cn(
            "flex items-center justify-center rounded-xl font-bold transition-all duration-300",
            "bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700",
            "shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/50",
            "group-hover:scale-105 transform",
            sizes[size]
          )}
        >
          <span className="relative z-10 text-white tracking-tight">HP</span>
          {/* Subtle shine effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-xl bg-blue-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </div>

      {/* Text Content */}
      <div className="hidden overflow-hidden sm:block">
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "block font-bold tracking-tight transition-colors duration-200",
              size === "lg"
                ? "text-2xl"
                : size === "md"
                ? "text-xl"
                : "text-lg",
              isDark || footer
                ? "text-white"
                : "bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
            )}
          >
            {name}
          </span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <Code2
            className={cn(
              "w-3 h-3",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          />
          <span
            className={cn(
              "block font-semibold text-xs tracking-wide uppercase",
              isDark ? "text-gray-400" : "text-gray-600"
            )}
          >
            Software Developer
          </span>
        </div>
      </div>
    </div>
  );

  if (!footer) {
    return (
      <Link href="#home" className="group flex items-center gap-2.5">
        {content}
      </Link>
    );
  }

  return content;
}
