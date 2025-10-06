import { Skill } from "@/types/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export type Platform = "mac" | "windows" | "other";

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};

export const calculateAverage = (skills: Skill[]): number => {
  const sum = skills.reduce((acc, skill) => acc + skill.level, 0);
  return Math.round(sum / skills.length);
};

export const getPlatform = (): Platform => {
  if (typeof navigator === "undefined") return "other";

  const platform = navigator.platform.toLowerCase();
  const userAgent = navigator.userAgent.toLowerCase();

  if (platform.includes("mac") || userAgent.includes("mac os")) {
    return "mac";
  }
  if (platform.includes("win")) {
    return "windows";
  }
  return "other";
};

export const getModifierKey = getPlatform() === "mac" ? "⌘" : "Ctrl";
