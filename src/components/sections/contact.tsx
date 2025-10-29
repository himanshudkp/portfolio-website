import React, { ChangeEvent, FormEvent, useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Send,
  Sparkles,
  CheckCircle,
  MessageSquare,
  User,
  FileText,
  type LucideIcon,
  Github,
} from "lucide-react";
import { containerVariants, itemVariants } from "@/utils";
import { SectionHeader } from "../section-header";
// import { SOCIAL_LINKS } from "@/data";

const formItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: easeOut,
    },
  },
};

type ContactInfo = {
  icon: LucideIcon;
  label: string;
  value: string;
  link: string;
};

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    label: "Email",
    value: "himanshudkp@gmail.com",
    link: "mailto:himanshudkp@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91-9522498034",
    link: "tel:+919522498034",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, India",
    link: "#",
  },
];

const ContactInfoCard = ({ info }: { info: ContactInfo }) => {
  const Icon = info.icon;

  return (
    <motion.a
      href={info.link}
      target={info.link.startsWith("http") ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="group block bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-xl border border-gray-700 p-5"
      variants={cardVariants}
      whileHover={{
        y: -4,
        borderColor: "rgba(20, 184, 166, 0.5)",
        boxShadow: "0 10px 30px rgba(20, 184, 166, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-4">
        <motion.div
          className={`bg-gradient-to-br p-3 rounded-xl shadow-lg`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Icon className="text-white" size={24} />
        </motion.div>
        <div className="flex-1">
          <p className="text-gray-400 text-xs font-medium mb-1">{info.label}</p>
          <motion.p
            className="text-gray-200 font-medium break-all"
            whileHover={{ x: 3, color: "#5eead4" }}
          >
            {info.value}
          </motion.p>
        </div>
      </div>
    </motion.a>
  );
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeOut,
    },
  },
};

const SOCIAL_LINKS = [
  {
    icon: Github,
    name: "GitHub",
    link: "#",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    link: "https://linkedin.com/in/himanshudkp",
    gradient: "from-cyan-500 to-blue-500",
  },
];

const SocialLinksSection = () => (
  <motion.div
    className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-2xl border border-teal-500/30 p-6"
    variants={cardVariants}
    whileHover={{ borderColor: "rgba(20, 184, 166, 0.5)" }}
  >
    <motion.h3
      className="text-xl font-bold text-teal-400 mb-4 flex items-center gap-2"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Sparkles size={20} />
      </motion.div>
      Connect With Me
    </motion.h3>
    <div className="flex gap-4">
      {SOCIAL_LINKS.map((social, idx) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={idx}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 bg-gradient-to-br ${social.gradient} p-4 rounded-xl shadow-lg group`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + idx * 0.1 }}
            whileHover={{ scale: 1.05, rotate: 3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Icon className="text-white mx-auto mb-2" size={28} />
            </motion.div>
            <p className="text-white text-sm font-medium text-center">
              {social.name}
            </p>
          </motion.a>
        );
      })}
    </div>
  </motion.div>
);

const AvailabilityBadge = () => (
  <motion.div
    className="bg-gradient-to-r from-gray-900 to-gray-800 border border-teal-500/30 rounded-xl p-7"
    variants={cardVariants}
    whileHover={{
      scale: 1.02,
      borderColor: "rgba(20, 184, 166, 0.5)",
    }}
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="relative">
        <motion.div
          className="w-4 h-4 bg-teal-400 rounded-full absolute"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="w-4 h-4 bg-teal-400 rounded-full" />
      </div>
      <div>
        <p className="text-teal-300 font-bold text-lg">Available for Work</p>
        <p className="text-gray-400 text-sm">Open to new opportunities</p>
      </div>
    </div>
    <p className="text-gray-300 text-sm leading-relaxed">
      Currently seeking frontend development roles focused on modern JavaScript
      frameworks and user-centric design.
    </p>
  </motion.div>
);

type FormInputProps = {
  label: string;
  icon: LucideIcon;
  type: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  index: number;
};

const FormInput = ({
  label,
  icon: Icon,
  type,
  name,
  value,
  onChange,
  placeholder,
  index,
}: FormInputProps) => (
  <motion.div className="group" custom={index} variants={formItemVariants}>
    <label className=" text-teal-400 font-medium mb-2 text-sm flex items-center gap-2">
      <Icon size={16} />
      {label}
    </label>
    <motion.input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required
      placeholder={placeholder}
      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300"
      whileFocus={{ scale: 1.01 }}
    />
  </motion.div>
);

type FormTextareaProps = {
  label: string;
  icon: LucideIcon;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
  index: number;
};

const FormTextarea = ({
  label,
  icon: Icon,
  name,
  value,
  onChange,
  placeholder,
  index,
}: FormTextareaProps) => (
  <motion.div className="group" variants={formItemVariants} custom={index}>
    <label className="block text-teal-400 font-medium mb-2 text-sm flex items-center gap-2">
      <Icon size={16} />
      {label}
    </label>
    <motion.textarea
      name={name}
      value={value}
      onChange={onChange}
      required
      rows={6}
      placeholder={placeholder}
      className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 resize-none"
      whileFocus={{ scale: 1.01 }}
    />
  </motion.div>
);

const SuccessMessage = () => (
  <motion.div
    className="text-center py-12"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ duration: 0.5 }}
  >
    <motion.div
      className="bg-gradient-to-r from-teal-500 to-cyan-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 360],
      }}
      transition={{
        scale: {
          duration: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
        rotate: {
          duration: 2,
          ease: "linear",
        },
      }}
    >
      <CheckCircle className="text-white" size={40} />
    </motion.div>
    <motion.h3
      className="text-2xl font-bold text-teal-300 mb-2"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      Message Sent!
    </motion.h3>
    <motion.p
      className="text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      Thank you for reaching out. {"I'll"} get back to you soon.
    </motion.p>
  </motion.div>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-[#1E1E1E]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Contact Me"
          description="Let's work together on your next project"
        />

        <motion.div
          className="grid lg:grid-cols-5 gap-8 lg:gap-12"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div
            className="lg:col-span-2 space-y-8"
            variants={itemVariants}
          >
            <div className="space-y-4">
              <motion.h2
                className="text-2xl font-bold text-teal-400 mb-6 flex items-center gap-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <motion.div
                  className="w-1 h-6 bg-teal-500 rounded-full"
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.5 }}
                />
                Contact Information
              </motion.h2>

              <motion.div
                className="space-y-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {CONTACT_INFO.map((info, idx) => (
                  <ContactInfoCard key={idx} info={info} />
                ))}
              </motion.div>
            </div>

            <SocialLinksSection />
            <AvailabilityBadge />
          </motion.div>

          <motion.div className="lg:col-span-3" variants={itemVariants}>
            <motion.div
              className="bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 rounded-3xl border border-teal-500/30 overflow-hidden shadow-2xl"
              whileHover={{
                boxShadow: "0 25px 50px rgba(20, 184, 166, 0.2)",
              }}
            >
              <motion.div
                className="h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-500"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />

              <div className="p-6 sm:p-8 lg:p-10">
                <motion.h2
                  className="text-3xl font-bold text-teal-300 mb-2 flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <MessageSquare className="text-teal-400" size={32} />
                  Send a Message
                </motion.h2>
                <motion.p
                  className="text-gray-400 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  Fill out the form below and {"I'll"} get back to you as soon
                  as possible.
                </motion.p>

                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <SuccessMessage key="success" />
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      className="space-y-6"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <FormInput
                        label="Your Name"
                        icon={User}
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        index={0}
                      />

                      <FormInput
                        label="Email Address"
                        icon={Mail}
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                        index={1}
                      />

                      <FormInput
                        label="Subject"
                        icon={FileText}
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project Inquiry"
                        index={2}
                      />

                      <FormTextarea
                        label="Message"
                        icon={MessageSquare}
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or inquiry..."
                        index={3}
                      />

                      <motion.button
                        type="submit"
                        className="group relative w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl overflow-hidden"
                        variants={formItemVariants}
                        custom={4}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: "0 20px 40px rgba(20, 184, 166, 0.5)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          Send Message
                          <motion.div
                            whileHover={{ x: 3, y: -3 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Send size={20} />
                          </motion.div>
                        </span>
                      </motion.button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
