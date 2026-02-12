"use client";

import { useMemo } from "react";
import { FooterAbout } from "./footer-about";
import { FooterNavigation } from "./footer-nav";
import { FooterContact } from "./footer-contact";
import { FooterBottom } from "./footer-bottom";
import { ScrollToTop } from "./scroll-top";

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer className="relative bg-[#0b0b0b] border-t border-white/5">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <FooterAbout />
          <FooterNavigation />
          <FooterContact />
        </div>

        <FooterBottom year={year} />
      </div>

      <ScrollToTop />
    </footer>
  );
};
