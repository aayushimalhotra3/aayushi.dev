import React from 'react'
import { ExternalLink, Github, Lock } from 'lucide-react'

interface Project {
  title: string
  description: string
  why: string
  stack: string[]
  github?: string
  demo?: string
  privateRepo?: boolean
  highlight?: boolean
}

const PROJECTS: Project[] = [
  {
    title: 'replayCI',
    description:
      'A CI/CD tool that automatically generates PR-native regression tests for AI agents. ' +
      'Captures agent behavior on a golden prompt set during pull requests, diffs against the baseline, ' +
      'and flags behavioral regressions before they reach production.',
    why:
      'AI agents are notoriously hard to regression-test — replayCI solves this by making ' +
      'behavioral tests a first-class artifact of the PR review workflow.',
    stack: ['Python', 'GitHub Actions', 'FastAPI', 'Docker', 'LLM APIs', 'PostgreSQL'],
    github: 'https://github.com/aayushimalhotra3/replayCI',
    highlight: true,
  },
  {
    title: 'Agentic AI IT Support System',
    description:
      'Senior Capstone (CSE 482) built with WK Kellogg Co. — a production-grade agentic AI system ' +
      'that automates Tier-1 IT support ticket resolution using a RAG pipeline over internal knowledge ' +
      'bases, with intelligent escalation for edge cases.',
    why:
      'IT support teams spend the majority of their time on repetitive Tier-1 requests. ' +
      'This system handles the predictable 70%, freeing engineers for complex issues.',
    stack: ['Python', 'FastAPI', 'LangChain', 'RAG', 'OpenAI API', 'PostgreSQL', 'Docker'],
    privateRepo: true,
    highlight: true,
  },
  {
    title: 'launchscope',
    description:
      'A self-hosted feature flag and A/B analytics platform. FastAPI backend with real-time event ' +
      'ingestion, percentage-based rollouts, user segment targeting, and instant flag toggles ' +
      'without redeployment. Dashboard shows conversion funnels and variant performance.',
    why:
      'Most feature flag tools are either too simple or too expensive for early-stage teams. ' +
      'launchscope is a self-hosted alternative with first-class analytics built in.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'Redis', 'React', 'TypeScript', 'Docker'],
    github: 'https://github.com/aayushimalhotra3/launchscope',
  },
  {
    title: 'ETL Pipeline — MSU IT',
    description:
      'Automated Python ETL pipelines extracting data from TeamDynamix (MSU\'s IT ticketing system) ' +
      'via REST APIs, transforming and loading into a PostgreSQL warehouse, with KPI dashboards in ' +
      'Grafana and orchestration via Apache Airflow.',
    why:
      'IT managers had no reliable visibility into resolution times or backlog trends. ' +
      'The pipelines cut mean resolution time by 25% within the first quarter after launch.',
    stack: ['Python', 'Apache Airflow', 'PostgreSQL', 'REST APIs', 'Grafana', 'Docker'],
    privateRepo: true,
  },
  {
    title: 'urlshortener-app',
    description:
      'A URL shortener built in Go — clean REST API, custom alias support, click analytics, ' +
      'and Redis-backed caching for sub-millisecond redirects. Containerized with Docker and ' +
      'deployable to any cloud provider.',
    why:
      'A deliberately lean project to explore Go\'s concurrency model and demonstrate language ' +
      'range beyond Python. The Redis integration makes it legitimately fast at scale.',
    stack: ['Go', 'Redis', 'PostgreSQL', 'Docker', 'REST API'],
    github: 'https://github.com/aayushimalhotra3/urlshortener-app',
  },
  {
    title: 'codecritic',
    description:
      'An AI-powered code review tool that analyses pull requests against a configurable ruleset, ' +
      'flags style violations, potential bugs, and complexity hotspots, and posts inline comments ' +
      'directly on GitHub PRs via the GitHub Checks API.',
    why:
      'Code review is a bottleneck on every engineering team. codecritic automates the mechanical ' +
      'part — leaving human reviewers to focus on architecture and intent.',
    stack: ['Python', 'OpenAI API', 'GitHub API', 'FastAPI', 'TypeScript'],
    github: 'https://github.com/aayushimalhotra3/codecritic',
  },
]

const Tag = ({ label }: { label: string }) => (
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[#232338] text-[#8ba4c0] text-xs font-medium border border-[#2c2838]">
    {label}
  </span>
)

const ProjectCard = ({ project }: { project: Project }) => (
  <div
    className={`
      flex flex-col bg-[#1c1c2e] rounded-xl p-6 h-full
      border transition-all duration-300
      hover:border-[#3c3848] hover:shadow-[0_0_30px_-12px_rgba(196,160,180,0.12)]
      ${project.highlight ? 'border-[#c4a0b4]/30' : 'border-[#2c2838]'}
    `}
  >
    {/* Header row */}
    <div className="flex items-start justify-between gap-3 mb-3">
      <h3 className="font-serif text-lg font-semibold text-[#f0ece8] leading-tight">
        {project.title}
      </h3>
      <div className="flex items-center gap-2.5 flex-shrink-0 mt-0.5">
        {project.privateRepo ? (
          <span
            className="flex items-center gap-1 text-[#7a7680] text-xs"
            title="Code available on request"
          >
            <Lock size={13} />
            <span className="hidden sm:inline">Private</span>
          </span>
        ) : project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a7680] hover:text-[#f0ece8] transition-colors"
            aria-label="View on GitHub"
          >
            <Github size={17} />
          </a>
        ) : null}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#7a7680] hover:text-[#c4a0b4] transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink size={17} />
          </a>
        )}
      </div>
    </div>

    {/* Description */}
    <p className="text-[#c0bbb8] text-sm leading-relaxed mb-4 flex-1">
      {project.description}
    </p>

    {/* Why it matters */}
    <div className="border-l-2 border-[#c4a0b4]/30 pl-3 mb-5">
      <p className="text-[#7a7680] text-xs leading-relaxed italic">{project.why}</p>
    </div>

    {/* Stack pills */}
    <div className="flex flex-wrap gap-1.5 mt-auto">
      {project.stack.map(s => <Tag key={s} label={s} />)}
    </div>
  </div>
)

const Projects = () => {
  return (
    <section id="projects" className="py-28 bg-[#0f0f1a] relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2c2838] to-transparent" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="mb-14" data-aos="fade-up">
          <span className="text-[#c4a0b4] text-xs font-medium tracking-[0.2em] uppercase">Work</span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#f0ece8] mt-2">
            Featured Projects
          </h2>
          <p className="text-[#7a7680] text-sm mt-3 max-w-lg">
            Real projects — each one shipped, linked, or available on request.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              data-aos="fade-up"
              data-aos-delay={`${i * 60}`}
              className="flex"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* GitHub link */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <a
            href="https://github.com/aayushimalhotra3"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#7a7680] hover:text-[#c4a0b4] transition-colors duration-200"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
