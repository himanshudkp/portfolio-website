import { cn } from "@/utils";

interface SocialLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  color?: string; // e.g. "from-blue-500 to-purple-600"
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function SocialLink({
  href,
  label,
  icon,
  color,
  size = "md",
  className,
}: SocialLinkProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12",
  }[size];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group relative flex items-center justify-center rounded-xl border transition-all duration-300 hover:scale-110 hover:shadow-lg",
        "bg-gray-800/50 backdrop-blur-sm border-gray-700 hover:border-transparent",
        sizeClasses,
        className
      )}
    >
      {icon}

      {color && (
        <div
          className={cn(
            "absolute inset-0 -z-10 rounded-xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100",
            color
          )}
        />
      )}
    </a>
  );
}
