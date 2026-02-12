"use client";

import { useEffect, useState, useCallback } from "react";

interface UseScrollToTopOptions {
  threshold?: number;
}

export const useScrollToTop = ({
  threshold = 500,
}: UseScrollToTopOptions = {}) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return { showButton, scrollToTop };
};
