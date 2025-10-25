import { NAV_LINKS } from "@/data";
import { Fragment } from "react";
import { DesktopNavLink } from "./ui/nav-link";
interface DesktopNavigationProps {
  selectedLink: string;
  onLinkClick: (linkName: string) => void;
}

export const DesktopNavigation = ({
  onLinkClick,
  selectedLink,
}: DesktopNavigationProps) => {
  return (
    <ul className="hidden items-center gap-2 rounded-2xl border px-2 py-2 backdrop-blur-xl lg:flex shadow-sm border-white/5 bg-[var(--dark)]/70">
      {NAV_LINKS.map((link, index) => {
        return (
          <Fragment key={link.name}>
            <DesktopNavLink
              href={link.href}
              name={link.name}
              icon={link.icon}
              isSelected={selectedLink === link.name}
              onClick={() => onLinkClick(link.name)}
            />
            {index < NAV_LINKS.length - 1 && (
              <div className="h-6 w-px bg-white/10" />
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};
