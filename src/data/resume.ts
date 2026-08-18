export interface Experience {
  company: string;
  title: string;
  date: string;
  description: string[]; // Array of bullet points
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  coursework?: string;
  githubRepo?: {
    text: string;
    url: string;
  };
  description?: string[]; // Array of bullet points for courses/achievements
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Language {
  name: string;
  proficiency: string;
}

export interface Certification {
  name: string;
}

export interface ResumeData {
  summary: string;
  workExperience: Experience[];
  education: Education[];
  technicalSkills: SkillCategory;
  allSkillCategories?: SkillCategory[];
  softSkills?: SkillCategory;
  languages: Language[];
  certifications?: Certification[];
}

export const resumeData: ResumeData = {
  summary:
    "Full Stack Software Engineer with 7+ years of experience architecting and delivering scalable web applications and cloud infrastructure (TypeScript, React, Go, AWS). Currently based in Japan with full local work authorization. Proven track record of delivering critical client milestones with zero production defects, driving cost-efficiency (reducing cloud spend by 30%), and utilizing modern AI workflows (Claude Code) to enhance team velocity.",
  workExperience: [
    {
      company: "Third Hub",
      title: "Senior Full Stack Software Engineer",
      date: "Mar 2026 – Present",
      description: [
        "Architected and shipped core web application features using React, TypeScript, and modern React Hooks, achieving a key client launch on July 1 with zero major release defects.",
        "Analyzed AWS telemetry and query patterns using Claude Code; designed and deployed front-end caching strategies that cut AWS expenditures by 30% (~$20,000/month).",
        "Spearheaded the adoption of AI-assisted engineering tools (Claude Code) for rapid code refactoring, module rearchitecting, and test generation, accelerating sprint velocity across cross-functional teams.",
        "Built modular, reusable UI component systems using styled-components / CSS-in-JS and structured state management, ensuring smooth rendering performance and consistent UI/UX.",
        "Wrote comprehensive unit and integration test suites in Jest, increasing coverage from 10% to 80%, and establishing automated pre-merge regression checks in CI/CD pipelines.",
      ],
    },
    {
      company: "Appraisal Bureau",
      title: "Senior Full Stack Engineer",
      date: "Mar 2025 – Nov 2025",
      description: [
        "Led development and launch of a Progressive Web App for fine art inventory and management, using Next.js, React, TypeScript, Strapi for CMS, and Sentry for monitoring.",
        "Owned the end-to-end charitable donations workflow, ensuring IRS compliance and integrating payment flows using Stripe, automating workflow and reducing human input by 90%.",
        "Designed and implemented a high-throughput media-upload service on AWS S3 + Lambda (deployed via Serverless) to eliminate timeout errors seen in the previous Strapi upload process, improving UX.",
        "Increased automated testing of backend services from 40% to 80%, reducing bugs and regressions by leveraging test-driven development and AI agents to expedite test generation.",
      ],
    },
    {
      company: "Outlier",
      title: "Prompt Engineer, Software Engineering",
      date: "Jan 2024 – May 2024",
      description: [
        "Audited and corrected LLM-generated code (Python, JavaScript, React) to improve model accuracy.",
        "Designed prompts to stress-test model reasoning and contributed RLHF data, improving generated code correctness by ~30%.",
      ],
    },
    {
      company: "Warner Brothers Discovery",
      title: "Software Engineer I & II",
      date: "Nov 2019 – Aug 2022",
      description: [
        "Co-developed the initial metadata ingestion pipeline (0 to 1) for Discovery+ using TypeScript and PostgreSQL, CircleCI, and Pulumi on AWS (Lambdas, Step Functions, S3, and RDS).",
        "Built monitoring dashboards using DataDog, detecting errors and anomalies before being reported by customers, improving client experience.",
        "Refactored TypeScript Lambdas into queue-based (AWS SQS) Golang microservices deployed on Kubernetes (ECS/EKS), enabling scalable ingestion across 25+ global regions.",
        "Introduced Test-Driven Development (TDD) practices, while refactoring test suite to reduce execution time from 10m to 2m in Github Actions, improving developer experience.",
        "Worked with global business teams to simplify business logic and data fields from legacy systems, optimize PostgreSQL queries, solving an N+1 database lookup problem, and implemented concurrency in Go-based Rollups service to reduce execution time from 15 minutes to ~90 seconds.",
        "Collaborated with product teams to develop an episode re-parenting API, reducing support tickets by ~30% by allowing clients to re-parent misplaced episodes through automated workflow.",
        "Mentored two summer interns on the team, as well as junior engineers on Rollup service.",
      ],
    },
    {
      company: "Infoblox",
      title: "Software Engineer",
      date: "Sep 2017 – Oct 2019",
      description: [
        "Migrated customer-account APIs from Ruby on Rails monolith to Golang microservices (Docker, Kubernetes, Protobuf), optimizing SQL queries and improving response times by 300%.",
        "Built an Okta-SSO authentication service in Golang with Redis caching, reducing authentication latency by ~20%.",
        "Built monitoring and metrics pipelines in Grafana and Prometheus, integrating with PagerDuty for on-call rotations via PagerDuty.",
      ],
    },
    {
      company: "Infoblox",
      title: "Software Test Engineer",
      date: "Sep 2017 – Sep 2018",
      description: [
        "Increased automated test coverage from near-zero to ~90%, using PyTest, Jenkins, and AWS Lambda to simulate 10k concurrent connections.",
        "Built a CI/CD pipeline in Jenkins for Selenium + PyTest GUI tests, increasing UI coverage by ~40%.",
        "Collaborated with DevOps on Docker, Kubernetes, Helm, and CloudFormation to improve infrastructure reliability.",
      ],
    },
  ],
  education: [
    {
      institution: "University of Washington",
      degree: "Bachelor of Science in Computer Science & Systems (3.57 GPA)",
      date: "2017",
      coursework:
        "Data Structures & Algorithms; Programming in Java, Python & C; AI & ML",
    },
    {
      institution: "Fullstack Open Course, University of Helsinki",
      degree: "MERN Stack Certificate",
      date: "2022 – 2024",
      githubRepo: {
        text: "GitHub Repo",
        url: "https://github.com/tstinebaugh/fullstackopencoursework",
      },
      description: [
        "Studied MERN stack (MongoDB, Express, React, Next.js), Jest/Mocha/Cypress, TypeScript, Node.js, HTML/CSS, and CI/CD",
      ],
    },
  ],
  technicalSkills: {
    category: "Languages & Frameworks",
    skills: ["Golang", "TypeScript", "Python", "React", "Next.js", "Redux"],
  },
  allSkillCategories: [
    {
      category: "Languages & Frameworks",
      skills: ["Golang", "TypeScript", "Python", "React", "Next.js", "Redux"],
    },
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS (Lambda, RDS, EC2, ECS/EKS, Step Functions, S3, SNS)", "GCP"],
    },
    {
      category: "Containers & Orchestration",
      skills: ["Docker", "Kubernetes"],
    },
    {
      category: "IaC / DevOps",
      skills: ["Pulumi", "Terraform", "Helm", "Jenkins", "GitHub Actions", "CI/CD"],
    },
    {
      category: "Databases & Data",
      skills: ["PostgreSQL", "DynamoDB", "MongoDB"],
    },
    {
      category: "Testing & Monitoring",
      skills: ["Jest", "PyTest", "Selenium", "Cypress", "DataDog", "Grafana", "Prometheus", "PagerDuty"],
    },
    {
      category: "AI & Modern Engineering Tools",
      skills: ["Cursor", "Claude Code", "Antigravity", "Prompt Engineering", "RLHF Workflows"],
    },
    {
      category: "APIs & Architecture",
      skills: ["REST", "Protobuf", "Microservices", "Serverless"],
    },
  ],
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Japanese", proficiency: "Conversational" },
  ],
  certifications: [
    { name: "CompTIA A+" },
    { name: "TestOut PC Pro" },
    { name: "TestOut Network Pro" },
  ],
};