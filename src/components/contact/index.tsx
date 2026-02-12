"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "../ui/section-header";
import { ContactInfo } from "./contact-info";
import { ContactForm } from "./contact-form";

export const Contact = () => {
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
          <ContactInfo />
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};
