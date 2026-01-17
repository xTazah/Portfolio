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
    name: "Dartz",
    description:
      "Multiplayer darts scorekeeping app for real-time 501 games. Create lobbies, invite remote or local players, and sync turns & scoring via Firebase. Includes full rules logic, live match syncing, friends, player stats & match history.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: "src/assets/Dartz-Preview.gif",
    source_code_link: "https://github.com/xTazah/Dartz",
    live_link: "https://dartz.finn-koehler.com",
  },
  {
    name: "Factura Automation",
    description:
      "Automates the digitization of handwritten invoices. It features a mobile camera-style UI for capturing and processing invoices, using OpenCV for image capturing, OpenAI’s GPT-4 for handwritten-text extraction, and Google Sheets for data storage.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: null,
    source_code_link: "https://github.com/xTazah/FacturaAutomation",
    live_link: null,
  },
];

export { workExperience, projects };
