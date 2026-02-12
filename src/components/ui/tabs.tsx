import { Tab } from "@/lib/types";
import { containerVariants, itemVariants } from "@/lib/utils";
import { motion } from "framer-motion";

export const Tabs: React.FC<{
  tabs: Tab[];
  activeTab: string;
  onChange: (id: string) => void;
}> = ({ tabs, activeTab, onChange }) => (
  <motion.div
    className="flex flex-wrap justify-center gap-2.5 mb-10"
    initial="hidden"
    animate="visible"
    variants={containerVariants}
  >
    {tabs.map(({ id, label, icon: Icon }) => (
      <motion.button
        key={id}
        onClick={() => onChange(id)}
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 relative overflow-hidden ${
          activeTab === id
            ? "text-white"
            : "bg-[#252525] text-gray-400 hover:bg-[#252525] hover:text-teal-300"
        }`}
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {activeTab === id && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-teal-600 to-cyan-600"
            layoutId="activeTab"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
        <motion.div
          className="relative z-10"
          whileHover={{ rotate: activeTab === id ? 0 : 10, scale: 1.1 }}
        >
          {Icon && <Icon />}
        </motion.div>
        <span className="relative z-10">{label}</span>
      </motion.button>
    ))}
  </motion.div>
);
