"use client";
import { cn } from "@/utils";
import { Menu, X } from "lucide-react";

interface MenuButtonProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const MenuButton = ({ isOpen, onToggle }: MenuButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className="rounded-xl border p-2.5 transition-all duration-300 lg:hidden hover:scale-105 border-gray-700/50 text-white hover:bg-gray-800"
      aria-label="Toggle menu"
    >
      <div className="relative h-5 w-5">
        <Menu
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isOpen
              ? "rotate-90 scale-0 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          )}
        />
        <X
          className={cn(
            "absolute inset-0 transition-all duration-300",
            isOpen
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          )}
        />
      </div>
    </button>
  );
};
