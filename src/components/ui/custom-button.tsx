import { cn } from "@/utils";
import { motion } from "framer-motion";
import { easeOut } from "framer-motion";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  href?: string;
  icon?: React.ElementType;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  download?: boolean;
  className?: string;
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeOut },
  },
};

export const CustomButton = ({
  children,
  onClick,
  href,
  icon: Icon,
  variant = "primary",
  size = "md",
  download,
  className = "",
}: ButtonProps) => {
  const variants = {
    primary:
      "bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/30",
    secondary: "bg-[#252525] text-gray-300 border border-gray-600",
    outline:
      "bg-transparent border border-teal-500/40 text-teal-300 hover:bg-teal-500/10",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const Component = motion[href ? "a" : "button"];

  return (
    <Component
      {...(href ? { href, download } : { onClick, type: "button" })}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-300",
        variants[variant],
        sizes[size],
        className
      )}
      variants={buttonVariants}
      whileHover={{
        scale: 1.05,
        y: -2,
        boxShadow:
          variant === "primary"
            ? "0 20px 40px rgba(20, 184, 166, 0.4)"
            : undefined,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {Icon && (
        <motion.div
          whileHover={{ rotate: 15, scale: 1.2 }}
          transition={{ duration: 0.2 }}
        >
          <Icon size={18} />
        </motion.div>
      )}
      {children}
    </Component>
  );
};
