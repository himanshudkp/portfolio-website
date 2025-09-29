import { useTheme } from "@/hooks/useTheme";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  Twitter,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const contactInfo = [
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

const socialLinks = [
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

export default function Contact() {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <section
      id="contact"
      className={`min-h-screen flex items-center px-5 lg:px-8 xl:px-[8%] py-20 transition-colors duration-300 ${
        isDark ? "bg-gray-800" : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span className="text-blue-500 font-medium text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <Sparkles className="w-5 h-5 text-blue-500" />
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold [font-family:var(--font-ovo)] mt-4 mb-6 transition-colors duration-300 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {"Let's"} Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full mb-4"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project in mind? {"Let's"} discuss how I can help bring your
            ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info - Compact Sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              const content = (
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`font-semibold text-sm mb-1 ${
                        isDark ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {info.title}
                    </h3>
                    <p
                      className={`font-medium truncate ${
                        isDark ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {info.value}
                    </p>
                  </div>
                </div>
              );

              return info.href ? (
                <a
                  key={index}
                  href={info.href}
                  className={`block rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "bg-gray-900/50 border border-gray-700 hover:border-gray-600 hover:bg-gray-900"
                      : "bg-white border border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg"
                  }`}
                >
                  {content}
                </a>
              ) : (
                <div
                  key={index}
                  className={`rounded-2xl p-4 ${
                    isDark
                      ? "bg-gray-900/50 border border-gray-700"
                      : "bg-white border border-gray-200 shadow-md"
                  }`}
                >
                  {content}
                </div>
              );
            })}

            {/* Social Links */}
            <div
              className={`rounded-2xl p-6 ${
                isDark
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                  : "bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200"
              }`}
            >
              <h3
                className={`font-bold text-lg mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Connect With Me
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`flex-1 flex items-center justify-center p-3 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                        isDark
                          ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                          : "bg-white hover:bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md"
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 ${
                          isDark ? "text-gray-300" : "text-gray-700"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Badge */}
            <div
              className={`rounded-2xl p-4 text-center ${
                isDark
                  ? "bg-green-500/10 border border-green-500/30"
                  : "bg-green-50 border border-green-200"
              }`}
            >
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span
                  className={`font-semibold text-sm ${
                    isDark ? "text-green-400" : "text-green-700"
                  }`}
                >
                  Available for Work
                </span>
              </div>
              <p
                className={`text-xs ${
                  isDark ? "text-green-400/70" : "text-green-600"
                }`}
              >
                Open to new opportunities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              className={`rounded-3xl p-8 shadow-xl relative overflow-hidden ${
                isDark
                  ? "bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                  : "bg-white border border-gray-100"
              }`}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -z-0"></div>

              <div className="relative z-10 space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                        isDark
                          ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800"
                          : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:bg-white"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-semibold mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                        isDark
                          ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800"
                          : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:bg-white"
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className={`block text-sm font-semibold mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Your Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                      isDark
                        ? "bg-gray-800/50 border-gray-700 text-white focus:border-blue-500 focus:bg-gray-800"
                        : "bg-gray-50 border-gray-200 text-gray-900 focus:border-blue-500 focus:bg-white"
                    }`}
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                <p
                  className={`text-xs text-center ${
                    isDark ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  {" I'll"} respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
