import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

type Project = {
  name:        string
  description: string
  tech:        readonly string[]
  githubUrl:   string
  liveUrl?:    string
}

const PROJECTS: readonly Project[] = [
  {
    name:        'replayCI',
    description: 'PR-native regression tests for tool-using AI agents with deterministic replay, behavior diffs, and cost/safety gates.',
    tech:        ['Python', 'CI/CD', 'AI Agents'],
    githubUrl:   'https://github.com/aayushimalhotra3/replayCI',
  },
  {
    name:        'launchscope',
    description: 'Feature flag and A/B experiment analytics platform built with FastAPI, Postgres, and React.',
    tech:        ['FastAPI', 'PostgreSQL', 'React'],
    githubUrl:   'https://github.com/aayushimalhotra3/launchscope',
  },
  {
    name:        'flakewatch',
    description: 'CI flakiness and test failure analytics, tracking flaky tests and failure clusters over time.',
    tech:        ['FastAPI', 'React', 'Analytics'],
    githubUrl:   'https://github.com/aayushimalhotra3/flakewatch',
  },
  {
    name:        'infratrack',
    description: 'Multi-tenant usage-based billing backend with Stripe integration, quotas, analytics, and API keys.',
    tech:        ['FastAPI', 'PostgreSQL', 'Stripe'],
    githubUrl:   'https://github.com/aayushimalhotra3/infratrack',
  },
  {
    name:        'urlshortener-app',
    description: 'Production-ready Go microservice for URL shortening with Prometheus metrics, structured logging, and CI/CD.',
    tech:        ['Go', 'Docker', 'Prometheus'],
    githubUrl:   'https://github.com/aayushimalhotra3/urlshortener-app',
  },
  {
    name:        'meterstack',
    description: 'Multi-tenant SaaS billing and usage analytics backend with subscriptions, entitlements, and quota checks.',
    tech:        ['Python', 'React', 'Billing'],
    githubUrl:   'https://github.com/aayushimalhotra3/meterstack',
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden"
      style={{
        background:   'var(--bg-card)',
        border:       '1px solid var(--border-subtle)',
        borderRadius: '14px',
        minHeight:    '220px',
      }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      whileHover={{
        y: -5,
        borderColor: 'var(--border-medium)',
        boxShadow:   '0 20px 60px rgba(0,0,0,0.5), 0 1px 0 rgba(245,241,234,0.06)',
        transition:  { duration: 0.22, ease: EASE },
      }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      {/* Large dim index number — decorative */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-3 font-display font-black select-none"
        style={{
          fontSize: '7rem',
          lineHeight: 1,
          color: 'rgba(245,241,234,0.03)',
          letterSpacing: '-0.04em',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Card body */}
      <div className="relative z-10 p-6 md:p-7 flex flex-col h-full" style={{ minHeight: '220px' }}>
        {/* Index label */}
        <p
          className="font-mono mb-4"
          style={{ fontSize: '0.6rem', letterSpacing: '0.22em', color: 'var(--text-tertiary)' }}
        >
          {String(index + 1).padStart(2, '0')}
        </p>

        {/* Name */}
        <h3
          className="font-display font-bold mb-3 transition-colors duration-200"
          style={{
            fontSize: 'clamp(1.15rem, 2.5vw, 1.4rem)',
            color: hovered ? 'var(--accent-blush)' : 'var(--text-primary)',
          }}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          className="font-sans leading-relaxed mb-5 flex-1"
          style={{ fontSize: '0.83rem', color: 'var(--text-secondary)' }}
        >
          {project.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map(t => (
            <span
              key={t}
              className="font-mono"
              style={{
                fontSize: '0.65rem',
                padding: '0.22rem 0.65rem',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)',
                background: 'rgba(245,241,234,0.02)',
                color: 'var(--text-tertiary)',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay with action buttons */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="absolute inset-0 z-20 flex items-center justify-center"
            style={{
              background:     'rgba(11,10,12,0.82)',
              backdropFilter: 'blur(6px)',
              borderRadius:   '14px',
            }}
          >
            <motion.div
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0,  opacity: 1 }}
              exit={{ y: 10,   opacity: 0 }}
              transition={{ duration: 0.22, delay: 0.04, ease: EASE }}
              className="flex flex-col items-center gap-3"
            >
              {/* GitHub button — always shown */}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                className="flex items-center gap-2.5 font-sans font-semibold transition-all duration-200"
                style={{
                  fontSize:     '0.8rem',
                  padding:      '0.65rem 1.5rem',
                  borderRadius: '10px',
                  border:       '1px solid var(--border-medium)',
                  background:   'rgba(245,241,234,0.07)',
                  color:        'var(--text-primary)',
                  letterSpacing: '0.01em',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'rgba(110,59,91,0.7)'
                  el.style.color = 'var(--accent-blush)'
                  el.style.background = 'rgba(110,59,91,0.12)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget
                  el.style.borderColor = 'var(--border-medium)'
                  el.style.color = 'var(--text-primary)'
                  el.style.background = 'rgba(245,241,234,0.07)'
                }}
              >
                <Github size={14} />
                View on GitHub
              </a>

              {/* Live link — only if provided */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={e => e.stopPropagation()}
                  className="flex items-center gap-2.5 font-sans font-semibold transition-all duration-200"
                  style={{
                    fontSize:     '0.8rem',
                    padding:      '0.65rem 1.5rem',
                    borderRadius: '10px',
                    background:   'var(--accent-plum)',
                    color:        'var(--text-primary)',
                    letterSpacing: '0.01em',
                    border:       '1px solid transparent',
                  }}
                >
                  <ArrowUpRight size={14} />
                  Live Demo
                </a>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

const Projects = () => (
  <section id="work" className="py-20 md:py-28">
    <div className="max-w-6xl mx-auto px-6 md:px-8">

      {/* Header */}
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
            className="font-display text-display-lg"
            style={{ color: 'var(--text-primary)' }}
          >
            Selected work
          </motion.h2>
        </div>
        <motion.a
          variants={fadeUp}
          href="https://github.com/aayushimalhotra3?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-1.5 text-sm transition-colors duration-200"
          style={{ color: 'var(--text-tertiary)' }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent-blush)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-tertiary)')}
        >
          View all <ArrowUpRight size={14} />
        </motion.a>
      </motion.div>

      {/* 2-col grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>

      {/* Mobile view all */}
      <div className="sm:hidden mt-8 text-center">
        <a
          href="https://github.com/aayushimalhotra3?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="font-sans text-sm inline-flex items-center gap-1.5 transition-colors"
          style={{ color: 'var(--text-tertiary)' }}
        >
          View all projects <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  </section>
)

export default Projects
