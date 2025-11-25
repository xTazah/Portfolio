import { beckhoff, hsbi } from "../assets/assets";

const workExperience = [
  {
    title: "Developer",
    company_name: "Beckhoff Automation",
    icon: beckhoff,
    iconBg: "white",
    date: "August 2020 - Today",
    points: ["Bla Bli Blub.", "Some stuff."],
  },
  {
    title: "Student",
    company_name:
      "Bielefeld university in cooperation with Beckhoff Automation",
    icon: hsbi,
    iconBg: "white",
    date: "August 2020 - February 2024",
    points: [
      "Computer science.",
      "Bachelor of engineering.",
      "Ø 1,8.",
      "Bachelor thesis 1,3.",
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
