'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
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
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{ borderTop: '1px solid var(--border-subtle)' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={{ paddingTop: '26px', paddingBottom: '28px' }}>

        {/* ── Company name — curtain reveal ───────────────────── */}
        <div style={{ overflow: 'hidden', marginBottom: '10px' }}>
          <motion.h3
            initial={{ y: '110%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.7, delay: index * 0.04, ease: EASE }}
            style={
              exp.current
                ? {
                    /* Filled + cream-to-blush gradient for current */
                    fontFamily:            'var(--font-display)',
                    fontSize:              'clamp(1.8rem, 7.5vw, 5.5rem)',
                    fontWeight:            700,
                    letterSpacing:         '-0.03em',
                    lineHeight:            1,
                    background:            'linear-gradient(110deg, #f5f1ea 0%, #d8a3b5 55%, #c9a0a0 100%)',
                    WebkitBackgroundClip:  'text',
                    WebkitTextFillColor:   'transparent',
                    backgroundClip:        'text',
                  }
                : {
                    /* Outlined stroke — architectural, past */
                    fontFamily:         'var(--font-display)',
                    fontSize:           'clamp(1.8rem, 7.5vw, 5.5rem)',
                    fontWeight:         700,
                    letterSpacing:      '-0.03em',
                    lineHeight:         1,
                    color:              'transparent',
                    WebkitTextStroke:   hovered
                                          ? '1.5px rgba(245,241,234,0.72)'
                                          : '1px rgba(245,241,234,0.22)',
                    transition:         'all 0.35s ease',
                  }
            }
          >
            {exp.company}
          </motion.h3>
        </div>

        {/* ── Meta row ────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.12 + index * 0.04 }}
          style={{
            display:    'flex',
            flexWrap:   'wrap',
            alignItems: 'center',
            gap:        '5px 12px',
            marginBottom: '12px',
          }}
        >
          <span
            className="font-sans"
            style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}
          >
            {exp.title}
          </span>

          <span style={{ color: 'var(--border-medium)', fontSize: '0.6rem' }}>◆</span>

          <div
            style={{
              display:    'flex',
              alignItems: 'center',
              gap:        '3px',
              color:      'var(--text-tertiary)',
              fontSize:   '0.72rem',
            }}
          >
            <MapPin size={10} />
            <span className="font-mono" style={{ letterSpacing: '0.04em' }}>
              {exp.location}
            </span>
          </div>

          <span style={{ color: 'var(--border-medium)', fontSize: '0.6rem' }}>◆</span>

          <span
            className="font-mono"
            style={{ fontSize: '0.7rem', color: 'var(--text-tertiary)', letterSpacing: '0.06em' }}
          >
            {exp.period}
          </span>

          {exp.current && (
            <>
              <span style={{ color: 'var(--border-medium)', fontSize: '0.6rem' }}>◆</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
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
                <span
                  className="font-mono"
                  style={{
                    fontSize:      '0.58rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color:         'var(--accent-blush)',
                  }}
                >
                  current
                </span>
              </div>
            </>
          )}
        </motion.div>

        {/* ── Bullets ─────────────────────────────────────────── */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 + index * 0.04 }}
          style={{
            display:       'flex',
            flexDirection: 'column',
            gap:           '6px',
            maxWidth:      '72ch',
          }}
        >
          {exp.bullets.map((b, j) => (
            <li
              key={j}
              style={{
                display:    'flex',
                gap:        '12px',
                fontSize:   '0.8rem',
                color:      'var(--text-tertiary)',
                lineHeight: 1.6,
                listStyle:  'none',
              }}
            >
              <span
                style={{
                  color:      'var(--accent-plum)',
                  flexShrink: 0,
                  fontFamily: 'var(--font-mono)',
                  fontSize:   '0.75rem',
                  marginTop:  '0.04em',
                }}
              >
                —
              </span>
              {b}
            </li>
          ))}
        </motion.ul>

      </div>
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
        <div>
          {experiences.map((exp, i) => (
            <Row key={exp.company} exp={exp} index={i} />
          ))}
          <div style={{ borderTop: '1px solid var(--border-subtle)' }} />
        </div>

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
