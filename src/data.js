"use strict";
// Single source of truth for site config, experience dates, skills, and project data.
// Translatable copy (titles/descriptions/etc.) lives in i18n/*.json and is referenced here by key.

export const SITE = {
  url: "https://d2lp7owtd50i80.cloudfront.net/",
  ogImage: "https://d2lp7owtd50i80.cloudfront.net/images/og2.webp",
  email: "jysim1212@gmail.com",
  github: "https://github.com/moondolph",
  linkedin: "https://www.linkedin.com/in/juyong-sim-profile/",
  credly: "https://www.credly.com/users/juyong-sim-profile/badges/credly",
};

// Experience timeline — dates are the single source of truth for the Experience section.
export const EXPERIENCE = [
  {
    id: "pci",
    start: "2026.02",
    end: "2026.07",
    titleKey: "career.pci.title",
    metaKey: "career.pci.meta",
    descKey: "career.pci.desc",
    tags: ["GCP", "JP1/AJS3", "Shell Script", "Cloud Run Jobs", "Docker", "GCS", "Terraform", "CI/CD", "GitLab"],
  },
  {
    id: "cal",
    start: "2025.05",
    end: "2025.12",
    titleKey: "career.cal.title",
    metaKey: "career.cal.meta",
    descKey: "career.cal.desc",
    tags: ["Java", "Oracle", "SQL", "Linux", "TeraTerm", "WinSCP", "Troubleshooting"],
  },
  {
    id: "gsifn",
    start: "2023.03",
    end: "2024.08",
    titleKey: "career.gsifn.title",
    metaKey: "career.gsifn.meta",
    descKey: "career.gsifn.desc",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "XML/JSON", "EC2", "Responsive UI"],
  },
];

// Skills — 5 groups. AI tags carry a "level" so we can label them Experience / Learning / Exploring
// instead of implying hands-on professional experience that doesn't exist yet.
export const SKILLS = [
  {
    id: "frontend",
    icon: "fa-solid fa-code",
    descKey: "skills.frontend.desc",
    tags: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    id: "backend",
    icon: "fa-solid fa-server",
    descKey: "skills.backend.desc",
    tags: ["Java", "Python", "FastAPI", "REST API", "SQL"],
  },
  {
    id: "ai",
    icon: "fa-solid fa-brain",
    descKey: "skills.ai.desc",
    tags: [
      { name: "LLM API Integration", level: "learning" },
      { name: "Prompt Engineering", level: "learning" },
      { name: "RAG", level: "exploring" },
      { name: "AI Agent", level: "exploring" },
      { name: "Vector Database", level: "exploring" },
    ],
  },
  {
    id: "cloudDevops",
    icon: "fa-solid fa-cloud",
    descKey: "skills.cloudDevops.desc",
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitLab", "Cloud Run Jobs", "Lambda", "S3", "CloudFront"],
  },
  {
    id: "opsCollab",
    icon: "fa-solid fa-terminal",
    descKey: "skills.opsCollab.desc",
    tags: ["Linux", "JP1/AJS3", "Oracle", "Cloud Logging", "Jira", "Confluence", "Trello", "Git", "Troubleshooting"],
  },
];

export const CERTS = [
  { id: "sysops", badge: "sysops-associate.png", nameKey: "cert.sysops.name", descKey: "cert.sysops.desc" },
  { id: "developer", badge: "developer-associate.png", nameKey: "cert.developer.name", descKey: "cert.developer.desc" },
  { id: "solutionsArchitect", badge: "solutions-architect-associate.png", nameKey: "cert.solutionsArchitect.name", descKey: "cert.solutionsArchitect.desc" },
  { id: "aiPractitioner", badge: "ai-practitioner.png", nameKey: "cert.aiPractitioner.name", descKey: "cert.aiPractitioner.desc" },
  { id: "cloudPractitioner", badge: "cloud-practitioner.png", nameKey: "cert.cloudPractitioner.name", descKey: "cert.cloudPractitioner.desc" },
];

