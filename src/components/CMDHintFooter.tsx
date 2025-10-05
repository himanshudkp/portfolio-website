"use client";
import { Command, Zap } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { cn, getModifierKey } from "@/utils";

export const CMDHintFooter = () => {
  const { isDark } = useTheme();

  return (
    <div className="relative group">
      <div
        className={cn(
          "relative flex items-center gap-3 rounded-2xl border backdrop-blur-xl px-5 py-3",
          isDark
            ? "border-gray-700/50 bg-gradient-to-r from-gray-800/90 to-gray-900/90"
            : "border-gray-200/50 bg-gradient-to-r from-white/90 to-gray-50/90"
        )}
      >
        {/* Icon with pulse effect */}
        <div className="relative">
          {/* <div
            className={cn(
              "absolute inset-0 rounded-lg blur-md animate-pulse",
              isDark ? "bg-blue-500/30" : "bg-blue-400/30"
            )}
          /> */}
          <div
            className={cn(
              "relative flex items-center justify-center w-9 h-9 rounded-lg transition-colors",
              isDark
                ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                : "bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200/50"
            )}
          >
            <Command
              className={cn(
                "h-4 w-4",
                isDark ? "text-blue-400" : "text-blue-600"
              )}
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "text-sm font-medium",
              isDark ? "text-gray-300" : "text-gray-700"
            )}
          >
            Press
          </span>

          {/* Keyboard keys */}
          <div className="flex items-center gap-1.5">
            <kbd
              className={cn(
                "inline-flex items-center justify-center min-w-[28px] h-7 rounded-lg px-2 text-xs font-bold shadow-md border transition-all duration-200 hover:scale-110",
                isDark
                  ? "bg-gradient-to-b from-gray-700 to-gray-800 border-gray-600/50 text-gray-200 shadow-gray-900/50"
                  : "bg-gradient-to-b from-white to-gray-100 border-gray-300/50 text-gray-700 shadow-gray-300/50"
              )}
            >
              {getModifierKey}
            </kbd>

            <span
              className={cn(
                "text-xs font-bold",
                isDark ? "text-gray-600" : "text-gray-400"
              )}
            >
              +
            </span>

            <kbd
              className={cn(
                "inline-flex items-center justify-center min-w-[28px] h-7 rounded-lg px-2 text-xs font-bold shadow-md border transition-all duration-200 hover:scale-110",
                isDark
                  ? "bg-gradient-to-b from-gray-700 to-gray-800 border-gray-600/50 text-gray-200 shadow-gray-900/50"
                  : "bg-gradient-to-b from-white to-gray-100 border-gray-300/50 text-gray-700 shadow-gray-300/50"
              )}
            >
              K
            </kbd>
          </div>

          <span
            className={cn(
              "text-sm font-medium",
              isDark ? "text-gray-300" : "text-gray-700"
            )}
          >
            for
          </span>

          {/* Highlighted feature */}
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-sm font-semibold transition-all",
              isDark
                ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 border border-blue-500/30"
                : "bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border border-blue-300/50"
            )}
          >
            <Zap className="h-3.5 w-3.5" />
            Quick Navigation
          </span>
        </div>
      </div>
    </div>
  );
};
