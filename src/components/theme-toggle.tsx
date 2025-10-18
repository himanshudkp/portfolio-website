"use client";

import { useTheme } from "next-themes";
import { useCallback, useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = useCallback(
    () => setTheme(theme === "dark" ? "light" : "dark"),
    [setTheme, theme]
  );

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? (
        <Moon className="h-5 w-5 text-gray-800" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400" />
      )}
    </button>
  );
}
