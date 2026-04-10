'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, GraduationCap } from 'lucide-react'

type Experience = {
  title:    string
  company:  string
  location: string
  period:   string
  current?: boolean
  bullets:  string[]
}

const experiences: Experience[] = [
  {
    title:    'Cloud Integration Intern',
    company:  'DataHub LLC',
    location: 'Chicago, IL · Remote',
    period:   'Mar 2026 – May 2026',
    current:  true,
    bullets: [
      'Upskilling on Red Hat OpenShift, IBM Cloud, and IBM watsonx.data as part of a structured cloud integration track focused on enterprise deployments.',
      'Preparing for and completing cloud platform certification exams sponsored by DataHub, with hands-on work in client consulting and presentations.',
    ],
  },
  {
    title:    'Software Engineering Intern',
    company:  'IDX Exchange',
    location: 'Remote',
    period:   'Oct 2025 – Jan 2026',
    bullets: [
      'Built Python + SQL ingestion checks for listing feeds (schema validation, dedupe, null thresholds, idempotent loads), reducing bad records by ~35%.',
      'Implemented feed health KPIs and dashboards (freshness, reject reasons, coverage, deltas), cutting ad hoc investigations by 2–3 hours/week.',
      'Tuned MySQL schemas and query plans for high-traffic filters (index design, EXPLAIN profiling, query rewrites), lowering median latency ~30%.',
    ],
  },
  {
    title:    'Cloud Engineering Intern',
    company:  'Ericsson',
    location: 'Remote',
    period:   'May 2024 – Jul 2024',
    bullets: [
      'Refactored Apache Beam pipelines on GCP Dataflow (windowing, combiner efficiency, IO tuning), improving end-to-end processing time ~30%.',
      'Added validation probes, structured logs, and rollout checks; reduced time to isolate data regressions by ~25%.',
    ],
  },
  {
    title:    'Undergraduate Research Assistant',
    company:  'MSU Social Science',
    location: 'East Lansing, MI',
    period:   'Mar 2024 – Feb 2025',
    bullets: [
      'Built analysis-ready datasets from public APIs using Python (pandas) with schema guards and deduping.',
      'Trained baseline models with error analysis and reproducible reporting artifacts.',
    ],
  },
  {
    title:    'Data Analytics Intern',
    company:  'Innefu Labs',
    location: 'Gurgaon, India',
    period:   'May 2023 – Jul 2023',
    bullets: [
      'Standardized PySpark ingestion for high-volume security telemetry (partitioning, caching, vectorized transforms), reducing batch processing time ~25%.',
      'Delivered Streamlit dashboards and scheduled reports, cutting manual reporting effort ~30%.',
    ],
  },
  {
    title:    'Student Analyst',
    company:  'MSU IT Services',
    location: 'East Lansing, MI',
    period:   'Sep 2022 – May 2023',
    bullets: [
      'Provided technical support for university systems, resolving 200+ tickets across network, software, and access issues.',
    ],
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

function Row({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(exp.current ?? false)

  /* Pull the starting year out of "Mar 2026 – May 2026" → "2026" */
  const year = exp.period.match(/\d{4}/)?.[0] ?? ''

  return (
    <div style={{ borderTop: '1px solid var(--border-subtle)' }}>

      {/* ── numbered rule ──────────────────────────────────────────── */}
      <div
        style={{
          display:      'flex',
          alignItems:   'center',
          gap:          '14px',
          paddingTop:   '22px',
          marginBottom: '10px',
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize:      '0.58rem',
            letterSpacing: '0.22em',
            color:         exp.current ? 'var(--accent-blush)' : 'var(--text-tertiary)',
            flexShrink:    0,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
        <span
          className="font-mono"
          style={{
            fontSize:      '0.58rem',
            letterSpacing: '0.14em',
            color:         'var(--text-tertiary)',
            flexShrink:    0,
          }}
        >
          {year}
        </span>
      </div>

      {/* ── role label (above company name) ────────────────────────── */}
      <p
        className="font-mono"
        style={{
          fontSize:      '0.6rem',
          letterSpacing: '0.24em',
          textTransform: 'uppercase',
          color:         exp.current ? 'var(--accent-blush)' : 'var(--text-tertiary)',
          marginBottom:  '6px',
          opacity:       exp.current ? 0.9 : 0.7,
        }}
      >
        {exp.title}
      </p>

      {/* ── company name + toggle ───────────────────────────────────── */}
      <button
        onClick={() => setOpen(o => !o)}
        style={{
          width:          '100%',
          background:     'none',
          border:         'none',
          padding:        0,
          cursor:         'pointer',
          textAlign:      'left',
          display:        'flex',
          alignItems:     'baseline',
          justifyContent: 'space-between',
          gap:            '16px',
          marginBottom:   '10px',
        }}
      >
        <motion.h3
          className="font-display"
          animate={{
            color: open
              ? 'var(--accent-blush)'
              : exp.current
                ? 'var(--accent-blush)'
                : 'var(--text-primary)',
          }}
          whileHover={{ color: 'var(--accent-blush)' }}
          transition={{ duration: 0.22 }}
          style={{
            fontSize:      'clamp(1.9rem, 4.8vw, 4rem)',
            fontWeight:    700,
            letterSpacing: '-0.03em',
            lineHeight:    1,
          }}
        >
          {exp.company}
        </motion.h3>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          {exp.current && (
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ background: 'var(--accent-blush)' }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: 'var(--accent-blush)' }}
              />
            </span>
          )}
          <motion.span
            animate={{
              rotate: open ? 45 : 0,
              color:  open ? 'var(--accent-blush)' : 'var(--text-tertiary)',
            }}
            transition={{ duration: 0.25, ease: EASE }}
            className="font-mono"
            style={{ fontSize: '1.1rem', lineHeight: 1, display: 'inline-block', userSelect: 'none' }}
          >
            +
          </motion.span>
        </div>
      </button>

      {/* ── location · period ───────────────────────────────────────── */}
      <div
        style={{
          display:      'flex',
          alignItems:   'center',
          flexWrap:     'wrap',
          gap:          '6px 10px',
          marginBottom: open ? '0' : '22px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-tertiary)' }}>
          <MapPin size={10} />
          <span className="font-mono" style={{ fontSize: '0.67rem', letterSpacing: '0.06em' }}>
            {exp.location}
          </span>
        </div>
        <span style={{ color: 'var(--border-medium)', fontSize: '0.55rem' }}>◆</span>
        <span className="font-mono" style={{ fontSize: '0.67rem', color: 'var(--text-tertiary)', letterSpacing: '0.06em' }}>
          {exp.period}
        </span>
      </div>

      {/* ── expanded panel ──────────────────────────────────────────── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="panel"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ position: 'relative', paddingBottom: '26px', marginTop: '14px' }}>

              {/* Drawing gradient underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.45, ease: EASE }}
                style={{
                  height:          '1px',
                  background:      'linear-gradient(to right, var(--accent-plum), var(--accent-blush) 40%, transparent)',
                  transformOrigin: 'left',
                  marginBottom:    '22px',
                }}
              />

              {/* Ghost initial — decorative depth */}
              <span
                aria-hidden
                className="pointer-events-none select-none font-display font-black absolute"
                style={{
                  right:         '-6px',
                  top:           '-10px',
                  fontSize:      'clamp(6rem, 18vw, 14rem)',
                  lineHeight:    1,
                  color:         'rgba(216,163,181,0.045)',
                  letterSpacing: '-0.04em',
                  zIndex:        0,
                }}
              >
                {exp.company.charAt(0)}
              </span>

              {/* Bullets */}
              <ul
                style={{
                  position:      'relative',
                  zIndex:        1,
                  display:       'flex',
                  flexDirection: 'column',
                  gap:           '10px',
                  maxWidth:      '68ch',
                }}
              >
                {exp.bullets.map((b, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.07 + j * 0.07, ease: EASE }}
                    style={{
                      display:    'flex',
                      gap:        '12px',
                      fontSize:   '0.83rem',
                      color:      'var(--text-secondary)',
                      lineHeight: 1.65,
                      listStyle:  'none',
                    }}
                  >
                    <span
                      style={{
                        color:      'var(--accent-plum)',
                        fontFamily: 'var(--font-mono)',
                        flexShrink: 0,
                        marginTop:  '0.04em',
                      }}
                    >
                      —
                    </span>
                    {b}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <p className="section-label mb-4">03 &mdash; Experience</p>
          <h2 className="font-display text-display-lg" style={{ color: 'var(--text-primary)' }}>
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* Rows */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
        >
          {experiences.map((exp, i) => (
            <Row key={exp.company} exp={exp} index={i} />
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3"
          style={{
            background:   'var(--bg-card)',
            border:       '1px solid var(--border-subtle)',
            borderRadius: '12px',
            padding:      '18px 22px',
          }}
        >
          <div className="flex items-start gap-3">
            <GraduationCap size={17} className="shrink-0 mt-0.5" style={{ color: 'var(--accent-blush)' }} />
            <div>
              <h3 className="font-display font-bold" style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                Michigan State University
              </h3>
              <p className="font-sans mt-0.5" style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                B.S. Computer Science &middot; Cognitive Science Minor
              </p>
              <div className="flex items-center gap-1 mt-1" style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)' }}>
                <MapPin size={10} /><span>East Lansing, MI</span>
              </div>
            </div>
          </div>
          <span className="font-mono shrink-0 sm:ml-4" style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}>
            2022 – 2026
          </span>
        </motion.div>

      </div>
    </section>
  )
}
