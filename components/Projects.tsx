import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ArrowUpRight } from 'lucide-react'

type Project = {
  name:        string
  description: string
  tech:        readonly string[]
  githubUrl:   string
  liveUrl?:    string
  size:        'large' | 'small' | 'medium'
}

const PROJECTS: readonly Project[] = [
  {
    name:        'replayCI',
    description: 'PR-native regression tests for tool-using AI agents with deterministic replay, behavior diffs, and cost/safety gates.',
    tech:        ['Python', 'CI/CD', 'AI Agents'],
    githubUrl:   'https://github.com/aayushimalhotra3/replayCI',
    size:        'large',
  },
  {
    name:        'launchscope',
    description: 'Feature flag and A/B experiment analytics platform built with FastAPI, Postgres, and React.',
    tech:        ['FastAPI', 'PostgreSQL', 'React'],
    githubUrl:   'https://github.com/aayushimalhotra3/launchscope',
    size:        'small',
  },
  {
    name:        'flakewatch',
    description: 'CI flakiness and test failure analytics, tracking flaky tests and failure clusters over time.',
    tech:        ['FastAPI', 'React', 'Analytics'],
    githubUrl:   'https://github.com/aayushimalhotra3/flakewatch',
    size:        'small',
  },
  {
    name:        'infratrack',
    description: 'Multi-tenant usage-based billing backend with Stripe integration, quotas, analytics, and API keys.',
    tech:        ['FastAPI', 'PostgreSQL', 'Stripe'],
    githubUrl:   'https://github.com/aayushimalhotra3/infratrack',
    size:        'large',
  },
  {
    name:        'urlshortener-app',
    description: 'Production-ready Go microservice for URL shortening with Prometheus metrics, structured logging, and CI/CD.',
    tech:        ['Go', 'Docker', 'Prometheus'],
    githubUrl:   'https://github.com/aayushimalhotra3/urlshortener-app',
    size:        'medium',
  },
  {
    name:        'meterstack',
    description: 'Multi-tenant SaaS billing and usage analytics backend with subscriptions, entitlements, and quota checks.',
    tech:        ['Python', 'React', 'Billing'],
    githubUrl:   'https://github.com/aayushimalhotra3/meterstack',
    size:        'medium',
  },
]

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        backgroundColor: '#1A1411',
        border:          hovered ? '1px solid #8B5C7A' : '1px solid #2E241D',
        borderRadius:    '14px',
        padding:         '28px',
        position:        'relative',
        overflow:        'hidden',
        boxShadow:       hovered ? '0 0 20px rgba(139,92,122,0.1)' : 'none',
        transform:       hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition:      'border-color 250ms, box-shadow 250ms, transform 250ms',
        cursor:          'default',
        minHeight:       project.size === 'large' ? '260px' : project.size === 'medium' ? '220px' : '200px',
        display:         'flex',
        flexDirection:   'column',
      }}
    >
      {/* Decorative index number */}
      <span
        aria-hidden
        style={{
          position:      'absolute',
          right:         '-4px',
          top:           '-8px',
          fontFamily:    '"Instrument Serif", Georgia, serif',
          fontSize:      '7rem',
          lineHeight:    1,
          color:         'rgba(242,236,228,0.025)',
          letterSpacing: '-0.04em',
          pointerEvents: 'none',
          userSelect:    'none',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* GitHub icon top-right */}
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={e => e.stopPropagation()}
        style={{
          position:   'absolute',
          top:        '20px',
          right:      '20px',
          color:      hovered ? '#8B5C7A' : '#A69B8E',
          transition: 'color 200ms',
          zIndex:     2,
        }}
      >
        <Github size={16} />
      </a>

      {/* Index label */}
      <p
        style={{
          fontFamily:    '"JetBrains Mono", monospace',
          fontSize:      '10px',
          letterSpacing: '0.22em',
          color:         '#A69B8E',
          marginBottom:  '14px',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </p>

      {/* Name */}
      <h3
        style={{
          fontFamily:   '"Instrument Serif", Georgia, serif',
          fontWeight:   400,
          fontSize:     'clamp(1.2rem, 2.5vw, 1.5rem)',
          color:        hovered ? '#D4A9A9' : '#F2ECE4',
          marginBottom: '12px',
          transition:   'color 200ms',
          lineHeight:   1.2,
        }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p
        style={{
          fontFamily:  '"DM Sans", system-ui, sans-serif',
          fontSize:    '13.5px',
          lineHeight:  1.7,
          color:       '#A69B8E',
          marginBottom: '20px',
          flex:        1,
        }}
      >
        {project.description}
      </p>

      {/* Tech chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 'auto' }}>
        {project.tech.map(t => (
          <span
            key={t}
            style={{
              fontFamily:    '"JetBrains Mono", monospace',
              fontSize:      '10px',
              letterSpacing: '0.06em',
              padding:       '4px 10px',
              borderRadius:  '20px',
              border:        '1px solid #2E241D',
              color:         '#A69B8E',
              backgroundColor: 'rgba(242,236,228,0.02)',
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
}

const Projects = () => (
  <section
    id="work"
    className="section-dark"
    style={{ paddingTop: '6rem', paddingBottom: '6rem' }}
  >
    <div className="container-inner">

      {/* Kicker */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        style={{ marginBottom: '2.5rem' }}
      >
        <span
          style={{
            fontFamily:    '"JetBrains Mono", monospace',
            fontSize:      '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color:         '#A69B8E',
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '8px',
          }}
        >
          <span style={{ color: '#C4A86B' }}>02</span>
          <span style={{ width: '32px', height: '1px', backgroundColor: '#C4A86B', display: 'inline-block' }} />
          Work
        </span>
      </motion.div>

      {/* Heading */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        transition={{ staggerChildren: 0.1 }}
        style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '12px' }}
      >
        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: '"Instrument Serif", Georgia, serif',
            fontWeight: 400,
            fontSize:   'clamp(2.25rem, 5vw, 3.25rem)',
            color:      '#F2ECE4',
            lineHeight: 1.1,
          }}
        >
          Selected <em style={{ fontStyle: 'italic' }}>work</em>
        </motion.h2>
        <motion.a
          variants={fadeUp}
          href="https://github.com/aayushimalhotra3?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily:    '"DM Sans", system-ui, sans-serif',
            fontSize:      '13px',
            color:         '#A69B8E',
            textDecoration: 'none',
            display:       'flex',
            alignItems:    'center',
            gap:           '4px',
            transition:    'color 200ms',
          }}
          className="hidden sm:flex hover-underline"
          onMouseEnter={e => (e.currentTarget.style.color = '#F2ECE4')}
          onMouseLeave={e => (e.currentTarget.style.color = '#A69B8E')}
        >
          View all <ArrowUpRight size={14} />
        </motion.a>
      </motion.div>

      {/* Asymmetric grid */}
      {/* Row 1: large (65%) + small (30% shifted down) */}
      <div className="hidden lg:grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div style={{ gridColumn: 'span 2' }}>
          <ProjectCard project={PROJECTS[0]} index={0} />
        </div>
        <div style={{ marginTop: '40px' }}>
          <ProjectCard project={PROJECTS[1]} index={1} />
        </div>
      </div>

      {/* Row 2: small (shifted up) + large */}
      <div className="hidden lg:grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '20px' }}>
        <div style={{ marginTop: '-20px' }}>
          <ProjectCard project={PROJECTS[2]} index={2} />
        </div>
        <div style={{ gridColumn: 'span 2' }}>
          <ProjectCard project={PROJECTS[3]} index={3} />
        </div>
      </div>

      {/* Row 3: two medium */}
      <div className="hidden lg:grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <ProjectCard project={PROJECTS[4]} index={4} />
        </div>
        <div style={{ marginTop: '20px' }}>
          <ProjectCard project={PROJECTS[5]} index={5} />
        </div>
      </div>

      {/* Mobile/tablet: simple 2-col */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 gap-5">
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
          style={{
            fontFamily:    '"DM Sans", system-ui, sans-serif',
            fontSize:      '13px',
            color:         '#A69B8E',
            textDecoration: 'none',
            display:       'inline-flex',
            alignItems:    'center',
            gap:           '4px',
          }}
        >
          View all projects <ArrowUpRight size={14} />
        </a>
      </div>
    </div>
  </section>
)

export default Projects
