"use client";
import { useState, useEffect, useCallback } from "react";
import { getPlatform, cn } from "@/utils";
import { X, Sparkles, Zap, Search, MousePointer } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export const CMDIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const { isDark } = useTheme();
  const [cmdHintDismissed, setCmdHintDismissed] = useLocalStorage(
    "show-cmd-palette",
    false
  );

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      setIsDismissed(true);
      setCmdHintDismissed(true);
    }, 300);
  }, [setCmdHintDismissed]);

  useEffect(() => {
    if (cmdHintDismissed) {
      setIsVisible(false);
      setIsDismissed(true);
    }
  }, [cmdHintDismissed]);

  if (isDismissed) return null;

  return (
    <div
      className={cn(
        "fixed bottom-8 right-8 z-50 transition-all duration-300",
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      )}
    >
      {/* Animated glow effect */}
      <div
        className={cn(
          "absolute -inset-1 rounded-2xl blur-xl opacity-60 animate-pulse",
          isDark
            ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
            : "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
        )}
      />

      <div
        className={cn(
          "relative rounded-2xl border backdrop-blur-xl p-5 shadow-2xl max-w-sm transition-all duration-300 hover:scale-[1.02]",
          isDark
            ? "border-gray-700/50 bg-gradient-to-br from-gray-900/95 to-gray-800/95 text-white"
            : "border-gray-200/50 bg-gradient-to-br from-white/95 to-gray-50/95 text-gray-900"
        )}
      >
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />

        {/* Sparkle decoration */}
        <Sparkles
          className={cn(
            "absolute -top-2 -right-2 h-5 w-5 animate-pulse",
            isDark ? "text-purple-400" : "text-purple-500"
          )}
        />

        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className={cn(
            "absolute right-3 top-3 rounded-lg p-1.5 transition-all duration-200 hover:scale-110 hover:rotate-90",
            isDark
              ? "text-gray-500 hover:bg-gray-800/50 hover:text-gray-300"
              : "text-gray-400 hover:bg-gray-100/50 hover:text-gray-600"
          )}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="pr-8">
          {/* Header with icon */}
          <div className="flex items-center gap-3 mb-4">
            <div
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-xl transition-all",
                isDark
                  ? "bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                  : "bg-gradient-to-br from-blue-100 to-purple-100 border border-blue-200/50"
              )}
            >
              <Zap
                className={cn(
                  "h-5 w-5",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
            </div>
            <div>
              <h3 className="text-base font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Quick Navigation
              </h3>
              <p
                className={cn(
                  "text-xs font-medium",
                  isDark ? "text-gray-500" : "text-gray-500"
                )}
              >
                Supercharge your browsing
              </p>
            </div>
          </div>

          {/* Keyboard shortcut */}
          <div
            className={cn(
              "flex items-center gap-2 mb-4 p-3 rounded-xl border",
              isDark
                ? "bg-gray-800/50 border-gray-700/50"
                : "bg-gray-50/50 border-gray-200/50"
            )}
          >
            <span
              className={cn(
                "text-sm font-medium",
                isDark ? "text-gray-400" : "text-gray-600"
              )}
            >
              Press
            </span>
            <kbd
              className={cn(
                "inline-flex items-center justify-center min-w-[28px] h-7 rounded-lg px-2.5 text-xs font-bold shadow-md border transition-all",
                isDark
                  ? "bg-gradient-to-b from-gray-700 to-gray-800 border-gray-600/50 text-gray-200"
                  : "bg-gradient-to-b from-white to-gray-100 border-gray-300/50 text-gray-700"
              )}
            >
              {getPlatform() === "mac" ? "⌘" : "Ctrl"}
            </kbd>
            <span
              className={cn(
                "text-sm font-bold",
                isDark ? "text-gray-600" : "text-gray-400"
              )}
            >
              +
            </span>
            <kbd
              className={cn(
                "inline-flex items-center justify-center min-w-[28px] h-7 rounded-lg px-2.5 text-xs font-bold shadow-md border transition-all",
                isDark
                  ? "bg-gradient-to-b from-gray-700 to-gray-800 border-gray-600/50 text-gray-200"
                  : "bg-gradient-to-b from-white to-gray-100 border-gray-300/50 text-gray-700"
              )}
            >
              K
            </kbd>
            <span
              className={cn(
                "text-sm font-medium",
                isDark ? "text-gray-400" : "text-gray-600"
              )}
            >
              to open
            </span>
          </div>

          {/* Features list */}
          <ul className="space-y-2.5">
            {[
              { icon: MousePointer, text: "Navigate sections instantly" },
              { icon: Search, text: "Search with keywords" },
              { icon: Zap, text: "Access quick actions" },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <li
                  key={index}
                  className={cn(
                    "flex items-center gap-3 text-sm font-medium transition-all duration-200 hover:translate-x-1",
                    isDark ? "text-gray-300" : "text-gray-700"
                  )}
                >
                  <div
                    className={cn(
                      "flex items-center justify-center w-6 h-6 rounded-lg flex-shrink-0",
                      isDark
                        ? "bg-blue-500/10 text-blue-400"
                        : "bg-blue-100 text-blue-600"
                    )}
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span>{item.text}</span>
                </li>
              );
            })}
          </ul>

          {/* Bottom hint */}
          <div
            className={cn(
              "mt-4 pt-4 border-t text-xs text-center font-medium",
              isDark
                ? "border-gray-800/50 text-gray-500"
                : "border-gray-200/50 text-gray-500"
            )}
          >
            Try it now! It's lightning fast ⚡
          </div>
        </div>
      </div>
    </div>
  );
};
