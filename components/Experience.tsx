'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'

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
    company:  'IDX Exchange LLC',
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

function Strip({ exp, index }: { exp: Experience; index: number }) {
  const [open, setOpen] = useState(exp.current ?? false)

  return (
    <div
      style={{ borderTop: '1px solid var(--border-subtle)' }}
    >
      {/* ── Header row ── */}
      <div
        className="group"
        style={{ position: 'relative', cursor: 'pointer' }}
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(exp.current ?? false)}
      >
        {/* Hover fill */}
        <motion.div
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.25 }}
          style={{
            position:   'absolute',
            inset:      0,
            background: 'linear-gradient(90deg, rgba(110,59,91,0.08) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Left plum bar */}
        <motion.div
          animate={{ scaleY: open ? 1 : 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          style={{
            position:        'absolute',
            left:            0,
            top:             0,
            bottom:          0,
            width:           '2px',
            background:      'var(--accent-plum)',
            transformOrigin: 'top',
            pointerEvents:   'none',
          }}
        />

        <div
          className="flex items-start md:items-center justify-between gap-6 py-6 md:py-8"
          style={{ paddingLeft: '20px' }}
        >
          {/* Left: index + name */}
          <div className="flex items-baseline gap-4 md:gap-6 min-w-0 flex-1">
            <span
              className="font-mono shrink-0 hidden sm:block"
              style={{
                fontSize:      '0.6rem',
                letterSpacing: '0.2em',
                color:         open ? 'var(--accent-blush)' : 'var(--text-tertiary)',
                transition:    'color 0.25s ease',
                width:         '1.5rem',
              }}
            >
              {String(index + 1).padStart(2, '0')}
            </span>

            <div className="min-w-0">
              <motion.h3
                animate={{ color: open ? 'var(--accent-blush)' : 'var(--text-primary)' }}
                transition={{ duration: 0.25 }}
                className="font-display"
                style={{
                  fontSize:      'clamp(1.6rem, 3.8vw, 3rem)',
                  fontWeight:    700,
                  lineHeight:    1.05,
                  letterSpacing: '-0.025em',
                }}
              >
                {exp.company}
              </motion.h3>
              <p
                className="font-sans mt-1"
                style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)' }}
              >
                {exp.title}&ensp;·&ensp;{exp.location}
              </p>
            </div>
          </div>

          {/* Right: period + current dot */}
          <div className="flex items-center gap-3 shrink-0">
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
            <span
              className="font-mono text-right"
              style={{
                fontSize:      '0.68rem',
                letterSpacing: '0.06em',
                color:         'var(--text-tertiary)',
                whiteSpace:    'nowrap',
              }}
            >
              {exp.period}
            </span>
            <motion.span
              animate={{ rotate: open ? 45 : 0, color: open ? 'var(--accent-blush)' : 'var(--text-tertiary)' }}
              transition={{ duration: 0.25, ease: EASE }}
              className="font-mono"
              style={{ fontSize: '1.1rem', lineHeight: 1, display: 'inline-block', userSelect: 'none' }}
            >
              +
            </motion.span>
          </div>
        </div>
      </div>

      {/* ── Expanded bullets ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="bullets"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.36, ease: EASE }}
            style={{ overflow: 'hidden' }}
          >
            <div
              style={{
                paddingLeft:   '20px',
                paddingBottom: '28px',
                position:      'relative',
              }}
            >
              {/* Big decorative company initial */}
              <span
                aria-hidden
                className="pointer-events-none select-none font-display font-black absolute"
                style={{
                  right:       '-4px',
                  top:         '-16px',
                  fontSize:    'clamp(6rem, 16vw, 12rem)',
                  lineHeight:  1,
                  color:       'rgba(216,163,181,0.04)',
                  letterSpacing: '-0.04em',
                }}
              >
                {exp.company.charAt(0)}
              </span>

              <ul style={{ maxWidth: '60ch', position: 'relative', zIndex: 1 }}>
                {exp.bullets.map((bullet, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.32, delay: 0.06 + j * 0.07, ease: EASE }}
                    className="flex gap-3 font-sans"
                    style={{
                      fontSize:    '0.83rem',
                      color:       'var(--text-secondary)',
                      lineHeight:  1.65,
                      marginBottom: j < exp.bullets.length - 1 ? '10px' : 0,
                    }}
                  >
                    <span
                      style={{
                        width:        '3px',
                        height:       '3px',
                        borderRadius: '50%',
                        background:   'var(--accent-plum)',
                        flexShrink:   0,
                        marginTop:    '0.6em',
                        display:      'block',
                      }}
                    />
                    {bullet}
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
          className="mb-4"
        >
          <p className="section-label mb-4">03 &mdash; Experience</p>
          <h2 className="font-display text-display-lg" style={{ color: 'var(--text-primary)' }}>
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* Strips */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-12"
        >
          {experiences.map((exp, i) => (
            <Strip key={exp.company} exp={exp} index={i} />
          ))}
          {/* Bottom border */}
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
          <span
            className="font-mono shrink-0 sm:ml-4"
            style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', letterSpacing: '0.1em' }}
          >
            2022 – 2026
          </span>
        </motion.div>

      </div>
    </section>
  )
}
