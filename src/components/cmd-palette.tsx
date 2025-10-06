"use client";
import { useState, useRef, useCallback, ChangeEvent, useEffect } from "react";
import { Search, X, ChevronRight, Sparkles } from "lucide-react";
import { useCMDPalette } from "@/hooks/use-cmd-palette";
import { cn } from "@/utils/utils";
import { useTheme } from "@/hooks/use-theme";

export const CMDPalette = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const selectedItemRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
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

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      setSelectedIndex(0);
    },
    [setSearch]
  );

  // Scroll selected item into view
  useEffect(() => {
    if (selectedItemRef.current && listRef.current) {
      selectedItemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [selectedIndex]);

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8 animate-in fade-in duration-200">
      {/* Enhanced Backdrop with Blur */}
      <div
        className={cn(
          "absolute inset-0 backdrop-blur-md transition-all",
          isDark ? "bg-black/70" : "bg-gray-900/30"
        )}
        onClick={closeCommand}
      />

      {/* Command Palette */}
      <div className="relative mt-[8vh] w-full max-w-2xl animate-in slide-in-from-top-4 duration-300">
        {/* Glow Effect */}
        <div
          className={cn(
            "absolute -inset-0.5 rounded-2xl blur-2xl opacity-30",
            isDark
              ? "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              : "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
          )}
        />

        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-xl",
            isDark
              ? "border-gray-700/50 bg-gray-900/95"
              : "border-gray-200/50 bg-white/95"
          )}
        >
          {/* Decorative gradient line at top */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

          {/* Search Input Section */}
          <div
            className={cn(
              "flex items-center gap-3 border-b px-5 py-4",
              isDark ? "border-gray-800/50" : "border-gray-200/50"
            )}
          >
            <div className="relative flex items-center justify-center">
              <Search
                className={cn(
                  "h-5 w-5 transition-colors",
                  isDark ? "text-blue-400" : "text-blue-600"
                )}
              />
              <Sparkles className="absolute h-3 w-3 -top-1 -right-1 text-purple-500 animate-pulse" />
            </div>

            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search..."
              value={search}
              onChange={handleInputChange}
              className={cn(
                "flex-1 bg-transparent outline-none text-base font-medium placeholder:font-normal",
                isDark
                  ? "text-white placeholder-gray-500"
                  : "text-gray-900 placeholder-gray-400"
              )}
            />

            <kbd
              className={cn(
                "hidden rounded-md px-2.5 py-1.5 text-xs font-semibold shadow-sm sm:inline-block transition-colors",
                isDark
                  ? "bg-gray-800/80 text-gray-400 border border-gray-700/50"
                  : "bg-gray-100/80 text-gray-600 border border-gray-200/50"
              )}
            >
              ESC
            </kbd>

            <button
              onClick={closeCommand}
              className={cn(
                "rounded-lg p-2 transition-all duration-200 hover:scale-110",
                isDark
                  ? "text-gray-400 hover:bg-gray-800/50 hover:text-white"
                  : "text-gray-500 hover:bg-gray-100/50 hover:text-gray-900"
              )}
              aria-label="Close command palette"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Commands List */}
          <div
            ref={listRef}
            className="max-h-[60vh] overflow-y-auto p-3 scrollbar-thin"
          >
            {commands.length > 0 ? (
              <div className="space-y-1">
                {commands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    ref={index === selectedIndex ? selectedItemRef : null}
                    onClick={() => executeCommand(index)}
                    className={cn(
                      "group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-all duration-200",
                      index === selectedIndex
                        ? isDark
                          ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white shadow-lg scale-[1.02] border border-blue-500/30"
                          : "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-900 shadow-md scale-[1.02] border border-blue-200/50"
                        : isDark
                        ? "text-gray-300 hover:bg-gray-800/50 border border-transparent"
                        : "text-gray-700 hover:bg-gray-50/50 border border-transparent"
                    )}
                  >
                    <div className="flex-1">
                      <div
                        className={cn(
                          "font-semibold mb-0.5 transition-colors",
                          index === selectedIndex &&
                            "text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"
                        )}
                      >
                        {cmd.label}
                      </div>
                      <div
                        className={cn(
                          "text-xs font-medium uppercase tracking-wider",
                          index === selectedIndex
                            ? isDark
                              ? "text-gray-400"
                              : "text-gray-600"
                            : isDark
                            ? "text-gray-500"
                            : "text-gray-500"
                        )}
                      >
                        {cmd.section}
                      </div>
                    </div>

                    <div
                      className={cn(
                        "flex items-center gap-2 transition-transform duration-200",
                        index === selectedIndex && "translate-x-1"
                      )}
                    >
                      <ChevronRight
                        className={cn(
                          "h-5 w-5 transition-colors",
                          index === selectedIndex
                            ? "text-blue-500"
                            : isDark
                            ? "text-gray-600"
                            : "text-gray-400"
                        )}
                      />
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-16 text-center">
                <div
                  className={cn(
                    "mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4",
                    isDark ? "bg-gray-800/50" : "bg-gray-100/50"
                  )}
                >
                  <Search
                    className={cn(
                      "h-8 w-8",
                      isDark ? "text-gray-600" : "text-gray-400"
                    )}
                  />
                </div>
                <div
                  className={cn(
                    "text-sm font-medium mb-1",
                    isDark ? "text-gray-400" : "text-gray-600"
                  )}
                >
                  No commands found
                </div>
                <div
                  className={cn(
                    "text-xs",
                    isDark ? "text-gray-600" : "text-gray-500"
                  )}
                >
                  Try adjusting your search
                </div>
              </div>
            )}
          </div>

          {/* Enhanced Footer */}
          <div
            className={cn(
              "border-t px-5 py-3",
              isDark
                ? "border-gray-800/50 bg-gray-900/50"
                : "border-gray-200/50 bg-gray-50/50"
            )}
          >
            <div
              className={cn(
                "flex items-center justify-center gap-6 text-xs font-medium",
                isDark ? "text-gray-500" : "text-gray-600"
              )}
            >
              <span className="flex items-center gap-1.5">
                <kbd
                  className={cn(
                    "rounded-md px-2 py-1 font-semibold shadow-sm",
                    isDark
                      ? "bg-gray-800 border border-gray-700/50"
                      : "bg-gray-100 border border-gray-200/50"
                  )}
                >
                  ↑↓
                </kbd>
                <span className="hidden sm:inline">Navigate</span>
              </span>
              <span className="flex items-center gap-1.5">
                <kbd
                  className={cn(
                    "rounded-md px-2 py-1 font-semibold shadow-sm",
                    isDark
                      ? "bg-gray-800 border border-gray-700/50"
                      : "bg-gray-100 border border-gray-200/50"
                  )}
                >
                  ↵
                </kbd>
                <span className="hidden sm:inline">Select</span>
              </span>
              <span className="flex items-center gap-1.5">
                <kbd
                  className={cn(
                    "rounded-md px-2 py-1 font-semibold shadow-sm",
                    isDark
                      ? "bg-gray-800 border border-gray-700/50"
                      : "bg-gray-100 border border-gray-200/50"
                  )}
                >
                  ESC
                </kbd>
                <span className="hidden sm:inline">Close</span>
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced Keyboard Shortcut Hint */}
        {/* <div
          className={cn(
            "mt-6 text-center text-sm font-medium backdrop-blur-sm rounded-full inline-flex items-center gap-2 mx-auto px-4 py-2",
            isDark
              ? "text-gray-400 bg-gray-900/30"
              : "text-gray-600 bg-white/30"
          )}
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <span>Press</span>
          <kbd
            className={cn(
              "rounded-md px-2.5 py-1 font-semibold shadow-sm border",
              isDark
                ? "bg-gray-800/80 border-gray-700/50 text-gray-300"
                : "bg-white/80 border-gray-200/50 text-gray-700"
            )}
          >
            {typeof navigator !== "undefined" &&
            navigator.platform.includes("Mac")
              ? "⌘"
              : "Ctrl"}
          </kbd>
          <span>+</span>
          <kbd
            className={cn(
              "rounded-md px-2.5 py-1 font-semibold shadow-sm border",
              isDark
                ? "bg-gray-800/80 border-gray-700/50 text-gray-300"
                : "bg-white/80 border-gray-200/50 text-gray-700"
            )}
          >
            K
          </kbd>
          <span>anytime</span>
        </div> */}
      </div>
    </div>
  );
};
