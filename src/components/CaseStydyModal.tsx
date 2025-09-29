import {
  ArrowRight,
  CheckCircle,
  ExternalLink,
  FileText,
  Github,
  Lightbulb,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from "lucide-react";
import { projectsData } from "./Projects";

const CaseStudyModal = ({
  project,
  isOpen,
  onClose,
  isDark,
}: {
  project: (typeof projectsData)[0];
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        {/* Header */}
        <div
          className={`sticky top-0 z-10 px-8 py-6 border-b backdrop-blur-md ${
            isDark
              ? "bg-gray-900/95 border-gray-800"
              : "bg-white/95 border-gray-200"
          }`}
        >
          <div className="flex items-start justify-between">
            <div>
              <div
                className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium mb-3 ${
                  isDark
                    ? "bg-blue-500/10 text-blue-400"
                    : "bg-blue-100 text-blue-600"
                }`}
              >
                <FileText className="w-4 h-4" />
                Case Study
              </div>
              <h2
                className={`text-3xl font-bold ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {project.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-full transition-colors ${
                isDark
                  ? "hover:bg-gray-800 text-gray-400"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-8 space-y-12">
          {/* Overview */}
          <section>
            <h3
              className={`text-2xl font-bold mb-4 flex items-center gap-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <Sparkles className="w-6 h-6 text-blue-500" />
              Overview
            </h3>
            <p
              className={`text-lg leading-relaxed ${
                isDark ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {project.caseStudy.overview}
            </p>
          </section>

          {/* Problem Statement */}
          <section>
            <h3
              className={`text-2xl font-bold mb-4 flex items-center gap-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <Target className="w-6 h-6 text-red-500" />
              Problem Statement
            </h3>
            <div
              className={`p-6 rounded-2xl border-l-4 border-red-500 ${
                isDark ? "bg-red-500/10" : "bg-red-50"
              }`}
            >
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {project.caseStudy.problem}
              </p>
            </div>
          </section>

          {/* Solution */}
          <section>
            <h3
              className={`text-2xl font-bold mb-4 flex items-center gap-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              Solution
            </h3>
            <div
              className={`p-6 rounded-2xl border-l-4 border-green-500 ${
                isDark ? "bg-green-500/10" : "bg-green-50"
              }`}
            >
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {project.caseStudy.solution}
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section>
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <Zap className="w-6 h-6 text-purple-500" />
              Key Features
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.caseStudy.features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "bg-gray-800 hover:bg-gray-750"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className={isDark ? "text-gray-300" : "text-gray-700"}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section>
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <Sparkles className="w-6 h-6 text-pink-500" />
              Project Screenshots
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {project.caseStudy.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 ${
                    isDark ? "bg-gray-800" : "bg-white"
                  }`}
                >
                  <div
                    className={`h-48 bg-gradient-to-br ${screenshot.color} flex items-center justify-center`}
                  >
                    <div className="text-white text-center">
                      <div className="text-4xl mb-2">📱</div>
                      <p className="text-sm font-medium">{screenshot.title}</p>
                    </div>
                  </div>
                  <div
                    className={`p-4 ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <p className="text-sm text-center">{screenshot.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies Used */}
          <section>
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <Zap className="w-6 h-6 text-blue-500" />
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-3">
              {project.caseStudy.technologies.map((tech, index) => (
                <span
                  key={index}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    isDark
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-400 border border-blue-500/30"
                      : "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 border border-blue-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Challenges & Solutions */}
          <section>
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <Target className="w-6 h-6 text-orange-500" />
              Challenges & Solutions
            </h3>
            <div className="space-y-6">
              {project.caseStudy.challenges.map((challenge, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl ${
                    isDark
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-gray-50 border border-gray-200"
                  }`}
                >
                  <h4
                    className={`font-bold text-lg mb-3 flex items-center gap-2 ${
                      isDark ? "text-orange-400" : "text-orange-600"
                    }`}
                  >
                    <ArrowRight className="w-5 h-5" />
                    {challenge.title}
                  </h4>
                  <p className={isDark ? "text-gray-300" : "text-gray-700"}>
                    <span className="font-semibold text-green-500">
                      Solution:{" "}
                    </span>
                    {challenge.solution}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Results & Impact */}
          <section>
            <h3
              className={`text-2xl font-bold mb-6 flex items-center gap-3 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              <TrendingUp className="w-6 h-6 text-green-500" />
              Results & Impact
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {project.caseStudy.results.map((result, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1 ${
                    isDark
                      ? "bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30"
                      : "bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200"
                  }`}
                >
                  <div className="text-3xl mb-2">🎯</div>
                  <p
                    className={`font-bold ${
                      isDark ? "text-green-400" : "text-green-600"
                    }`}
                  >
                    {result}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Action Buttons */}
          <section className="flex gap-4 pt-4">
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <ExternalLink className="w-5 h-5" />
              View Live Demo
            </a>
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-700"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300"
              }`}
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyModal;
