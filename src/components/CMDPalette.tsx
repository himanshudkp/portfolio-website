"use client";
import { useState, useRef, useCallback, ChangeEvent, useEffect } from "react";
import { Search, X, ChevronRight } from "lucide-react";
import { useCMDPalette } from "@/hooks/useCMDPalette";
import { cn } from "@/utils";
import { useTheme } from "@/hooks/useTheme";
// import { useTheme } from "@/hooks/useTheme";

export const CMDPalette = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { isDark } = useTheme();
  const {
    isOpen,
    closeCommand,
    commands,
    search,
    setSearch,
    executeCommand,
    setIsOpen,
  } = useCMDPalette();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Escape to close
      if (e.key === "Escape" && isOpen) {
        closeCommand();
      }

      // Arrow navigation
      if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) =>
            prev < commands.length - 1 ? prev + 1 : prev
          );
        }
        if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
        }
        if (e.key === "Enter") {
          e.preventDefault();
          executeCommand(selectedIndex);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isOpen,
    selectedIndex,
    commands.length,
    closeCommand,
    executeCommand,
    setIsOpen,
  ]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setSelectedIndex(0);
    },
    [setSearch]
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" onClick={closeCommand} />

      {/* Command Palette */}
      <div className="relative mt-[10vh] w-full max-w-2xl">
        <div
          className={cn(
            "overflow-hidden rounded-lg border shadow-2xl",
            isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"
          )}
        >
          {/* Search Input */}
          <div
            className={cn(
              "flex items-center gap-3 border-b px-4 py-3",
              isDark ? "border-gray-800" : "border-gray-200"
            )}
          >
            <Search
              className={cn(
                "h-5 w-5",
                isDark ? "text-gray-400" : "text-gray-500"
              )}
            />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={handleInputChange}
              className={cn(
                "flex-1 bg-transparent outline-none",
                isDark
                  ? "text-white placeholder-gray-500"
                  : "text-gray-900 placeholder-gray-400"
              )}
            />
            <kbd
              className={cn(
                "hidden rounded px-2 py-1 text-xs sm:inline",
                isDark
                  ? "bg-gray-800 text-gray-400"
                  : "bg-gray-100 text-gray-600"
              )}
            >
              ESC
            </kbd>
            <button
              onClick={closeCommand}
              className={cn(
                "rounded-lg p-1 transition-colors",
                isDark
                  ? "text-gray-400 hover:bg-gray-800 hover:text-white"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              )}
              aria-label="Close command palette"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Commands List */}
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {commands.length > 0 ? (
              <div className="space-y-1">
                {commands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    onClick={() => executeCommand(index)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors",
                      index === selectedIndex
                        ? isDark
                          ? "bg-blue-500/20 text-white"
                          : "bg-blue-100 text-blue-900"
                        : isDark
                        ? "text-gray-300 hover:bg-gray-800"
                        : "text-gray-700 hover:bg-gray-50"
                    )}
                  >
                    <div>
                      <div className="font-medium">{cmd.label}</div>
                      <div
                        className={cn(
                          "text-xs",
                          isDark ? "text-gray-500" : "text-gray-500"
                        )}
                      >
                        {cmd.section}
                      </div>
                    </div>
                    <ChevronRight
                      className={cn(
                        "h-4 w-4",
                        isDark ? "text-gray-500" : "text-gray-400"
                      )}
                    />
                  </button>
                ))}
              </div>
            ) : (
              <div
                className={cn(
                  "py-12 text-center",
                  isDark ? "text-gray-500" : "text-gray-400"
                )}
              >
                No commands found
              </div>
            )}
          </div>

          {/* Footer */}
          <div
            className={cn(
              "border-t px-4 py-2",
              isDark ? "border-gray-800" : "border-gray-200"
            )}
          >
            <div
              className={cn(
                "flex items-center gap-4 text-xs",
                isDark ? "text-gray-500" : "text-gray-600"
              )}
            >
              <span className="flex items-center gap-1">
                <kbd
                  className={cn(
                    "rounded px-1.5 py-0.5",
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  )}
                >
                  ↑↓
                </kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd
                  className={cn(
                    "rounded px-1.5 py-0.5",
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  )}
                >
                  Enter
                </kbd>
                Select
              </span>
              <span className="flex items-center gap-1">
                <kbd
                  className={cn(
                    "rounded px-1.5 py-0.5",
                    isDark ? "bg-gray-800" : "bg-gray-100"
                  )}
                >
                  ESC
                </kbd>
                Close
              </span>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcut Hint */}
        <div
          className={cn(
            "mt-4 text-center text-sm",
            isDark ? "text-gray-500" : "text-gray-600"
          )}
        >
          Press{" "}
          <kbd
            className={cn(
              "rounded px-2 py-1",
              isDark ? "bg-gray-800" : "bg-gray-100"
            )}
          >
            {typeof navigator !== "undefined" &&
            navigator.platform.includes("Mac")
              ? "⌘"
              : "Ctrl"}
          </kbd>{" "}
          +{" "}
          <kbd
            className={cn(
              "rounded px-2 py-1",
              isDark ? "bg-gray-800" : "bg-gray-100"
            )}
          >
            K
          </kbd>{" "}
          to open command palette
        </div>
      </div>
    </div>
  );
};
