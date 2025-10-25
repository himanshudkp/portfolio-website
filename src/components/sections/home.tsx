// components/Hero.jsx
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Hi, {"I'm"}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & UI/UX Enthusiast
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            I craft beautiful, functional web experiences that solve real
            problems. Passionate about clean code and innovative solutions.
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-semibold hover:bg-purple-500/10 transition"
          >
            View Work
          </a>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com"
            className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:hello@example.com"
            className="text-gray-400 hover:text-purple-400 transition transform hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};
