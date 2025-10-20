import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility function to merge tailwind class names
export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs));
};
