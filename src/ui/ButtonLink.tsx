import { cn } from "@/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

const linkVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 hover:-translate-y-0.5 ",
  {
    variants: {
      variant: {
        default: "text-gray-700 hover:text-gray-900 hover:shadow-lg",
        gradient:
          "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl ",
        outline:
          "border-2 border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 hover:shadow-lg",
        ghost: "text-gray-400 hover:text-white",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
        xl: "px-8 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof linkVariants> {
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export function ButtonLink({
  href = "",
  target,
  rel,
  icon,
  iconPosition = "right",
  variant,
  size,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const isExternal = href?.startsWith("http");

  return (
    <Link
      href={href}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
      className={cn(linkVariants({ variant, size }), className)}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {children}
      {icon && iconPosition === "right" && icon}
    </Link>
  );
}
