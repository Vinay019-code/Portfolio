export interface SkillCategory {
  id: string;
  name: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    description: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    name: "Languages",
    skills: [
      { name: "Java", highlight: true, description: "Primary OOP & DSA language, backend services" },
      { name: "JavaScript", highlight: true, description: "Modern ES6+, asynchronous programming, web apps" },
      { name: "Python", highlight: true, description: "Computer vision, numerical data processing, automation" },
      { name: "SQL", description: "Relational queries, schema design, database management" },
      { name: "HTML", description: "Semantic markup, accessibility, modern standards" },
      { name: "CSS", description: "Modern layouts, responsive design, animations" },
    ],
  },
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React.js", highlight: true, description: "Component architecture, hooks, virtual DOM" },
      { name: "Next.js", highlight: true, description: "App Router, SSR, SSG, full-stack React framework" },
      { name: "Tailwind CSS", highlight: true, description: "Utility-first design systems, responsive layouts" },
      { name: "Zustand", description: "Lightweight centralized state management" },
      { name: "Responsive UI", description: "Mobile-first layouts, cross-device compatibility" },
    ],
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", highlight: true, description: "Event-driven runtime for scalable network applications" },
      { name: "Express.js", highlight: true, description: "Middleware, routing, REST API microservices" },
      { name: "Java", highlight: true, description: "Robust backend logic, enterprise patterns, OOP" },
      { name: "REST APIs", highlight: true, description: "Resource modeling, HTTP status codes, structured JSON" },
    ],
  },
  {
    id: "database",
    name: "Databases",
    skills: [
      { name: "MongoDB", highlight: true, description: "NoSQL document storage, aggregation pipelines" },
      { name: "MongoDB Atlas", description: "Cloud database clusters, replica sets" },
      { name: "SQLite", description: "Lightweight embedded relational database" },
    ],
  },
  {
    id: "core",
    name: "Core Concepts",
    skills: [
      { name: "Data Structures & Algorithms", highlight: true, description: "Pattern-based problem solving, complexity analysis" },
      { name: "OOP", highlight: true, description: "Encapsulation, inheritance, polymorphism, abstraction" },
      { name: "DBMS", description: "Transactions, ACID properties, normalization, indexing" },
      { name: "Operating Systems", description: "Processes, threads, concurrency, memory management" },
      { name: "Computer Networks", description: "TCP/IP, HTTP/HTTPS, WebSockets, DNS" },
      { name: "Authentication & JWT", highlight: true, description: "Stateless tokens, HttpOnly cookies, middleware security" },
    ],
  },
  {
    id: "tools",
    name: "Tools & Platforms",
    skills: [
      { name: "Git", highlight: true, description: "Version control, branching strategies, commit history" },
      { name: "GitHub", highlight: true, description: "Repository management, collaboration, CI/CD" },
      { name: "Postman", description: "API contract testing, endpoint debugging" },
      { name: "VS Code", description: "Configured development environment, debugging" },
      { name: "Vercel", description: "Continuous deployment for Next.js and frontend applications" },
      { name: "Render", description: "Cloud hosting for backend APIs and services" },
    ],
  },
  {
    id: "data-science",
    name: "Data Science & CV",
    skills: [
      { name: "Python", highlight: true, description: "Core data science scripting language" },
      { name: "NumPy", description: "Multidimensional arrays, vectorized mathematical computation" },
      { name: "Pandas", description: "Data structures, manipulation, and time-series analysis" },
      { name: "Matplotlib", description: "Signal charting, telemetry visualization, plotting" },
      { name: "Basic Data Analysis", description: "Signal smoothing, moving averages, peak detection" },
    ],
  },
];

export const ecosystemHighlights = [
  { name: "React.js", category: "Frontend", x: 18, y: 32 },
  { name: "Next.js", category: "Frontend", x: 30, y: 15 },
  { name: "Node.js", category: "Backend", x: 72, y: 22 },
  { name: "Express.js", category: "Backend", x: 84, y: 40 },
  { name: "Java", category: "Languages", x: 70, y: 70 },
  { name: "Python", category: "Languages", x: 22, y: 72 },
  { name: "MongoDB", category: "Databases", x: 50, y: 88 },
  { name: "REST APIs", category: "Backend", x: 50, y: 12 },
  { name: "JWT", category: "Core", x: 82, y: 60 },
  { name: "Tailwind CSS", category: "Frontend", x: 12, y: 52 },
];
