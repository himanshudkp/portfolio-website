"use client";

import { useScrollToTop } from "@/hooks/useScrollToTop";
import { ArrowUp } from "lucide-react";

export const ScrollToTop = () => {
  const { showButton, scrollToTop } = useScrollToTop({ threshold: 500 });

  if (!showButton) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-xl shadow-teal-500/20 hover:opacity-90 transition"
    >
      <ArrowUp size={16} />
    </button>
  );
};
