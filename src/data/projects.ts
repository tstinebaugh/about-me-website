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
