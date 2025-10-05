"use client";

import { EMAIL, RESUME_LINK } from "@/data";
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

      {
        id: "view-resume",
        label: "View Resume",
        keywords: ["resume", "cv", "view", "open"],
        section: "Quick Actions",
        action: () => {
          window.open(RESUME_LINK, "_blank");
          setIsOpen(false);
        },
      },
      {
        id: "download-resume",
        label: "Download Resume",
        keywords: ["resume", "cv", "download", "save"],
        section: "Quick Actions",
        action: () => {
          const link = document.createElement("a");
          link.href = RESUME_LINK;
          link.download = "resume.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          setIsOpen(false);
        },
      },
      {
        id: "send-email",
        label: "Send an Email",
        keywords: ["email", "mail", "contact", "message", "reach out"],
        section: "Quick Actions",
        action: () => {
          window.location.href = `mailto:${EMAIL}?subject=Hello!&body=Hi, I would like to get in touch with you.`;
          window.location.href;
          setIsOpen(false);
        },
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
      if (filteredCommands[index]) {
        filteredCommands[index].action();
      }
    },
    [filteredCommands]
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
