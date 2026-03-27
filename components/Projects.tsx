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
  },
  {
    name: 'launchscope',
    description:
      'Feature flag and A/B experiment analytics platform built with FastAPI, Postgres, and React.',
    tech: ['FastAPI', 'PostgreSQL', 'React'],
    url: 'https://github.com/aayushimalhotra3/launchscope',
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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const Projects = () => (
  <section id="work" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6 md:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.1 }}
        className="flex items-end justify-between mb-12"
      >
        <div>
          <motion.p variants={fadeUp} className="section-label mb-4">
            02 &mdash; Work
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-display-lg text-primary"
          >
            Selected work
          </motion.h2>
        </div>
        <motion.a
          variants={fadeUp}
          href="https://github.com/aayushimalhotra3?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-muted hover:text-accent text-sm transition-colors duration-200 link-slide"
        >
          View all projects <ArrowUpRight size={14} />
        </motion.a>
      </motion.div>

      <div className="space-y-5">
        {projects.map((project, idx) => (
          <motion.a
            key={project.name}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className={`group block bg-card rounded-card shadow-card p-6 md:p-8 hover:shadow-card-glow hover:-translate-y-0.5 transition-all duration-200 ${
              idx % 2 === 0 ? '' : 'md:text-right'
            }`}
          >
            <div
              className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${
                idx % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className={`flex-1 ${idx % 2 !== 0 ? 'md:text-right' : ''}`}>
                <div
                  className={`flex items-center gap-3 mb-2 ${
                    idx % 2 !== 0 ? 'md:justify-end' : ''
                  }`}
                >
                  <Github
                    size={16}
                    className="text-muted group-hover:text-accent transition-colors"
                  />
                  <h3 className="font-display text-xl font-bold text-primary group-hover:text-accent transition-colors duration-200">
                    {project.name}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-muted opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
                <p className="text-muted text-sm leading-relaxed max-w-lg">
                  {project.description}
                </p>
              </div>

              <div
                className={`flex flex-wrap gap-2 shrink-0 ${
                  idx % 2 !== 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-bg border border-border text-muted group-hover:text-primary group-hover:border-accent/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="sm:hidden mt-8 text-center">
        <a
          href="https://github.com/aayushimalhotra3?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted hover:text-accent text-sm transition-colors inline-flex items-center gap-1.5 link-slide"
        >
          View all projects <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  </section>
)

export default Projects
