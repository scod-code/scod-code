"use client";

import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  ExternalLinkIcon,
  ChevronDownIcon,
  BrainIcon,
  CodeIcon,
  DatabaseIcon,
  CpuIcon,
  GraduationCapIcon,
  WrenchIcon,
} from "./icons";

// ─── Data ──────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

type ProjectIcon = typeof BrainIcon;

interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: ProjectIcon;
  link: string;
}

const PROJECTS: Project[] = [
  {
    title: "Multi-Agent LLM Orchestration",
    description:
      "Designing and implementing multi-agent systems with LLM orchestration, guardrails, and AI safety pipelines for production-grade GenAI applications.",
    tags: ["LangChain", "Python", "FastAPI", "Multi-Agent", "LLM Safety"],
    icon: BrainIcon,
    link: "https://github.com/scod-code/engineering_portfolio",
  },
  {
    title: "Min-Heap Timeline Aggregation",
    description:
      "High-performance event aggregation engine using min-heap data structures. Achieved O(N log L) complexity with comprehensive unit testing at 1M+ event scale.",
    tags: ["C++", "STL", "Algorithms", "Unit Testing", "Performance"],
    icon: CpuIcon,
    link: "https://github.com/scod-code/engineering_portfolio",
  },
  {
    title: "Graph Algorithms & Dynamic Programming",
    description:
      "Implementation suite of BFS, DFS, topological sorting, and dynamic programming solutions with full complexity analysis and documentation.",
    tags: ["C++", "Graphs", "DP", "BFS/DFS", "Topological Sort"],
    icon: CodeIcon,
    link: "https://github.com/scod-code/engineering_portfolio",
  },
  {
    title: "Image Processing Library",
    description:
      "Object-oriented image processing library using template programming, copy constructors, and manual memory management. Demonstrates advanced C++ OOP principles.",
    tags: ["C++", "OOP", "Templates", "Memory Management"],
    icon: DatabaseIcon,
    link: "https://github.com/scod-code/engineering_portfolio",
  },
  {
    title: "Data Analysis & GUI Application",
    description:
      "Interactive Tkinter GUI with Pandas-driven data pipeline and Matplotlib visualizations, analyzing a 500-student academic dataset.",
    tags: ["Python", "Tkinter", "Pandas", "Matplotlib", "Data Viz"],
    icon: DatabaseIcon,
    link: "https://github.com/scod-code/engineering_portfolio",
  },
  {
    title: "MLOps & CI/CD for ML",
    description:
      "End-to-end ML pipelines with Docker containerization, FastAPI serving, and CI/CD automation for model deployment from research to production.",
    tags: ["Docker", "FastAPI", "PyTorch", "CI/CD", "MLOps"],
    icon: WrenchIcon,
    link: "https://github.com/scod-code/engineering_portfolio",
  },
];

const SKILLS: Record<string, string[]> = {
  "Languages & Frameworks": [
    "Python",
    "C++ (STL, OOP)",
    "TypeScript",
    "FastAPI",
    "LangChain",
    "PyTorch",
  ],
  "AI/ML & Robotics": [
    "Multi-Agent Systems",
    "LLM Fine-tuning",
    "LLM Safety & Evaluation",
    "Generative AI",
    "RAG Pipelines",
    "Robotics & Control",
    "Autonomous Systems",
  ],
  "Core CS": [
    "Dynamic Programming",
    "Graph Algorithms",
    "Data Structures",
    "Unit Testing",
    "Memory Management",
    "OOP Design Patterns",
  ],
  "Tools & Infrastructure": [
    "Git",
    "Docker",
    "CI/CD",
    "GDB",
    "Jupyter",
    "Make",
    "MATLAB",
    "ROS",
    "REST APIs",
  ],
};

// ─── Components ────────────────────────────────────────────────────────────────

