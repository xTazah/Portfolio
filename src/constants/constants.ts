import { beckhoff, hsbi, uniMuenster, berkeleyLogo, dartzPreview, portfolioPreview, wwUtilityPreview } from "../assets/assets";

const workExperience = [
  {
    title: "Graduate Student - Computer Science",
    company_name: "University of California, Berkeley",
    icon: berkeleyLogo,
    iconBg: "#003262",
    date: "August 2026 - January 2027",
    points: [
      "Self-funded semester abroad",
      "Taking COMPSCI 287H (Algorithmic Human-Robot Interaction) to learn how robots can work better with people",
      "COMPSCI C249A (Embedded Systems) and ELENG 206A (Intro to Robotics) for kinematics and real-time control",
      "EECS 283A (NLP) and DATA 145 (Evidence and Uncertainty) to handle messy, real-world data",
    ],
  },
  {
    title: "Master of Science - Information Systems",
    company_name: "University of Münster",
    icon: uniMuenster,
    iconBg: "white",
    date: "October 2025 - September 2027",
    points: [
      "Master's in Information Systems with a focus on Data Science",
      "All courses taught in English",
      "Specializing in machine learning and data science research",
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
      "Overall grade: 1,8 (US GPA equivalent: ~3.5)",
      "Bachelor thesis grade: 1,3 (US GPA equivalent: ~3.8)",
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
    image: dartzPreview,
    source_code_link: "https://github.com/xTazah/Dartz",
    live_link: "https://dartz.finn-koehler.com",
  },
  {
    name: "wwUtility",
    description:
      "Full-stack automation tool for WWU Münster. Scheduled sports course and library, intelligent seat reservations with features like rapid booking, priority-ordered seat preferences, and background task scheduling. The system solves captchas via OCR and uses university credentials for authentication.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: wwUtilityPreview,
    source_code_link: "https://github.com/xTazah/wwUtility",
    live_link: null,
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
  {
    name: "Portfolio",
    description:
      "Portfolio website for showcasing my work and experience. The website you are currently visiting. It is built with React and Tailwind CSS.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioPreview,
    source_code_link: "https://github.com/xTazah/Portfolio",
    live_link: null,
  }
];

export { workExperience, projects };
