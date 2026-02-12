import { motion } from "framer-motion";
import { Award, ExternalLink, Calendar } from "lucide-react";
import { containerVariants } from "@/lib/utils";
import { InfoCard } from "../ui/info-card";
import { BadgeSingle } from "../ui/badge-single";

interface CoursesCertificationsCardProps {
  title: string;
  provider: string;
  issueDate: string;
  credentialId: string;
  credentialUrl: string;
  skills: readonly string[];
  description: string;
}

export const CoursesCertificationsCard = ({
  title,
  provider,
  issueDate,
  credentialId,
  credentialUrl,
  skills,
  description,
}: CoursesCertificationsCardProps) => (
  <InfoCard>
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
        <div className="flex-1">
          <div className="flex items-start gap-3 mb-2">
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <motion.h3
                className="text-lg sm:text-xl font-bold text-teal-300 mb-1"
                whileHover={{ scale: 1.02, x: 5 }}
              >
                {title}
              </motion.h3>
              <motion.p
                className="text-gray-400 text-xs sm:text-sm font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {provider}
              </motion.p>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
          <Calendar className="w-3.5 h-3.5" />
          <span>Issued {issueDate}</span>
        </div>
        <span className="hidden sm:inline text-gray-600">•</span>
        <div className="flex items-center gap-1 text-gray-500 text-xs sm:text-sm">
          <span className="font-mono">ID: {credentialId}</span>
        </div>
      </motion.div>

      <motion.p
        className="text-gray-300 leading-relaxed text-sm sm:text-base mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {description}
      </motion.p>

      <motion.div
        className="border-t border-gray-700 pt-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-teal-400 text-xs font-semibold mb-2 uppercase tracking-wide">
          Skills
        </p>
        <motion.div
          className="flex flex-wrap gap-2 mb-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, idx) => (
            <BadgeSingle text={skill} variant="glow" size="sm" key={idx} />
          ))}
        </motion.div>

        {credentialUrl && credentialUrl !== "#" && (
          <motion.a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-teal-300 hover:text-teal-400 transition-colors text-xs sm:text-sm font-medium"
            whileHover={{ x: 5 }}
          >
            <span>View Credential</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  </InfoCard>
);
