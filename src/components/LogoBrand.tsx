"use client";
import { useTheme } from "@/hooks/useTheme";
import { cn } from "@/utils";
import Link from "next/link";

interface LogoBrandProps {
  name: string;
  size?: "sm" | "md" | "lg";
  footer: boolean;
}

export function LogoBrand({ name, size = "md", footer }: LogoBrandProps) {
  const { isDark } = useTheme();
  const sizes = {
    sm: "h-8 w-8 text-sm",
    md: "h-11 w-11 text-base",
    lg: "h-14 w-14 text-lg",
  };

  const content = (
    <div className="flex items-center gap-3">
      <div
        className={`flex items-center justify-center rounded-lg font-bold transition-colors duration-200 bg-blue-700 text-white ${sizes[size]}`}
      >
        HP
      </div>
      <div className="hidden overflow-hidden sm:block">
        <span
          className={cn(
            "block font-bold text-white",
            size === "lg" ? "text-xl" : "text-lg",
            !isDark && !footer ? "text-black" : ""
          )}
        >
          {name}
        </span>
        <span
          className={cn(
            "block font-medium text-xs",
            isDark ? "text-gray-400" : "text-gray-600"
          )}
        >
          Software Developer
        </span>
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
