export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  /** Public source repository. Leave unset for private repos. */
  githubUrl?: string;
  /** Button text for githubUrl. Defaults to "Source Code". */
  githubLabel?: string;
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
      "A production app that takes the bookkeeping out of shared housing. Tenants forward utility bills by email, an LLM pipeline (Gemini, OpenAI or Anthropic behind one interface) extracts the amounts in memory so bills are never stored, and SplitRent prorates rent and utilities, issues itemized monthly invoices, and tracks who has paid.",
    image: "/splitrent.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Supabase Auth",
      "Stripe",
      "Resend",
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
      "An open-source AI copilot for Anki that rescues Japanese \"leech\" cards. It connects to a local Anki instance, breaks kanji down into radicals, writes mnemonics and example sentences at a chosen JLPT level, and syncs them back to the deck. A local multi-vector index (TF-IDF semantic, kanji-structure from Unicode IDS trees for 27k+ characters, and phonetic edit distance) flags look-alike cards across decks with no external API calls.",
    image: "/anki_leech_doctor.png",
    technologies: [
      "Python",
      "FastAPI",
      "Gemini API",
      "RAG",
      "NumPy",
      "AnkiConnect",
      "pytest",
      "Ruff",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/tstinebaugh/anki-leech-doctor",
  },
  {
    title: "SBI Shinsei Bank to Monarch Money Syncer",
    description:
      "A Chrome/Brave/Edge extension and local Python native-messaging host that syncs an SBI Shinsei Bank (JPY) balance into Monarch Money (USD) at the live spot rate in one click. It reuses the browser's Monarch login so the extension never handles a password, keeps the session in the macOS Keychain, and runs nothing on third-party servers.",
    image: "/sbi_monarch_link.png",
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
    title: "Schwab Auto-Investor",
    description:
      "An open-source CLI that invests idle cash in a Charles Schwab account toward a target ETF allocation using the official Trader API. Buy-only rebalancing sends new money to the most underweight holdings without ever selling, with exact Decimal math, whole-share allocation, dry-run mode, typed confirmation before live orders, and API keys kept in the OS keychain.",
    image: "/schwab_auto_investor.png",
    technologies: [
      "Python",
      "Schwab Trader API",
      "OAuth 2.0",
      "OS Keychain",
      "CLI",
      "pytest",
      "GitHub Actions",
    ],
    githubUrl: "https://github.com/tstinebaugh/schwab-auto-investor",
  },
  {
    title: "Open Source: rickb777/date (Go)",
    description:
      "Discovery+ metadata ingestion needed ISO 8601 durations with millisecond precision, which the Go date package's Period type couldn't represent. I built backward-compatible millisecond-precision period types with tests (+339 lines) in a fork that ran in production for the ingestion pipeline, then proposed the change upstream. The maintainer incorporated the approach into the rewritten rickb777/period package.",
    image: "/rickb777_date_pr.png",
    technologies: ["Go", "ISO 8601", "Open Source", "Unit Testing"],
    githubUrl: "https://github.com/rickb777/date/pull/21",
    githubLabel: "View Pull Request",
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
