"use client";

import { useState, useEffect } from "react";
import { Command, X, Sparkles } from "lucide-react";

export default function CommandPaletteIndicator() {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has dismissed the indicator before
    const dismissed = localStorage.getItem("commandPaletteHintDismissed");
    if (dismissed === "true") {
      setIsVisible(false);
      setIsDismissed(true);
    }

    // Show after 3 seconds if not dismissed
    const timer = setTimeout(() => {
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("commandPaletteHintDismissed", "true");
  };

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-40 animate-in fade-in slide-in-from-right-4 duration-500">
      {/* Floating Card */}
      <div className="group relative overflow-hidden rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-4 shadow-2xl backdrop-blur-xl">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute right-2 top-2 rounded-lg p-1 text-gray-500 transition-colors hover:bg-gray-800 hover:text-white"
          aria-label="Dismiss hint"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative flex items-start gap-3 pr-6">
          {/* Icon */}
          <div className="relative flex-shrink-0">
            <div className="absolute inset-0 animate-pulse rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-lg" />
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
              <Command className="h-6 w-6 text-white" />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <h3 className="text-sm font-bold text-white">Quick Navigation</h3>
              <Sparkles className="h-3 w-3 animate-pulse text-yellow-400" />
            </div>
            <p className="mb-3 text-xs text-gray-400">
              Press{" "}
              <kbd className="mx-1 rounded bg-gray-800 px-1.5 py-0.5 text-[10px] font-semibold text-gray-300">
                {typeof navigator !== "undefined" &&
                navigator.platform.includes("Mac")
                  ? "⌘"
                  : "Ctrl"}
              </kbd>
              +
              <kbd className="mx-1 rounded bg-gray-800 px-1.5 py-0.5 text-[10px] font-semibold text-gray-300">
                K
              </kbd>
              to open
            </p>

            {/* Features */}
            <div className="space-y-1 text-xs text-gray-500">
              <div className="flex items-center gap-1.5">
                <div className="h-1 w-1 rounded-full bg-blue-500" />
                <span>Navigate sections instantly</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-1 w-1 rounded-full bg-purple-500" />
                <span>Search with keywords</span>
              </div>
            </div>
          </div>
        </div>

        {/* Animated border */}
        <div
          className="absolute inset-0 rounded-2xl border border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-20"
          style={{
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            maskComposite: "exclude",
          }}
        />
      </div>

      {/* Pulsing dot indicator */}
      <div className="absolute -left-1 -top-1">
        <span className="relative flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-blue-500" />
        </span>
      </div>
    </div>
  );
}
