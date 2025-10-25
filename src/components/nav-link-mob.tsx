import { NAV_LINKS } from "@/data";
import { cn } from "@/utils";
import { Download } from "lucide-react";
import Link from "next/link";
import { SocialLinks } from "./social-links";

interface NavLinkMobileProps {
  isOpen: boolean;
  selectedLink: string;
  onLinkClick: (linkName: string) => void;
}

export const NavLinkMobile = ({
  isOpen,
  selectedLink,
  onLinkClick,
}: NavLinkMobileProps) => {
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
            const Icon = link.icon;
            const isSelected = selectedLink === link.name;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => handleLinkClick(link.name)}
                  className={cn(
                    "group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium transition-all duration-200",
                    isSelected
                      ? "bg-teal-500 text-white shadow-lg shadow-teal-500/25"
                      : "text-gray-300 hover:bg-gray-800/50 hover:text-teal-500"
                  )}
                >
                  <span className="flex items-center gap-3">
                    {Icon && <Icon className="h-5 w-5" />}
                    <span className="font-medium">{link.name}</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-5 px-4">
          <a
            href="./resume.pdf"
            download={true}
            className=" w-full group inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-lg px-4 py-2 text-sm border-2 border-gray-700 text-gray-300 hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-400"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>

          {/* Social Links with divider on mobile */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Optional: Divider visible only on small screens and up */}
            <div className="hidden sm:block h-6 w-px bg-gray-700" />

            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
};
