export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  /** Public source repository. Leave unset for private repos. */
  githubUrl?: string;
  /** Deployed site or demo. */
  liveUrl?: string;
  /** Source lives in a private repository (shows a "Private repo" badge instead of a link). */
  privateRepo?: boolean;
  /** Short status label, e.g. "In active development". */
  status?: string;
}

export const projects: Project[] = [
  {
    title: "SplitRent",
    description:
      "A SaaS app that takes the bookkeeping out of shared housing. Tenants forward utility bills by email, an LLM pipeline extracts the amounts in memory (bills are never stored), and SplitRent prorates rent and utilities, issues itemized monthly invoices, and tracks who has paid.",
    image: "/splitrent.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase Auth",
      "Stripe",
      "LLM Parsing",
      "Playwright",
    ],
    liveUrl: "https://splitrent.app/",
    privateRepo: true,
    status: "In active development",
  },
  {
    title: "Anki Leech Doctor & Mnemonic Studio",
    description:
      "An open-source AI copilot for Anki that rescues Japanese \"leech\" cards. It connects to a local Anki instance, breaks kanji down into radicals, writes mnemonics and example sentences at a chosen JLPT level, and syncs changes back to Anki. A local multi-vector search over semantic, visual (Unicode IDS radical trees for 27k+ kanji) and phonetic similarity flags look-alike words across decks.",
    image: "/anki_leech_doctor.png",
    technologies: [
      "Python",
      "FastAPI",
      "Gemini API",
      "RAG",
      "NumPy",
      "AnkiConnect",
      "JavaScript",
      "pytest",
    ],
    githubUrl: "https://github.com/tstinebaugh/anki-leech-doctor",
  },
  {
    title: "SBI Shinsei Bank to Monarch Money Syncer",
    description:
      "A Chromium extension and local Python native-messaging host that syncs an SBI Shinsei Bank (JPY) balance into Monarch Money (USD) at the live spot rate. The session is kept in the macOS Keychain, the extension never sees Monarch credentials, and nothing runs in the cloud.",
    image: "/sbi_monarch_sync.png",
    technologies: [
      "JavaScript",
      "Python",
      "Manifest V3",
      "Native Messaging",
      "GraphQL",
      "macOS Keychain",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/tstinebaugh/sbi-monarch-link",
  },
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
    privateRepo: true,
  },
  {
    title: "Glycemic Index Database",
    description:
      "A searchable database of foods' glycemic index and glycemic load, with advanced filtering to compare foods quickly.",
    image: "/glycemic_index.png",
    technologies: ["React", "TypeScript", "FastAPI", "PostgreSQL"],
    liveUrl: "https://glycemic-index.vercel.app/",
    privateRepo: true,
  },
  {
    title: "Image Search and Download App",
    description: "Searches the web for images and supports bulk downloading of results.",
    image: "/image_search_app.png",
    technologies: ["React", "Node.js", "TypeScript", "REST APIs"],
    githubUrl: "https://github.com/tstinebaugh/image-search-app",
    liveUrl: "https://image-search-app-rho-beryl.vercel.app/",
  },
  {
    title: "Agent Browser App",
    description: "A web UI for creating, browsing, and editing network agents.",
    image: "/agent_app.png",
    technologies: ["React", "Node.js", "TypeScript"],
    githubUrl: "https://github.com/tstinebaugh/agent-app",
  },
  {
    title: "Fullstack Open Course",
    description:
      "Completed the University of Helsinki's Fullstack Open course, covering React, Redux, Node.js, MongoDB, GraphQL, TypeScript, and end-to-end testing with Cypress.",
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
  },
];
