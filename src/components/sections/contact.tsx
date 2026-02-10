"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { SectionHeader } from "../section-header";

const CONTACT_INFO = [
  {
    icon: Mail,
    value: "himanshudkp@gmail.com",
    href: "mailto:himanshudkp@gmail.com",
  },
  { icon: Phone, value: "+91 9522498034", href: "tel:+919522498034" },
  { icon: MapPin, value: "Pune, India", href: "#" },
];

const SOCIALS = [
  { icon: Github, href: "#" },
  { icon: Linkedin, href: "https://linkedin.com/in/himanshudkp" },
];

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section
      id="contact"
      className="bg-[#1E1E1E] px-5 sm:px-6 lg:px-8 xl:px-[8%] py-12"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          title="Contact"
          description="Let's build something meaningful together"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* LEFT */}
          <div className="space-y-5">
            <div className="space-y-3">
              {CONTACT_INFO.map(({ icon: Icon, value, href }) => (
                <a
                  key={value}
                  href={href}
                  className="flex items-center gap-3 rounded-lg border border-gray-700 bg-[#252525] px-4 py-2.5 text-gray-300 hover:border-teal-500/50 transition"
                >
                  <Icon size={16} className="text-teal-400 flex-shrink-0" />
                  <span className="text-xs sm:text-sm">{value}</span>
                </a>
              ))}
            </div>

            <div className="flex gap-2.5 pt-1">
              {SOCIALS.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  className="rounded-lg border border-gray-700 p-2.5 text-gray-400 hover:text-teal-400 hover:border-teal-500/50 transition"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Available for full-time roles, freelance projects, and
              collaborations across{" "}
              <span className="text-teal-400">Web, Mobile & AI</span>.
            </p>
          </div>

          {/* RIGHT - FORM */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setTimeout(() => setSubmitted(false), 3000);
            }}
            className="rounded-xl border border-teal-500/30 bg-[#252525] p-5 space-y-3.5"
          >
            <input
              required
              placeholder="Your Name"
              className="w-full rounded-lg bg-[#1E1E1E] border border-gray-700 px-4 py-2.5 text-sm text-gray-200 focus:border-teal-500 focus:outline-none"
            />

            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full rounded-lg bg-[#1E1E1E] border border-gray-700 px-4 py-2.5 text-sm text-gray-200 focus:border-teal-500 focus:outline-none"
            />

            <textarea
              required
              rows={4}
              placeholder="Tell me about your project…"
              className="w-full rounded-lg bg-[#1E1E1E] border border-gray-700 px-4 py-2.5 text-sm text-gray-200 focus:border-teal-500 focus:outline-none resize-none"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-teal-600 to-cyan-600 py-2.5 font-semibold text-sm text-white flex items-center justify-center gap-2 hover:opacity-90 transition"
            >
              {submitted ? "Message Sent" : "Send Message"}
              <Send size={15} />
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
