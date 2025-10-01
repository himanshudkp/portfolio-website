"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Command, Search, X, ChevronRight } from "lucide-react";

interface CommandItem {
  id: string;
  label: string;
  keywords: string[];
  section: string;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: CommandItem[] = [
    {
      id: "home",
      label: "Go to Home",
      keywords: ["home", "main", "landing"],
      section: "Navigation",
      action: () => scrollToSection("home"),
    },
    {
      id: "about",
      label: "Go to About",
      keywords: ["about", "bio", "info"],
      section: "Navigation",
      action: () => scrollToSection("about"),
    },
    {
      id: "experience",
      label: "Go to Experience",
      keywords: ["experience", "work", "career"],
      section: "Navigation",
      action: () => scrollToSection("experience"),
    },
    {
      id: "skills",
      label: "Go to Skills",
      keywords: ["skills", "tech", "tools"],
      section: "Navigation",
      action: () => scrollToSection("skills"),
    },
    {
      id: "projects",
      label: "Go to Projects",
      keywords: ["projects", "portfolio"],
      section: "Navigation",
      action: () => scrollToSection("projects"),
    },
    {
      id: "contact",
      label: "Go to Contact",
      keywords: ["contact", "email", "message"],
      section: "Navigation",
      action: () => scrollToSection("contact"),
    },
  ];

  const filteredCommands = search
    ? commands.filter(
        (cmd) =>
          cmd.label.toLowerCase().includes(search.toLowerCase()) ||
          cmd.keywords.some((kw) =>
            kw.toLowerCase().includes(search.toLowerCase())
          )
      )
    : commands;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    closeCommand();
  };

  const closeCommand = useCallback(() => {
    setIsOpen(false);
    setSearch("");
    setSelectedIndex(0);
  }, []);

  const executeCommand = useCallback(
    (index: number) => {
      if (filteredCommands[index]) {
        filteredCommands[index].action();
      }
    },
    [filteredCommands]
  );

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
            prev < filteredCommands.length - 1 ? prev + 1 : prev
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
    filteredCommands.length,
    closeCommand,
    executeCommand,
  ]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeCommand}
      />

      {/* Command Palette */}
      <div className="relative mt-[10vh] w-full max-w-2xl animate-in fade-in slide-in-from-top-4 duration-200">
        <div className="overflow-hidden rounded-2xl border border-gray-700/50 bg-gray-900/95 shadow-2xl">
          {/* Search Input */}
          <div className="flex items-center gap-3 border-b border-gray-800 px-4 py-3">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search commands..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setSelectedIndex(0);
              }}
              className="flex-1 bg-transparent text-white placeholder-gray-500 outline-none"
            />
            <kbd className="hidden rounded bg-gray-800 px-2 py-1 text-xs text-gray-400 sm:inline">
              ESC
            </kbd>
            <button
              onClick={closeCommand}
              className="rounded-lg p-1 text-gray-400 hover:bg-gray-800 hover:text-white"
              aria-label="Close command palette"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Commands List */}
          <div className="max-h-[60vh] overflow-y-auto p-2">
            {filteredCommands.length > 0 ? (
              <div className="space-y-1">
                {filteredCommands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    onClick={() => executeCommand(index)}
                    className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-left transition-colors ${
                      index === selectedIndex
                        ? "bg-blue-500/20 text-white"
                        : "text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <div>
                      <div className="font-medium">{cmd.label}</div>
                      <div className="text-xs text-gray-500">{cmd.section}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-500" />
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-gray-500">
                No commands found
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-gray-800 px-4 py-2">
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-gray-800 px-1.5 py-0.5">↑↓</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-gray-800 px-1.5 py-0.5">Enter</kbd>
                Select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="rounded bg-gray-800 px-1.5 py-0.5">ESC</kbd>
                Close
              </span>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcut Hint */}
        <div className="mt-4 text-center text-sm text-gray-500">
          Press{" "}
          <kbd className="rounded bg-gray-800/80 px-2 py-1">
            {typeof navigator !== "undefined" &&
            navigator.platform.includes("Mac")
              ? "⌘"
              : "Ctrl"}
          </kbd>{" "}
          + <kbd className="rounded bg-gray-800/80 px-2 py-1">K</kbd> to open
          command palette
        </div>
      </div>
    </div>
  );
}
