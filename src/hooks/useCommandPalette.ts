// hooks/useCommandPalette.ts
"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface Command {
  id: string;
  label: string;
  keywords: string[];
  section: string;
  action: () => void;
}

export function useCommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const router = useRouter();

  const commands: Command[] = [
    {
      id: "home",
      label: "Go to Home",
      keywords: ["home", "main", "landing"],
      section: "Navigation",
      action: () => {
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "about",
      label: "Go to About",
      keywords: ["about", "bio", "info"],
      section: "Navigation",
      action: () => {
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "experience",
      label: "Go to Experience",
      keywords: ["experience", "work", "career", "jobs"],
      section: "Navigation",
      action: () => {
        document
          .getElementById("experience")
          ?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "skills",
      label: "Go to Skills",
      keywords: ["skills", "technologies", "tech", "tools"],
      section: "Navigation",
      action: () => {
        document
          .getElementById("skills")
          ?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "projects",
      label: "Go to Projects",
      keywords: ["projects", "portfolio", "work"],
      section: "Navigation",
      action: () => {
        document
          .getElementById("projects")
          ?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
    },
    {
      id: "contact",
      label: "Go to Contact",
      keywords: ["contact", "email", "reach", "message"],
      section: "Navigation",
      action: () => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      },
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

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
    setSearch("");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to open
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleOpen();
      }
      // Escape to close
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        setSearch("");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggleOpen]);

  return {
    isOpen,
    search,
    setSearch,
    commands: filteredCommands,
    toggleOpen,
    closeCommand: () => {
      setIsOpen(false);
      setSearch("");
    },
  };
}
