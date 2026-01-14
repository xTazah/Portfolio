import { beckhoff, hsbi, uniMuenster } from "../assets/assets";

const workExperience = [
  {
    title: "Master of Science - Information Systems",
    company_name: "University of Münster",
    icon: uniMuenster,
    iconBg: "white",
    date: "October 2025 - Present",
    points: [
      "Master's degree in Information Systems with a major in Data Science",
      "Courses taught in English",
      "Focus on advanced data science, machine learning, and information systems research",
    ],
  },
  {
    title: "Working Student - Software Engineering",
    company_name: "Beckhoff Automation",
    icon: beckhoff,
    iconBg: "white",
    date: "October 2025 - Present",
    points: [
      "Contributing to ongoing software development projects alongside Master's studies",
      "Continuing work on TwinCAT ecosystem and automation solutions",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Beckhoff Automation",
    icon: beckhoff,
    iconBg: "white",
    date: "February 2024 - September 2025",
    points: [
      "Development of WatchLists for PLC applications and other automation products",
      "Implementation of Agents and integration into TwinCAT CoAgent",
      "Full-time software engineering role focusing on industrial automation solutions",
    ],
  },
  {
    title: "Dual Student - Software Engineering",
    company_name: "Beckhoff Automation",
    icon: beckhoff,
    iconBg: "white",
    date: "August 2020 - February 2024",
    points: [
      "Software development in an industrial context using .NET, TypeScript, and C++",
      "Development of driver components for automation systems",
      "Programming web-based dashboards for data analysis and visualization",
    ],
  },
  {
    title: "Bachelor of Engineering - Computer Science",
    company_name: "Bielefeld University of Applied Sciences",
    icon: hsbi,
    iconBg: "white",
    date: "August 2020 - February 2024",
    points: [
      "Dual study program in Computer Science in cooperation with Beckhoff Automation",
      "Bachelor of Engineering degree",
      "Overall grade: 1.8 (GPA equivalent: ~3.2)",
      "Bachelor thesis grade: 1.3 (GPA equivalent: ~3.7)",
    ],
  },
];

const projects = [
  {
    name: "Dartz Scoring",
    description:
      "A comprehensive scoring website for Darts, allowing users to track scores, view statistics, and manage games in real-time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: null, // ToDo: Add project image
    source_code_link: "https://github.com/", // ToDo: Update with actual repo
    live_link: "https://dartz.myurl",
  },
  {
    name: "Portfolio",
    description:
      "My personal portfolio website showcasing my work, skills, and experience. Built with React, Three.js, and Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: null, // ToDo: Add project image
    source_code_link: "https://github.com/", // ToDo: Update with actual repo
    live_link: "#",
  },
];

export { workExperience, projects };