function Navbar() {
  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-semibold tracking-tight">
          S.O<span className="text-blue-400">.</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="https://github.com/scod-code/engineering_portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm transition-colors hover:border-blue-400/50 hover:text-blue-400"
        >
          <GithubIcon size={16} />
          GitHub
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero-gradient relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <div className="fade-in max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm text-blue-300">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Open to collaboration &amp; opportunities
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Somtochukwu{" "}
          <span className="text-blue-400">Osigwe-Daniel</span>
        </h1>
        <p className="mb-2 text-xl text-neutral-300 sm:text-2xl">
          Robotics &amp; Intelligent Systems &bull; AI/ML Engineer
        </p>
        <p className="mx-auto mb-8 max-w-2xl text-neutral-500">
          MSc Robotics and Intelligent Systems at Nottingham Trent University.
          Building intelligent autonomous systems, end-to-end ML pipelines,
          and pushing the frontier of multi-agent orchestration and AI safety.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-600"
          >
            View My Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-neutral-300 transition-colors hover:border-white/30 hover:text-white"
          >
            Get In Touch
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-neutral-500"
        aria-label="Scroll down"
      >
        <ChevronDownIcon size={24} />
      </a>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold">About Me</h2>
      <div className="space-y-4 text-neutral-400 leading-relaxed">
        <p>
          I&apos;m an engineer at the intersection of{" "}
          <span className="text-white font-medium">Robotics</span>,{" "}
          <span className="text-white font-medium">Intelligent Systems</span>,{" "}
          <span className="text-white font-medium">Generative AI</span>, and{" "}
          <span className="text-white font-medium">MLOps</span>. I design and build
          autonomous systems, deploy end-to-end ML pipelines, and engineer scalable
          solutions from research prototype to production.
        </p>
        <p>
          My academic journey started at Rutgers University with Applied Sciences
          in Engineering, where I developed a strong foundation in C++, algorithms,
          and systems-level thinking. I&apos;m now completing my MSc in Robotics
          and Intelligent Systems at Nottingham Trent University, focusing on
          multi-agent orchestration, autonomous systems, and AI safety pipelines.
        </p>
        <p>
          I bridge the gap between low-level system efficiency and high-level AI
          research — equally comfortable optimizing memory-managed C++ code and
          embedded systems as I am fine-tuning large language models and deploying
          them behind FastAPI endpoints with Docker.
        </p>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-4 text-3xl font-bold">Projects</h2>
      <p className="mb-12 text-neutral-500">
        A selection of work spanning algorithms, AI systems, and software engineering.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => {
          const Icon = project.icon;
          return (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group flex flex-col rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                  <Icon size={20} />
                </div>
                <ExternalLinkIcon
                  size={16}
                  className="text-neutral-600 transition-colors group-hover:text-blue-400"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm text-neutral-500 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-4 text-3xl font-bold">Technical Skills</h2>
      <p className="mb-12 text-neutral-500">
        Tools and technologies I work with regularly.
      </p>
      <div className="grid gap-8 md:grid-cols-2">
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div
            key={category}
            className="rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6"
          >
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-400">
              {category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-sm text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold">Education</h2>
      <div className="space-y-8">
        <div className="flex gap-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
            <GraduationCapIcon size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              MSc Robotics and Intelligent Systems
            </h3>
            <p className="text-neutral-400">
              Nottingham Trent University &bull; 2024 – Present
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Focus: Autonomous systems, multi-agent orchestration, AI safety,
              advanced MLOps, robotics, and intelligent control systems.
            </p>
          </div>
        </div>
        <div className="flex gap-4 rounded-xl border border-[var(--card-border)] bg-[var(--card-bg)] p-6">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
            <GraduationCapIcon size={24} />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">
              Applied Sciences in Engineering
            </h3>
            <p className="text-neutral-400">
              Rutgers University &bull; Completed
            </p>
            <p className="mt-2 text-sm text-neutral-500">
              Foundation in C++, algorithms, data structures, OOP design,
              and systems-level programming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] p-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">Let&apos;s Connect</h2>
        <p className="mb-8 text-neutral-500">
          Open to collaboration on GenAI applications, open-source ML tooling,
          and opportunities in AI/ML engineering.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/somtoosigwedaniel/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium transition-colors hover:border-blue-400/50 hover:text-blue-400"
          >
            <LinkedinIcon size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/scod-code"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium transition-colors hover:border-blue-400/50 hover:text-blue-400"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
          <a
            href="mailto:somtosigwedaniel@gmail.com"
            className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm font-medium transition-colors hover:border-blue-400/50 hover:text-blue-400"
          >
            <MailIcon size={18} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-8 text-center text-sm text-neutral-600">
      <p>
        &copy; {new Date().getFullYear()} Somtochukwu Osigwe-Daniel. Built with
        Next.js &amp; Tailwind CSS.
      </p>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
