import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["Next.js", "PostgreSQL", "WebSocket", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for managing multiple social media accounts with data visualization.",
      tech: ["React", "TypeScript", "Chart.js", "Express"],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application with location-based forecasts and interactive maps.",
      tech: ["React", "OpenWeather API", "Mapbox", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio CMS",
      description:
        "Headless CMS for managing portfolio content with drag-and-drop builder.",
      tech: ["Next.js", "Prisma", "MySQL", "React DnD"],
      image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "Mobile-first fitness tracking app with workout plans and progress analytics.",
      tech: ["React Native", "Firebase", "Redux", "Chart.js"],
      image:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop",
      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          A collection of my recent work and side projects
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-purple-500/50 transition group"
            >
              <div className="relative overflow-hidden">
                {/* <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-300"
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
