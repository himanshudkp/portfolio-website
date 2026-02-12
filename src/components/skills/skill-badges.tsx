import { motion } from "framer-motion";
import { BadgeSingle } from "../ui/badge-single";
import { Skill } from "@/lib/types";

const badgeContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

export interface SkillBadgesProps {
  skills: Skill[];
}

export const SkillBadges = ({ skills }: SkillBadgesProps) => {
  return (
    <motion.div
      className="flex flex-wrap gap-2.5"
      variants={badgeContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {skills.map((s) => (
        <BadgeSingle text={s.skill} variant="glow" size="md" key={s.skill} />
      ))}
    </motion.div>
  );
};
