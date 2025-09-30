import { Skill } from "@/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const calculateAverage = (skills: Skill[]): number => {
  const sum = skills.reduce((acc, skill) => acc + skill.level, 0);
  return Math.round(sum / skills.length);
};
