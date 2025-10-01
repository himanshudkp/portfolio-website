import { Command } from "lucide-react";

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
