"use client";

import { Command } from "lucide-react";

// Add this to your Header component's right actions section
// Replace the existing command button with this improved version

interface CommandPaletteButtonProps {
  isDark: boolean;
}

export function CommandPaletteButton({ isDark }: CommandPaletteButtonProps) {
  return (
    <button
      onClick={() => {
        // Trigger keyboard event to open command palette
        const event = new KeyboardEvent("keydown", {
          key: "k",
          metaKey: true,
          ctrlKey: true,
          bubbles: true,
        });
        window.dispatchEvent(event);
      }}
      className={`group relative hidden items-center gap-2 overflow-hidden rounded-xl border px-3 py-2 text-sm transition-all duration-300 hover:scale-105 sm:flex ${
        isDark
          ? "border-gray-700/50 bg-gray-800/60 text-gray-400 hover:border-blue-500/50 hover:bg-gray-700/60 hover:text-white"
          : "border-gray-300/50 bg-white/60 text-gray-600 hover:border-blue-500/50 hover:bg-blue-50 hover:text-blue-600"
      }`}
      aria-label="Open command palette"
    >
      {/* Glow effect */}
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <Command className="relative z-10 h-4 w-4" />
      <span className="relative z-10 hidden font-medium lg:inline">Search</span>

      {/* Keyboard shortcut */}
      <div className="relative z-10 flex items-center gap-0.5">
        <kbd
          className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
            isDark ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-600"
          }`}
        >
          {typeof navigator !== "undefined" &&
          navigator.platform.includes("Mac")
            ? "⌘"
            : "Ctrl"}
        </kbd>
        <kbd
          className={`rounded px-1.5 py-0.5 text-[10px] font-semibold ${
            isDark ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-600"
          }`}
        >
          K
        </kbd>
      </div>

      {/* Shimmer effect */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
    </button>
  );
}

// Footer Command Palette Hint Component
export function FooterCommandHint({ isDark }: { isDark: boolean }) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 backdrop-blur-xl ${
        isDark
          ? "border-gray-700/50 bg-gray-800/50"
          : "border-gray-200/50 bg-white/50"
      }`}
    >
      <Command
        className={`h-4 w-4 ${isDark ? "text-blue-400" : "text-blue-600"}`}
      />
      <span className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        Press{" "}
        <kbd
          className={`mx-1 rounded px-1.5 py-0.5 text-xs font-semibold ${
            isDark ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-600"
          }`}
        >
          {typeof navigator !== "undefined" &&
          navigator.platform.includes("Mac")
            ? "⌘"
            : "Ctrl"}
        </kbd>
        <kbd
          className={`mx-1 rounded px-1.5 py-0.5 text-xs font-semibold ${
            isDark ? "bg-gray-700 text-gray-400" : "bg-gray-200 text-gray-600"
          }`}
        >
          K
        </kbd>{" "}
        for quick navigation
      </span>
    </div>
  );
}
