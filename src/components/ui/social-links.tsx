import { SOCIAL_LINKS } from "@/lib/constants";
import { easeOut, motion } from "framer-motion";

const containerVariants = {
  header: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  hero: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
};

const itemVariants = {
  header: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  },
  hero: {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easeOut,
      },
    },
  },
};

interface SocialLinksProps {
  variant?: "header" | "hero";
}

export const SocialLinks = ({ variant = "header" }: SocialLinksProps) => {
  const isHero = variant === "hero";

  return (
    <motion.div
      className={`flex items-center ${isHero ? "gap-2.5" : "gap-1.5"}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants[variant]}
    >
      {SOCIAL_LINKS.map((social) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            className={
              isHero
                ? "p-2.5 rounded-lg bg-[#252525] border border-gray-700 text-gray-400 hover:text-teal-300 hover:border-teal-500/50 transition-colors duration-300 relative overflow-hidden group"
                : "p-1.5 rounded-lg text-gray-400 hover:text-teal-300 transition-colors duration-300 relative overflow-hidden"
            }
            aria-label={social.label}
            variants={itemVariants[variant]}
            whileHover={
              isHero ? { scale: 1.1, y: -2 } : { scale: 1.1, rotate: 5 }
            }
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className={
                isHero
                  ? "absolute inset-0 bg-teal-500/10"
                  : "absolute inset-0 bg-teal-500/10 rounded-lg"
              }
              initial={{ scale: 0, opacity: isHero ? 0 : 1 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            {isHero ? (
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Icon size={18} className="relative z-10" />
              </motion.div>
            ) : (
              <Icon size={16} className="relative z-10" />
            )}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;
