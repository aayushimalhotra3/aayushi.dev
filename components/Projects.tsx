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
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

const Projects = () => {
  return (
    <section id="projects" className="py-32 md:py-40 bg-surface-raised">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="flex items-end justify-between mb-20"
        >
          <div>
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-accent text-sm tracking-[0.2em] uppercase mb-4"
            >
              Projects
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="font-serif text-display-md text-cream italic"
            >
              Selected work
            </motion.h2>
          </div>
          <motion.a
            variants={fadeUp}
            custom={2}
            href="https://github.com/aayushimalhotra3?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 text-cream-dim hover:text-accent text-sm transition-colors duration-200"
          >
            View all <ArrowUpRight size={14} />
          </motion.a>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {projects.map((project, i) => (
            <motion.a
              key={project.name}
              variants={fadeUp}
              custom={i}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-surface-card border border-border rounded-2xl p-6 flex flex-col hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-accent/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-cream font-medium text-base group-hover:text-accent transition-colors duration-200">
                    {project.name}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-cream-dim opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-y-1 group-hover:translate-y-0"
                  />
                </div>
                <p className="text-cream-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="text-cream-dim text-xs px-2.5 py-1 rounded-full bg-surface-hover/50 border border-border"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </motion.div>

        <div className="sm:hidden mt-10 text-center">
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
