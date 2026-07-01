import { beckhoff, hsbi, uniMuenster, berkeleyLogo, dartzPreview, portfolioPreview, wwUtilityPreview, openLatexPreview, gaussianThesisPreview } from "../assets/assets";

const workExperience = [
  {
    title: "Graduate Student - Computer Science",
    company_name: "University of California, Berkeley",
    icon: berkeleyLogo,
    iconBg: "#003262",
    date: "August 2026 - December 2026",
    points: [
      "Visiting graduate student; coursework subject to availability",
      "Coursework spanning Vehicle Dynamics & Control, Advanced Robotics, Algorithmic Human-Robot Interaction, Embedded Systems, and Dynamics & Control of Autonomous Flight",
      "Focus areas: robotics, autonomous vehicles, and real-time control systems",
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
      "Current GPA: 1,5 (US equivalent ~3.7)",
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
      "Building TwinCAT CoAgent MCP servers that let engineering tools automate and communicate across the measurement suite",
      "Engineering the TwinCAT Global Watchlist, a real-time monitoring interface tracking hundreds of PLC variables synchronized at cycle time (down to 1 ms)",
      "Implemented snapshot capture/restore, bidirectional write-back to live PLC runtimes, and multi-format value rendering (hex, octal, binary, decimal)",
      "Built a Visual Studio service for PLC self-registration, letting users add any variable to the watchlist via a single right-click",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Beckhoff Automation",
    icon: beckhoff,
    iconBg: "white",
    date: "February 2024 - September 2025",
    points: [
      "Built a generic, high-performance filtering framework in C# with a custom query language for tree views of hundreds of thousands of items (full PLC variable lists with deeply nested arrays and structs)",
      "Leveraged reflection, interop, and attribute-driven design for plug-and-play extensibility, with aggressive caching and constraint-based evaluation for millisecond-latency UI filtering",
      "Initiated development of the TwinCAT Global Watchlist for real-time PLC diagnostics and visualization",
    ],
  },
  {
    title: "Dual Student - Software Engineering",
    company_name: "Beckhoff Automation",
    icon: beckhoff,
    iconBg: "white",
    date: "August 2020 - February 2024",
    points: [
      "Architected a synchronization framework unifying legacy visualization concepts with modern TwinCAT Analytics dashboards (bachelor thesis, grade 1,3)",
      "Developed Windows kernel-mode drivers in C++ and industrial IPC diagnostics pipelines (CPU temperature, disk usage, system health) via the Beckhoff MDP library and asynchronous TwinCAT ADS communication",
      "Designed automated User Management configuration generation for secure server-side data access in TwinCAT HMI",
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
    name: "Pedestrian Reconstruction in Street Gaussians via Part-Based Rigid Decomposition",
    description:
      "Thesis on reconstructing articulated pedestrians in driving scenes while staying inside the rigid object design of Street Gaussians. I split each pedestrian into 10 SMPL driven rigid body segments posed via forward kinematics with learnable per instance pose residuals, using no skinning weights and no deformation network at render time. I built the new node type end to end in the DriveStudio framework and evaluated it on the Waymo Open Dataset, improving close range human PSNR by 3.69 dB over the rigid baseline.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "gaussian splatting",
        color: "green-text-gradient",
      },
      {
        name: "smpl",
        color: "green-text-gradient",
      },
      {
        name: "cuda",
        color: "pink-text-gradient",
      },
      {
        name: "waymo",
        color: "pink-text-gradient",
      },
      {
        name: "autonomous driving",
        color: "pink-text-gradient",
      },
    ],
    image: gaussianThesisPreview,
    source_code_link: null,
    live_link: null,
    pdf_link: "/pedestrian-streetgs.pdf",
  },
  {
    name: "OpenLatex",
    description:
      "Locally-run LaTeX editor with live PDF preview, designed to work alongside VS Code so AI assistants can edit .tex files on disk while you write. Forked from open-prism; I stripped out the AI/IndexedDB/cloud layer and added a real filesystem backend with Chokidar watching and debounced disk writes, full Git integration (branch indicators, staging, commits, push/pull), a recursive file tree sidebar, and table-of-contents parsing with scroll sync.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "codemirror",
        color: "green-text-gradient",
      },
      {
        name: "zustand",
        color: "green-text-gradient",
      },
      {
        name: "hono",
        color: "pink-text-gradient",
      },
      {
        name: "chokidar",
        color: "pink-text-gradient",
      },
    ],
    image: openLatexPreview,
    source_code_link: "https://github.com/xTazah/OpenLatex",
    live_link: null,
    pdf_link: null,
  },
  {
    name: "Dartz",
    description:
      "Multiplayer darts scorekeeping app for real-time 501 games. Create lobbies, invite remote or local players, and sync turns & scoring through a running C# game server via SignalR. Includes full rules logic, live match syncing, friends, player statistics, and match history.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "c#",
        color: "green-text-gradient",
      },
      {
        name: "signalr",
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
    pdf_link: null,
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
    pdf_link: null,
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
    pdf_link: null,
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
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolioPreview,
    source_code_link: "https://github.com/xTazah/Portfolio",
    live_link: null,
    pdf_link: null,
  }
];

export { workExperience, projects };
