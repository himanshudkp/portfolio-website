"use client";

import { useEffect, useState, useCallback, useMemo } from "react";

interface Command {
  id: string;
  label: string;
  keywords: string[];
  section: string;
  action: () => void;
}

export function useCMDPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const commands = useMemo<Command[]>(
    () => [
      {
        id: "home",
        label: "Go to Home",
        keywords: ["home", "main", "landing"],
        section: "Navigation",
        action: () => scrollIntoView("home"),
      },
      {
        id: "about",
        label: "Go to About",
        keywords: ["about", "bio", "info"],
        section: "Navigation",
        action: () => scrollIntoView("about"),
      },
      {
        id: "experience",
        label: "Go to Experience",
        keywords: ["experience", "work", "career", "jobs"],
        section: "Navigation",
        action: () => scrollIntoView("experience"),
      },
      {
        id: "skills",
        label: "Go to Skills",
        keywords: ["skills", "technologies", "tech", "tools"],
        section: "Navigation",
        action: () => scrollIntoView("skills"),
      },
      {
        id: "projects",
        label: "Go to Projects",
        keywords: ["projects", "portfolio", "work"],
        section: "Navigation",
        action: () => scrollIntoView("projects"),
      },
      {
        id: "contact",
        label: "Go to Contact",
        keywords: ["contact", "email", "reach", "message"],
        section: "Navigation",
        action: () => scrollIntoView("contact"),
      },
    ],
    []
  );

  const scrollIntoView = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

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

  const closeCommand = useCallback(() => {
    setIsOpen(false);
    setSearch("");
  }, []);

  const executeCommand = useCallback(
    (index: number) => {
      if (commands[index]) {
        commands[index].action();
      }
    },
    [commands]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleOpen();
      }
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
    setIsOpen,
    setSearch,
    commands: filteredCommands,
    toggleOpen,
    closeCommand,
    executeCommand,
  };
}
