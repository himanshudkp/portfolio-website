"use client";
import { useState, useEffect, useCallback, useContext } from "react";
import { getPlatform } from "@/utils";
import { X } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export const CMDIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const { isDark } = useTheme();

  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem("CMDHint", "true");
  }, []);

  useEffect(() => {
    const dismissed = localStorage.getItem("CMDHint") === "true";

    if (dismissed) {
      setIsVisible(false);
      setIsDismissed(true);
    }
  }, []);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div
        className={`relative rounded-lg border p-4 shadow-lg max-w-xs 
        ${
          isDark
            ? "border-gray-700 bg-gray-900 text-white"
            : "border-gray-200 bg-white text-gray-900"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className={`absolute right-2 top-2 transition-colors 
            ${
              isDark
                ? "text-gray-500 hover:text-gray-300"
                : "text-gray-400 hover:text-gray-600"
            }`}
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="pr-6">
          <h3 className="text-sm font-semibold mb-2">Quick Navigation</h3>

          <p
            className={`text-xs mb-3 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Press{" "}
            <span
              className={`px-2 py-0.5 text-xs font-semibold border rounded 
              ${
                isDark
                  ? "text-gray-200 bg-gray-800 border-gray-600"
                  : "text-gray-800 bg-gray-100 border-gray-300"
              }`}
            >
              {getPlatform() === "mac" ? "⌘" : "Ctrl"}
            </span>{" "}
            +{" "}
            <span
              className={`px-2 py-0.5 text-xs font-semibold border rounded 
              ${
                isDark
                  ? "text-gray-200 bg-gray-800 border-gray-600"
                  : "text-gray-800 bg-gray-100 border-gray-300"
              }`}
            >
              K
            </span>{" "}
            to open
          </p>

          <ul
            className={`space-y-1.5 text-xs ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <li>• Navigate sections instantly</li>
            <li>• Search with keywords</li>
            <li>• Access quick actions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
