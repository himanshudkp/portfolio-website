import { cn } from "@/utils";
import { Download } from "lucide-react";
import { SocialLinks } from "./social-links";
import { MobileNavLink } from "./ui/nav-link";
import { Button } from "./ui/button";
import { NAV_LINKS } from "@/data";
import { BUTTON_TEXT } from "@/content";

interface MobileNavigationProps {
  isOpen: boolean;
  selectedLink: string;
  onLinkClick: (linkName: string) => void;
}

export const MobileNavigation = ({
  isOpen,
  onLinkClick,
  selectedLink,
}: MobileNavigationProps) => {
  const handleLinkClick = (linkName: string) => {
    onLinkClick(linkName);
  };

  return (
    <div
      className={cn(
        "absolute left-0 right-0 top-full overflow-hidden backdrop-blur-xl transition-all duration-300 lg:hidden border-b bg-black",
        isOpen ? "max-h-[calc(100vh-80px)] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className="px-4 py-6 sm:px-6">
        <ul className="mb-6 flex flex-col gap-2">
          {NAV_LINKS.map((link) => {
            return (
              <li key={link.name}>
                <MobileNavLink
                  href={link.href}
                  name={link.name}
                  icon={link.icon}
                  isSelected={selectedLink === link.name}
                  onClick={() => handleLinkClick(link.name)}
                />
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 px-4">
          <Button
            icon={Download}
            href="/resume.pdf"
            download={true}
            variant="outline"
            ariaLabel="Download Resume"
            className="w-full"
          >
            {BUTTON_TEXT.resume_mobile}
          </Button>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="hidden sm:block h-6 w-px bg-gray-700" />
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};
