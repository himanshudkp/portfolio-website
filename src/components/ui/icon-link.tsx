import { Link } from "@/types";

interface IconLinkProps {
  social: Link;
}

export const IconLinks = ({ social }: IconLinkProps) => {
  const IconComponent = social.icon;

  return (
    <a
      key={social.label}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="group inline-flex items-center justify-center gap-2 font-semibold transition-colors duration-200 rounded-lg px-4 py-2 text-sm border-2 border-gray-700 text-gray-300 hover:border-teal-500 hover:bg-teal-500/10 hover:text-teal-400"
    >
      <IconComponent className="h-5 w-5" />
    </a>
  );
};
