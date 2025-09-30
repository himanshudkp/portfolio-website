import { Certification, Education, WorkExperience } from "@/types";

export const CERTIFICATIONS: Certification[] = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Jan 2024",
    credentialId: "AWS-123456",
    verified: true,
    color: "from-blue-500 to-cyan-500",
    skills: ["Cloud Architecture", "AWS", "DevOps"],
  },
  {
    title: "React Advanced Patterns",
    issuer: "Frontend Masters",
    date: "Dec 2023",
    verified: false,
    color: "from-cyan-500 to-teal-500",
    skills: ["React", "TypeScript", "State Management"],
  },
];

export const EXPERIENCES: WorkExperience[] = [
  {
    role: "Frontend Developer",
    company: "Tech Solutions Inc.",
    period: "Jan 2023 - Present",
    location: "Remote",
    description:
      "Led the development of multiple high-impact web applications using React and Next.js, collaborating with cross-functional teams to deliver pixel-perfect, responsive interfaces. Implemented advanced state management solutions and optimized application performance, resulting in significantly improved user engagement and load times. Mentored junior developers and established best practices for code quality and component architecture.",
    tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    projects: [
      { name: "E-Commerce Platform", link: "#projects" },
      { name: "Dashboard Analytics", link: "#projects" },
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "Digital Innovations",
    period: "Jun 2022 - Dec 2022",
    location: "Hybrid",
    description:
      "Developed and maintained responsive web applications using modern JavaScript frameworks, working closely with designers to transform Figma designs into functional, accessible interfaces. Contributed to the migration of legacy codebases to React, improving application maintainability and performance. Participated in code reviews and implemented automated testing strategies to ensure code quality.",
    tech: ["React", "JavaScript", "CSS3", "REST APIs", "Git"],
    projects: [
      { name: "Corporate Website", link: "#projects" },
      { name: "Booking System", link: "#projects" },
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "University of Technology",
    period: "2018 - 2022",
    location: "New York, USA",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List for Academic Excellence",
      "Best Final Year Project Award",
      "President of Coding Club",
    ],
    coursework: [
      "Data Structures",
      "Web Development",
      "Machine Learning",
      "Database Systems",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Central High School",
    period: "2016 - 2018",
    location: "Boston, USA",
    gpa: "4.0/4.0",
    achievements: [
      "Valedictorian",
      "Mathematics Olympiad Gold Medal",
      "Science Fair First Place",
    ],
    coursework: [
      "Advanced Mathematics",
      "Physics",
      "Computer Science",
      "Chemistry",
    ],
  },
];
