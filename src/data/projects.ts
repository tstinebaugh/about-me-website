export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    title: "Schwab Factor Investor & Dynamic Rebalancer",
    description:
      "An automated investment and portfolio rebalancing CLI tool powered by the Charles Schwab Trader API and schwab-py. Executes buy-only dynamic rebalancing against multi-factor ETF allocations with macOS Keychain credential encryption and cron automation.",
    image: "/schwab_investor_cli.png",
    technologies: [
      "Python",
      "Charles Schwab API",
      "macOS Keychain",
      "OAuth 2.0",
      "Financial Modeling",
      "CLI",
    ],
    githubUrl: "https://github.com/tstinebaugh/schwab-investor",
    liveUrl: "",
  },
  {
    title: "SBI Shinsei Bank to Monarch Money Syncer",
    description:
      "A lightweight, secure browser extension and Python native messaging host that bridges SBI Shinsei Bank (Japan) balances to Monarch Money (US) in real-time with zero-cloud Apple Keychain security and live spot FX rates.",
    image: "/sbi_monarch_sync.png",
    technologies: [
      "TypeScript",
      "Python",
      "Manifest V3",
      "GraphQL",
      "macOS Keychain",
      "Native Messaging",
    ],
    githubUrl: "https://github.com/tstinebaugh/sbi-monarch-link",
    liveUrl: "",
  },
  {
    title: "Glycemic Index Database",
    description:
      "An easily searchable, clear and intuitive database for looking at different foods' glycemic index and glycemic load with advanced filtering capabilities",
    image: "/glycemic_index.png",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    githubUrl: "",
    liveUrl: "https://glycemic-index.vercel.app/",
  },
  {
    title: "Image Search and Download App",
    description: "Searches the web for images and allows bulk downloading",
    image: "/image_search_app.png",
    technologies: ["React", "Node.js", "TypeScript", "REST APIs"],
    githubUrl: "https://github.com/tstinebaugh/image-search-app",
    liveUrl: "https://image-search-app-rho-beryl.vercel.app/",
  },
  {
    title: "Agent Browser App",
    description:
      "Create and browse network agents and modify them from a web UI",
    image: "/agent_app.png",
    technologies: ["React", "Node.js", "TypeScript"],
    githubUrl: "https://github.com/tstinebaugh/agent-app",
    liveUrl: "",
  },
  {
    title: "Fullstack Open Course",
    description: "Completed Fullstack Open course @ University of Helsinki",
    image: "/fullstackopen.svg",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "MongoDB",
      "TypeScript",
      "Cypress",
      "GraphQL",
    ],
    githubUrl: "https://github.com/tstinebaugh/fullstackopencoursework",
    liveUrl: "",
  },
];
