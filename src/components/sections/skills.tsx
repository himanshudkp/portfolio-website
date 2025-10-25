// components/Skills.jsx
import React from "react";
import { Code, Database, Palette, Smartphone } from "lucide-react";

export const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-8 h-8" />,
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Vue.js",
        "JavaScript ES6+",
      ],
    },
    {
      category: "Backend",
      icon: <Database className="w-8 h-8" />,
      items: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "MongoDB",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      category: "Design",
      icon: <Palette className="w-8 h-8" />,
      items: [
        "Figma",
        "UI/UX",
        "Responsive Design",
        "Accessibility",
        "Design Systems",
        "Prototyping",
      ],
    },
    {
      category: "Mobile & Tools",
      icon: <Smartphone className="w-8 h-8" />,
      items: ["React Native", "Git", "Docker", "AWS", "CI/CD", "Jest"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          Tools and technologies I use to bring ideas to life
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition hover:transform hover:scale-105"
            >
              <div className="text-purple-400 mb-4">{skillGroup.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {skillGroup.category}
              </h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="text-gray-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">
            Always Learning
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The tech world never stops evolving, and neither do I. Currently
            exploring Web3, AI integration, and advanced animation techniques to
            stay at the cutting edge of web development.
          </p>
        </div>
      </div>
    </section>
  );
};
