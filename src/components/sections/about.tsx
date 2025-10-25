// components/About.jsx
import React from "react";
import { Code2, Rocket, Users } from "lucide-react";
import Image from "next/image";

export const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Clean Code",
      description:
        "Writing maintainable, scalable code that stands the test of time",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Fast Performance",
      description:
        "Optimizing every aspect for lightning-fast user experiences",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "User Focused",
      description: "Designing with empathy and accessibility at the forefront",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Passionate developer with a love for creating elegant solutions
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            {/* <Image
              src=""
              alt="Workspace"
              className="rounded-2xl shadow-2xl shadow-purple-500/20"
              width={100}
              height={100}
            /> */}
          </div>
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              {"I'm"} a full-stack developer with over 5 years of experience
              building web applications that users love. My journey in tech
              started with a curiosity about how things work, and evolved into a
              passion for creating digital experiences.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I specialize in modern JavaScript frameworks, with a focus on
              React and Next.js. When {"I'm"} not coding, {"you'll"} find me
              exploring new technologies, contributing to open-source projects,
              or sharing knowledge with the developer community.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I believe in writing code that is not only functional but also
              elegant and maintainable. Every project is an opportunity to learn
              and grow.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition"
            >
              <div className="text-purple-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
