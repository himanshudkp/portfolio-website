"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/utils";
import { useTheme } from "@/hooks";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "group relative rounded-xl p-2.5 transition-all duration-300 hover:scale-105 cursor-pointer",
        isDark
          ? "bg-[#1E1E1E] hover:bg-gray-800 border border-gray-700/50"
          : "bg-white/60 hover:bg-gray-50 border border-gray-200/60"
      )}
      aria-label="Toggle Dark Mode"
    >
      <div className="relative h-5 w-5">
        <Sun
          className={cn(
            "absolute inset-0 text-yellow-500 transition-all duration-300 hover:text-teal-500",
            isDark
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 text-gray-400 transition-all duration-300 hover:text-teal-500",
            isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  );
};
