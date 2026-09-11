export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
}

export interface RecordItem {
  id: string;
  role: string;
  entity: string;
  period: string;
  location: string;
  description: string;
}

export const portfolioData = {
  personal: {
    name: "Nandhan",
    surname: "",
    fullName: "Nandhan",
    statement: "SOFTWARE ARCHITECT & DIGITAL ENGINEER",
    location: "REMOTE / GLOBAL",
    email: "nandhan.dev@gmail.com",
    available: true,
    statusText: "AVAILABLE FOR SELECT WORK",
    coordinates: "12.9716° N, 77.5946° E",
  },

  manifesto: {
    lead: "REDUCING COMPLEXITY TO PURE UTILITY & ELEGANT ARCHITECTURE.",
    body: "I build resilient digital infrastructure and high-precision web interfaces. Grounded in computational efficiency, strict type-safety, and uncompromising aesthetics.",
  },

  socials: [
    { label: "GITHUB", url: "https://github.com", handle: "@nandhan" },
    { label: "LINKEDIN", url: "https://linkedin.com", handle: "/in/nandhan" },
    { label: "X / TWITTER", url: "https://x.com", handle: "@nandhandev" },
    { label: "EMAIL", url: "mailto:nandhan.dev@gmail.com", handle: "nandhan.dev@gmail.com" },
  ],

  projects: [
    {
      id: "pulse-engine",
      num: "01",
      title: "PULSE ENGINE",
      subtitle: "Multi-modal Realtime Analytics",
      category: "DISTRIBUTED SYSTEMS",
      year: "2025",
      description: "High-throughput streaming analytics platform designed for distributed AI workloads with sub-millisecond edge synchronization.",
      tags: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "nova-core",
      num: "02",
      title: "NOVA ARCHITECTURE",
      subtitle: "High-Velocity Headless Commerce",
      category: "FULL STACK WEB",
      year: "2025",
      description: "Headless commerce architecture with zero-runtime CSS overhead, edge cache persistence, and atomic transaction pipelines.",
      tags: ["React 19", "Next.js", "Stripe", "Redis", "Edge Config"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "synchron-canvas",
      num: "03",
      title: "SYNCHRON",
      subtitle: "Multiplayer Spatial Canvas",
      category: "REALTIME / WEBSOCKETS",
      year: "2024",
      description: "Collaborative multiplayer canvas built with CRDTs and WebSockets for synchronous low-latency spatial interaction.",
      tags: ["Node.js", "WebSockets", "Canvas API", "Docker", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "forge-cli",
      num: "04",
      title: "FORGE CLI",
      subtitle: "Cloud Infrastructure Provisioner",
      category: "DEV TOOLS / SYSTEMS",
      year: "2024",
      description: "Declarative developer toolchain for provisioning reproducible ephemeral environments in cloud ecosystems.",
      tags: ["Node.js", "TypeScript", "AWS SDK", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=900&auto=format&fit=crop&q=80",
    },
    {
      id: "apex-protocol",
      num: "05",
      title: "APEX FLOW",
      subtitle: "DeFi Intelligence Interface",
      category: "FINTECH / INTERFACES",
      year: "2024",
      description: "High-density data visualization and portfolio telemetry dashboard engineered for algorithmic trading markets.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=900&auto=format&fit=crop&q=80",
    },
  ] as Project[],

  capabilities: [
    {
      category: "01 / ARCHITECTURE",
      items: [
        "Distributed Systems Design",
        "Microservices & Event Streams",
        "Edge Compute & Serverless",
        "Database Modeling & Sharding",
      ],
    },
    {
      category: "02 / INTERFACE ENGINEERING",
      items: [
        "Next.js App Router & React 19",
        "Strict TypeScript Systems",
        "Tailwind CSS / Design Tokens",
        "High-Precision Animation & Motion",
      ],
    },
    {
      category: "03 / BACKEND & PROTOCOLS",
      items: [
        "Node.js Runtime & Express",
        "GraphQL, REST & gRPC APIs",
        "PostgreSQL, Redis & Vector DBs",
        "WebSockets & Realtime State",
      ],
    },
    {
      category: "04 / INFRASTRUCTURE",
      items: [
        "Vercel Edge & Cloudflare",
        "AWS Cloud Architecture",
        "Docker & Containerization",
        "Automated CI/CD Workflows",
      ],
    },
  ],

  records: [
    {
      id: "rec-1",
      role: "LEAD ARCHITECT",
      entity: "VANGUARD LABS",
      period: "2023 — PRESENT",
      location: "GLOBAL / REMOTE",
      description: "Directing system architecture for high-throughput enterprise platforms and edge delivery networks.",
    },
    {
      id: "rec-2",
      role: "SENIOR SYSTEMS ENGINEER",
      entity: "HYPERSCALE",
      period: "2021 — 2023",
      location: "REMOTE",
      description: "Engineered scalable Node.js microservices processing millions of daily transactions with 99.99% uptime.",
    },
    {
      id: "rec-3",
      role: "INTERFACE DEVELOPER",
      entity: "PIXEL DIGITAL",
      period: "2019 — 2021",
      location: "REMOTE",
      description: "Crafted high-fidelity web experiences, design systems, and transactional checkout flows.",
    },
  ] as RecordItem[],
};