// Projects — ordered by display priority. `status` is "live" | "private" | "planned".
// Planned projects must never show fabricated results/links — only summary + intended stack.
export const PROJECTS = [
  {
    id: "hardcoreEnglish",
    category: "ai",
    status: "inProgress",
    visibility: "public",
    featured: true,
    titleKey: "project.hardcoreEnglish.title",
    subtitleKey: "project.hardcoreEnglish.subtitle",
    problemKey: "project.hardcoreEnglish.problem",
    roleKey: "project.hardcoreEnglish.role",
    solutionKey: "project.hardcoreEnglish.solution",
    resultsKey: null,
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Claude API", "Node.js API Routes"],
    visual: { variant: "ai", chips: ["15s Timer", "→", "Claude API", "→", "Correction Report"] },
    githubUrl: null,
    liveUrl: null,
    architectureUrl: null,
  },
  {
    id: "jcb",
    category: "cloud",
    status: "private",
    visibility: "private",
    featured: false,
    titleKey: "project.jcb.title",
    subtitleKey: "project.jcb.subtitle",
    problemKey: "project.jcb.problem",
    roleKey: "project.jcb.role",
    solutionKey: "project.jcb.solution",
    resultsKey: "project.jcb.results",
    techStack: ["GCP", "Cloud Run Jobs", "Docker", "GCS", "Terraform", "GitLab", "CI/CD", "JP1/AJS3", "Shell Script", "Cloud Logging"],
    visual: { variant: "gcp", chips: ["JP1/AJS3", "→", "Cloud Run Jobs", "→", "Docker"] },
    githubUrl: "https://github.com/moondolph/jcb-cloud-batch-migration",
    liveUrl: null,
    architectureUrl: "images/architectures/cloud-run-batch.svg",
  },
  {
    id: "awsPortfolio",
    category: "cloud",
    status: "live",
    visibility: "public",
    featured: false,
    titleKey: "project.awsPortfolio.title",
    subtitleKey: "project.awsPortfolio.subtitle",
    problemKey: "project.awsPortfolio.problem",
    roleKey: "project.awsPortfolio.role",
    solutionKey: "project.awsPortfolio.solution",
    resultsKey: "project.awsPortfolio.results",
    techStack: ["S3", "CloudFront", "Route 53", "ACM", "Lambda", "DynamoDB", "GitHub Actions"],
    visual: { variant: "aws", chips: ["GitHub", "→", "S3", "→", "CloudFront", "→", "User"] },
    githubUrl: "https://github.com/moondolph/portfolio-s3",
    liveUrl: null,
    architectureUrl: "images/architectures/aws-static-site.svg",
  },
  {
    id: "oracleOps",
    category: "ops",
    status: "private",
    visibility: "private",
    featured: false,
    titleKey: "project.oracleOps.title",
    subtitleKey: "project.oracleOps.subtitle",
    problemKey: "project.oracleOps.problem",
    roleKey: "project.oracleOps.role",
    solutionKey: "project.oracleOps.solution",
    resultsKey: "project.oracleOps.results",
    techStack: ["Oracle", "SQL", "Linux", "TeraTerm", "Troubleshooting"],
    visual: { variant: "ops", chips: ["Logs", "→", "SQL", "→", "Root Cause"] },
    githubUrl: null,
    liveUrl: null,
    architectureUrl: "images/architectures/public-ops.svg",
  },
  {
    id: "gsifnWidget",
    category: "fullstack",
    status: "live",
    visibility: "public",
    featured: false,
    titleKey: "project.gsifnWidget.title",
    subtitleKey: "project.gsifnWidget.subtitle",
    problemKey: "project.gsifnWidget.problem",
    roleKey: "project.gsifnWidget.role",
    solutionKey: "project.gsifnWidget.solution",
    resultsKey: "project.gsifnWidget.results",
    techStack: ["HTML5", "CSS3", "JavaScript", "Amazon EC2", "SSH"],
    visual: { variant: "web", chips: ["KOSCOM", "→", "EC2 Widget", "→", "5 IR Sites"] },
    githubUrl: "https://github.com/moondolph/gsifn-ir-stock-widget",
    liveUrl: "https://www.celltrion.com/ko-kr/investment/stock-info",
    architectureUrl: "images/architectures/gsifn-ir-widget.svg",
  },
];

export const PROJECT_CATEGORIES = ["all", "ai", "fullstack", "cloud", "ops"];
