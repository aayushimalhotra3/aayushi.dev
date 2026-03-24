import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
  {
    name: 'replayCI',
    description:
      'PR-native regression tests for tool-using AI agents with deterministic replay, behavior diffs, and cost/safety gates.',
    tech: ['Python', 'CI/CD', 'AI Agents'],
    url: 'https://github.com/aayushimalhotra3/replayCI',
    featured: true,
  },
  {
    name: 'launchscope',
    description:
      'Feature flag and A/B experiment analytics platform built with FastAPI, Postgres, and React.',
    tech: ['FastAPI', 'PostgreSQL', 'React'],
    url: 'https://github.com/aayushimalhotra3/launchscope',
    featured: true,
  },
  {
    name: 'flakewatch',
    description:
      'CI flakiness and test failure analytics, tracking flaky tests and failure clusters over time.',
    tech: ['FastAPI', 'React', 'Analytics'],
    url: 'https://github.com/aayushimalhotra3/flakewatch',
  },
  {
    name: 'infratrack',
    description:
      'Multi-tenant usage-based billing backend with Stripe integration, quotas, analytics, and API keys.',
    tech: ['FastAPI', 'PostgreSQL', 'Stripe'],
    url: 'https://github.com/aayushimalhotra3/infratrack',
  },
  {
    name: 'urlshortener-app',
    description:
      'Production-ready Go microservice for URL shortening with Prometheus metrics, structured logging, and CI/CD.',
    tech: ['Go', 'Docker', 'Prometheus'],
    url: 'https://github.com/aayushimalhotra3/urlshortener-app',
  },
  {
    name: 'meterstack',
    description:
      'Multi-tenant SaaS billing and usage analytics backend with subscriptions, entitlements, and quota checks.',
    tech: ['Python', 'React', 'Billing'],
    url: 'https://github.com/aayushimalhotra3/meterstack',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.06, ease: 'easeOut' },
  }),
}

const ProjectCard = ({ project, idx }: { project: typeof projects[0]; idx: number }) => (
  <motion.a
    variants={fadeUp}
    custom={idx}
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    className="card-glow group bg-surface-card border border-border rounded-xl p-5 md:p-6 flex flex-col hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(201,168,124,0.08)] transition-all duration-300"
  >
    <div className="flex-1">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2.5">
          <Github size={15} className="text-cream-dim" />
          <h3 className="font-heading text-cream font-semibold text-base group-hover:text-accent transition-colors duration-200">
            {project.name}
          </h3>
        </div>
        <ArrowUpRight
          size={16}
          className="text-cream-dim opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-200 -translate-y-0.5 group-hover:translate-y-0"
        />
      </div>
      <p className="text-cream-muted text-sm leading-relaxed mb-4">
        {project.description}
      </p>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {project.tech.map(t => (
        <span
          key={t}
          className="text-xs px-2.5 py-1 rounded-md bg-surface-hover/60 border border-border text-cream-dim group-hover:text-cream-muted transition-colors"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.a>
)

const Projects = () => {
  const featured = projects.filter(p => p.featured)
  const rest = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-3 mb-4">
              <span className="text-accent/50 font-mono text-xs font-medium">03</span>
              <span className="h-px w-8 bg-accent/30" />
              <span className="text-accent text-xs tracking-[0.2em] uppercase font-medium">Projects</span>
            </motion.div>
            <motion.h2 variants={fadeUp} custom={1} className="font-heading text-display-lg text-cream">
              Selected work
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            custom={2}
            href="https://github.com/aayushimalhotra3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-cream-dim hover:text-accent text-sm transition-colors duration-200 link-slide"
          >
            View all <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

        {/* Featured — 2 column */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid md:grid-cols-2 gap-4 mb-4"
        >
          {featured.map((p, i) => <ProjectCard key={p.name} project={p} idx={i} />)}
        </motion.div>

        {/* Rest — 4 column grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4"
        >
          {rest.map((p, i) => <ProjectCard key={p.name} project={p} idx={i} />)}
        </motion.div>

        <div className="sm:hidden mt-6 text-center">
          <a
            href="https://github.com/aayushimalhotra3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream-dim hover:text-accent text-sm transition-colors inline-flex items-center gap-1.5"
          >
            View all repositories <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
