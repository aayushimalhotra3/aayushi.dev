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
    location: 'Chicago, IL (Remote)',
    period:   'Mar 2026 – May 2026',
    current:  true,
    bullets: [
      'Upskilling on Red Hat OpenShift, IBM Cloud, and IBM watsonx.data as part of a structured cloud integration track focused on enterprise deployments.',
      'Preparing for and completing cloud platform certification exams sponsored by DataHub, with hands-on work in client consulting and presentations.',
    ],
  },
  {
    title:   'Software Engineering Intern',
    company: 'IDX Exchange LLC',
    location: 'Remote',
    period:  'Oct 2025 – Jan 2026',
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
    company:  'MSU College of Social Science',
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

export default function Experience() {
  const [active, setActive] = useState<number>(0)

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <p className="section-label mb-4">03 &mdash; Experience</p>
          <h2 className="font-display text-display-lg" style={{ color: 'var(--text-primary)' }}>
            Where I&apos;ve worked
          </h2>
        </motion.div>

        {/* ── Ledger ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          style={{ borderTop: '1px solid var(--border-subtle)' }}
        >
          {experiences.map((exp, i) => {
            const isOpen = active === i
            return (
              <div
                key={exp.company}
                style={{ borderBottom: '1px solid var(--border-subtle)' }}
              >
                {/* ── Row header ── */}
                <button
                  onClick={() => setActive(isOpen ? -1 : i)}
                  className="w-full text-left group"
                  style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                >
                  <div
                    className="flex items-center gap-4 md:gap-8 py-5 md:py-6 transition-colors duration-200"
                    style={{ color: isOpen ? 'var(--text-primary)' : 'var(--text-secondary)' }}
                  >
                    {/* Index */}
                    <span
                      className="font-mono shrink-0 hidden sm:block"
                      style={{
                        fontSize:    '0.6rem',
                        letterSpacing: '0.18em',
                        color:       isOpen ? 'var(--accent-blush)' : 'var(--text-tertiary)',
                        transition:  'color 0.2s',
                        width:       '1.6rem',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>

                    {/* Company + role */}
                    <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:items-baseline gap-0.5 sm:gap-4">
                      <h3
                        className="font-display font-bold truncate transition-colors duration-200"
                        style={{
                          fontSize:  'clamp(1rem, 2.2vw, 1.25rem)',
                          color:     isOpen ? 'var(--text-primary)' : 'var(--text-secondary)',
                          flexShrink: 0,
                        }}
                      >
                        {exp.company}
                      </h3>
                      <p
                        className="font-sans hidden md:block truncate"
                        style={{ fontSize: '0.78rem', color: 'var(--text-tertiary)', flexShrink: 1 }}
                      >
                        {exp.title}
                      </p>
                    </div>

                    {/* Period + current badge + toggle */}
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
                        className="font-mono hidden sm:block"
                        style={{ fontSize: '0.68rem', color: 'var(--text-tertiary)', letterSpacing: '0.06em' }}
                      >
                        {exp.period}
                      </span>
                      <motion.span
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="font-mono"
                        style={{
                          fontSize:    '1rem',
                          lineHeight:  1,
                          color:       isOpen ? 'var(--accent-blush)' : 'var(--text-tertiary)',
                          display:     'inline-block',
                          userSelect:  'none',
                        }}
                      >
                        +
                      </motion.span>
                    </div>
                  </div>
                </button>

                {/* ── Expanded panel ── */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: EASE }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div
                        className="relative pb-8 sm:pl-[calc(1.6rem+2rem)]"
                        style={{
                          borderLeft: '2px solid var(--accent-plum)',
                          marginLeft: '0',
                          paddingLeft: '20px',
                          marginBottom: '0',
                        }}
                      >
                        {/* Decorative large number */}
                        <span
                          aria-hidden
                          className="pointer-events-none absolute right-0 top-0 font-display font-black select-none"
                          style={{
                            fontSize:   'clamp(5rem, 12vw, 9rem)',
                            lineHeight: 1,
                            color:      'rgba(245,241,234,0.025)',
                            letterSpacing: '-0.04em',
                          }}
                        >
                          {String(i + 1).padStart(2, '0')}
                        </span>

                        {/* Role (shown here on mobile since hidden in header) */}
                        <p
                          className="font-sans md:hidden mb-1"
                          style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}
                        >
                          {exp.title}
                        </p>

                        {/* Period (mobile only) */}
                        <p
                          className="font-mono sm:hidden mb-2"
                          style={{ fontSize: '0.65rem', color: 'var(--text-tertiary)', letterSpacing: '0.08em' }}
                        >
                          {exp.period}
                        </p>

                        {/* Location */}
                        <div
                          className="flex items-center gap-1.5 mb-5"
                          style={{ fontSize: '0.72rem', color: 'var(--text-tertiary)' }}
                        >
                          <MapPin size={11} />
                          <span className="font-mono" style={{ letterSpacing: '0.06em' }}>
                            {exp.location}
                          </span>
                          {exp.current && (
                            <span
                              className="font-mono ml-2"
                              style={{
                                fontSize:    '0.58rem',
                                letterSpacing: '0.14em',
                                textTransform: 'uppercase',
                                padding:     '0.15rem 0.45rem',
                                borderRadius: '4px',
                                background:  'rgba(110,59,91,0.18)',
                                color:       'var(--accent-blush)',
                                border:      '1px solid rgba(216,163,181,0.22)',
                              }}
                            >
                              current
                            </span>
                          )}
                        </div>

                        {/* Bullets */}
                        <ul className="space-y-3" style={{ maxWidth: '62ch' }}>
                          {exp.bullets.map((bullet, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: 0.08 + j * 0.06, ease: EASE }}
                              className="font-sans flex gap-3"
                              style={{ fontSize: '0.83rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}
                            >
                              <span
                                className="shrink-0 mt-[0.55em]"
                                style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent-plum)', display: 'block' }}
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
          })}
        </motion.div>

        {/* ── Education ── */}
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
