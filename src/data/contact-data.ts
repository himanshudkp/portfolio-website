import { ContactInfo, SocialLink } from "@/types";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";

export const CONTACT_INFO: ContactInfo[] = [
  {
    icon: Mail,
    title: "Email",
    value: "himanshudkp@gmail.com",
    href: "mailto:himanshudkp@gmail.com",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91-9522498034",
    href: "tel:+919522498034",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Pune, India",
    href: null,
    gradient: "from-pink-500 to-red-500",
  },
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/yourprofile",
    label: "LinkedIn",
    color: "blue",
  },
  {
    icon: Github,
    href: "https://github.com/yourusername",
    label: "GitHub",
    color: "gray",
  },
  {
    icon: Twitter,
    href: "https://twitter.com/yourhandle",
    label: "Twitter",
    color: "sky",
  },
];

export const getThemeClasses = (isDark: boolean) => ({
  section: isDark ? "bg-gray-800" : "bg-gradient-to-b from-gray-50 to-white",
  heading: isDark ? "text-white" : "text-gray-900",
  subheading: isDark ? "text-gray-400" : "text-gray-600",
  contactCard: isDark
    ? "bg-gray-900/50 border border-gray-700 hover:border-gray-600 hover:bg-gray-900"
    : "bg-white border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg",
  contactCardStatic: isDark
    ? "bg-gray-900/50 border border-gray-700"
    : "bg-white border border-gray-200 shadow-md",
  contactTitle: isDark ? "text-gray-400" : "text-gray-600",
  contactValue: isDark ? "text-white" : "text-gray-900",
  socialContainer: isDark
    ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
    : "bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200",
  socialButton: isDark
    ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
    : "bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md",
  socialIcon: isDark ? "text-gray-300" : "text-gray-700",
  availabilityBadge: isDark
    ? "bg-green-500/10 border border-green-500/30"
    : "bg-green-50 border border-green-200",
  availabilityText: isDark ? "text-green-400" : "text-green-700",
  availabilitySubtext: isDark ? "text-green-400/70" : "text-green-600",
  formContainer: isDark
    ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
    : "bg-white border border-gray-100",
  label: isDark ? "text-gray-300" : "text-gray-700",
  input: isDark
    ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800"
    : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:bg-white",
});
