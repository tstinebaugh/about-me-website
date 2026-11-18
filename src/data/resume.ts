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
    "Backend-leaning full-stack engineer with 6+ years building and scaling production systems in TypeScript, Go, and AWS, from a global streaming platform to early-stage products. Cut a production AWS bill by about 30% (roughly $20K/month) and migrated 1.3M user accounts to a new subscription model through an extensively tested, resumable migration with rollback support. Uses AI-assisted workflows (Claude Code, subagents) to ship faster and harden legacy code, taking an untested internal tool to full unit-test coverage of its non-integration logic, and builds LLM-powered products end to end. Based in Fukuoka, Japan with a valid work visa; native English speaker, Japanese N4.",
  workExperience: [
    {
      company: "Third Hub",
      title: "Senior Full Stack Software Engineer",
      date: "Mar 2026 – Dec 2026",
      description: [
        "Cut AWS costs by about 30% (roughly $20,000/month): used Claude Code to analyze the AWS billing dashboard, traced the largest AppSync cost to a front-end bug that fetched each profile individually on every screen change, and fixed it by batching up to 50 profile requests into one bulk call with a 5-minute client-side cache, reducing AppSync requests from billions to thousands per month.",
        "Led backend architecture for a four-tier subscription redesign: replaced per-day row counting for daily usage limits (previously a single plan) with an atomic PostgreSQL service that tracks each user's consumable entitlements per day across all four tiers, using lazy allocation to avoid mass daily writes, and handles order processing.",
        "Designed and ran an idempotent migration of all 1.3M user accounts to the new plan model, with concurrent processing, retries, resumability, and rollback support; extensively tested over about a month before a hard production cutover.",
        "Took an internal admin tool from zero tests to unit-test coverage of all logic that doesn't depend on external integrations, through subagent-driven refactoring with Claude Code, uncovering and fixing several latent bugs and adding automated regression checks to CI/CD.",
        "Delivered React and TypeScript features for a key client launch on July 1, and automated account provisioning and approval workflows that previously required manual UI steps.",
      ],
    },
    {
      company: "Appraisal Bureau",
      title: "Senior Full Stack Software Engineer (contract)",
      date: "Mar 2025 – Nov 2025",
      description: [
        "Led development and launch of a Progressive Web App for fine art inventory and management (Next.js, React, TypeScript, Strapi CMS, Sentry).",
        "Owned the end-to-end charitable donations workflow, including IRS compliance and Stripe payment flows, cutting manual input by 90%.",
        "Designed a high-throughput media-upload service on AWS S3 and Lambda (Serverless Framework) that eliminated timeout errors from the previous Strapi upload path.",
        "Raised automated backend test coverage from 40% to 80% using test-driven development, with AI agents to speed up test generation.",
      ],
    },
    {
      company: "Outlier.ai and DataAnnotation.tech",
      title: "AI Training Contractor (part-time)",
      date: "Jan 2024 – Dec 2024",
      description: [
        "Reviewed and corrected LLM-generated code (Python, JavaScript, React) and wrote prompts to stress-test model reasoning.",
      ],
    },
    {
      company: "Career break",
      title: "Travel and family caregiving",
      date: "Aug 2022 – Jan 2024",
      description: [
        "Traveled across 20+ countries and provided family caregiving; completed Fullstack Open (University of Helsinki).",
      ],
    },
    {
      company: "Warner Bros. Discovery",
      title: "Software Engineer I & II",
      date: "Nov 2019 – Aug 2022",
      description: [
        "Co-developed the Discovery+ metadata ingestion platform from scratch in TypeScript and PostgreSQL on AWS (Lambda, Step Functions, S3, RDS), with infrastructure as code in Pulumi.",
        "Refactored TypeScript Lambdas into queue-based (SQS) Go microservices running as containers on AWS (ECS, later EKS), enabling ingestion across 25+ global regions.",
        "Cut rollup job runtime from 15 minutes to about 90 seconds by fixing an N+1 query problem, optimizing PostgreSQL queries, and parallelizing the Go service.",
        "Cut CI time from 10–15 minutes to under 2 by parallelizing tests and isolating test data with randomly generated accounts; introduced test-driven development practices.",
        "Built DataDog dashboards and alerts (ingestion duration, error rates, SQS and dead-letter queue health) that caught problems before customers reported them; shared an on-call rotation of about one week in eight, handling incidents, hotfixes, rollbacks, and post-incident reviews.",
        "Built an episode re-parenting API with product teams that cut support tickets by about 30%; mentored two interns and junior engineers.",
      ],
    },
    {
      company: "Infoblox",
      title: "Software Engineer, previously Software Test Engineer",
      date: "Sep 2017 – Oct 2019",
      description: [
        "Migrated customer-account APIs from a Ruby on Rails monolith to Go microservices (Docker, self-managed Kubernetes on EC2, Protobuf); replaced a per-customer query loop with a single joined SQL query, cutting response time from nearly 1 second to about 100 ms.",
        "Built an Okta SSO authentication service in Go with Redis caching, reducing authentication latency by about 20%.",
        "Built monitoring and alerting with Prometheus, Grafana, and PagerDuty, and took part in on-call rotations.",
        "As a test engineer, raised automated test coverage from near zero to about 90% with PyTest and Jenkins, including AWS Lambda-based load tests simulating 10,000 concurrent connections.",
        "As a test engineer, built a Jenkins CI pipeline for Selenium and PyTest GUI tests, expanding UI test coverage by about 40%.",
      ],
    },
  ],
  education: [
    {
      institution: "University of Washington",
      degree: "B.S. Computer Science & Systems",
      date: "2017",
    },
    {
      institution: "Fullstack Open, University of Helsinki",
      degree: "MERN Stack Certificate",
      date: "2022 – 2024",
      githubRepo: {
        text: "GitHub Repo",
        url: "https://github.com/tstinebaugh/fullstackopencoursework",
      },
      description: ["MERN stack, Next.js, TypeScript, Jest and Cypress testing, CI/CD"],
    },
  ],
  technicalSkills: {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
  },
  allSkillCategories: [
    {
      category: "Languages",
      skills: ["TypeScript", "JavaScript", "Go", "Python", "SQL"],
    },
    {
      category: "Web & Frameworks",
      skills: ["React", "Next.js", "Node.js", "FastAPI", "REST APIs", "Stripe integration"],
    },
    {
      category: "AI-Assisted Engineering",
      skills: [
        "Claude Code (subagents, large refactors, test generation)",
        "LLM APIs (Gemini, OpenAI, Anthropic)",
        "Retrieval pipelines",
      ],
    },
    {
      category: "Cloud",
      skills: [
        "AWS (Lambda, ECS/EKS, EC2, SQS, S3, RDS, Step Functions, AppSync, DynamoDB)",
        "Serverless",
      ],
    },
    {
      category: "Infrastructure & DevOps",
      skills: ["Docker", "Kubernetes", "Pulumi", "CloudFormation", "Helm", "GitHub Actions", "CircleCI", "Jenkins"],
    },
    {
      category: "Data",
      skills: ["PostgreSQL", "Prisma", "Supabase", "DynamoDB", "MongoDB", "Redis"],
    },
    {
      category: "Testing",
      skills: ["Jest", "Playwright", "Cypress", "PyTest", "Selenium", "TDD"],
    },
    {
      category: "Observability & Operations",
      skills: ["DataDog", "Grafana", "Prometheus", "Sentry", "PagerDuty", "On-call incident response"],
    },
    {
      category: "Architecture",
      skills: ["Microservices", "Event-driven systems (SQS)", "Distributed systems", "Idempotent data migrations"],
    },
  ],
  languages: [
    { name: "English", proficiency: "Native" },
    { name: "Japanese", proficiency: "JLPT N4 (sitting N3 in December 2026)" },
  ],
};
